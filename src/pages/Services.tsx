import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Plane, 
  Building, 
  Map, 
  Calendar, 
  Car, 
  Users, 
  Briefcase,
  Check,
  Star
} from "lucide-react";
import miniCar from "@/assets/mini-car.png";
import sedanCar from "@/assets/sedan-car.png";
import suvCar from "@/assets/suv-car.png";
import luxuryCar from "@/assets/luxury-car.png";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Reliable pickups and drops for all major airports. Flight tracking ensures on-time service.",
      features: ["Flight tracking", "Meet & greet service", "24/7 availability", "Fixed pricing"]
    },
    {
      icon: Building,
      title: "City Rides", 
      description: "Convenient transportation within the city for shopping, meetings, or leisure activities.",
      features: ["Quick booking", "Multiple stops", "Real-time tracking", "Professional drivers"]
    },
    {
      icon: Map,
      title: "Outstation Trips",
      description: "Comfortable long-distance travel to nearby cities and tourist destinations.",
      features: ["Multiple day packages", "Tourist guide available", "AC vehicles", "Flexible itinerary"]
    },
    {
      icon: Briefcase,
      title: "Corporate Bookings",
      description: "Dedicated transportation solutions for businesses and corporate events.",
      features: ["Bulk booking discounts", "Priority support", "Invoicing options", "Account management"]
    }
  ];

  const fleetTypes = [
    {
      name: "Mini",
      capacity: "4 Passengers",
      price: "₹25/km",
      originalPrice: "₹30/km",
      features: ["AC", "Music System", "Clean Interior", "GPS Tracking"],
      bestFor: "Short city rides",
      image: miniCar,
      rating: 4.2,
      reviews: 1250,
      fuelType: "Petrol",
      transmission: "Manual",
      luggage: "2 Bags",
      popular: false,
      savings: "17% OFF"
    },
    {
      name: "Sedan",
      capacity: "4 Passengers",
      price: "₹35/km",
      originalPrice: "₹42/km",
      features: ["Premium AC", "Leather Seats", "Phone Charging", "WiFi"],
      bestFor: "Business meetings",
      image: sedanCar,
      rating: 4.5,
      reviews: 2100,
      fuelType: "Petrol/CNG",
      transmission: "Automatic",
      luggage: "3 Bags",
      popular: true,
      savings: "16% OFF"
    },
    {
      name: "SUV",
      capacity: "6-7 Passengers",
      price: "₹55/km",
      originalPrice: "₹65/km",
      features: ["Spacious", "Extra Luggage", "Premium Comfort", "Entertainment System"],
      bestFor: "Family trips",
      image: suvCar,
      rating: 4.4,
      reviews: 890,
      fuelType: "Diesel",
      transmission: "Automatic",
      luggage: "5 Bags",
      popular: false,
      savings: "15% OFF"
    },
    {
      name: "Luxury",
      capacity: "4 Passengers",
      price: "₹85/km",
      originalPrice: "₹100/km",
      features: ["Premium Cars", "Chauffeur Service", "VIP Treatment", "Complimentary Water"],
      bestFor: "Special occasions",
      image: luxuryCar,
      rating: 4.8,
      reviews: 450,
      fuelType: "Petrol",
      transmission: "Automatic",
      luggage: "4 Bags",
      popular: false,
      savings: "15% OFF"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-5xl mobile-heading-lg font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-xl mobile-text-lg max-w-3xl mx-auto">
            Comprehensive transportation solutions for every need. From airport transfers 
            to corporate bookings, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl mobile-heading-md font-bold mb-4">Transportation Services</h2>
            <p className="text-xl md:text-xl mobile-text-base text-muted-foreground max-w-2xl mx-auto">
              Professional transportation services tailored to your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 mobile-grid gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 md:p-8 mobile-card-padding hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <service.icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl md:text-2xl mobile-heading-sm font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mobile-text-base mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-sm mobile-text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="hero-button mobile-button">
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl mobile-heading-md font-bold mb-4">Our Fleet</h2>
            <p className="text-xl md:text-xl mobile-text-base text-muted-foreground max-w-2xl mx-auto">
              Choose from our diverse fleet of well-maintained vehicles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mobile-grid gap-6">
            {fleetTypes.map((vehicle, index) => (
              <Card key={index} className="text-center car-card relative overflow-hidden border-2 hover:border-primary/30">
                {vehicle.popular && (
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full z-10">
                    POPULAR
                  </div>
                )}
                {vehicle.savings && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                    {vehicle.savings}
                  </div>
                )}
                <CardContent className="p-6 mobile-card-padding">
                  {/* Car Image */}
                  <div className="w-full h-32 mx-auto mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative">
                    <img
                      src={vehicle.image}
                      alt={`${vehicle.name} car`}
                      className="car-image w-full h-full object-contain"
                    />
                  </div>

                  {/* Vehicle Name & Rating */}
                  <div className="mb-3">
                    <h3 className="text-xl md:text-xl mobile-heading-sm font-semibold mb-1">{vehicle.name}</h3>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(vehicle.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{vehicle.rating}</span>
                      <span className="text-xs text-muted-foreground">({vehicle.reviews})</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2 mb-1">
                      <span className="text-2xl md:text-2xl mobile-pricing font-bold text-primary">{vehicle.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{vehicle.originalPrice}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">per kilometer</p>
                  </div>

                  {/* Vehicle Details */}
                  <div className="space-y-2 mb-4 text-left">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Capacity:</span>
                      <span className="font-medium">{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Fuel:</span>
                      <span className="font-medium">{vehicle.fuelType}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Transmission:</span>
                      <span className="font-medium">{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Luggage:</span>
                      <span className="font-medium">{vehicle.luggage}</span>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="text-sm mobile-text-base text-center text-muted-foreground mb-4 italic bg-muted/30 py-2 px-3 rounded-lg">
                    Perfect for {vehicle.bestFor}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2 text-left">Features:</h4>
                    <ul className="text-xs mobile-text-base space-y-1 text-left">
                      {vehicle.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <Button asChild className="w-full mobile-button hero-button">
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="py-20 dark-surface text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl mobile-heading-md font-bold mb-4">Transparent Pricing</h2>
            <p className="text-xl md:text-xl mobile-text-base text-soft max-w-2xl mx-auto">
              No hidden charges, no surge pricing. Just honest, upfront rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 mobile-grid gap-8">
            <Card className="dark-surface-elevated border-gray-700 p-6 mobile-card-padding">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl md:text-xl mobile-heading-sm font-semibold mb-4 text-white">Per Kilometer</h3>
                <div className="text-3xl md:text-3xl mobile-pricing font-bold text-primary mb-4">₹25 - ₹85</div>
                <p className="text-soft mobile-text-base mb-6">Based on vehicle type and distance</p>
                <ul className="text-sm mobile-text-base text-soft space-y-2">
                  <li>• No minimum charges</li>
                  <li>• Real-time fare calculation</li>
                  <li>• Multiple payment options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="dark-surface-elevated border-gray-700 p-6 mobile-card-padding">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl md:text-xl mobile-heading-sm font-semibold mb-4 text-white">Hourly Packages</h3>
                <div className="text-3xl md:text-3xl mobile-pricing font-bold text-primary mb-4">₹750 - ₹2,000</div>
                <p className="text-soft mobile-text-base mb-6">For multiple stops and waiting time</p>
                <ul className="text-sm mobile-text-base text-soft space-y-2">
                  <li>• 2-hour minimum booking</li>
                  <li>• Includes driver waiting time</li>
                  <li>• Perfect for shopping & meetings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="dark-surface-elevated border-gray-700 p-6 mobile-card-padding">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl md:text-xl mobile-heading-sm font-semibold mb-4 text-white">Fixed Packages</h3>
                <div className="text-3xl md:text-3xl mobile-pricing font-bold text-primary mb-4">₹2,500 - ₹10,000</div>
                <p className="text-soft mobile-text-base mb-6">For outstation and full-day trips</p>
                <ul className="text-sm mobile-text-base text-soft space-y-2">
                  <li>• Airport transfers</li>
                  <li>• Outstation round trips</li>
                  <li>• Wedding & event packages</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-4xl mobile-heading-md font-bold mb-4">Ready to Experience Premium Transportation?</h2>
          <p className="text-xl md:text-xl mobile-text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your ride now and enjoy professional service, competitive rates, and complete peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="hero-button text-lg md:text-lg mobile-button px-8 py-4">
              <Link to="/booking">Book a Ride</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg md:text-lg mobile-button px-8 py-4">
              <Link to="/contact">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;