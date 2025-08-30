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
    },
    "gujarat-to-goa-coastal-route": {
      title: "Best Route from Gujarat to Goa by Cab",
      author: "Mr Amar Jankar",
      date: "January 25, 2024",
      readTime: "10 min read",
      category: "Coastal Route",
      image: "🏖️",
      distance: "600 km",
      duration: "10-12 hours",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 class="text-xl font-semibold mb-3 text-blue-900">🏖️ Coastal Paradise</h3>
            <p class="text-blue-800">Experience the scenic coastal route from Gujarat to Goa covering 600km of beautiful landscapes, beaches, and cultural heritage. Perfect for leisure travelers and beach lovers.</p>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 border-l-4 border-primary pl-4">🗺️ Best Coastal Route</h2>

          <div class="bg-green-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold mb-3 text-green-900">Recommended Route:</h3>
            <p class="font-semibold text-green-800 mb-4">Ahmedabad → Surat → Mumbai → Pune → Goa</p>
            <ul class="space-y-2 text-green-700">
              <li><strong>Distance:</strong> 600 km</li>
              <li><strong>Travel Time:</strong> 10-12 hours</li>
              <li><strong>Best Season:</strong> October to March</li>
              <li><strong>Scenic Highlights:</strong> Western Ghats, coastal views</li>
            </ul>
          </div>

          <div class="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg text-center">
            <h3 class="text-xl font-bold mb-3">🏖️ Ready for Your Goa Beach Trip?</h3>
            <p class="mb-4">Book your coastal journey with professional drivers</p>
            <div class="space-y-2">
              <p class="text-lg font-semibold">📞 +91 9157575675 | +91 7567302302</p>
              <p class="text-sm">Mr Amar Jankar | Coastal Route Specialist</p>
            </div>
          </div>
        </div>
      `
    },
    "gujarat-to-bangalore-silicon-valley": {
      title: "Gujarat to Bangalore: Silicon Valley Route",
      author: "Mr Amar Jankar",
      date: "January 30, 2024",
      readTime: "11 min read",
      category: "Business Travel",
      image: "💻",
      distance: "1200 km",
      duration: "16-18 hours",
      content: `
        <div class="space-y-6">
          <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 class="text-xl font-semibold mb-3 text-purple-900">💻 Tech Hub Journey</h3>
            <p class="text-purple-800">Professional cab service from Gujarat to India's Silicon Valley. Perfect for business travelers, IT professionals, and tech entrepreneurs.</p>
          </div>

          <div class="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg text-center">
            <h3 class="text-xl font-bold mb-3">💻 Ready for Your Silicon Valley Journey?</h3>
            <p class="mb-4">Professional business travel to India's tech capital</p>
            <div class="space-y-2">
              <p class="text-lg font-semibold">📞 +91 9157575675 | +91 7567302302</p>
              <p class="text-sm">Mr Amar Jankar | Business Travel Expert</p>
            </div>
          </div>
        </div>
      `
    },
    "gujarat-to-agra-taj-mahal": {
      title: "Gujarat to Agra: Taj Mahal Express",
      author: "Mr Amar Jankar",
      date: "February 1, 2024",
      readTime: "9 min read",
      category: "Heritage Tour",
      image: "🕌",
      distance: "650 km",
      duration: "10-12 hours",
      content: `
        <div class="space-y-6">
          <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 class="text-xl font-semibold mb-3 text-orange-900">🕌 Heritage Journey</h3>
            <p class="text-orange-800">Visit the iconic Taj Mahal from Gujarat. Experience the wonder of the world with our comfortable cab service and expert guidance.</p>
          </div>

          <div class="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg text-center">
            <h3 class="text-xl font-bold mb-3">🕌 Ready for Your Taj Mahal Visit?</h3>
            <p class="mb-4">Experience the wonder of the world with comfort</p>
            <div class="space-y-2">
              <p class="text-lg font-semibold">📞 +91 9157575675 | +91 7567302302</p>
              <p class="text-sm">Mr Amar Jankar | Heritage Tour Specialist</p>
            </div>
          </div>
        </div>
      `
    },
    "gujarat-to-rajasthan-desert-adventure": {
      title: "Gujarat to Rajasthan: Desert Adventure Guide",
      author: "Mr Amar Jankar",
      date: "February 5, 2024",
      readTime: "7 min read",
      category: "Cultural Tour",
      image: "🏰",
      distance: "400 km",
      duration: "6-8 hours",
      content: `
        <div class="space-y-6">
          <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 class="text-xl font-semibold mb-3 text-yellow-900">🏰 Royal Heritage</h3>
            <p class="text-yellow-800">Experience the royal heritage of Rajasthan with our detailed travel guide from Gujarat. Explore palaces, forts, and desert culture.</p>
          </div>

          <div class="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg text-center">
            <h3 class="text-xl font-bold mb-3">🏰 Ready for Your Royal Adventure?</h3>
            <p class="mb-4">Explore the land of kings and queens</p>
            <div class="space-y-2">
              <p class="text-lg font-semibold">📞 +91 9157575675 | +91 7567302302</p>
              <p class="text-sm">Mr Amar Jankar | Royal Heritage Guide</p>
            </div>
          </div>
        </div>
      `
    },
    "best-cab-service-gujarat-2024": {
      title: "Best Cab Service in Gujarat 2024",
      author: "Mr Amar Jankar",
      date: "March 15, 2024",
      readTime: "10 min read",
      category: "Service Guide",
      image: "🏆",
      distance: "All Gujarat",
      duration: "24/7 Service",
      content: `
        <div class="space-y-6">
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 class="text-xl font-semibold mb-3 text-green-900">🏆 #1 Rated Service</h3>
            <p class="text-green-800">Discover why Lankadhish is Gujarat's most trusted cab service. Professional drivers, modern fleet, and 24/7 availability across all Gujarat cities.</p>
          </div>

          <div class="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg text-center">
            <h3 class="text-xl font-bold mb-3">🏆 Book Gujarat's #1 Cab Service!</h3>
            <p class="mb-4">Experience the best cab service in Gujarat</p>
            <div class="space-y-2">
              <p class="text-lg font-semibold">📞 +91 9157575675 | +91 7567302302</p>
              <p class="text-sm">Mr Amar Jankar | Gujarat's Most Trusted Service</p>
            </div>
          </div>
        </div>
      `
    },
    "ahmedabad-airport-taxi-service": {
      title: "Ahmedabad Airport Taxi Service",
      author: "Mr Amar Jankar",
      date: "March 20, 2024",
      readTime: "8 min read",
      category: "Airport Service",
      image: "✈️",
      distance: "25 km",
      duration: "45 mins",
      content: `
        <div class="space-y-6">
          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 class="text-xl font-semibold mb-3 text-blue-900">✈️ Airport Specialist</h3>
            <p class="text-blue-800">24/7 Ahmedabad Airport taxi service with flight tracking, professional drivers, and fixed rates. Best airport transfers in Gujarat.</p>
          </div>

          <div class="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg text-center">
            <h3 class="text-xl font-bold mb-3">✈️ Book Your Airport Transfer!</h3>
            <p class="mb-4">Reliable AMD airport taxi service</p>
            <div class="space-y-2">
              <p class="text-lg font-semibold">📞 +91 9157575675 | +91 7567302302</p>
              <p class="text-sm">Mr Amar Jankar | Airport Transfer Expert</p>
            </div>
          </div>
        </div>
      `
    },
    "surat-to-mumbai-cab-service": {
      title: "Surat to Mumbai Cab Service",
      author: "Mr Amar Jankar",
      date: "March 25, 2024",
      readTime: "9 min read",
      category: "Business Travel",
      image: "💎",
      distance: "284 km",
      duration: "5-6 hours",
      content: `
        <div class="space-y-6">
          <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 class="text-xl font-semibold mb-3 text-purple-900">💎 Diamond City to Financial Capital</h3>
            <p class="text-purple-800">Professional cab service from Surat to Mumbai. Perfect for business travelers, diamond merchants, and textile industry professionals.</p>
          </div>

          <div class="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg text-center">
            <h3 class="text-xl font-bold mb-3">💎 Book Your Business Journey!</h3>
            <p class="mb-4">Diamond City to Financial Capital express</p>
            <div class="space-y-2">
              <p class="text-lg font-semibold">📞 +91 9157575675 | +91 7567302302</p>
              <p class="text-sm">Mr Amar Jankar | Business Travel Specialist</p>
            </div>
          </div>
        </div>
      `
    }
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