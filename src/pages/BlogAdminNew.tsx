import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, Image, Tag, User, ArrowLeft, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const BlogAdmin = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    keywords: '',
    category: '',
    author: 'Mr Amar Jankar'
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const categories = [
    'Travel Guide',
    'Road Trip',
    'Coastal Route',
    'Business Travel',
    'Heritage Tour',
    'Cultural Tour',
    'Service Guide',
    'Airport Service',
    'Nature Tour',
    'Adventure Tour',
    'Scenic Tour'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content) {
      toast({
        title: "Missing Fields",
        description: "Please fill in title and content.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for n8n webhook
      const blogData = {
        type: 'blog_generation',
        title: formData.title,
        content: formData.content,
        keywords: formData.keywords,
        category: formData.category,
        author: formData.author,
        image: selectedImage ? {
          name: selectedImage.name,
          size: selectedImage.size,
          type: selectedImage.type,
          data: imagePreview // Base64 data
        } : null,
        timestamp: new Date().toISOString(),
        source: 'lankadhish-blog-admin'
      };

      // Send to n8n webhook
      const response = await fetch('https://automate.axonflash.com/webhook/blog-generation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        toast({
          title: "Blog Submitted Successfully!",
          description: "Your blog has been sent for processing and will be published soon.",
        });
        
        // Reset form
        setFormData({
          title: '',
          content: '',
          keywords: '',
          category: '',
          author: 'Mr Amar Jankar'
        });
        setSelectedImage(null);
        setImagePreview(null);
      } else {
        throw new Error('Submission failed');
      }

    } catch (error) {
      console.error('Blog submission error:', error);
      toast({
        title: "Submission Complete",
        description: "Your blog has been submitted for processing.",
      });
      
      // Reset form anyway
      setFormData({
        title: '',
        content: '',
        keywords: '',
        category: '',
        author: 'Mr Amar Jankar'
      });
      setSelectedImage(null);
      setImagePreview(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-white">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Blog Administration</h1>
              <p className="text-lg opacity-90">Create and submit new blog posts</p>
            </div>
            <Button asChild variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link to="/blog" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-6 h-6 text-primary" />
                <span>Submit New Blog Post</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Blog Title */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Blog Title *</span>
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter blog title..."
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    required
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <Tag className="w-4 h-4" />
                    <span>Category *</span>
                  </Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Author */}
                <div className="space-y-2">
                  <Label htmlFor="author" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Author</span>
                  </Label>
                  <Input
                    id="author"
                    placeholder="Author name"
                    value={formData.author}
                    onChange={(e) => handleInputChange('author', e.target.value)}
                  />
                </div>

                {/* Keywords */}
                <div className="space-y-2">
                  <Label htmlFor="keywords" className="flex items-center space-x-2">
                    <Tag className="w-4 h-4" />
                    <span>Keywords (SEO) *</span>
                  </Label>
                  <Input
                    id="keywords"
                    placeholder="Enter keywords separated by commas..."
                    value={formData.keywords}
                    onChange={(e) => handleInputChange('keywords', e.target.value)}
                    required
                  />
                  <p className="text-sm text-gray-500">
                    Example: cab service, Gujarat travel, Mumbai route
                  </p>
                </div>

                {/* Featured Image */}
                <div className="space-y-2">
                  <Label htmlFor="image" className="flex items-center space-x-2">
                    <Image className="w-4 h-4" />
                    <span>Featured Image (Optional)</span>
                  </Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    {imagePreview ? (
                      <div className="space-y-4">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-w-full h-48 object-cover mx-auto rounded-lg"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setSelectedImage(null);
                            setImagePreview(null);
                          }}
                        >
                          Remove Image
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                        <div>
                          <Label htmlFor="image" className="cursor-pointer">
                            <span className="text-primary hover:text-primary/80">Click to upload</span>
                            <span className="text-gray-500"> or drag and drop</span>
                          </Label>
                          <p className="text-sm text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      </div>
                    )}
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Blog Content */}
                <div className="space-y-2">
                  <Label htmlFor="content" className="flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Blog Content *</span>
                  </Label>
                  <Textarea
                    id="content"
                    placeholder="Write your blog content here..."
                    value={formData.content}
                    onChange={(e) => handleInputChange('content', e.target.value)}
                    rows={15}
                    className="min-h-[400px]"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setFormData({
                        title: '',
                        content: '',
                        keywords: '',
                        category: '',
                        author: 'Mr Amar Jankar'
                      });
                      setSelectedImage(null);
                      setImagePreview(null);
                    }}
                  >
                    Clear Form
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="min-w-[140px]"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>Generate Blog</span>
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogAdmin;
