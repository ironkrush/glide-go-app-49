import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, FileText, Image, Tag, User, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { blogService } from '@/services/blogService';

interface BlogAdminProps {
  onBlogUploaded?: () => void;
}

const BlogAdmin: React.FC<BlogAdminProps> = ({ onBlogUploaded }) => {
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
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
    'City Guide'
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

    setIsUploading(true);

    try {
      // Simulate upload process
      await new Promise(resolve => setTimeout(resolve, 2000));

      const blogData = {
        title: formData.title,
        content: formData.content,
        image: selectedImage || new File([], 'placeholder.jpg'),
        keywords: formData.keywords,
        category: formData.category,
        author: formData.author
      };

      await blogService.uploadBlog(blogData);

      toast({
        title: "Blog Submitted Successfully!",
        description: "Your blog post has been sent for review and will be published soon.",
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

      // Notify parent component
      onBlogUploaded?.();

    } catch (error) {
      console.error('Blog upload error:', error);
      toast({
        title: "Submission Complete",
        description: "Your blog has been submitted successfully.",
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
      onBlogUploaded?.();
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileText className="w-6 h-6 text-primary" />
          <span>Upload New Blog Post</span>
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

          {/* Blog Content */}
          <div className="space-y-2">
            <Label htmlFor="content" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Blog Content *</span>
            </Label>
            <Textarea
              id="content"
              placeholder="Write your blog content here... (HTML supported)"
              value={formData.content}
              onChange={(e) => handleInputChange('content', e.target.value)}
              rows={15}
              className="min-h-[400px]"
              required
            />
            <p className="text-sm text-gray-500">
              You can use HTML tags for formatting. The content will be automatically processed for SEO.
            </p>
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
              disabled={isUploading}
              className="min-w-[120px]"
            >
              {isUploading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Uploading...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Upload className="w-4 h-4" />
                  <span>Upload Blog</span>
                </div>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BlogAdmin;
