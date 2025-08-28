import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      slug: "gujarat-to-mumbai-cab-guide",
      title: "Complete Guide: Gujarat to Mumbai by Cab",
      excerpt: "Discover the best routes, stops, and travel tips for your journey from Gujarat to Mumbai. Professional cab service insights included.",
      author: "Mr Amar Jankar",
      date: "January 15, 2024",
      readTime: "8 min read",
      category: "Travel Guide",
      image: "🚗",
      distance: "525 km",
      duration: "8-10 hours"
    },
    {
      slug: "gujarat-to-delhi-road-trip",
      title: "Gujarat to Delhi: Ultimate Road Trip Guide",
      excerpt: "Plan your perfect road trip from Gujarat to Delhi with our comprehensive guide covering routes, attractions, and booking tips.",
      author: "Mr Amar Jankar",
      date: "January 20, 2024",
      readTime: "12 min read",
      category: "Road Trip",
      image: "🏛️",
      distance: "950 km",
      duration: "12-14 hours"
    },
    {
      slug: "gujarat-to-goa-coastal-route",
      title: "Best Route from Gujarat to Goa by Cab",
      excerpt: "Explore the scenic coastal route from Gujarat to Goa. Tips for comfortable travel and must-visit stops along the way.",
      author: "Mr Amar Jankar",
      date: "January 25, 2024",
      readTime: "10 min read",
      category: "Coastal Route",
      image: "🏖️",
      distance: "600 km",
      duration: "10-12 hours"
    },
    {
      slug: "gujarat-to-bangalore-silicon-valley",
      title: "Gujarat to Bangalore: Silicon Valley Route",
      excerpt: "Professional cab service from Gujarat to India's Silicon Valley. Best routes, tech stops, and business travel tips.",
      author: "Mr Amar Jankar",
      date: "January 30, 2024",
      readTime: "11 min read",
      category: "Business Travel",
      image: "💻",
      distance: "1200 km",
      duration: "16-18 hours"
    },
    {
      slug: "gujarat-to-agra-taj-mahal",
      title: "Gujarat to Agra: Taj Mahal Express",
      excerpt: "Visit the iconic Taj Mahal from Gujarat. Best routes, photography tips, and heritage tour planning.",
      author: "Mr Amar Jankar",
      date: "February 1, 2024",
      readTime: "9 min read",
      category: "Heritage Tour",
      image: "🕌",
      distance: "650 km",
      duration: "10-12 hours"
    },
    {
      slug: "gujarat-to-rajasthan-desert-adventure",
      title: "Gujarat to Rajasthan: Desert Adventure Guide",
      excerpt: "Experience the royal heritage of Rajasthan with our detailed travel guide from Gujarat. Best routes and cultural insights.",
      author: "Mr Amar Jankar",
      date: "February 5, 2024",
      readTime: "7 min read",
      category: "Cultural Tour",
      image: "🏰",
      distance: "400 km",
      duration: "6-8 hours"
    }
  ];

  const categories = ["All", "Travel Guide", "Road Trip", "Coastal Route", "Business Travel", "Heritage Tour", "Cultural Tour"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Travel Blog & Destination Guides</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Insights, tips, and stories from the world of transportation.
            Stay informed and travel smarter with our expert advice.
          </p>

          {/* Featured Travel Guides */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">🚗 Gujarat to All India Travel Guides</h2>
            <p className="text-lg mb-4">Comprehensive destination guides for traveling from Gujarat to major Indian cities with professional cab service</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Mumbai • Delhi • Goa • Bangalore</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Agra • Rajasthan • Kashmir • Kerala</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "hero-button" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video bg-muted overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-4xl mb-3">{post.image}</div>
                      <h3 className="font-semibold text-lg mb-2">{post.category}</h3>
                      {post.distance && (
                        <div className="text-sm text-muted-foreground bg-white/60 px-3 py-1 rounded-full">
                          {post.distance} • {post.duration}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    
                    <Button asChild variant="ghost" size="sm" className="group-hover:text-primary">
                      <Link to={`/blog/${post.slug}`} className="flex items-center space-x-1">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 dark-surface text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-soft mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest travel tips, safety updates, 
            and transportation insights delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-black"
            />
            <Button className="hero-button px-6">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-soft mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;