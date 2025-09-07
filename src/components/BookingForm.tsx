import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Clock, Users, Car, MapPin, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
// Removed email service dependency - using only n8n webhook
import LocationAutocomplete from "@/components/LocationAutocomplete";
import TaxiAnimation from "@/components/TaxiAnimation";
import { n8nService } from "@/services/n8nService";
import { LocationSuggestion } from "@/services/locationService";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const bookingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  pickupLocation: z.string().min(5, "Please enter a pickup location"),
  destination: z.string().min(5, "Please enter a destination"),
  pickupDate: z.string().min(1, "Please select a pickup date"),
  pickupTime: z.string().min(1, "Please select a pickup time"),
  passengerCount: z.string().min(1, "Please select number of passengers"),
  carType: z.string().min(1, "Please select a car type"),
  specialRequests: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

interface BookingFormProps {
  compact?: boolean;
  className?: string;
}

const BookingForm = ({ compact = false, className = "" }: BookingFormProps) => {
  const { toast } = useToast();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationSuccess, setAnimationSuccess] = useState(false);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      pickupLocation: "",
      destination: "",
      pickupDate: "",
      pickupTime: "",
      passengerCount: "",
      carType: "",
      specialRequests: "",
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    console.log('Form submission started:', { compact, data });
    setIsSubmitting(true);
    setShowAnimation(true);
    setAnimationSuccess(false);

    try {
      let result;

      if (compact) {
        // Use quick booking service for compact form
        console.log('Submitting quick booking...');
        result = await n8nService.submitQuickBooking({
          name: data.name,
          phone: data.phone,
          pickupLocation: data.pickupLocation,
          destination: data.destination,
          pickupDate: data.pickupDate,
          pickupTime: data.pickupTime,
        });
      } else {
        // Use full booking service for detailed form
        console.log('Submitting full booking...');
        result = await n8nService.submitBooking({
          name: data.name,
          email: data.email,
          phone: data.phone,
          pickupLocation: data.pickupLocation,
          destination: data.destination,
          pickupDate: data.pickupDate,
          pickupTime: data.pickupTime,
          passengerCount: data.passengerCount,
          carType: data.carType,
          specialRequests: data.specialRequests,
        });
      }

      if (result.success) {
        // Form submitted successfully to n8n webhook
        console.log('Booking submitted successfully to n8n:', result);
        setAnimationSuccess(true);

        // Reset form after animation
        setTimeout(() => {
          form.reset();
          setShowSuccessDialog(true);
        }, 2500);

        toast({
          title: "Booking Request Submitted!",
          description: "Our team will contact you within 15 minutes to confirm your booking.",
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error: unknown) {
      console.error('Booking submission error:', error);
      setShowAnimation(false);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly at +91 9157575675",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    setAnimationSuccess(false);
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (compact) {
    return (
      <>
        <Card className={`shadow-lg ${className}`}>
          <CardHeader className="pb-4">
            <CardTitle className="text-xl flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" />
              Quick Booking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 12345 67890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="pickupLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pickup Location</FormLabel>
                      <FormControl>
                        <LocationAutocomplete
                          placeholder="Enter pickup address"
                          value={field.value}
                          onChange={field.onChange}
                          showPopularCities={true}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Destination</FormLabel>
                      <FormControl>
                        <LocationAutocomplete
                          placeholder="Enter destination"
                          value={field.value}
                          onChange={field.onChange}
                          showPopularCities={true}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="pickupDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date</FormLabel>
                        <FormControl>
                          <Input 
                            type="date" 
                            min={getTomorrowDate()}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pickupTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="hero-button w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Booking"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Booking Request Submitted!</DialogTitle>
              <DialogDescription>
                Thank you for choosing Lankadhish! Our team will contact you shortly to confirm your booking details and provide you with the estimated fare.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Taxi Animation */}
        <TaxiAnimation
          isSubmitting={showAnimation}
          isSuccess={animationSuccess}
          onAnimationComplete={handleAnimationComplete}
        />
      </>
    );
  }

  return (
    <>
      <Card className={`shadow-lg ${className}`}>
        <CardHeader>
          <CardTitle className="text-2xl">Book Your Ride</CardTitle>
          <p className="text-muted-foreground">
            Fill out the form below to request a booking
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="pickupLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pickup Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter pickup address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Destination</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter destination" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="pickupDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pickup Date</FormLabel>
                      <FormControl>
                        <Input 
                          type="date" 
                          min={getTomorrowDate()}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="pickupTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pickup Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="passengerCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Passengers</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "passenger" : "passengers"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="carType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Car Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select car type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="economy">Economy - Most affordable option</SelectItem>
                        <SelectItem value="sedan">Sedan - Comfortable and reliable</SelectItem>
                        <SelectItem value="suv">SUV - Spacious for groups</SelectItem>
                        <SelectItem value="luxury">Luxury - Premium experience</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="specialRequests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Requests (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any special requirements or requests..."
                        rows={3}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                size="lg" 
                className="hero-button w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting Booking..." : "Submit Booking Request"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Booking Request Submitted!</DialogTitle>
            <DialogDescription>
              Thank you for choosing Lankadhish! Our team will contact you shortly to confirm your booking details and provide you with the estimated fare.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Taxi Animation */}
      <TaxiAnimation
        isSubmitting={showAnimation}
        isSuccess={animationSuccess}
        onAnimationComplete={handleAnimationComplete}
      />
    </>
  );
};

export default BookingForm;