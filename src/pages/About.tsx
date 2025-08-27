import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Clock, Car, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Lankadhish</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted transportation partner, committed to providing safe, reliable, 
            and affordable rides with a customer-first approach.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Lankadhish, we believe transportation should be simple, safe, and accessible to everyone. 
                Our mission is to connect people with reliable rides while building stronger communities 
                through exceptional service and innovative solutions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Safety First</h3>
                    <p className="text-sm text-muted-foreground">Every ride prioritizes your safety and security</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Customer Care</h3>
                    <p className="text-sm text-muted-foreground">24/7 support for all your transportation needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dark-surface rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Reliability in every journey</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Transparency in pricing and service</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Innovation for better experiences</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Community-focused growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Lankadhish?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We go above and beyond to ensure your transportation experience exceeds expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Verified Drivers</h3>
                <p className="text-muted-foreground">
                  All our drivers undergo thorough background checks and professional training 
                  to ensure your safety and comfort.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Car className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Modern Fleet</h3>
                <p className="text-muted-foreground">
                  Well-maintained vehicles with regular safety inspections and GPS tracking 
                  for a reliable and comfortable ride.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">On-Time Service</h3>
                <p className="text-muted-foreground">
                  Punctual pickups and efficient routes ensure you reach your destination 
                  on time, every time.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Professional Service</h3>
                <p className="text-muted-foreground">
                  Courteous and professional drivers who prioritize your comfort and 
                  provide exceptional customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Continuous monitoring and improvement of our services based on 
                  customer feedback and industry best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                <p className="text-muted-foreground">
                  Every decision we make is centered around improving your experience 
                  and building long-lasting relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 dark-surface text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-soft max-w-2xl mx-auto">
              Building trust through years of dedicated service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-4">2019</div>
              <h3 className="text-xl font-semibold mb-2">Founded</h3>
              <p className="text-soft">Started with a vision to revolutionize local transportation</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-4">50K+</div>
              <h3 className="text-xl font-semibold mb-2">Rides Completed</h3>
              <p className="text-soft">Successfully completed over 50,000 safe rides</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-4">500+</div>
              <h3 className="text-xl font-semibold mb-2">Verified Drivers</h3>
              <p className="text-soft">Professional drivers across multiple cities</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-4">4.9★</div>
              <h3 className="text-xl font-semibold mb-2">Customer Rating</h3>
              <p className="text-soft">Consistently high ratings from satisfied customers</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;