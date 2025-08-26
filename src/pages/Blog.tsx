import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      slug: "safe-travel-tips",
      title: "10 Essential Safe Travel Tips for Every Journey",
      excerpt: "Discover expert safety tips to ensure your travels are secure and worry-free. From booking to arrival, we've got you covered.",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Safety",
      image: "/api/placeholder/400/250"
    },
    {
      slug: "airport-transfer-guide",
      title: "The Complete Guide to Stress-Free Airport Transfers",
      excerpt: "Learn how to navigate airport transfers like a pro. Tips for timing, luggage, and choosing the right transportation method.",
      author: "Michael Chen",
      date: "December 12, 2024", 
      readTime: "7 min read",
      category: "Travel",
      image: "/api/placeholder/400/250"
    },
    {
      slug: "sustainable-transportation",
      title: "Eco-Friendly Transportation: Making Greener Travel Choices",
      excerpt: "Explore sustainable transportation options and learn how to reduce your carbon footprint while traveling.",
      author: "Emily Davis",
      date: "December 10, 2024",
      readTime: "6 min read", 
      category: "Environment",
      image: "/api/placeholder/400/250"
    },
    {
      slug: "business-travel-efficiency",
      title: "Maximizing Efficiency in Business Travel",
      excerpt: "Professional tips for making your business trips more productive and cost-effective. Time-saving strategies from experienced travelers.",
      author: "David Wilson",
      date: "December 8, 2024",
      readTime: "8 min read",
      category: "Business",
      image: "/api/placeholder/400/250"
    },
    {
      slug: "ride-sharing-etiquette",
      title: "Ride-Sharing Etiquette: A Guide for Passengers and Drivers",
      excerpt: "Master the unwritten rules of ride-sharing for a pleasant experience for everyone. Communication, safety, and courtesy tips.",
      author: "Lisa Rodriguez",
      date: "December 5, 2024",
      readTime: "4 min read",
      category: "Etiquette",
      image: "/api/placeholder/400/250"
    },
    {
      slug: "local-transportation-guide",
      title: "Navigating Local Transportation in Major Cities",
      excerpt: "Your comprehensive guide to public and private transportation options in popular destinations around the world.",
      author: "James Thompson",
      date: "December 3, 2024",
      readTime: "10 min read",
      category: "Travel",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["All", "Safety", "Travel", "Business", "Environment", "Etiquette"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Travel Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Insights, tips, and stories from the world of transportation. 
            Stay informed and travel smarter with our expert advice.
          </p>
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
                      <h3 className="font-semibold text-lg mb-2">{post.category}</h3>
                      <p className="text-sm text-muted-foreground">Feature Image</p>
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