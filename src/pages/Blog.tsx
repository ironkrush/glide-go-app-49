import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { blogService } from "@/services/blogService";

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
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const blogsPerPage = 9;

  // Load blogs on component mount
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setIsLoading(true);
        const blogs = await blogService.getAllBlogs();
        setBlogPosts(blogs);
      } catch (error) {
        console.error('Failed to load blogs:', error);
        // Use fallback static data
        setBlogPosts(getStaticBlogs());
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogs();
  }, []);

  // Static fallback blog posts (minimum 9 as requested)
  const getStaticBlogs = (): BlogPost[] => [
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
    },
    {
      slug: "gujarat-to-bangalore-tech-hub",
      title: "Gujarat to Bangalore: Tech Hub Journey",
      excerpt: "Professional cab service from Gujarat to India's Silicon Valley. Best routes, tech stops, and business travel tips for IT professionals.",
      author: "Mr Amar Jankar",
      date: "February 1, 2024",
      readTime: "11 min read",
      category: "Business Travel",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
      distance: "1200 km",
      duration: "16-18 hours"
    },
    {
      slug: "gujarat-to-rajasthan-heritage-tour",
      title: "Gujarat to Rajasthan: Royal Heritage Tour",
      excerpt: "Experience the royal heritage of Rajasthan with our detailed travel guide from Gujarat. Explore palaces, forts, and cultural treasures.",
      author: "Mr Amar Jankar",
      date: "February 5, 2024",
      readTime: "9 min read",
      category: "Heritage Tour",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      distance: "400 km",
      duration: "6-8 hours"
    },
    {
      slug: "gujarat-to-agra-taj-mahal-express",
      title: "Gujarat to Agra: Taj Mahal Express Journey",
      excerpt: "Visit the iconic Taj Mahal from Gujarat. Best routes, photography tips, and heritage tour planning for the wonder of the world.",
      author: "Mr Amar Jankar",
      date: "February 10, 2024",
      readTime: "7 min read",
      category: "Heritage Tour",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=400&fit=crop",
      distance: "650 km",
      duration: "10-12 hours"
    },
    {
      slug: "gujarat-to-kerala-backwaters",
      title: "Gujarat to Kerala: Backwaters Paradise",
      excerpt: "Discover God's Own Country with our comprehensive travel guide from Gujarat to Kerala. Backwaters, beaches, and cultural experiences.",
      author: "Mr Amar Jankar",
      date: "February 15, 2024",
      readTime: "13 min read",
      category: "Nature Tour",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=400&fit=crop",
      distance: "1100 km",
      duration: "14-16 hours"
    },
    {
      slug: "gujarat-to-himachal-mountain-adventure",
      title: "Gujarat to Himachal: Mountain Adventure",
      excerpt: "Experience the majestic Himalayas with our travel guide from Gujarat to Himachal Pradesh. Hill stations, adventure sports, and scenic routes.",
      author: "Mr Amar Jankar",
      date: "February 20, 2024",
      readTime: "14 min read",
      category: "Adventure Tour",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      distance: "800 km",
      duration: "12-14 hours"
    },
    {
      slug: "gujarat-to-kashmir-paradise-on-earth",
      title: "Gujarat to Kashmir: Paradise on Earth",
      excerpt: "Journey to the crown jewel of India with our comprehensive guide from Gujarat to Kashmir. Dal Lake, gardens, and breathtaking landscapes.",
      author: "Mr Amar Jankar",
      date: "February 25, 2024",
      readTime: "15 min read",
      category: "Scenic Tour",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      distance: "1300 km",
      duration: "18-20 hours"
    }
  ];

  // Pagination logic
  const totalPages = Math.ceil(blogPosts.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogPosts.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 dark-surface overflow-hidden">
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


          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading blog posts...</p>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentBlogs.map((post) => (
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

                    <Button asChild variant="ghost" size="sm">
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-12">
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center space-x-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>

              <div className="flex space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => goToPage(page)}
                    className="w-10 h-10"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center space-x-1"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;