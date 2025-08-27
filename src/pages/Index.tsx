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
    name: "Sarah Johnson",
    rating: 5,
    text: "Exceptional service from start to finish. The driver was punctual, professional, and the vehicle was immaculate. RideEasy has become my go-to transportation service for all business meetings.",
    location: "New York",
    position: "Marketing Director",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    rating: 5,
    text: "Outstanding reliability and affordability. The booking process is seamless, and I've never experienced any delays. Their customer service team is incredibly responsive and helpful.",
    location: "Los Angeles", 
    position: "Software Engineer",
    avatar: "MC"
  },
  {
    name: "Emily Davis",
    rating: 5,
    text: "Safety and comfort are their top priorities. Every driver has been courteous and knowledgeable about the city. The vehicles are well-maintained and equipped with modern amenities.",
    location: "Chicago",
    position: "Healthcare Professional",
    avatar: "ED"
  },
  {
    name: "David Wilson",
    rating: 5,
    text: "The 24/7 availability is truly a game-changer for frequent travelers like myself. Perfect for early morning flights and late-night returns. Consistently excellent service quality.",
    location: "Miami",
    position: "Business Consultant",
    avatar: "DW"
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
        <title>RideEasy - Premium Cab Booking Service | Book Your Ride 24/7</title>
        <meta 
          name="description" 
          content="Book premium cab services with RideEasy. Safe, reliable, and affordable rides 24/7. Professional drivers, modern vehicles, competitive rates. Book now!" 
        />
        <meta 
          name="keywords" 
          content="cab booking, taxi service, ride booking, airport transfer, city transportation, professional drivers, 24/7 cab service" 
        />
        <link rel="canonical" href="https://rideeasy.com/" />
        <meta property="og:title" content="RideEasy - Premium Cab Booking Service" />
        <meta property="og:description" content="Safe, reliable, and affordable cab rides at your fingertips. Book premium transportation with professional drivers 24/7." />
        <meta property="og:url" content="https://rideeasy.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rideeasy.com/hero-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RideEasy - Premium Cab Booking Service" />
        <meta name="twitter:description" content="Safe, reliable, and affordable cab rides. Book now!" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "RideEasy",
            "description": "Premium cab booking service providing safe, reliable transportation 24/7",
            "url": "https://rideeasy.com",
            "logo": "https://rideeasy.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street",
              "addressLocality": "Downtown",
              "addressRegion": "City",
              "postalCode": "12345"
            },
            "service": {
              "@type": "Service",
              "name": "Cab Booking Service",
              "description": "24/7 cab booking with professional drivers",
              "provider": {
                "@type": "Organization",
                "name": "RideEasy"
              }
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl hero-mobile-title font-bold mb-6 leading-tight">
              Book Your Cab <span className="text-primary">Anytime</span>, Anywhere
            </h1>
            <p className="text-xl md:text-2xl hero-mobile-subtitle mb-8 text-muted-foreground max-w-2xl">
              Safe, reliable, and affordable rides at your fingertips. Experience premium transportation with professional drivers.
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
            <h2 className="text-4xl md:text-4xl mobile-heading-md font-bold mb-4">Why Choose RideEasy?</h2>
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl mobile-heading-md font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl md:text-xl mobile-text-base text-muted-foreground">
              Real experiences from satisfied customers across the nation
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <Card className="p-12 md:p-12 mobile-card-padding text-center shadow-lg border-0 bg-white">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 md:w-8 md:h-8 w-6 h-6 text-primary fill-current" />
                  ))}
                </div>
                
                {/* Avatar */}
                <div className="w-20 h-20 md:w-20 md:h-20 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl md:text-2xl mobile-heading-sm font-bold text-primary">
                    {testimonials[currentTestimonial].avatar}
                  </span>
                </div>
                
                <blockquote className="text-2xl md:text-2xl testimonial-mobile mb-8 text-foreground leading-relaxed max-w-3xl mx-auto">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="font-bold text-xl md:text-xl mobile-heading-sm mb-1">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-primary font-medium testimonial-author-mobile mb-1">
                    {testimonials[currentTestimonial].position}
                  </div>
                  <div className="text-muted-foreground mobile-text-base flex items-center justify-center gap-1">
                    <MapPin className="w-4 h-4" />
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
            Join thousands of satisfied customers who trust RideEasy for their transportation needs.
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