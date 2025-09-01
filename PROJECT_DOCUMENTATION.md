# 🚗 Lankadhish Cab Service - Complete Project Documentation

## 📋 Project Overview

A modern, full-stack cab booking website with advanced features including:
- **Responsive Frontend** - React + TypeScript + Tailwind CSS
- **Smart Forms** - n8n webhook integration + email backup
- **Advanced Chatbot** - Modern iMessage-style interface
- **Blog Management** - FastAPI backend with SEO optimization
- **Counter Animations** - Scroll-triggered statistics
- **Professional Design** - Mobile-first responsive layout

## 🚀 Quick Start

### Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
The frontend will be available at: http://localhost:8080

### Backend Setup (Blog API)
```bash
# Navigate to backend directory
cd backend

# Install Python dependencies and start server
python start.py
```
The blog API will be available at: http://localhost:8000

## ✨ Features Implemented

### 🔧 **Critical Issues Fixed**
- ✅ **Quick Booking Form** - Fixed webhook URLs and data flow
- ✅ **Email System** - Working backup for all forms
- ✅ **Enhanced Error Handling** - Detailed logging and user feedback

### 🎯 **New Features Added**
- ✅ **Advanced Chatbot** - Modern interface with n8n integration
- ✅ **Counter Animations** - Scroll-triggered statistics
- ✅ **Blog Management** - Full CRUD with image upload
- ✅ **SEO Optimization** - Automated meta tags and structured data

### 💰 **Updated Pricing Structure**
- ✅ **Detailed Pricing** - Local, outstation, airport rates
- ✅ **Extra Charges** - Transparent additional costs
- ✅ **Tempo Traveller** - Added group vehicle option

## 🔗 API Endpoints

### Blog Management API
- `POST /api/blogs/upload` - Upload new blog with image
- `GET /api/blogs` - Get all blog posts
- `GET /api/blogs/{slug}` - Get specific blog
- `DELETE /api/blogs/{slug}` - Delete blog post

### n8n Webhooks
- `POST /webhook/booking` - Detailed booking form
- `POST /webhook/quick-booking` - Homepage quick form
- `POST /webhook/contact` - Contact form
- `POST /webhook/lanchat` - Chatbot messages

## 🎨 Design Features

### **Responsive Design**
- Mobile-first approach
- Breakpoint optimization
- Touch-friendly interfaces

### **Modern UI Components**
- Gradient backgrounds
- Smooth animations
- Professional typography
- Consistent color scheme

### **Interactive Elements**
- Hover effects
- Loading animations
- Form validations
- Real-time feedback

## 🔧 Configuration

### Environment Variables (.env)
```env
# n8n Webhooks
VITE_N8N_BOOKING_WEBHOOK=https://automate.axonflash.com/webhook/booking
VITE_N8N_CONTACT_WEBHOOK=https://automate.axonflash.com/webhook/contact
VITE_N8N_QUICK_BOOKING_WEBHOOK=https://automate.axonflash.com/webhook/quick-booking
VITE_N8N_CHAT_WEBHOOK=https://automate.axonflash.com/webhook/lanchat

# Blog API
VITE_BLOG_API_URL=http://localhost:8000/api

# Email Backup
VITE_EMAILJS_SERVICE_ID=service_lankadhish
VITE_EMAILJS_TEMPLATE_ID=template_booking
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

## 📱 Testing Guide

### **Form Testing**
1. **Quick Booking** - Homepage compact form
2. **Detailed Booking** - Full booking page
3. **Contact Form** - Contact page
4. **Chatbot** - Floating chat interface

### **Blog Testing**
1. **Upload Blog** - Use admin panel on blog page
2. **View Blogs** - Check image thumbnails and SEO
3. **SEO Verification** - Check generated HTML files

### **Animation Testing**
1. **Counter Animation** - Scroll to stats section
2. **Form Animations** - Submit forms and watch taxi animation
3. **Chatbot Animation** - Open/close transitions

## 🚀 Deployment

### **Frontend Deployment**
```bash
# Build for production
npm run build

# Deploy dist/ folder to your hosting service
```

### **Backend Deployment**
```bash
# Install dependencies
pip install -r backend/requirements.txt

# Run with production server
uvicorn main:app --host 0.0.0.0 --port 8000
```

## 📊 SEO Features

### **Automated SEO**
- Meta descriptions from content
- Keywords integration
- Open Graph tags
- Twitter Cards
- Structured data (Schema.org)

### **Blog SEO**
- Static HTML files for search engines
- Optimized images (WebP format)
- Canonical URLs
- Sitemap integration

## 🎯 Performance Optimizations

### **Frontend**
- Code splitting
- Image optimization
- Lazy loading
- Efficient animations

### **Backend**
- Image compression
- WebP conversion
- Efficient file handling
- Fast API responses

## 🔒 Security Features

### **Input Validation**
- Form sanitization
- File type validation
- Size limitations
- XSS protection

### **API Security**
- CORS configuration
- Request validation
- Error handling
- Rate limiting ready

## 📞 Support

For technical support or questions:
- **Email**: krush2752@gmail.com
- **Phone**: +91 9157575675
- **Website**: https://lankadhish.com

## 🏆 Project Status

✅ **All Critical Issues Fixed**
✅ **New Features Implemented**
✅ **SEO Optimized**
✅ **Production Ready**

**The Lankadhish cab service website is now a complete, professional solution with modern features and enterprise-grade reliability! 🚗✨**
