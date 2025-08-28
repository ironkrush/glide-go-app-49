#!/usr/bin/env node

/**
 * Baserow Setup Helper for Lankadhish Cab Service
 * This script helps you set up Baserow tables and configuration
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function setupBaserow() {
  console.log('\n🚗 Lankadhish Cab Service - Baserow Setup Helper\n');
  console.log('This script will help you configure Baserow for your cab booking system.\n');

  console.log('📋 Before starting, make sure you have:');
  console.log('1. Created a Baserow account at https://baserow.io');
  console.log('2. Created a new workspace');
  console.log('3. Generated an API token with read/write permissions\n');

  const proceed = await question('Ready to proceed? (y/n): ');
  if (proceed.toLowerCase() !== 'y') {
    console.log('Setup cancelled.');
    rl.close();
    return;
  }

  console.log('\n📝 Please provide your Baserow configuration:\n');

  const token = await question('Enter your Baserow API token: ');
  if (!token) {
    console.log('❌ API token is required!');
    rl.close();
    return;
  }

  console.log('\n📊 Now we need your table IDs. Create these tables in Baserow first:\n');
  
  console.log('Table 1: "Booking Requests" with fields:');
  console.log('- Name (Text), Email (Email), Phone (Text), Pickup Location (Text)');
  console.log('- Destination (Text), Pickup Date (Date), Pickup Time (Text)');
  console.log('- Passenger Count (Number), Car Type (Text), Special Requests (Long Text)');
  console.log('- Submission Date (Date), Status (Single Select)\n');
  
  const bookingTableId = await question('Enter Booking Requests table ID: ');

  console.log('\nTable 2: "Contact Messages" with fields:');
  console.log('- Name (Text), Email (Email), Phone (Text), Subject (Text)');
  console.log('- Message (Long Text), Submission Date (Date), Status (Single Select)\n');
  
  const contactTableId = await question('Enter Contact Messages table ID: ');

  console.log('\nTable 3: "Quick Bookings" with fields:');
  console.log('- Name (Text), Phone (Text), Pickup Location (Text), Destination (Text)');
  console.log('- Pickup Date (Date), Pickup Time (Text), Submission Date (Date), Status (Single Select)\n');
  
  const quickBookingTableId = await question('Enter Quick Bookings table ID: ');

  // Create .env file
  const envContent = `# Baserow Configuration
VITE_BASEROW_TOKEN=${token}
VITE_BASEROW_BOOKING_TABLE_ID=${bookingTableId}
VITE_BASEROW_CONTACT_TABLE_ID=${contactTableId}
VITE_BASEROW_QUICK_BOOKING_TABLE_ID=${quickBookingTableId}

# Email Configuration (optional - Baserow is primary)
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
`;

  try {
    fs.writeFileSync('.env', envContent);
    console.log('\n✅ Configuration saved to .env file!');
    
    console.log('\n🎉 Setup complete! Your Baserow integration is ready.');
    console.log('\n📋 Next steps:');
    console.log('1. Start your development server: npm run dev');
    console.log('2. Test form submissions on your website');
    console.log('3. Check your Baserow tables for incoming data');
    console.log('\n📚 For detailed setup instructions, see BASEROW_SETUP.md');
    
  } catch (error) {
    console.error('\n❌ Error creating .env file:', error.message);
  }

  rl.close();
}

// Test Baserow connection
async function testConnection(token, tableId) {
  try {
    const response = await fetch(`https://api.baserow.io/api/database/rows/table/${tableId}/`, {
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('✅ Connection successful!');
      return true;
    } else {
      console.log(`❌ Connection failed: ${response.status} ${response.statusText}`);
      return false;
    }
  } catch (error) {
    console.log(`❌ Connection error: ${error.message}`);
    return false;
  }
}

if (require.main === module) {
  setupBaserow().catch(console.error);
}

module.exports = { setupBaserow, testConnection };
