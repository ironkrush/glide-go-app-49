// Email Configuration for Lankadhish
// This file contains the configuration for the email service

export const EMAIL_CONFIG = {
  // The email address where all form submissions will be sent
  RECIPIENT_EMAIL: 'krush2752@gmail.com',
  
  // EmailJS Configuration (Primary method)
  // To set up EmailJS:
  // 1. Go to https://www.emailjs.com/
  // 2. Create a free account
  // 3. Create a service (Gmail, Outlook, etc.)
  // 4. Create email templates
  // 5. Get your service ID, template IDs, and public key
  EMAILJS: {
    SERVICE_ID: 'service_o4i74bm', // Replace with your EmailJS service ID
    BOOKING_TEMPLATE_ID: 'template_booking', // Replace with your booking template ID
    CONTACT_TEMPLATE_ID: 'template_contact', // Replace with your contact template ID
    PUBLIC_KEY: 'CHruO1m_H5N5qhUyc', // Replace with your EmailJS public key
  },
  
  // Formspree Configuration (Fallback method)
  // To set up Formspree:
  // 1. Go to https://formspree.io/
  // 2. Create a free account
  // 3. Create a new form
  // 4. Get your form endpoint
  FORMSPREE: {
    ENDPOINT: 'https://formspree.io/f/your_form_id', // Replace with your Formspree form ID
  },
  
  // Web3Forms Configuration (Alternative fallback)
  // To set up Web3Forms:
  // 1. Go to https://web3forms.com/
  // 2. Create a free account
  // 3. Get your access key
  WEB3FORMS: {
    ACCESS_KEY: '8bd07088-978b-43fe-bf85-c50508f825ea', // Replace with your Web3Forms access key
    ENDPOINT: 'https://api.web3forms.com/submit',
  }
};

// Email templates for better formatting
export const EMAIL_TEMPLATES = {
  BOOKING: {
    SUBJECT: '🚗 New Booking Request - Lankadhish',
    HTML_TEMPLATE: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background: linear-gradient(135deg, #fbbf24, #f59e0b); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">🚗 New Booking Request</h1>
          <p style="margin: 10px 0 0 0; background: #ef4444; color: white; padding: 5px 10px; border-radius: 4px; font-size: 12px; font-weight: bold; display: inline-block;">URGENT - REQUIRES IMMEDIATE ATTENTION</p>
        </div>
        
        <div style="background: white; padding: 30px; border: 1px solid #e5e7eb;">
          <h2 style="color: #374151; margin-top: 0;">Customer Information</h2>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p style="margin: 5px 0;"><strong>👤 Name:</strong> {{customer_name}}</p>
            <p style="margin: 5px 0;"><strong>📧 Email:</strong> {{customer_email}}</p>
            <p style="margin: 5px 0;"><strong>📱 Phone:</strong> {{customer_phone}}</p>
          </div>

          <h2 style="color: #374151;">Trip Details</h2>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p style="margin: 5px 0;"><strong>📍 Pickup:</strong> {{pickup_location}}</p>
            <p style="margin: 5px 0;"><strong>🎯 Destination:</strong> {{destination}}</p>
            <p style="margin: 5px 0;"><strong>📅 Date:</strong> {{pickup_date}}</p>
            <p style="margin: 5px 0;"><strong>🕐 Time:</strong> {{pickup_time}}</p>
            <p style="margin: 5px 0;"><strong>👥 Passengers:</strong> {{passenger_count}}</p>
            <p style="margin: 5px 0;"><strong>🚙 Car Type:</strong> {{car_type}}</p>
            <p style="margin: 5px 0;"><strong>📝 Special Requests:</strong> {{special_requests}}</p>
          </div>

          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
            <strong>⚡ Action Required:</strong> Please contact the customer within 15 minutes to confirm the booking details.
          </div>
        </div>
        
        <div style="background: #374151; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px;">
          <p style="margin: 5px 0;">📧 Submitted at: {{submission_time}}</p>
          <p style="margin: 5px 0;">🌐 Lankadhish Booking System</p>
        </div>
      </div>
    `
  },
  
  CONTACT: {
    SUBJECT: '📧 New Contact Message - Lankadhish',
    HTML_TEMPLATE: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background: linear-gradient(135deg, #fbbf24, #f59e0b); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">📧 New Contact Message</h1>
        </div>
        
        <div style="background: white; padding: 30px; border: 1px solid #e5e7eb;">
          <h2 style="color: #374151; margin-top: 0;">Contact Information</h2>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p style="margin: 5px 0;"><strong>👤 Name:</strong> {{customer_name}}</p>
            <p style="margin: 5px 0;"><strong>📧 Email:</strong> {{customer_email}}</p>
            <p style="margin: 5px 0;"><strong>📱 Phone:</strong> {{customer_phone}}</p>
            <p style="margin: 5px 0;"><strong>📋 Subject:</strong> {{subject}}</p>
          </div>

          <h2 style="color: #374151;">Message</h2>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p style="margin: 0; line-height: 1.6;">{{message}}</p>
          </div>
        </div>
        
        <div style="background: #374151; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px;">
          <p style="margin: 5px 0;">📧 Submitted at: {{submission_time}}</p>
          <p style="margin: 5px 0;">🌐 Lankadhish Contact System</p>
        </div>
      </div>
    `
  }
};
