import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  type: 'contact' | 'booking';
  bookingDetails?: {
    pickupLocation?: string;
    destination?: string;
    pickupDate?: string;
    pickupTime?: string;
    passengerCount?: number;
    carType?: string;
    specialRequests?: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message, type, bookingDetails }: ContactEmailRequest = await req.json();

    let emailSubject = "";
    let emailContent = "";

    if (type === 'contact') {
      emailSubject = subject ? `Contact Form: ${subject}` : "New Contact Form Submission";
      emailContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `;
    } else if (type === 'booking') {
      emailSubject = "🚗 New Booking Request - Lankadhish";
      emailContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #fbbf24, #f59e0b); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
            .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f3f4f6; }
            .detail-label { font-weight: bold; color: #374151; }
            .detail-value { color: #6b7280; }
            .footer { background: #374151; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px; }
            .priority { background: #ef4444; color: white; padding: 5px 10px; border-radius: 4px; font-size: 12px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🚗 New Booking Request</h1>
            <div class="priority">URGENT - REQUIRES IMMEDIATE ATTENTION</div>
          </div>

          <div class="content">
            <h2>Customer Information</h2>
            <div class="booking-details">
              <div class="detail-row">
                <span class="detail-label">👤 Customer Name:</span>
                <span class="detail-value">${name}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">📧 Email:</span>
                <span class="detail-value">${email}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">📱 Phone:</span>
                <span class="detail-value">${phone}</span>
              </div>
            </div>

            <h2>Trip Details</h2>
            <div class="booking-details">
              <div class="detail-row">
                <span class="detail-label">📍 Pickup Location:</span>
                <span class="detail-value">${bookingDetails?.pickupLocation || 'Not specified'}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">🎯 Destination:</span>
                <span class="detail-value">${bookingDetails?.destination || 'Not specified'}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">📅 Pickup Date:</span>
                <span class="detail-value">${bookingDetails?.pickupDate || 'Not specified'}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">🕐 Pickup Time:</span>
                <span class="detail-value">${bookingDetails?.pickupTime || 'Not specified'}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">👥 Passengers:</span>
                <span class="detail-value">${bookingDetails?.passengerCount || 'Not specified'}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">🚙 Car Type:</span>
                <span class="detail-value">${bookingDetails?.carType || 'Not specified'}</span>
              </div>
              ${bookingDetails?.specialRequests ? `
                <div class="detail-row">
                  <span class="detail-label">📝 Special Requests:</span>
                  <span class="detail-value">${bookingDetails.specialRequests}</span>
                </div>
              ` : ''}
            </div>

            ${message && message !== `Booking request from ${name}` ? `
              <h2>Additional Message</h2>
              <div class="booking-details">
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
            ` : ''}

            <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <strong>⚡ Action Required:</strong> Please contact the customer within 15 minutes to confirm the booking details.
            </div>
          </div>

          <div class="footer">
            <p>📧 Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            <p>🌐 Lankadhish Booking System | Auto-generated email</p>
            <p style="color: #fbbf24; font-weight: bold;">📧 Please forward this email to: krush2752@gmail.com</p>
          </div>
        </body>
        </html>
      `;
    }

    // Send email to business
    const businessEmailResponse = await resend.emails.send({
      from: "Lankadhish <noreply@resend.dev>",
      to: ["inffycompany@gmail.com"],
      subject: emailSubject,
      html: emailContent,
    });

    console.log("Business email sent successfully:", businessEmailResponse);

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Lankadhish <noreply@resend.dev>",
      to: [email],
      subject: type === 'booking' ? "Booking Request Received - Lankadhish" : "Message Received - Lankadhish",
      html: `
        <h1>Thank you for contacting Lankadhish, ${name}!</h1>
        <p>We have received your ${type === 'booking' ? 'booking request' : 'message'} and our team will contact you shortly.</p>
        
        ${type === 'booking' ? `
        <h3>Your Booking Details:</h3>
        <p><strong>Pickup:</strong> ${bookingDetails?.pickupLocation}</p>
        <p><strong>Destination:</strong> ${bookingDetails?.destination}</p>
        <p><strong>Date & Time:</strong> ${bookingDetails?.pickupDate} at ${bookingDetails?.pickupTime}</p>
        <p><strong>Passengers:</strong> ${bookingDetails?.passengerCount}</p>
        <p><strong>Car Type:</strong> ${bookingDetails?.carType}</p>
        ` : ''}
        
        <p>We appreciate your interest in our services and will get back to you within 2 hours during business hours.</p>
        
        <p>Best regards,<br>
        The RideEasy Team<br>
        Phone: +1 (555) 123-4567<br>
        Email: info@rideeasy.com</p>
      `,
    });

    console.log("Customer email sent successfully:", customerEmailResponse);

    return new Response(JSON.stringify({ 
      success: true,
      businessEmail: businessEmailResponse,
      customerEmail: customerEmailResponse
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);