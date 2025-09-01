import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock, Plus } from "lucide-react";
import BlogAdmin from "@/components/BlogAdmin";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  distance?: string;
  duration?: string;
}

const Blog = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  const handleBlogUploaded = () => {
    setShowAdmin(false);
  };

  // Static blog posts
  const blogPosts: BlogPost[] = [
    {
      slug: "gujarat-to-mumbai-cab-guide",
      title: "Complete Guide: Gujarat to Mumbai by Cab",
      excerpt: "Discover the best routes, stops, and travel tips for your journey from Gujarat to Mumbai. Professional cab service insights included.",
      author: "Mr Amar Jankar",
      date: "January 15, 2024",
      readTime: "8 min read",
      category: "Travel Guide",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
      distance: "600 km",
      duration: "10-12 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 dark-surface overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Travel <span className="text-yellow-400">Blog</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Insights, tips, and stories from the world of transportation.
              Stay informed and travel smarter with our expert advice.
            </p>

            {/* Admin Toggle Button */}
            <div className="mb-8">
              <Button
                onClick={() => setShowAdmin(!showAdmin)}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Plus className="w-4 h-4 mr-2" />
                {showAdmin ? 'Hide Admin Panel' : 'Add New Blog'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Panel */}
      {showAdmin && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <BlogAdmin onBlogUploaded={handleBlogUploaded} />
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video bg-muted overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  {/* Distance Badge */}
                  {post.distance && (
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                        {post.distance} • {post.duration}
                      </span>
                    </div>
                  )}
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

      <Footer />
    </div>
  );
};

export default Blog;