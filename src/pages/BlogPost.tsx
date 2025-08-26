import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would fetch from an API
  const blogPost = {
    title: "10 Essential Safe Travel Tips for Every Journey",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Safety",
    content: `
      <p>Safety should always be your top priority when traveling, whether you're taking a short ride across town or embarking on a long journey. In this comprehensive guide, we'll share ten essential safety tips that every traveler should know.</p>

      <h2>1. Plan Your Route in Advance</h2>
      <p>Before you start your journey, take time to plan your route. Use reliable navigation apps and familiarize yourself with the path. Share your intended route with someone you trust, especially for longer trips.</p>

      <h2>2. Choose Reputable Transportation Services</h2>
      <p>Always opt for licensed and reputable transportation providers. Check reviews, verify driver credentials, and ensure the vehicle is properly maintained and insured.</p>

      <h2>3. Keep Emergency Contacts Handy</h2>
      <p>Save important emergency contacts in your phone and keep a written copy as backup. Include local emergency services, your accommodation, and trusted contacts.</p>

      <h2>4. Trust Your Instincts</h2>
      <p>If something doesn't feel right, trust your gut feeling. Don't hesitate to change your plans or seek help if you feel unsafe at any point during your journey.</p>

      <h2>5. Stay Connected</h2>
      <p>Keep your phone charged and ensure you have reliable communication throughout your trip. Consider carrying a portable charger for longer journeys.</p>

      <h2>6. Secure Your Belongings</h2>
      <p>Keep your valuables secure and avoid displaying expensive items. Use bags with secure closures and consider using a money belt for important documents.</p>

      <h2>7. Be Aware of Your Surroundings</h2>
      <p>Stay alert and aware of your environment. Avoid distractions like excessive phone use when walking or waiting in unfamiliar areas.</p>

      <h2>8. Verify Driver and Vehicle Information</h2>
      <p>When using ride-sharing services, always verify the driver's identity and vehicle information before getting in. Check the license plate, driver photo, and name.</p>

      <h2>9. Travel During Safe Hours</h2>
      <p>When possible, plan your travels during daylight hours and avoid traveling alone late at night, especially in unfamiliar areas.</p>

      <h2>10. Have a Backup Plan</h2>
      <p>Always have alternative transportation options and emergency plans. Know the location of nearby safe places like police stations, hospitals, or hotels.</p>

      <h2>Conclusion</h2>
      <p>Following these safety tips will help ensure your travels are both enjoyable and secure. Remember, no destination or schedule is worth compromising your safety. At RideEasy, we prioritize your safety with verified drivers, tracked vehicles, and 24/7 support.</p>
    `
  };

  const relatedPosts = [
    {
      slug: "airport-transfer-guide",
      title: "The Complete Guide to Stress-Free Airport Transfers",
      category: "Travel"
    },
    {
      slug: "ride-sharing-etiquette", 
      title: "Ride-Sharing Etiquette: A Guide for Passengers and Drivers",
      category: "Etiquette"
    },
    {
      slug: "business-travel-efficiency",
      title: "Maximizing Efficiency in Business Travel", 
      category: "Business"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Back to Blog */}
      <section className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/blog" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b">
              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <article className="lg:col-span-3 prose prose-lg max-w-none">
                <div 
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Related Posts */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Related Articles</h3>
                      <div className="space-y-4">
                        {relatedPosts.map((post) => (
                          <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className="block group"
                          >
                            <div className="p-3 border rounded-lg hover:shadow-md transition-shadow">
                              <span className="text-xs text-primary font-medium">
                                {post.category}
                              </span>
                              <h4 className="text-sm font-medium mt-1 group-hover:text-primary transition-colors">
                                {post.title}
                              </h4>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <Card className="dark-surface text-white">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-lg mb-2">Ready to Travel Safely?</h3>
                      <p className="text-soft text-sm mb-4">
                        Book your next ride with RideEasy for a safe and comfortable journey.
                      </p>
                      <Button asChild className="hero-button w-full">
                        <Link to="/booking">Book Now</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Enjoyed This Article?</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for more travel tips and safety insights.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border"
              />
              <Button className="hero-button px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;