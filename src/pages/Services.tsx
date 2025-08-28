import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
      icon: Users,
      title: "Professional Pilots",
      description: "Experienced and trained drivers ensuring safe and comfortable journeys across India.",
      features: ["Licensed drivers", "Background verified", "Local route knowledge", "Courteous service"]
    },
    {
      icon: Car,
      title: "Neat & Clean Cars",
      description: "Well-maintained and sanitized vehicles for a hygienic and comfortable travel experience.",
      features: ["Regular sanitization", "AC vehicles", "Comfortable seating", "Clean interiors"]
    },
    {
      icon: Map,
      title: "GPS Enabled Cabs",
      description: "Real-time tracking and navigation for efficient routes and passenger safety.",
      features: ["Live tracking", "Optimized routes", "Safety monitoring", "ETA updates"]
    },
    {
      icon: Building,
      title: "Safe for Women",
      description: "Special safety measures and verified drivers ensuring secure travel for women passengers.",
      features: ["Verified drivers", "SOS features", "24/7 support", "Safe travel protocols"]
    },
    {
      icon: Plane,
      title: "All India Service",
      description: "Comprehensive coverage from Gujarat to all major cities and destinations across India.",
      features: ["Pan-India coverage", "Interstate permits", "Tourist destinations", "Business hubs"]
    },
    {
      icon: Briefcase,
      title: "24/7 One Way Cab",
      description: "Round-the-clock availability for one-way and round-trip journeys as per your convenience.",
      features: ["24/7 availability", "One-way trips", "Round trips", "Flexible timing"]
    }
  ];

  const fleetTypes = [
    {
      name: "Hatchback",
      model: "Maruti Swift / Hyundai i20",
      capacity: "4 Passengers",
      price: "₹12/km",
      originalPrice: "₹15/km",
      features: ["AC", "Music System", "Clean Interior", "GPS Tracking", "Fuel Efficient"],
      bestFor: "City rides & daily commute",
      image: miniCar, // Will be replaced with Indian hatchback
      rating: 4.3,
      reviews: 2850,
      fuelType: "Petrol/CNG",
      transmission: "Manual/Auto",
      luggage: "2 Bags",
      popular: false,
      savings: "20% OFF"
    },
    {
      name: "Sedan",
      model: "Honda City / Maruti Dzire",
      capacity: "4 Passengers",
      price: "₹18/km",
      originalPrice: "₹22/km",
      features: ["Premium AC", "Leather Seats", "Phone Charging", "WiFi", "Spacious Boot"],
      bestFor: "Business meetings & airport transfers",
      image: sedanCar, // Will be replaced with Indian sedan
      rating: 4.6,
      reviews: 3200,
      fuelType: "Petrol/CNG/Diesel",
      transmission: "Manual/Automatic",
      luggage: "3 Bags",
      popular: true,
      savings: "18% OFF"
    },
    {
      name: "SUV",
      model: "Mahindra Scorpio / Tata Safari",
      capacity: "6-7 Passengers",
      price: "₹25/km",
      originalPrice: "₹30/km",
      features: ["Spacious Interior", "Extra Luggage", "Premium Comfort", "Entertainment System", "High Ground Clearance"],
      bestFor: "Family trips & outstation travel",
      image: suvCar, // Will be replaced with Indian SUV
      rating: 4.5,
      reviews: 1890,
      fuelType: "Diesel",
      transmission: "Manual/Automatic",
      luggage: "5 Bags",
      popular: false,
      savings: "17% OFF"
    },
    {
      name: "Premium",
      model: "Toyota Camry / Honda Accord",
      capacity: "4 Passengers",
      price: "₹35/km",
      originalPrice: "₹42/km",
      features: ["Luxury Interior", "Chauffeur Service", "VIP Treatment", "Complimentary Water", "Premium Sound System"],
      bestFor: "Corporate events & special occasions",
      image: luxuryCar, // Will be replaced with Indian luxury car
      rating: 4.8,
      reviews: 750,
      fuelType: "Petrol/Hybrid",
      transmission: "Automatic",
      luggage: "4 Bags",
      popular: false,
      savings: "17% OFF"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Cab Services in Gujarat | Taxi Fleet Ahmedabad, Surat, Vadodara | Lankadhish</title>
        <meta
          name="description"
          content="Premium cab services across Gujarat. Choose from Hatchbacks, Sedans, SUVs & Luxury cars in Ahmedabad, Surat, Vadodara, Rajkot. Professional drivers, competitive rates, 24/7 availability. Book now!"
        />
        <meta
          name="keywords"
          content="cab services Gujarat, taxi fleet Ahmedabad, sedan booking Surat, SUV rental Vadodara, luxury cars Rajkot, professional drivers Gujarat, 24/7 cab service, Maruti Swift booking, Honda City taxi, Mahindra Scorpio rental, Toyota Camry hire, Gujarat transportation, outstation cab Gujarat, airport transfer Ahmedabad"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.country" content="India" />
        <meta name="geo.placename" content="Gujarat, India" />
        <link rel="canonical" href="https://lankadhish.com/services" />
        <meta property="og:title" content="Premium Cab Services Gujarat - Lankadhish Fleet" />
        <meta property="og:description" content="Choose from our diverse fleet of premium vehicles with professional drivers across Gujarat. Safe, reliable, and affordable transportation in Ahmedabad, Surat, Vadodara." />
        <meta property="og:url" content="https://lankadhish.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
      </Helmet>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-5xl mobile-heading-lg font-bold mb-6">Travel India With Us - Gujarat to All Over India</h1>
          <p className="text-xl md:text-xl mobile-text-lg max-w-3xl mx-auto">
            24/7 One-Way & Round-Trip Service. Professional pilots, neat & clean cars, GPS enabled cabs.
            Safe for women with all India service coverage from Gujarat.
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
                    <p className="text-sm text-muted-foreground mb-2 font-medium">{vehicle.model}</p>
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