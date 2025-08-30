// n8n Webhook Service for Lankadhish Cab Service
const N8N_BOOKING_WEBHOOK = import.meta.env.VITE_N8N_BOOKING_WEBHOOK;
const N8N_CONTACT_WEBHOOK = import.meta.env.VITE_N8N_CONTACT_WEBHOOK;
const N8N_QUICK_BOOKING_WEBHOOK = import.meta.env.VITE_N8N_QUICK_BOOKING_WEBHOOK;

interface BookingData {
  name: string;
  email: string;
  phone: string;
  pickupLocation: string;
  destination: string;
  pickupDate: string;
  pickupTime: string;
  passengerCount: string;
  carType: string;
  specialRequests?: string;
}

interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface QuickBookingData {
  name: string;
  phone: string;
  pickupLocation: string;
  destination: string;
  pickupDate: string;
  pickupTime: string;
}

interface N8nResponse {
  success: boolean;
  message?: string;
  id?: string;
}

class N8nService {
  private async makeWebhookRequest(webhookUrl: string, data: any): Promise<N8nResponse> {
    if (!webhookUrl || webhookUrl.includes('your-n8n-instance.com')) {
      console.warn('n8n webhook not configured - using demo mode');
      // Simulate successful submission for demo
      await new Promise(resolve => setTimeout(resolve, 1500));
      return { 
        success: true, 
        message: 'Demo submission successful',
        id: `demo_${Date.now()}`
      };
    }

    try {
      const payload = {
        ...data,
        timestamp: new Date().toISOString(),
        source: 'lankadhish-website',
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'direct'
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`n8n webhook error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      return {
        success: true,
        message: result.message || 'Submission successful',
        id: result.id || `n8n_${Date.now()}`
      };
    } catch (error) {
      console.error('n8n webhook request failed:', error);
      throw new Error(`Failed to submit data: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async submitBooking(bookingData: BookingData): Promise<N8nResponse> {
    const payload = {
      type: 'booking',
      formData: {
        customerName: bookingData.name,
        customerEmail: bookingData.email,
        customerPhone: bookingData.phone,
        pickupLocation: bookingData.pickupLocation,
        dropLocation: bookingData.destination,
        journeyDate: bookingData.pickupDate,
        journeyTime: bookingData.pickupTime,
        passengerCount: parseInt(bookingData.passengerCount),
        vehicleType: bookingData.carType,
        specialRequests: bookingData.specialRequests || '',
        bookingStatus: 'new',
        priority: 'normal'
      },
      metadata: {
        formType: 'detailed_booking',
        source: 'booking_page',
        estimatedDistance: this.calculateDistance(bookingData.pickupLocation, bookingData.destination),
        estimatedDuration: this.calculateDuration(bookingData.pickupLocation, bookingData.destination)
      }
    };

    return this.makeWebhookRequest(N8N_BOOKING_WEBHOOK, payload);
  }

  async submitContact(contactData: ContactData): Promise<N8nResponse> {
    const payload = {
      type: 'contact',
      formData: {
        customerName: contactData.name,
        customerEmail: contactData.email,
        customerPhone: contactData.phone,
        inquirySubject: contactData.subject,
        inquiryMessage: contactData.message,
        inquiryStatus: 'new',
        priority: this.getPriorityFromSubject(contactData.subject)
      },
      metadata: {
        formType: 'contact_inquiry',
        source: 'contact_page',
        messageLength: contactData.message.length,
        hasPhoneNumber: !!contactData.phone
      }
    };

    return this.makeWebhookRequest(N8N_CONTACT_WEBHOOK, payload);
  }

  async submitQuickBooking(quickBookingData: QuickBookingData): Promise<N8nResponse> {
    const payload = {
      type: 'quick_booking',
      formData: {
        customerName: quickBookingData.name,
        customerPhone: quickBookingData.phone,
        pickupLocation: quickBookingData.pickupLocation,
        dropLocation: quickBookingData.destination,
        journeyDate: quickBookingData.pickupDate,
        journeyTime: quickBookingData.pickupTime,
        bookingStatus: 'new',
        priority: 'high' // Quick bookings get higher priority
      },
      metadata: {
        formType: 'quick_booking',
        source: 'homepage',
        isQuickBooking: true,
        estimatedDistance: this.calculateDistance(quickBookingData.pickupLocation, quickBookingData.destination)
      }
    };

    return this.makeWebhookRequest(N8N_QUICK_BOOKING_WEBHOOK, payload);
  }

  // Helper methods
  private calculateDistance(pickup: string, destination: string): string {
    // Simple distance estimation based on common routes
    const routes: { [key: string]: string } = {
      'ahmedabad-mumbai': '525 km',
      'surat-mumbai': '284 km',
      'ahmedabad-delhi': '950 km',
      'ahmedabad-pune': '665 km',
      'surat-pune': '350 km',
      'ahmedabad-bangalore': '1200 km'
    };

    const routeKey = `${pickup.toLowerCase()}-${destination.toLowerCase()}`;
    return routes[routeKey] || 'Distance will be calculated';
  }

  private calculateDuration(pickup: string, destination: string): string {
    // Simple duration estimation
    const durations: { [key: string]: string } = {
      'ahmedabad-mumbai': '8-9 hours',
      'surat-mumbai': '5-6 hours',
      'ahmedabad-delhi': '14-16 hours',
      'ahmedabad-pune': '10-12 hours',
      'surat-pune': '6-7 hours',
      'ahmedabad-bangalore': '18-20 hours'
    };

    const routeKey = `${pickup.toLowerCase()}-${destination.toLowerCase()}`;
    return durations[routeKey] || 'Duration will be calculated';
  }

  private getPriorityFromSubject(subject: string): string {
    const urgentKeywords = ['urgent', 'emergency', 'asap', 'immediate'];
    const highKeywords = ['booking', 'reservation', 'airport'];
    
    const lowerSubject = subject.toLowerCase();
    
    if (urgentKeywords.some(keyword => lowerSubject.includes(keyword))) {
      return 'urgent';
    }
    if (highKeywords.some(keyword => lowerSubject.includes(keyword))) {
      return 'high';
    }
    return 'normal';
  }

  // Test webhook connectivity
  async testWebhook(type: 'booking' | 'contact' | 'quick_booking'): Promise<boolean> {
    const webhookUrls = {
      booking: N8N_BOOKING_WEBHOOK,
      contact: N8N_CONTACT_WEBHOOK,
      quick_booking: N8N_QUICK_BOOKING_WEBHOOK
    };

    const testData = {
      test: true,
      type: `${type}_test`,
      timestamp: new Date().toISOString()
    };

    try {
      await this.makeWebhookRequest(webhookUrls[type], testData);
      return true;
    } catch (error) {
      console.error(`${type} webhook test failed:`, error);
      return false;
    }
  }
}

export const n8nService = new N8nService();
export type { BookingData, ContactData, QuickBookingData, N8nResponse };
