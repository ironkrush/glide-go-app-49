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
      emailSubject = "New Booking Request";
      emailContent = `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3>Booking Details:</h3>
        <p><strong>Pickup Location:</strong> ${bookingDetails?.pickupLocation}</p>
        <p><strong>Destination:</strong> ${bookingDetails?.destination}</p>
        <p><strong>Pickup Date:</strong> ${bookingDetails?.pickupDate}</p>
        <p><strong>Pickup Time:</strong> ${bookingDetails?.pickupTime}</p>
        <p><strong>Passengers:</strong> ${bookingDetails?.passengerCount}</p>
        <p><strong>Car Type:</strong> ${bookingDetails?.carType}</p>
        ${bookingDetails?.specialRequests ? `<p><strong>Special Requests:</strong> ${bookingDetails.specialRequests}</p>` : ''}
        ${message ? `<p><strong>Additional Message:</strong> ${message.replace(/\n/g, '<br>')}</p>` : ''}
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `;
    }

    // Send email to business
    const businessEmailResponse = await resend.emails.send({
      from: "RideEasy <noreply@resend.dev>",
      to: ["krush2752@gmail.com"],
      subject: emailSubject,
      html: emailContent,
    });

    console.log("Business email sent successfully:", businessEmailResponse);

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "RideEasy <noreply@resend.dev>",
      to: [email],
      subject: type === 'booking' ? "Booking Request Received - RideEasy" : "Message Received - RideEasy",
      html: `
        <h1>Thank you for contacting RideEasy, ${name}!</h1>
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