import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Phone, User, Car, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
// Removed email service dependency - using only n8n webhook
import LocationAutocomplete from "@/components/LocationAutocomplete";
import TaxiAnimation from "@/components/TaxiAnimation";
import { n8nService } from "@/services/n8nService";
import { LocationSuggestion } from "@/services/locationService";

const Booking = () => {
  const { toast } = useToast();
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationSuccess, setAnimationSuccess] = useState(false);
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropLocation: "",
    date: "",
    time: "",
    passengerName: "",
    passengerPhone: "",
    passengerEmail: "",
    cabType: "",
    specialRequests: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.pickupLocation || !formData.dropLocation || !formData.date ||
        !formData.time || !formData.passengerName || !formData.passengerPhone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setShowAnimation(true);
    setAnimationSuccess(false);

    try {
      // Submit to n8n webhook
      const result = await n8nService.submitBooking({
        name: formData.passengerName,
        email: formData.passengerEmail || 'no-email@provided.com',
        phone: formData.passengerPhone,
        pickupLocation: formData.pickupLocation,
        destination: formData.dropLocation,
        pickupDate: formData.date,
        pickupTime: formData.time,
        passengerCount: '1',
        carType: formData.cabType,
        specialRequests: formData.specialRequests,
      });

      if (result.success) {
        // Booking submitted successfully to n8n webhook
        console.log('Booking submitted successfully to n8n:', result);
        setAnimationSuccess(true);

        // Reset form after animation
        setTimeout(() => {
          setFormData({
            pickupLocation: "",
            dropLocation: "",
            date: "",
            time: "",
            passengerName: "",
            passengerEmail: "",
            passengerPhone: "",
            cabType: "",
            specialRequests: "",
          });
        }, 2500);

        toast({
          title: "Booking Submitted Successfully!",
          description: "Our team will contact you within 15 minutes to confirm your ride details.",
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }

    } catch (error) {
      console.error('Booking submission error:', error);
      setShowAnimation(false);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly at +91 9157575675",
        variant: "destructive",
      });
    }
  };

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    setAnimationSuccess(false);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-5xl mobile-heading-lg font-bold mb-6">Book Your Ride</h1>
          <p className="text-xl md:text-xl mobile-text-lg max-w-3xl mx-auto">
            Fill out the form below and our team will contact you shortly to confirm your booking.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center mobile-card-padding">
                <CardTitle className="text-3xl md:text-3xl mobile-heading-md font-bold">Book Your Cab</CardTitle>
                <p className="text-muted-foreground mobile-text-base">
                  Complete the form below and we'll get back to you within 15 minutes
                </p>
              </CardHeader>
              <CardContent className="p-8 mobile-card-padding">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Trip Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="pickup" className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Pickup Location *</span>
                      </Label>
                      <LocationAutocomplete
                        placeholder="Enter pickup address"
                        value={formData.pickupLocation}
                        onChange={(value) => handleInputChange("pickupLocation", value)}
                        showPopularCities={true}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="drop" className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Drop Location *</span>
                      </Label>
                      <LocationAutocomplete
                        placeholder="Enter destination address"
                        value={formData.dropLocation}
                        onChange={(value) => handleInputChange("dropLocation", value)}
                        showPopularCities={true}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>Date *</span>
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>Time *</span>
                      </Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange("time", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Passenger Details */}
                  <div className="border-t pt-6">
                    <h3 className="text-xl md:text-xl mobile-heading-sm font-semibold mb-4">Passenger Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-primary" />
                          <span>Full Name *</span>
                        </Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.passengerName}
                          onChange={(e) => handleInputChange("passengerName", e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-primary" />
                          <span>Phone Number *</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.passengerPhone}
                          onChange={(e) => handleInputChange("passengerPhone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <Label htmlFor="email">Email Address (Optional)</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.passengerEmail}
                        onChange={(e) => handleInputChange("passengerEmail", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  {/* Vehicle Selection */}
                  <div className="border-t pt-6">
                    <h3 className="text-xl md:text-xl mobile-heading-sm font-semibold mb-4">Vehicle Preference</h3>
                    <div className="space-y-2">
                      <Label htmlFor="cabType" className="flex items-center space-x-2">
                        <Car className="w-4 h-4 text-primary" />
                        <span>Preferred Cab Type</span>
                      </Label>
                      <Select value={formData.cabType} onValueChange={(value) => handleInputChange("cabType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select vehicle type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mini">Mini - ₹10-12/km (4 passengers)</SelectItem>
                          <SelectItem value="sedan">Sedan - ₹14-15/km (4 passengers)</SelectItem>
                          <SelectItem value="suv">SUV - ₹18-20/km (6-7 passengers)</SelectItem>
                          <SelectItem value="luxury">Luxury - ₹60/km (4 passengers)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="border-t pt-6">
                    <Label htmlFor="requests">Special Requests</Label>
                    <Textarea
                      id="requests"
                      placeholder="Any special requirements or additional information..."
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      className="mt-2"
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button type="submit" size="lg" className="hero-button w-full text-lg md:text-lg mobile-button py-4">
                      Submit Booking Request
                    </Button>
                    <p className="text-sm mobile-text-base text-muted-foreground text-center mt-4">
                      Our team will contact you within 15 minutes to confirm your booking details.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 dark-surface text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-3xl mobile-heading-md font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-soft mobile-text-base mb-6">Call us directly for urgent bookings or special requirements</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a href="tel:+919876543210">
    <Button
      size="lg"
      variant="outline"
      className="border-white text-black hover:bg-black hover:text-white mobile-button"
    >
      <Phone className="w-4 h-4 mr-2" />
      Call: +91 98765 43210
    </Button>
  </a>

  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
    <Button
      size="lg"
      variant="outline"
      className="border-white text-black hover:bg-black hover:text-white mobile-button"
    >
      WhatsApp: +91 98765 43210
    </Button>
  </a>
</div>

        </div>
      </section>

      <Footer />

      {/* Taxi Animation */}
      <TaxiAnimation
        isSubmitting={showAnimation}
        isSuccess={animationSuccess}
        onAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
};

export default Booking;
