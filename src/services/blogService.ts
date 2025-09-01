const BLOG_API_URL = import.meta.env.VITE_BLOG_API_URL || 'https://automate.axonflash.com/webhook';

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

interface BlogUploadData {
  title: string;
  content: string;
  image: File;
  keywords: string;
  category: string;
  author?: string;
}

class BlogService {
  // Upload a new blog post (lightweight - sends to n8n webhook)
  async uploadBlog(blogData: BlogUploadData): Promise<BlogPost> {
    try {
      // Create blog post object
      const blogPost: BlogPost = {
        slug: this.generateSlug(blogData.title),
        title: blogData.title,
        content: blogData.content,
        excerpt: this.generateExcerpt(blogData.content),
        author: blogData.author || 'Mr Amar Jankar',
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        readTime: this.calculateReadTime(blogData.content),
        category: blogData.category,
        image: URL.createObjectURL(blogData.image), // Create temporary URL for preview
        keywords: blogData.keywords.split(',').map(k => k.trim()),
        metaDescription: this.generateExcerpt(blogData.content),
        published: true
      };

      // Send to n8n webhook for processing
      const webhookData = {
        type: 'blog_upload',
        blogData: {
          ...blogPost,
          imageFile: blogData.image.name,
          imageSize: blogData.image.size,
          imageType: blogData.image.type
        },
        timestamp: new Date().toISOString(),
        source: 'lankadhish-blog-admin'
      };

      await fetch(`${BLOG_API_URL}/blog-upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });

      return blogPost;
    } catch (error) {
      console.error('Blog upload error:', error);
      throw new Error(`Failed to upload blog: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // Get all blog posts (returns default blogs - lightweight)
  async getAllBlogs(): Promise<BlogPost[]> {
    // Return default blogs for now - can be enhanced later
    return this.getDefaultBlogs();
  }

  // Get a single blog post by slug
  async getBlogBySlug(slug: string): Promise<BlogPost | null> {
    const blogs = this.getDefaultBlogs();
    return blogs.find(blog => blog.slug === slug) || null;
  }

  // Delete a blog post (placeholder - sends to n8n)
  async deleteBlog(slug: string): Promise<boolean> {
    try {
      await fetch(`${BLOG_API_URL}/blog-delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'blog_delete',
          slug,
          timestamp: new Date().toISOString(),
          source: 'lankadhish-blog-admin'
        }),
      });
      return true;
    } catch (error) {
      console.error('Failed to delete blog:', error);
      return false;
    }
  }

  // Generate slug from title
  generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  // Calculate read time based on content
  calculateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  }

  // Generate excerpt from content
  generateExcerpt(content: string, maxLength: number = 150): string {
    const plainText = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
    if (plainText.length <= maxLength) {
      return plainText;
    }
    return plainText.substring(0, maxLength).trim() + '...';
  }

  // Default blogs (fallback when API is not available)
  private getDefaultBlogs(): BlogPost[] {
    return [
      {
        slug: "gujarat-to-mumbai-cab-guide",
        title: "Complete Guide: Gujarat to Mumbai by Cab",
        excerpt: "Discover the best routes, stops, and travel tips for your journey from Gujarat to Mumbai. Professional cab service insights included.",
        content: "Complete travel guide content here...",
        author: "Mr Amar Jankar",
        date: "January 15, 2024",
        readTime: "8 min read",
        category: "Travel Guide",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Mumbai", "cab service", "travel guide"],
        metaDescription: "Complete guide for traveling from Gujarat to Mumbai by cab with professional service.",
        published: true
      },
      {
        slug: "gujarat-to-delhi-road-trip",
        title: "Gujarat to Delhi: Ultimate Road Trip Guide",
        excerpt: "Plan your perfect road trip from Gujarat to Delhi with our comprehensive guide covering routes, attractions, and booking tips.",
        content: "Ultimate road trip guide content here...",
        author: "Mr Amar Jankar",
        date: "January 20, 2024",
        readTime: "12 min read",
        category: "Road Trip",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Delhi", "road trip", "travel"],
        metaDescription: "Ultimate road trip guide from Gujarat to Delhi with best routes and attractions.",
        published: true
      },
      {
        slug: "gujarat-to-goa-coastal-route",
        title: "Best Route from Gujarat to Goa by Cab",
        excerpt: "Explore the scenic coastal route from Gujarat to Goa. Tips for comfortable travel and must-visit stops along the way.",
        content: "Coastal route guide content here...",
        author: "Mr Amar Jankar",
        date: "January 25, 2024",
        readTime: "10 min read",
        category: "Coastal Route",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
        keywords: ["Gujarat to Goa", "coastal route", "beach travel"],
        metaDescription: "Best coastal route from Gujarat to Goa with scenic stops and travel tips.",
        published: true
      }
    ];
  }
}

export const blogService = new BlogService();
export type { BlogPost, BlogUploadData };
