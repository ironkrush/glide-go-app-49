import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, MapPin, Timer } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  // Blog post data - in a real app, this would come from an API or CMS
  const blogPosts = {
    "gujarat-to-mumbai-cab-guide": {
      title: "Complete Guide: Gujarat to Mumbai by Cab",
      author: "Mr Amar Jankar",
      date: "January 15, 2024",
      readTime: "8 min read",
      category: "Travel Guide",
      image: "🚗",
      distance: "525 km",
      duration: "8-10 hours",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 class="text-xl font-semibold mb-3 text-blue-900">🚗 Quick Summary</h3>
            <p class="text-blue-800">The Gujarat to Mumbai route is approximately 525 km and takes 8-10 hours by cab. Our professional drivers ensure a comfortable, safe journey with GPS tracking and 24/7 support.</p>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 border-l-4 border-primary pl-4">🗺️ Best Route from Gujarat to Mumbai</h2>

          <div class="bg-green-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold mb-3 text-green-900">Recommended Route:</h3>
            <p class="font-semibold text-green-800 mb-4">Ahmedabad → Vadodara → Surat → Navsari → Vapi → Thane → Mumbai</p>
            <ul class="space-y-2 text-green-700">
              <li><strong>Distance:</strong> 525 km (Ahmedabad to Mumbai)</li>
              <li><strong>Travel Time:</strong> 8-10 hours (including breaks)</li>
              <li><strong>Best Time to Travel:</strong> Early morning (5-6 AM) or late evening (8-9 PM)</li>
              <li><strong>Toll Cost:</strong> ₹800-1200 (approximate)</li>
            </ul>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 border-l-4 border-primary pl-4">🚙 Why Choose Lankadhish Cab Service?</h2>
          <ul class="space-y-3 text-gray-700">
            <li><strong>Professional Pilots:</strong> Experienced drivers with 5+ years of interstate driving</li>
            <li><strong>GPS Enabled Cabs:</strong> Real-time tracking for family peace of mind</li>
            <li><strong>Safe for Women:</strong> Verified drivers with background checks</li>
            <li><strong>Neat & Clean Cars:</strong> Sanitized vehicles with AC and comfortable seating</li>
            <li><strong>24/7 Service:</strong> Round-the-clock availability for emergencies</li>
            <li><strong>All India Permits:</strong> Legal interstate travel documentation</li>
          </ul>

          <div class="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg text-center">
            <h3 class="text-xl font-bold mb-3">Ready to Book Your Gujarat to Mumbai Cab?</h3>
            <p class="mb-4">Contact Mr Amar Jankar for instant booking and best rates</p>
            <div class="space-y-2">
              <p class="text-lg font-semibold">📞 +91 9157575675 | +91 7567302302</p>
              <p class="text-sm">Available 24/7 | Professional Service | Safe Travel Guaranteed</p>
            </div>
          </div>
        </div>
      `
    },
    "gujarat-to-delhi-road-trip": {
      title: "Gujarat to Delhi: Ultimate Road Trip Guide",
      author: "Mr Amar Jankar",
      date: "January 20, 2024",
      readTime: "12 min read",
      category: "Road Trip",
      image: "🏛️",
      distance: "950 km",
      duration: "12-14 hours",
      content: `
        <div class="space-y-6">
          <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 class="text-xl font-semibold mb-3 text-orange-900">🏛️ Epic Journey Alert</h3>
            <p class="text-orange-800">The Gujarat to Delhi route covers 950km of diverse Indian landscapes, from Gujarat's industrial cities to Rajasthan's royal heritage, ending in India's capital. Perfect for history buffs and culture enthusiasts!</p>
          </div>

          <div class="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg text-center">
            <h3 class="text-xl font-bold mb-3">🚀 Ready for Your Gujarat to Delhi Adventure?</h3>
            <p class="mb-4">Book your epic road trip with India's most trusted cab service</p>
            <div class="space-y-2">
              <p class="text-lg font-semibold">📞 +91 9157575675 | +91 7567302302</p>
              <p class="text-sm">Mr Amar Jankar | Available 24/7 | Professional Service | Memorable Journeys</p>
            </div>
          </div>
        </div>
      `
    }
    // Add more blog posts as needed
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-8 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <Button asChild variant="secondary" className="mb-6">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-4xl">{post.image}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              {post.distance && (
                <>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{post.distance}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Timer className="w-4 h-4" />
                    <span>{post.duration}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;