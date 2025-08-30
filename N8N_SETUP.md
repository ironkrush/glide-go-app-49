# n8n Webhook Setup Guide for Lankadhish Cab Service

## Overview
This application uses n8n webhooks to process form submissions from:
1. Main booking form (homepage)
2. Detailed booking form (/booking page)  
3. Contact form (/contact page)

n8n will then route the data to Baserow, send emails, create notifications, and trigger any other workflows you need.

## Why n8n?
- **Visual Workflow Builder** - Easy drag-and-drop interface
- **Multiple Integrations** - Connect to Baserow, email, SMS, Slack, etc.
- **Error Handling** - Built-in retry logic and error notifications
- **Data Processing** - Transform and validate data before storing
- **Automation** - Trigger follow-up actions automatically

## Setup Instructions

### 1. Install n8n

#### Option A: n8n Cloud (Recommended)
1. Go to [n8n.cloud](https://n8n.cloud)
2. Sign up for a free account
3. Create a new workflow

#### Option B: Self-hosted
```bash
npm install n8n -g
n8n start
```

### 2. Create Webhook Workflows

#### Workflow 1: Booking Form Handler
1. **Create new workflow** named "Lankadhish Booking Handler"
2. **Add Webhook node:**
   - HTTP Method: POST
   - Path: `/webhook/booking`
   - Response Mode: Respond Immediately
   - Response Data: JSON
   - Response Body: `{"success": true, "message": "Booking received", "id": "{{$json.timestamp}}"}`

3. **Add data processing nodes:**
   - **Set node** to format data for Baserow
   - **Baserow node** to store booking data
   - **Email node** to send confirmation
   - **SMS node** (optional) for instant notifications

#### Workflow 2: Contact Form Handler
1. **Create new workflow** named "Lankadhish Contact Handler"
2. **Add Webhook node:**
   - HTTP Method: POST
   - Path: `/webhook/contact`
   - Response Mode: Respond Immediately
   - Response Data: JSON
   - Response Body: `{"success": true, "message": "Message received", "id": "{{$json.timestamp}}"}`

3. **Add processing nodes:**
   - **Set node** for data formatting
   - **Baserow node** for storage
   - **Email node** for notifications

#### Workflow 3: Quick Booking Handler
1. **Create new workflow** named "Lankadhish Quick Booking Handler"
2. **Add Webhook node:**
   - HTTP Method: POST
   - Path: `/webhook/quick-booking`
   - Response Mode: Respond Immediately
   - Response Data: JSON
   - Response Body: `{"success": true, "message": "Quick booking received", "id": "{{$json.timestamp}}"}`

3. **Add processing nodes:**
   - **Set node** for data formatting
   - **Baserow node** for storage
   - **Email/SMS nodes** for urgent notifications

### 3. Configure Environment Variables

Update your `.env` file with your n8n webhook URLs:

```env
# Replace with your actual n8n webhook URLs
VITE_N8N_BOOKING_WEBHOOK=https://your-n8n-instance.app.n8n.cloud/webhook/booking
VITE_N8N_CONTACT_WEBHOOK=https://your-n8n-instance.app.n8n.cloud/webhook/contact
VITE_N8N_QUICK_BOOKING_WEBHOOK=https://your-n8n-instance.app.n8n.cloud/webhook/quick-booking
```

### 4. Sample n8n Workflow Configuration

#### Booking Workflow Example:
```
Webhook → Set (Format Data) → Baserow (Store) → Email (Notify) → SMS (Alert)
```

#### Set Node Configuration:
```json
{
  "bookingId": "BK{{$json.timestamp}}",
  "customerName": "{{$json.formData.customerName}}",
  "customerPhone": "{{$json.formData.customerPhone}}",
  "customerEmail": "{{$json.formData.customerEmail}}",
  "pickupLocation": "{{$json.formData.pickupLocation}}",
  "dropLocation": "{{$json.formData.dropLocation}}",
  "journeyDate": "{{$json.formData.journeyDate}}",
  "journeyTime": "{{$json.formData.journeyTime}}",
  "vehicleType": "{{$json.formData.vehicleType}}",
  "passengerCount": "{{$json.formData.passengerCount}}",
  "specialRequests": "{{$json.formData.specialRequests}}",
  "bookingStatus": "new",
  "priority": "{{$json.formData.priority}}",
  "source": "{{$json.metadata.source}}",
  "submissionTime": "{{$json.timestamp}}",
  "estimatedDistance": "{{$json.metadata.estimatedDistance}}",
  "estimatedDuration": "{{$json.metadata.estimatedDuration}}"
}
```

### 5. Baserow Integration in n8n

1. **Add Baserow node** to your workflow
2. **Configure connection:**
   - Baserow URL: `https://api.baserow.io`
   - API Token: Your Baserow token
   - Database ID: Your database ID
   - Table ID: Your table ID

3. **Map fields** from the Set node to Baserow columns

### 6. Email Notifications

1. **Add Email node** after Baserow
2. **Configure SMTP settings** or use a service like SendGrid
3. **Create email templates:**

#### Customer Confirmation Email:
```
Subject: Booking Confirmation - {{$json.bookingId}}
Body: 
Dear {{$json.customerName}},

Your cab booking has been received successfully!

Booking Details:
- Booking ID: {{$json.bookingId}}
- Pickup: {{$json.pickupLocation}}
- Destination: {{$json.dropLocation}}
- Date: {{$json.journeyDate}}
- Time: {{$json.journeyTime}}

Our team will contact you within 15 minutes to confirm.

Best regards,
Lankadhish Team
+91 9157575675
```

#### Internal Notification Email:
```
Subject: New Booking Alert - {{$json.bookingId}}
Body:
New booking received from {{$json.customerName}}

Customer: {{$json.customerName}}
Phone: {{$json.customerPhone}}
Email: {{$json.customerEmail}}
Route: {{$json.pickupLocation}} → {{$json.dropLocation}}
Date/Time: {{$json.journeyDate}} at {{$json.journeyTime}}
Vehicle: {{$json.vehicleType}}
Passengers: {{$json.passengerCount}}

Priority: {{$json.priority}}
Source: {{$json.source}}

Action Required: Contact customer within 15 minutes
```

### 7. Error Handling

Add error handling nodes to your workflows:

1. **Error Trigger node** to catch failures
2. **Email node** to notify admin of errors
3. **Webhook Response node** to send error response

### 8. Testing

1. **Test each webhook** using the n8n interface
2. **Submit test forms** from your website
3. **Verify data flow** through all nodes
4. **Check Baserow** for stored data
5. **Confirm emails** are sent

### 9. Advanced Features

#### SMS Notifications (Optional):
- Add **Twilio node** for SMS alerts
- Send instant notifications for urgent bookings
- SMS confirmations to customers

#### Slack Integration:
- Add **Slack node** for team notifications
- Create channels for different booking types
- Real-time alerts for new bookings

#### WhatsApp Business:
- Integrate **WhatsApp Business API**
- Send booking confirmations via WhatsApp
- Customer support through WhatsApp

### 10. Monitoring

1. **Enable execution logging** in n8n
2. **Set up error alerts** via email/Slack
3. **Monitor webhook response times**
4. **Track booking conversion rates**

## Benefits of n8n Integration

✅ **Visual Workflow Management** - Easy to modify and extend
✅ **Multiple Integrations** - Connect to any service
✅ **Error Handling** - Built-in retry and error notifications  
✅ **Data Transformation** - Clean and validate data before storage
✅ **Automation** - Trigger follow-up actions automatically
✅ **Scalability** - Handle high volume of submissions
✅ **Monitoring** - Track all form submissions and errors
✅ **Flexibility** - Easy to add new features and integrations

## Support

- n8n Documentation: [docs.n8n.io](https://docs.n8n.io)
- n8n Community: [community.n8n.io](https://community.n8n.io)
- Webhook Testing: Use tools like Postman or curl

Your Lankadhish cab booking system now has enterprise-grade form processing with beautiful animations! 🚗✨
