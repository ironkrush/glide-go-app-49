// Simple blog service with static data
interface BlogPost {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  keywords: string[];
  metaDescription: string;
  published: boolean;
  distance?: string;
  duration?: string;
}

class BlogService {
  // Get all blog posts (15 blogs with content)
  async getAllBlogs(): Promise<BlogPost[]> {
    return this.getStaticBlogs();
  }

  // Get a single blog post by slug
  async getBlogBySlug(slug: string): Promise<BlogPost | null> {
    const blogs = this.getStaticBlogs();
    return blogs.find(blog => blog.slug === slug) || null;
  }

  // Static blog data (15 blogs with full content)
  private getStaticBlogs(): BlogPost[] {
    return [
      {
        slug: "gujarat-to-mumbai-cab-guide",
        title: "Complete Guide: Gujarat to Mumbai by Cab",
        content: `<h2>Your Ultimate Journey from Gujarat to Mumbai</h2>
        <p>Traveling from Gujarat to Mumbai by cab offers an incredible experience through diverse landscapes, vibrant cities, and cultural heritage. This comprehensive guide covers everything you need to know for a comfortable and memorable journey.</p>

        <h3>Best Routes and Travel Time</h3>
        <p>The most popular route covers approximately 525 kilometers and takes 8-10 hours depending on traffic and stops. The journey takes you through major cities like Vadodara, Bharuch, and Surat before reaching Mumbai.</p>

        <h3>What to Expect</h3>
        <p>Professional drivers, GPS-enabled vehicles, and 24/7 customer support ensure your safety and comfort throughout the journey. Our fleet includes sedans, SUVs, and luxury vehicles to match your preferences and budget.</p>

        <h3>Booking Tips</h3>
        <p>Book in advance for better rates, especially during festival seasons. Consider overnight stays in Surat for a more relaxed journey, and don't forget to carry necessary documents for interstate travel.</p>`,
        excerpt: "Discover the best routes, stops, and travel tips for your journey from Gujarat to Mumbai. Professional cab service insights included.",
        author: "Mr Amar Jankar",
        date: "January 15, 2024",
        readTime: "8 min read",
        category: "Travel Guide",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Mumbai", "cab service", "travel guide"],
        metaDescription: "Complete guide for traveling from Gujarat to Mumbai by cab with professional service.",
        published: true,
        distance: "525 km",
        duration: "8-10 hours"
      },
      {
        slug: "gujarat-to-delhi-road-trip",
        title: "Gujarat to Delhi: Ultimate Road Trip Guide",
        content: `<h2>Epic Road Trip from Gujarat to Delhi</h2>
        <p>Embark on an unforgettable road trip from Gujarat to Delhi, covering 950 kilometers of diverse Indian landscapes. This journey takes you through Rajasthan's royal heritage and into the heart of India's capital.</p>

        <h3>Route Highlights</h3>
        <p>The journey passes through Udaipur, Ajmer, and Jaipur, offering glimpses of magnificent palaces, ancient forts, and vibrant markets. Each city tells a unique story of India's rich cultural heritage.</p>

        <h3>Travel Comfort</h3>
        <p>Our experienced drivers are familiar with highway conditions and can recommend the best stops for meals and rest. Air-conditioned vehicles ensure comfort during the 12-14 hour journey.</p>

        <h3>Planning Your Trip</h3>
        <p>Consider breaking the journey into two days with an overnight stay in Udaipur or Jaipur. This allows you to explore these beautiful cities and makes the travel more enjoyable and less tiring.</p>`,
        excerpt: "Plan your perfect road trip from Gujarat to Delhi with our comprehensive guide covering routes, attractions, and booking tips.",
        author: "Mr Amar Jankar",
        date: "January 20, 2024",
        readTime: "12 min read",
        category: "Road Trip",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Delhi", "road trip", "travel"],
        metaDescription: "Ultimate road trip guide from Gujarat to Delhi with best routes and attractions.",
        published: true,
        distance: "950 km",
        duration: "12-14 hours"
      },
      {
        slug: "gujarat-to-goa-coastal-route",
        title: "Best Route from Gujarat to Goa by Cab",
        content: `<h2>Coastal Paradise: Gujarat to Goa</h2>
        <p>Experience the scenic coastal route from Gujarat to Goa, a journey that transforms from industrial landscapes to pristine beaches. This 600-kilometer adventure offers breathtaking views of the Arabian Sea.</p>

        <h3>Scenic Highlights</h3>
        <p>The route takes you through Mumbai, Pune, and the Western Ghats before reaching Goa's golden beaches. Stop at viewpoints in the Sahyadri mountains for spectacular photography opportunities.</p>

        <h3>Beach Destinations</h3>
        <p>From North Goa's vibrant nightlife to South Goa's serene beaches, our drivers can recommend the best areas based on your preferences. Whether you seek adventure or relaxation, Goa has something for everyone.</p>

        <h3>Travel Tips</h3>
        <p>The monsoon season (June-September) offers lush green landscapes but requires careful driving. Winter months provide the best weather for this coastal journey with clear skies and pleasant temperatures.</p>`,
        excerpt: "Explore the scenic coastal route from Gujarat to Goa. Tips for comfortable travel and must-visit stops along the way.",
        author: "Mr Amar Jankar",
        date: "January 25, 2024",
        readTime: "10 min read",
        category: "Coastal Route",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Goa", "coastal route", "beach travel"],
        metaDescription: "Best coastal route from Gujarat to Goa with scenic stops and travel tips.",
        published: true,
        distance: "600 km",
        duration: "10-12 hours"
      },
      {
        slug: "gujarat-to-bangalore-tech-hub",
        title: "Gujarat to Bangalore: Tech Hub Journey",
        content: `<h2>Journey to India's Silicon Valley</h2>
        <p>Travel from Gujarat to Bangalore, India's technology capital, covering 1200 kilometers through diverse landscapes. This journey takes you from Gujarat's industrial heritage to Karnataka's tech innovation hub.</p>

        <h3>Business Travel Excellence</h3>
        <p>Our premium vehicles and professional drivers cater specifically to business travelers. Enjoy Wi-Fi connectivity, comfortable seating, and punctual service that respects your valuable time.</p>

        <h3>Route and Stops</h3>
        <p>The journey passes through Maharashtra, Goa, and Karnataka, offering opportunities to experience different cultures and cuisines. Strategic stops ensure comfort during the 16-18 hour journey.</p>

        <h3>Tech City Arrival</h3>
        <p>Upon reaching Bangalore, our drivers can guide you to major tech parks, hotels, and business districts. We understand the importance of seamless connectivity for business travelers.</p>`,
        excerpt: "Professional cab service from Gujarat to India's Silicon Valley. Best routes, tech stops, and business travel tips for IT professionals.",
        author: "Mr Amar Jankar",
        date: "February 1, 2024",
        readTime: "11 min read",
        category: "Business Travel",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Bangalore", "business travel", "tech hub"],
        metaDescription: "Professional cab service from Gujarat to Bangalore with business travel insights.",
        published: true,
        distance: "1200 km",
        duration: "16-18 hours"
      },
      {
        slug: "gujarat-to-rajasthan-heritage-tour",
        title: "Gujarat to Rajasthan: Royal Heritage Tour",
        content: `<h2>Royal Rajasthan Awaits</h2>
        <p>Discover the royal heritage of Rajasthan with our comfortable cab service from Gujarat. This 400-kilometer journey takes you through magnificent palaces, ancient forts, and vibrant cultural traditions.</p>

        <h3>Palace Tours</h3>
        <p>Visit iconic destinations like Udaipur's City Palace, Jaipur's Amber Fort, and Jodhpur's Mehrangarh Fort. Our knowledgeable drivers can recommend the best times to visit and local guides for enhanced experiences.</p>

        <h3>Cultural Immersion</h3>
        <p>Experience Rajasthani hospitality, traditional cuisine, and folk performances. The journey itself becomes part of your cultural exploration as you travel through desert landscapes and historic towns.</p>

        <h3>Photography Opportunities</h3>
        <p>Capture stunning architecture, colorful markets, and desert sunsets. Our flexible scheduling allows for photography stops and exploration of hidden gems along the route.</p>`,
        excerpt: "Experience the royal heritage of Rajasthan with our detailed travel guide from Gujarat. Explore palaces, forts, and cultural treasures.",
        author: "Mr Amar Jankar",
        date: "February 5, 2024",
        readTime: "9 min read",
        category: "Heritage Tour",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Rajasthan", "heritage tour", "royal palaces"],
        metaDescription: "Explore Rajasthan's royal heritage with our comprehensive travel guide from Gujarat.",
        published: true,
        distance: "400 km",
        duration: "6-8 hours"
      },
      {
        slug: "gujarat-to-agra-taj-mahal-express",
        title: "Gujarat to Agra: Taj Mahal Express Journey",
        content: `<h2>Journey to the Wonder of the World</h2>
        <p>Visit the iconic Taj Mahal from Gujarat with our comfortable cab service. This 650-kilometer journey takes you to one of the world's most beautiful monuments, combining history, architecture, and romance.</p>

        <h3>Taj Mahal Experience</h3>
        <p>Plan your visit during sunrise or sunset for the most magical experience. Our drivers know the best viewing spots and can arrange early morning or late evening visits for optimal photography and fewer crowds.</p>

        <h3>Agra Fort and More</h3>
        <p>Explore Agra Fort, Mehtab Bagh, and local markets famous for marble inlay work and leather goods. A full day in Agra allows you to experience the complete Mughal heritage.</p>

        <h3>Photography Tips</h3>
        <p>Capture the Taj Mahal's changing colors throughout the day. Our flexible itinerary accommodates photography enthusiasts with multiple viewing sessions and professional guidance.</p>`,
        excerpt: "Visit the iconic Taj Mahal from Gujarat. Best routes, photography tips, and heritage tour planning for the wonder of the world.",
        author: "Mr Amar Jankar",
        date: "February 10, 2024",
        readTime: "7 min read",
        category: "Heritage Tour",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Agra", "Taj Mahal", "heritage tour"],
        metaDescription: "Complete guide for visiting Taj Mahal from Gujarat with professional cab service.",
        published: true,
        distance: "650 km",
        duration: "10-12 hours"
      },
      {
        slug: "gujarat-to-kerala-backwaters",
        title: "Gujarat to Kerala: Backwaters Paradise",
        content: `<h2>God's Own Country Awaits</h2>
        <p>Discover Kerala's natural beauty with our comprehensive travel service from Gujarat. This 1100-kilometer journey takes you from Gujarat's industrial landscape to Kerala's serene backwaters and lush greenery.</p>

        <h3>Backwater Cruises</h3>
        <p>Experience the famous Kerala backwaters in Alleppey and Kumarakom. Our service includes coordination with houseboat operators for an authentic backwater experience with traditional Kerala cuisine.</p>

        <h3>Hill Stations</h3>
        <p>Visit Munnar's tea plantations, Thekkady's spice gardens, and Wayanad's wildlife sanctuaries. Each destination offers unique experiences from adventure activities to peaceful retreats.</p>

        <h3>Cultural Experiences</h3>
        <p>Witness Kathakali performances, visit ancient temples, and enjoy Ayurvedic treatments. Kerala's rich cultural heritage provides a perfect blend of relaxation and exploration.</p>`,
        excerpt: "Discover God's Own Country with our comprehensive travel guide from Gujarat to Kerala. Backwaters, beaches, and cultural experiences.",
        author: "Mr Amar Jankar",
        date: "February 15, 2024",
        readTime: "13 min read",
        category: "Nature Tour",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Kerala", "backwaters", "nature tour"],
        metaDescription: "Explore Kerala's natural beauty with our detailed travel guide from Gujarat.",
        published: true,
        distance: "1100 km",
        duration: "14-16 hours"
      },
      {
        slug: "gujarat-to-himachal-mountain-adventure",
        title: "Gujarat to Himachal: Mountain Adventure",
        content: `<h2>Himalayan Adventure Awaits</h2>
        <p>Experience the majestic Himalayas with our travel service from Gujarat to Himachal Pradesh. This 800-kilometer journey takes you from sea level to mountain peaks, offering breathtaking views and adventure opportunities.</p>

        <h3>Hill Station Tours</h3>
        <p>Visit Shimla, Manali, Dharamshala, and Dalhousie. Each destination offers unique experiences from colonial architecture to Tibetan culture, adventure sports to peaceful retreats.</p>

        <h3>Adventure Activities</h3>
        <p>Enjoy paragliding in Bir Billing, river rafting in Kullu, trekking in Kasol, and skiing in Solang Valley. Our drivers can coordinate with local adventure operators for safe and exciting experiences.</p>

        <h3>Mountain Safety</h3>
        <p>Our experienced drivers are familiar with mountain roads and weather conditions. We ensure safe travel with regular vehicle maintenance and emergency preparedness for high-altitude journeys.</p>`,
        excerpt: "Experience the majestic Himalayas with our travel guide from Gujarat to Himachal Pradesh. Hill stations, adventure sports, and scenic routes.",
        author: "Mr Amar Jankar",
        date: "February 20, 2024",
        readTime: "14 min read",
        category: "Adventure Tour",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Himachal", "mountain adventure", "hill stations"],
        metaDescription: "Adventure travel guide from Gujarat to Himachal Pradesh with scenic mountain routes.",
        published: true,
        distance: "800 km",
        duration: "12-14 hours"
      },
      {
        slug: "gujarat-to-kashmir-paradise-on-earth",
        title: "Gujarat to Kashmir: Paradise on Earth",
        content: `<h2>Journey to Paradise</h2>
        <p>Travel to the crown jewel of India with our comprehensive service from Gujarat to Kashmir. This 1300-kilometer journey takes you to breathtaking landscapes, pristine lakes, and snow-capped mountains.</p>

        <h3>Dal Lake Experience</h3>
        <p>Stay in traditional houseboats on Dal Lake, enjoy Shikara rides, and visit floating gardens. Our service includes coordination with local operators for authentic Kashmiri experiences.</p>

        <h3>Scenic Beauty</h3>
        <p>Visit Gulmarg for skiing and gondola rides, Pahalgam for river rafting and trekking, and Sonamarg for glacier views. Each destination offers unique natural beauty and adventure opportunities.</p>

        <h3>Cultural Heritage</h3>
        <p>Explore Mughal gardens, ancient temples, and local markets famous for saffron, dry fruits, and handicrafts. Experience the warm hospitality of Kashmiri people despite the cold climate.</p>`,
        excerpt: "Journey to the crown jewel of India with our comprehensive guide from Gujarat to Kashmir. Dal Lake, gardens, and breathtaking landscapes.",
        author: "Mr Amar Jankar",
        date: "February 25, 2024",
        readTime: "15 min read",
        category: "Scenic Tour",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Kashmir", "paradise", "scenic tour"],
        metaDescription: "Complete travel guide from Gujarat to Kashmir with scenic routes and travel tips.",
        published: true,
        distance: "1300 km",
        duration: "18-20 hours"
      },
      {
        slug: "gujarat-to-pune-business-corridor",
        title: "Gujarat to Pune: Business Corridor Express",
        content: `<h2>Business Travel Made Easy</h2>
        <p>Connect Gujarat's industrial hub with Pune's automotive and IT sector. This 450-kilometer business corridor offers excellent connectivity for corporate travelers and business meetings.</p>

        <h3>Corporate Services</h3>
        <p>Our executive vehicles come equipped with Wi-Fi, charging ports, and comfortable seating for productive travel. Professional drivers ensure punctual arrivals for important business meetings.</p>

        <h3>Industrial Tours</h3>
        <p>Visit major automotive plants, IT parks, and manufacturing units. Our drivers are familiar with industrial areas and can navigate efficiently to various business locations.</p>

        <h3>Time Management</h3>
        <p>Flexible scheduling accommodates business requirements with early morning departures and late evening returns. Same-day return trips are possible for urgent business needs.</p>`,
        excerpt: "Professional business travel service connecting Gujarat's industrial hub with Pune's automotive and IT corridor.",
        author: "Mr Amar Jankar",
        date: "March 1, 2024",
        readTime: "6 min read",
        category: "Business Travel",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Pune", "business travel", "corporate"],
        metaDescription: "Professional business travel service from Gujarat to Pune with executive amenities.",
        published: true,
        distance: "450 km",
        duration: "7-8 hours"
      },
      {
        slug: "gujarat-to-hyderabad-tech-city",
        title: "Gujarat to Hyderabad: Tech City Connection",
        content: `<h2>Connecting Innovation Hubs</h2>
        <p>Travel from Gujarat to Hyderabad, connecting two major technology and business centers. This 900-kilometer journey links industrial Gujarat with Hyderabad's IT excellence.</p>

        <h3>Technology Corridor</h3>
        <p>Visit HITEC City, Gachibowli, and other major IT hubs. Our service caters to tech professionals with comfortable vehicles and reliable connectivity for business travel.</p>

        <h3>Cultural Blend</h3>
        <p>Experience the rich Nizami culture, famous biryani, and historic monuments like Charminar and Golconda Fort. The journey offers a perfect blend of business and cultural exploration.</p>

        <h3>Efficient Travel</h3>
        <p>Strategic route planning ensures minimal travel time while maximizing comfort. Our drivers are familiar with Hyderabad's traffic patterns and business districts.</p>`,
        excerpt: "Connect Gujarat's industrial strength with Hyderabad's IT excellence. Professional travel service for tech professionals and business travelers.",
        author: "Mr Amar Jankar",
        date: "March 5, 2024",
        readTime: "8 min read",
        category: "Business Travel",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Hyderabad", "tech city", "IT travel"],
        metaDescription: "Professional travel service connecting Gujarat with Hyderabad's technology corridor.",
        published: true,
        distance: "900 km",
        duration: "13-15 hours"
      },
      {
        slug: "gujarat-to-chennai-south-india-gateway",
        title: "Gujarat to Chennai: South India Gateway",
        content: `<h2>Gateway to South India</h2>
        <p>Journey from Gujarat to Chennai, the gateway to South India. This 1400-kilometer trip takes you through diverse landscapes, cultures, and culinary traditions of peninsular India.</p>

        <h3>Cultural Transition</h3>
        <p>Experience the transition from North to South Indian culture, languages, and traditions. Our multilingual drivers help bridge communication gaps and enhance cultural understanding.</p>

        <h3>Marina Beach and More</h3>
        <p>Visit Marina Beach, ancient temples, and modern IT parks. Chennai offers a perfect blend of traditional Tamil culture and modern metropolitan lifestyle.</p>

        <h3>Culinary Journey</h3>
        <p>Taste authentic South Indian cuisine including dosas, idlis, and filter coffee. Our drivers can recommend the best local restaurants for authentic culinary experiences.</p>`,
        excerpt: "Journey to South India's gateway city Chennai from Gujarat. Experience diverse cultures, traditions, and culinary delights.",
        author: "Mr Amar Jankar",
        date: "March 10, 2024",
        readTime: "11 min read",
        category: "Cultural Tour",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Chennai", "South India", "cultural tour"],
        metaDescription: "Cultural journey from Gujarat to Chennai with insights into South Indian traditions.",
        published: true,
        distance: "1400 km",
        duration: "20-22 hours"
      },
      {
        slug: "gujarat-to-kolkata-cultural-capital",
        title: "Gujarat to Kolkata: Cultural Capital Journey",
        content: `<h2>Journey to the Cultural Capital</h2>
        <p>Travel from Gujarat to Kolkata, India's cultural capital. This 1200-kilometer journey takes you through the heartland of India to the city of joy, literature, and artistic heritage.</p>

        <h3>Literary Heritage</h3>
        <p>Visit the birthplace of Rabindranath Tagore, explore College Street book market, and experience the rich literary tradition. Kolkata's intellectual atmosphere is unmatched in India.</p>

        <h3>Art and Culture</h3>
        <p>Experience Bengali culture through traditional music, dance, theater, and festivals. Visit museums, art galleries, and cultural centers that showcase Bengal's rich heritage.</p>

        <h3>Culinary Delights</h3>
        <p>Taste authentic Bengali cuisine including fish curry, sweets like rasgulla and sandesh, and street food. Our drivers know the best local eateries for authentic experiences.</p>`,
        excerpt: "Explore India's cultural capital Kolkata from Gujarat. Rich literary heritage, art, culture, and authentic Bengali experiences.",
        author: "Mr Amar Jankar",
        date: "March 15, 2024",
        readTime: "10 min read",
        category: "Cultural Tour",
        image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Kolkata", "cultural capital", "Bengali culture"],
        metaDescription: "Cultural journey from Gujarat to Kolkata exploring Bengali heritage and traditions.",
        published: true,
        distance: "1200 km",
        duration: "18-20 hours"
      },
      {
        slug: "gujarat-to-jaipur-pink-city-express",
        title: "Gujarat to Jaipur: Pink City Express",
        content: `<h2>Royal Pink City Awaits</h2>
        <p>Journey from Gujarat to Jaipur, the magnificent Pink City of Rajasthan. This 350-kilometer trip takes you to the heart of royal Rajasthan with its palaces, forts, and vibrant culture.</p>

        <h3>Architectural Marvels</h3>
        <p>Visit Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar. Each monument tells stories of royal grandeur and architectural brilliance of the Rajput era.</p>

        <h3>Shopping Paradise</h3>
        <p>Explore Johari Bazaar for jewelry, Bapu Bazaar for textiles, and local markets for handicrafts. Jaipur is famous for precious stones, textiles, and traditional crafts.</p>

        <h3>Royal Cuisine</h3>
        <p>Taste authentic Rajasthani cuisine including dal baati churma, gatte ki sabzi, and traditional sweets. Experience royal dining in heritage hotels and local restaurants.</p>`,
        excerpt: "Explore the magnificent Pink City Jaipur from Gujarat. Royal palaces, vibrant markets, and authentic Rajasthani culture.",
        author: "Mr Amar Jankar",
        date: "March 20, 2024",
        readTime: "7 min read",
        category: "Heritage Tour",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Jaipur", "Pink City", "Rajasthan heritage"],
        metaDescription: "Heritage tour from Gujarat to Jaipur exploring royal palaces and Rajasthani culture.",
        published: true,
        distance: "350 km",
        duration: "5-6 hours"
      },
      {
        slug: "gujarat-to-udaipur-city-of-lakes",
        title: "Gujarat to Udaipur: City of Lakes",
        content: `<h2>Venice of the East</h2>
        <p>Travel from Gujarat to Udaipur, the romantic City of Lakes. This 300-kilometer journey takes you to one of India's most beautiful cities with stunning palaces, serene lakes, and royal heritage.</p>

        <h3>Lake Palace Experience</h3>
        <p>Visit the famous Lake Palace, City Palace, and enjoy boat rides on Lake Pichola. Udaipur's romantic ambiance makes it perfect for honeymoons and special occasions.</p>

        <h3>Sunset Views</h3>
        <p>Experience magical sunsets from Sajjangarh Palace and lakeside restaurants. The city offers numerous viewpoints for spectacular photography and romantic moments.</p>

        <h3>Royal Heritage</h3>
        <p>Explore the rich Mewar dynasty history through palaces, museums, and cultural performances. Stay in heritage hotels for an authentic royal experience.</p>`,
        excerpt: "Discover the romantic City of Lakes Udaipur from Gujarat. Stunning palaces, serene lakes, and unforgettable royal experiences.",
        author: "Mr Amar Jankar",
        date: "March 25, 2024",
        readTime: "9 min read",
        category: "Heritage Tour",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Udaipur", "City of Lakes", "romantic destination"],
        metaDescription: "Romantic journey from Gujarat to Udaipur exploring lakes, palaces, and royal heritage.",
        published: true,
        distance: "300 km",
        duration: "4-5 hours"
      }
    ];
  }
}

export const blogService = new BlogService();
export type { BlogPost };
