import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import heroImage from "@/assets/hero-minimal.jpg";

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "Excellent service! The driver was professional and the ride was smooth. Will definitely use again.",
    location: "New York"
  },
  {
    name: "Michael Chen",
    rating: 5,
    text: "Very reliable and affordable. The booking process was so easy and the car arrived exactly on time.",
    location: "Los Angeles"
  },
  {
    name: "Emily Davis",
    rating: 5,
    text: "Safe and comfortable rides every time. The drivers are courteous and the vehicles are well-maintained.",
    location: "Chicago"
  },
  {
    name: "David Wilson",
    rating: 5,
    text: "24/7 availability is a game-changer. Perfect for early morning flights and late night returns.",
    location: "Miami"
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
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Book Your Cab <span className="text-primary">Anytime</span>, Anywhere
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Safe, reliable, and affordable rides at your fingertips. Experience premium transportation with professional drivers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="hero-button text-lg px-8 py-4">
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black"
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose RideEasy?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing you with the best transportation experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Affordable Fares</h3>
                <p className="text-muted-foreground">
                  Competitive pricing with transparent fare structure. No hidden charges, no surge pricing surprises.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">24/7 Availability</h3>
                <p className="text-muted-foreground">
                  Round-the-clock service for all your transportation needs. Early morning flights or late night returns.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Safe Rides</h3>
                <p className="text-muted-foreground">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-soft">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100K+</div>
              <div className="text-soft">Rides Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-soft">Service Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-soft">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from real customers
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-primary fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl mb-6 text-muted-foreground italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div>
                  <div className="font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </CardContent>
            </Card>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-gray-300"
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
          <h2 className="text-4xl font-bold mb-4">Ready to Ride?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust RideEasy for their transportation needs.
          </p>
          <Button asChild size="lg" className="hero-button text-lg px-8 py-4">
            <Link to="/booking">Book Your Ride Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;