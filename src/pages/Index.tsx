import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Clock, 
  Shield, 
  DollarSign, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle,
  Users,
  Car,
  MapPin
} from "lucide-react";
import heroImage from "@/assets/hero-minimalist-cab.jpg";
import BookingForm from "@/components/BookingForm";

const testimonials = [
  {
    name: "Priya Patel",
    rating: 5,
    text: "Exceptional service from start to finish. The driver was punctual, professional, and the vehicle was immaculate. Lankadhish has become my go-to transportation service for all business meetings in Ahmedabad.",
    location: "Ahmedabad",
    position: "Marketing Director",
    avatar: "PP"
  },
  {
    name: "Rohan Shah",
    rating: 5,
    text: "Outstanding reliability and affordability. The booking process is seamless, and I've never experienced any delays. Their customer service team is incredibly responsive and helpful.",
    location: "Surat",
    position: "Software Engineer",
    avatar: "RS"
  },
  {
    name: "Anjali Mehta",
    rating: 5,
    text: "Safety and comfort are their top priorities. Every driver has been courteous and knowledgeable about Gujarat roads. The vehicles are well-maintained and equipped with modern amenities.",
    location: "Vadodara",
    position: "Healthcare Professional",
    avatar: "AM"
  },
  {
    name: "Kiran Desai",
    rating: 5,
    text: "The 24/7 availability is truly a game-changer for frequent travelers like myself. Perfect for early morning flights from Ahmedabad Airport and late-night returns. Consistently excellent service quality.",
    location: "Rajkot",
    position: "Business Consultant",
    avatar: "KD"
  }
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <Helmet>
        <title>Lankadhish - Premium Cab Booking Service | Best Taxi Service in Gujarat | Book Your Ride 24/7</title>
        <meta
          name="description"
          content="Lankadhish Cab Service - Travel India With Us! 24/7 one-way & round-trip service from Gujarat to all over India. Professional pilots, GPS enabled cabs, safe for women. Book now!"
        />
        <meta
          name="keywords"
          content="Lankadhish cab service, Travel India with us, Gujarat to all India cab, 24/7 one way cab, round trip service, professional pilots, GPS enabled cabs, safe for women, neat clean cars, all India service, outstation cab Gujarat, interstate taxi, Gujarat to Mumbai cab, Gujarat to Delhi taxi, Ahmedabad outstation, Surat to Pune cab, Mr Amar Jankar, 9157575675, 7567302302"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Lankadhish Transportation Services" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.country" content="India" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <link rel="canonical" href="https://lankadhish.com/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Lankadhish - Premium Cab Booking Service | Best Taxi Service in Gujarat" />
        <meta property="og:description" content="Gujarat's premier cab booking service. Safe, reliable, and affordable rides 24/7. Professional drivers, modern vehicles, competitive rates. Book your ride now!" />
        <meta property="og:url" content="https://lankadhish.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lankadhish.com/hero-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Lankadhish" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lankadhish - Premium Cab Booking Service | Best Taxi Service in Gujarat" />
        <meta name="twitter:description" content="Gujarat's premier cab booking service. Safe, reliable, and affordable rides 24/7. Book your ride now!" />
        <meta name="twitter:image" content="https://lankadhish.com/hero-image.jpg" />
        <meta name="twitter:site" content="@Lankadhish" />
        <meta name="twitter:creator" content="@Lankadhish" />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#fbbf24" />
        <meta name="msapplication-TileColor" content="#fbbf24" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Lankadhish" />

        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Lankadhish",
            "alternateName": "Lankadhish Transportation Services",
            "description": "Gujarat's premier cab booking service providing safe, reliable transportation 24/7 across the state",
            "url": "https://lankadhish.com",
            "logo": "https://lankadhish.com/logo.png",
            "image": "https://lankadhish.com/hero-image.jpg",
            "foundingDate": "2019",
            "founders": [
              {
                "@type": "Person",
                "name": "Lankadhish Team"
              }
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-9157575675",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi", "Gujarati"],
                "areaServed": "IN-GJ",
                "hoursAvailable": "Mo-Su 00:00-23:59"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 SG Highway",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "postalCode": "380015",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "State",
              "name": "Gujarat, India"
            },
            "serviceType": "Transportation Service",
            "priceRange": "$$",
            "currenciesAccepted": "LKR",
            "paymentAccepted": ["Cash", "Credit Card", "Mobile Payment"],
            "sameAs": [
              "https://facebook.com/lankadhish",
              "https://twitter.com/lankadhish",
              "https://instagram.com/lankadhish"
            ]
          })}
        </script>

        {/* Structured Data - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Cab Booking Service",
            "description": "24/7 cab booking service with professional drivers across Sri Lanka",
            "provider": {
              "@type": "Organization",
              "name": "Lankadhish"
            },
            "areaServed": {
              "@type": "State",
              "name": "Gujarat, India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Transportation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Airport Transfer"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "City Rides"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Outstation Trips"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Corporate Bookings"
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "LKR",
              "price": "25",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "25",
                "priceCurrency": "LKR",
                "unitText": "per kilometer"
              }
            }
          })}
        </script>

        {/* Structured Data - Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Lankadhish",
            "image": "https://lankadhish.com/hero-image.jpg",
            "telephone": "+94-77-123-4567",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Galle Road",
              "addressLocality": "Colombo",
              "addressRegion": "Western Province",
              "postalCode": "00300",
              "addressCountry": "LK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "6.9271",
              "longitude": "79.8612"
            },
            "url": "https://lankadhish.com",
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2500"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl hero-mobile-title font-bold mb-6 leading-tight pt-24">
              <span className="text-primary">Travel India With Us</span> - Gujarat to All Over India
            </h1>
            <p className="text-xl md:text-2xl hero-mobile-subtitle mb-8 text-muted-foreground max-w-2xl">
              24/7 One-Way & Round-Trip Service. Professional pilots, GPS enabled cabs, safe for women. Experience premium transportation from Gujarat to anywhere in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="hero-button text-lg md:text-lg mobile-button px-8 py-4">
                <Link to="/booking">Book Now</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="text-lg md:text-lg mobile-button px-8 py-4"
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          
          {/* Minimalist Cab Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Modern taxi cab illustration" 
                className="w-full max-w-md lg:max-w-lg h-auto animate-fade-in"
              />
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl mobile-heading-md font-bold mb-4">Quick Booking</h2>
            <p className="text-xl md:text-xl mobile-text-base text-muted-foreground max-w-2xl mx-auto">
              Book your ride in minutes with our simple booking form
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <BookingForm compact />
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl mobile-heading-md font-bold mb-4">Why Choose Lankadhish?</h2>
            <p className="text-xl md:text-xl mobile-text-base text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing you with the best transportation experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 mobile-grid gap-8">
            <Card className="text-center p-8 md:p-8 mobile-card-padding hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-2xl mobile-heading-sm font-semibold mb-4">Affordable Fares</h3>
                <p className="text-muted-foreground mobile-text-base">
                  Competitive pricing with transparent fare structure. No hidden charges, no surge pricing surprises.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 md:p-8 mobile-card-padding hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-2xl mobile-heading-sm font-semibold mb-4">24/7 Availability</h3>
                <p className="text-muted-foreground mobile-text-base">
                  Round-the-clock service for all your transportation needs. Early morning flights or late night returns.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 md:p-8 mobile-card-padding hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-2xl mobile-heading-sm font-semibold mb-4">Safe Rides</h3>
                <p className="text-muted-foreground mobile-text-base">
                  Professional verified drivers, well-maintained vehicles, and real-time GPS tracking for your safety.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 dark-surface text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 mobile-grid gap-8 text-center">
            <div>
              <div className="text-4xl md:text-4xl mobile-pricing font-bold text-primary mb-2">50K+</div>
              <div className="text-soft mobile-text-base">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-4xl mobile-pricing font-bold text-primary mb-2">100K+</div>
              <div className="text-soft mobile-text-base">Rides Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-4xl mobile-pricing font-bold text-primary mb-2">24/7</div>
              <div className="text-soft mobile-text-base">Service Available</div>
            </div>
            <div>
              <div className="text-4xl md:text-4xl mobile-pricing font-bold text-primary mb-2">4.9★</div>
              <div className="text-soft mobile-text-base">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">What Our Customers Say</h2>
            <p className="text-base md:text-xl text-muted-foreground">
              Real experiences from satisfied customers across the nation
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <Card className="p-4 md:p-12 text-center shadow-lg border-0 bg-white">
              <CardContent className="pt-2 md:pt-6">
                <div className="flex justify-center mb-3 md:mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-6 md:h-6 text-primary fill-current" />
                  ))}
                </div>

                {/* Avatar */}
                <div className="w-10 h-10 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6">
                  <span className="text-sm md:text-lg font-bold text-primary">
                    {testimonials[currentTestimonial].avatar}
                  </span>
                </div>

                <blockquote className="text-sm md:text-xl mb-4 md:mb-8 text-foreground leading-relaxed max-w-3xl mx-auto">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="border-t border-gray-200 pt-3 md:pt-6">
                  <div className="font-bold text-lg md:text-xl mb-1">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-primary font-medium text-sm md:text-base mb-1">
                    {testimonials[currentTestimonial].position}
                  </div>
                  <div className="text-muted-foreground text-sm md:text-base flex items-center justify-center gap-1">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </CardContent>
            </Card>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 border"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 border"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? "bg-primary scale-125" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-4xl mobile-heading-md font-bold mb-4">Ready to Ride?</h2>
          <p className="text-xl md:text-xl mobile-text-base mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Lankadhish for their transportation needs.
          </p>
          <Button asChild size="lg" className="hero-button text-lg md:text-lg mobile-button px-8 py-4">
            <Link to="/booking">Book Your Ride Now</Link>
          </Button>
        </div>
      </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;