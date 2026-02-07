import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Edit2, 
  Trash2, 
  Eye, 
  Calendar, 
  User, 
  Tag, 
  ChevronRight,
  Plus,
  TrendingUp,
  BarChart3,
  Clock
} from 'lucide-react';

const BlogManage = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Optimizing Member Workout Schedules',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      views: 1245,
      status: 'published',
      category: 'Member Management',
      tags: ['workout', 'schedule', 'optimization'],
      excerpt: 'Learn how to effectively manage peak hours and create optimal workout schedules for all members.',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Advanced Gym Equipment Maintenance Guide',
      author: 'Mike Chen',
      date: '2024-01-10',
      views: 892,
      status: 'published',
      category: 'Equipment',
      tags: ['maintenance', 'equipment', 'safety'],
      excerpt: 'Complete guide to maintaining gym equipment for longevity and member safety.',
      readTime: '8 min'
    },
    {
      id: 3,
      title: 'Member Retention Strategies 2024',
      author: 'Emma Davis',
      date: '2024-01-05',
      views: 1567,
      status: 'draft',
      category: 'Business',
      tags: ['retention', 'strategy', 'growth'],
      excerpt: 'Proven strategies to increase member retention and reduce churn rates.',
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'Digital Transformation for Fitness Centers',
      author: 'Alex Rivera',
      date: '2023-12-28',
      views: 2103,
      status: 'published',
      category: 'Technology',
      tags: ['digital', 'software', 'automation'],
      excerpt: 'How gym management software can transform your fitness business operations.',
      readTime: '7 min'
    },
    {
      id: 5,
      title: 'Nutrition Planning Integration',
      author: 'Dr. James Wilson',
      date: '2023-12-20',
      views: 987,
      status: 'scheduled',
      category: 'Wellness',
      tags: ['nutrition', 'health', 'planning'],
      excerpt: 'Integrating nutrition planning with workout routines for complete member wellness.',
      readTime: '9 min'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [suggestedKeywords, setSuggestedKeywords] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);

  const categories = ['all', 'Member Management', 'Equipment', 'Business', 'Technology', 'Wellness'];
  const statuses = ['all', 'published', 'draft', 'scheduled'];
  const popularTags = ['workout', 'nutrition', 'management', 'software', 'fitness', 'health', 'business'];

  // Filter blogs based on search and filters
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = searchTerm === '' || 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || blog.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Generate keyword suggestions
  useEffect(() => {
    if (searchTerm.length > 2) {
      const suggestions = popularTags
        .filter(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, 5);
      setSuggestedKeywords(suggestions);
    } else {
      setSuggestedKeywords([]);
    }
  }, [searchTerm]);

  // Get status color
  const getStatusColor = (status) => {
    switch(status) {
      case 'published': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'scheduled': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Get status icon
  const getStatusIcon = (status) => {
    switch(status) {
      case 'published': return <Eye size={14} />;
      case 'draft': return <Edit2 size={14} />;
      case 'scheduled': return <Clock size={14} />;
      default: return null;
    }
  };

  // Handle keyword click
  const handleKeywordClick = (keyword) => {
    setSearchTerm(keyword);
  };

  // Handle tag filter
  const handleTagFilter = (tag) => {
    if (!activeFilters.includes(tag)) {
      setActiveFilters([...activeFilters, tag]);
    }
  };

  // Remove filter
  const removeFilter = (filterToRemove) => {
    setActiveFilters(activeFilters.filter(f => f !== filterToRemove));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Management</h1>
          <p className="text-gray-600">Manage and organize your fitness center's blog content</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Posts</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <BarChart3 className="text-blue-600" size={24} />
            </div>
          </div>
          <div className="bg-white border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Published</p>
                <p className="text-2xl font-bold text-gray-900">18</p>
              </div>
              <Eye className="text-green-600" size={24} />
            </div>
          </div>
          <div className="bg-white border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-gray-900">45.2K</p>
              </div>
              <TrendingUp className="text-purple-600" size={24} />
            </div>
          </div>
          <div className="bg-white border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Drafts</p>
                <p className="text-2xl font-bold text-gray-900">6</p>
              </div>
              <Edit2 className="text-yellow-600" size={24} />
            </div>
          </div>
        </div>

        {/* Search and Filters Section */}
        <div className="bg-white border border-gray-200 p-6 mb-8">
          {/* Search Bar with Suggestions */}
          <div className="relative mb-6">
            <div className="flex items-center">
              <Search className="absolute left-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search blog posts by title, content, or tags..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="ml-3 px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700">
                Search
              </button>
            </div>
            
            {/* Suggestions Dropdown */}
            {suggestedKeywords.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 shadow-lg">
                <div className="p-3 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-700">Suggested Keywords:</p>
                </div>
                {suggestedKeywords.map((keyword, index) => (
                  <button
                    key={index}
                    onClick={() => handleKeywordClick(keyword)}
                    className="w-full text-left px-4 py-2 hover:bg-blue-50 flex items-center"
                  >
                    <ChevronRight size={16} className="text-blue-600 mr-2" />
                    <span className="text-gray-700">{keyword}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Filter Chips */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Quick Filters:</p>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => handleTagFilter(tag)}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-sm"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Active Filters:</p>
              <div className="flex flex-wrap gap-2">
                {activeFilters.map((filter, index) => (
                  <div
                    key={index}
                    className="flex items-center px-3 py-1.5 bg-blue-100 text-blue-800 text-sm"
                  >
                    <span>#{filter}</span>
                    <button
                      onClick={() => removeFilter(filter)}
                      className="ml-2 text-blue-800 hover:text-blue-900"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Filter Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                className="w-full border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                className="w-full border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                {statuses.map((status, index) => (
                  <option key={index} value={status}>
                    {status === 'all' ? 'All Statuses' : status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium">
                <Filter size={16} className="inline mr-2" />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-gray-600">
              Showing <span className="font-bold">{filteredBlogs.length}</span> of <span className="font-bold">{blogs.length}</span> posts
            </p>
          </div>
          <button className="px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 flex items-center">
            <Plus size={20} className="mr-2" />
            New Blog Post
          </button>
        </div>

        {/* Blog Posts Table */}
        <div className="bg-white border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-6 font-semibold text-gray-700">Title</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-700">Category</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-700">Views</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-700">Date</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBlogs.map((blog) => (
                  <tr key={blog.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">{blog.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{blog.excerpt}</p>
                        <div className="flex items-center mt-2">
                          <User size={14} className="text-gray-400 mr-1" />
                          <span className="text-xs text-gray-500 mr-3">{blog.author}</span>
                          <Clock size={14} className="text-gray-400 mr-1" />
                          <span className="text-xs text-gray-500">{blog.readTime} read</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm">
                        {blog.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className={`inline-flex items-center px-3 py-1 text-sm ${getStatusColor(blog.status)}`}>
                        {getStatusIcon(blog.status)}
                        <span className="ml-1 capitalize">{blog.status}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <Eye size={16} className="text-gray-400 mr-1" />
                        <span className="font-medium">{blog.views.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <Calendar size={16} className="text-gray-400 mr-1" />
                        <span>{blog.date}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50">
                          <Eye size={18} />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50">
                          <Edit2 size={18} />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <Search size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No blog posts found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>

        {/* Popular Tags Section */}
        <div className="mt-8 bg-white border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Tag size={20} className="mr-2 text-blue-600" />
            Popular Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag, index) => (
              <button
                key={index}
                onClick={() => handleKeywordClick(tag)}
                className="px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogManage;