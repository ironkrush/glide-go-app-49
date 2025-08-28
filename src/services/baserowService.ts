// Baserow API service for storing form data
const BASEROW_API_URL = 'https://api.baserow.io/api';
const BASEROW_TOKEN = import.meta.env.VITE_BASEROW_TOKEN;

// Table IDs for different forms
const BOOKING_TABLE_ID = import.meta.env.VITE_BASEROW_BOOKING_TABLE_ID;
const CONTACT_TABLE_ID = import.meta.env.VITE_BASEROW_CONTACT_TABLE_ID;
const QUICK_BOOKING_TABLE_ID = import.meta.env.VITE_BASEROW_QUICK_BOOKING_TABLE_ID;

interface BaserowResponse {
  id: number;
  [key: string]: any;
}

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

class BaserowService {
  private async makeRequest(endpoint: string, data: any): Promise<BaserowResponse> {
    if (!BASEROW_TOKEN) {
      throw new Error('Baserow token not configured');
    }

    const response = await fetch(`${BASEROW_API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${BASEROW_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Baserow API error:', errorText);
      throw new Error(`Baserow API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  async submitBooking(bookingData: BookingData): Promise<BaserowResponse> {
    if (!BOOKING_TABLE_ID) {
      throw new Error('Booking table ID not configured');
    }

    const data = {
      Name: bookingData.name,
      Email: bookingData.email,
      Phone: bookingData.phone,
      'Pickup Location': bookingData.pickupLocation,
      Destination: bookingData.destination,
      'Pickup Date': bookingData.pickupDate,
      'Pickup Time': bookingData.pickupTime,
      'Passenger Count': parseInt(bookingData.passengerCount),
      'Car Type': bookingData.carType,
      'Special Requests': bookingData.specialRequests || '',
      'Submission Date': new Date().toISOString(),
      Status: 'New',
    };

    return this.makeRequest(`/database/rows/table/${BOOKING_TABLE_ID}/`, data);
  }

  async submitContact(contactData: ContactData): Promise<BaserowResponse> {
    if (!CONTACT_TABLE_ID) {
      throw new Error('Contact table ID not configured');
    }

    const data = {
      Name: contactData.name,
      Email: contactData.email,
      Phone: contactData.phone,
      Subject: contactData.subject,
      Message: contactData.message,
      'Submission Date': new Date().toISOString(),
      Status: 'New',
    };

    return this.makeRequest(`/database/rows/table/${CONTACT_TABLE_ID}/`, data);
  }

  async submitQuickBooking(quickBookingData: QuickBookingData): Promise<BaserowResponse> {
    if (!QUICK_BOOKING_TABLE_ID) {
      throw new Error('Quick booking table ID not configured');
    }

    const data = {
      Name: quickBookingData.name,
      Phone: quickBookingData.phone,
      'Pickup Location': quickBookingData.pickupLocation,
      Destination: quickBookingData.destination,
      'Pickup Date': quickBookingData.pickupDate,
      'Pickup Time': quickBookingData.pickupTime,
      'Submission Date': new Date().toISOString(),
      Status: 'New',
    };

    return this.makeRequest(`/database/rows/table/${QUICK_BOOKING_TABLE_ID}/`, data);
  }
}

export const baserowService = new BaserowService();
export type { BookingData, ContactData, QuickBookingData };
