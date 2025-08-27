// Simple Email Service for Lankadhish
// Uses Web3Forms - a free, open-source form backend service

import { EMAIL_CONFIG } from '@/config/email';

// Configuration - Using the access key from config
const WEB3FORMS_ACCESS_KEY = EMAIL_CONFIG.WEB3FORMS.ACCESS_KEY;
const RECIPIENT_EMAIL = EMAIL_CONFIG.RECIPIENT_EMAIL;

export interface BookingData {
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

export interface ContactData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const sendBookingEmail = async (data: BookingData): Promise<boolean> => {
  try {
    const formData = new FormData();

    // Web3Forms required fields
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', '🚗 New Booking Request - Lankadhish');
    formData.append('from_name', data.name);
    formData.append('email', data.email);

    // Create formatted message
    const message = `
🚗 NEW BOOKING REQUEST - LANKADHISH

👤 CUSTOMER INFORMATION:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

🚙 TRIP DETAILS:
Pickup Location: ${data.pickupLocation}
Destination: ${data.destination}
Pickup Date: ${data.pickupDate}
Pickup Time: ${data.pickupTime}
Passengers: ${data.passengerCount}
Car Type: ${data.carType}
Special Requests: ${data.specialRequests || 'None'}

⏰ Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

⚡ URGENT: Please contact the customer within 15 minutes to confirm booking details.
    `;

    formData.append('message', message);

    // Send to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      console.log('Booking email sent successfully');
      return true;
    } else {
      console.error('Failed to send booking email:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Failed to send booking email:', error);
    return false;
  }
};

export const sendContactEmail = async (data: ContactData): Promise<boolean> => {
  try {
    const formData = new FormData();

    // Web3Forms required fields
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', `📧 New Contact Message - Lankadhish: ${data.subject}`);
    formData.append('from_name', data.name);
    formData.append('email', data.email);

    // Create formatted message
    const message = `
📧 NEW CONTACT MESSAGE - LANKADHISH

👤 CONTACT INFORMATION:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Subject: ${data.subject}

💬 MESSAGE:
${data.message}

⏰ Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;

    formData.append('message', message);

    // Send to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      console.log('Contact email sent successfully');
      return true;
    } else {
      console.error('Failed to send contact email:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return false;
  }
};

// Simple setup instructions for Web3Forms
export const setupInstructions = {
  title: "Easy Email Setup Instructions",
  steps: [
    "1. Go to https://web3forms.com",
    "2. Enter your email (krush2752@gmail.com) and click 'Create Access Key'",
    "3. Copy the access key you receive",
    "4. Replace 'your_web3forms_access_key_here' in the emailService.ts file with your actual access key",
    "5. That's it! Your forms will now send emails directly to krush2752@gmail.com"
  ],
  note: "Web3Forms is completely free, requires no registration, and works immediately!"
};
