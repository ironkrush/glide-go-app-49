# Baserow Setup Guide for Lankadhish Cab Service

## Overview
This application uses Baserow (open-source Airtable alternative) to store form submissions from:
1. Main booking form (homepage)
2. Detailed booking form (/booking page)
3. Contact form (/contact page)

## Setup Instructions

### 1. Create Baserow Account
1. Go to [baserow.io](https://baserow.io)
2. Sign up for a free account
3. Create a new workspace

### 2. Create Tables

#### Table 1: Booking Requests
Create a table named "Booking Requests" with these fields:
- **Name** (Text)
- **Email** (Email)
- **Phone** (Text)
- **Pickup Location** (Text)
- **Destination** (Text)
- **Pickup Date** (Date)
- **Pickup Time** (Text)
- **Passenger Count** (Number)
- **Car Type** (Text)
- **Special Requests** (Long Text)
- **Submission Date** (Date)
- **Status** (Single Select: New, Contacted, Confirmed, Completed, Cancelled)

#### Table 2: Contact Messages
Create a table named "Contact Messages" with these fields:
- **Name** (Text)
- **Email** (Email)
- **Phone** (Text)
- **Subject** (Text)
- **Message** (Long Text)
- **Submission Date** (Date)
- **Status** (Single Select: New, Replied, Resolved)

#### Table 3: Quick Bookings
Create a table named "Quick Bookings" with these fields:
- **Name** (Text)
- **Phone** (Text)
- **Pickup Location** (Text)
- **Destination** (Text)
- **Pickup Date** (Date)
- **Pickup Time** (Text)
- **Submission Date** (Date)
- **Status** (Single Select: New, Contacted, Confirmed, Completed, Cancelled)

### 3. Get API Token
1. Go to your Baserow account settings
2. Navigate to "API tokens"
3. Create a new token with read/write permissions
4. Copy the token

### 4. Get Table IDs
1. Open each table in Baserow
2. Look at the URL - the table ID is the number after `/table/`
3. Example: `https://app.baserow.io/database/123/table/456` - Table ID is `456`

### 5. Configure Environment Variables
1. Copy `.env.example` to `.env`
2. Fill in your Baserow credentials:
```env
VITE_BASEROW_TOKEN=your_actual_token_here
VITE_BASEROW_BOOKING_TABLE_ID=123
VITE_BASEROW_CONTACT_TABLE_ID=456
VITE_BASEROW_QUICK_BOOKING_TABLE_ID=789
```

### 6. Test the Integration
1. Start your development server: `npm run dev`
2. Submit a test form
3. Check your Baserow tables to see if data appears

## Features

### Automatic Data Storage
- All form submissions are automatically saved to Baserow
- Email notifications are sent as backup (if configured)
- Data is stored even if email fails

### Location Autocomplete
- Uses OpenStreetMap Nominatim API (free)
- Provides location suggestions for Indian cities and villages
- Includes popular cities for quick selection

### Error Handling
- Graceful fallback if Baserow is unavailable
- User-friendly error messages
- Data validation before submission

## Baserow Benefits
- **Free**: Up to 10,000 rows per workspace
- **Real-time**: See submissions instantly
- **Collaborative**: Share with team members
- **Export**: Download data as CSV/Excel
- **API**: Full REST API access
- **Self-hosted**: Can be self-hosted if needed

## Troubleshooting

### Common Issues
1. **"Baserow token not configured"**
   - Check your `.env` file has the correct token
   - Ensure the token has read/write permissions

2. **"Table ID not configured"**
   - Verify table IDs in your `.env` file
   - Make sure the tables exist in your Baserow workspace

3. **"API error: 401"**
   - Token is invalid or expired
   - Generate a new token in Baserow settings

4. **"API error: 404"**
   - Table ID is incorrect
   - Check the table exists and ID is correct

### Support
- Baserow Documentation: [docs.baserow.io](https://docs.baserow.io)
- API Reference: [api.baserow.io](https://api.baserow.io)

## Data Privacy
- All data is stored securely in Baserow
- GDPR compliant
- Data can be exported or deleted anytime
- No third-party tracking or analytics
