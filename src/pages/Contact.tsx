import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Car, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/services/emailService";
import { baserowService } from "@/services/baserowService";
import { Helmet } from "react-helmet-async";
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

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Submit to Baserow first
      await baserowService.submitContact({
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      });

      // Also send email as backup
      try {
        await sendContactEmail({
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        });
      } catch (emailError) {
        console.warn('Email sending failed, but data is saved to Baserow:', emailError);
      }

      setShowSuccessDialog(true);
      form.reset();

      toast({
        title: "Message Sent Successfully!",
        description: "Our team will contact you shortly.",
      });
    } catch (error: any) {
      console.error('Contact submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Lankadhish - 24/7 Cab Booking Service | Get Support</title>
        <meta name="description" content="Contact Lankadhish for cab booking support, questions, or feedback. Available 24/7 with professional customer service. Call +1 (555) 123-4567 or email us." />
        <meta name="keywords" content="contact Lankadhish, cab booking support Gujarat, taxi service contact, customer service, ride booking help" />
        <link rel="canonical" href="https://lankadhish.com/contact" />
        <meta property="og:title" content="Contact Lankadhish - 24/7 Cab Booking Service" />
        <meta property="og:description" content="Get in touch with Lankadhish for any questions about our cab booking service. Professional support available 24/7." />
        <meta property="og:url" content="https://lankadhish.com/contact" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Lankadhish",
            "description": "Contact page for Lankadhish cab booking service",
            "provider": {
              "@type": "Organization",
              "name": "Lankadhish",
              "telephone": "+91-9157575675",
              "email": "info@lankadhish.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 SG Highway",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "380015"
              }
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <header className="pt-24 pb-16 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-5xl mobile-heading-lg font-bold mb-6">Contact Lankadhish</h1>
            <p className="text-xl md:text-xl mobile-text-lg max-w-3xl mx-auto">
              Get in touch with our team for any questions, feedback, or support. 
              We're here to help you 24/7 with professional cab booking services.
            </p>
          </div>
        </header>

      {/* Contact Information & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 mobile-grid gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-3xl mobile-heading-md font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <Card className="p-6 mobile-card-padding">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg md:text-lg mobile-heading-sm mb-2">Phone Support</h3>
                        <p className="text-muted-foreground mobile-text-base mb-2">Call us for immediate assistance</p>
                        <div className="space-y-1">
                          <p className="font-medium mobile-text-base">+91 9157575675</p>
                          <p className="font-medium mobile-text-base">+91 7567302302</p>
                          <p className="text-sm mobile-text-base text-muted-foreground">Mr Amar Jankar - Available 24/7</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 mobile-card-padding">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg md:text-lg mobile-heading-sm mb-2">Email Support</h3>
                        <p className="text-muted-foreground mobile-text-base mb-2">Send us your queries anytime</p>
                        <div className="space-y-1">
                          <p className="font-medium mobile-text-base">info@lankadhish.com</p>
                          <p className="text-sm mobile-text-base text-muted-foreground">Response within 2 hours</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 mobile-card-padding">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg md:text-lg mobile-heading-sm mb-2">Office Address</h3>
                        <p className="text-muted-foreground mobile-text-base mb-2">Visit our headquarters</p>
                        <div className="space-y-1">
                          <p className="font-medium mobile-text-base">123 SG Highway</p>
                          <p className="font-medium mobile-text-base">Ahmedabad, Gujarat 380015</p>
                          <p className="text-sm mobile-text-base text-muted-foreground">Mon-Fri: 9AM - 6PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 mobile-card-padding">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg md:text-lg mobile-heading-sm mb-2">WhatsApp</h3>
                        <p className="text-muted-foreground mobile-text-base mb-2">Quick support via WhatsApp</p>
                        <div className="space-y-1">
                          <p className="font-medium mobile-text-base">+91 98765 43210</p>
                          <p className="text-sm mobile-text-base text-muted-foreground">Instant messaging support</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader className="mobile-card-padding">
                  <CardTitle className="text-2xl md:text-2xl mobile-heading-md">Send us a Message</CardTitle>
                  <p className="text-muted-foreground mobile-text-base">
                    Fill out the form below and we'll get back to you shortly
                  </p>
                </CardHeader>
                <CardContent className="mobile-card-padding">
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
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="What's this about?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us how we can help you..."
                                rows={5}
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
                        className="hero-button w-full mobile-button"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl mobile-heading-md font-bold mb-4">Find Our Office</h2>
            <p className="text-xl md:text-xl mobile-text-base text-muted-foreground">
              Located in the heart of the city for your convenience
            </p>
          </div>
          
          <Card className="overflow-hidden">
            <div className="w-full h-96 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">
                  123 Main Street, Downtown, City 12345
                </p>
                <Button className="mt-4" variant="outline">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 dark-surface text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl mobile-heading-md font-bold mb-4">Business Hours</h2>
            <p className="text-soft mobile-text-base">Our service is available 24/7, but our office hours are:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 mobile-grid gap-8 text-center">
            <Card className="dark-surface-elevated border-gray-700 p-6 mobile-card-padding">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl md:text-xl mobile-heading-sm font-semibold mb-2 text-white">Office Hours</h3>
                <div className="text-soft mobile-text-base space-y-1">
                  <p>Monday - Friday: 9AM - 6PM</p>
                  <p>Saturday: 10AM - 4PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-surface-elevated border-gray-700 p-6 mobile-card-padding">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl md:text-xl mobile-heading-sm font-semibold mb-2 text-white">Phone Support</h3>
                <div className="text-soft mobile-text-base space-y-1">
                  <p>Available 24/7</p>
                  <p>Emergency Support</p>
                  <p>Instant Assistance</p>
                </div>
              </CardContent>
            </Card>

            <Card className="dark-surface-elevated border-gray-700 p-6 mobile-card-padding">
              <CardContent className="pt-6">
                <Car className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl md:text-xl mobile-heading-sm font-semibold mb-2 text-white">Ride Service</h3>
                <div className="text-soft mobile-text-base space-y-1">
                  <p>24/7 Availability</p>
                  <p>All Days of Week</p>
                  <p>No Holiday Breaks</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

        <Footer />
      </div>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Message Sent Successfully!</DialogTitle>
            <DialogDescription>
              Thank you for contacting Lankadhish! Our team will get back to you shortly. We appreciate your interest in our cab booking services.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Contact;