import Navbar from "../components/navbar";
import Footer from "../footer";
import { getAllPosts } from "./lib/mdx";
import { arimaFont, robotoFont, righteousFont } from "../fonts";
import Link from "next/link";
import {
  Clock,
  Calendar,
  User,
  TrendingUp,
  Bookmark,
  Share2,
  Heart,
  MessageCircle,
  Search,
  Filter,
  Tag,
  ArrowRight,
  Sparkles,
  Globe,
  Coffee,
  Zap,
  Star,
  Award,
  BookOpen,
  PenTool,
  Eye,
  ThumbsUp,
} from "lucide-react";

// Helper function to process posts and add missing fields
const processPost = (post: any) => {
  return {
    slug: post.slug,
    title: post.title || "Untitled Post",
    description: post.description || post.excerpt || "No description available",
    date: post.date || new Date().toISOString().split('T')[0],
    readTime: post.readTime || "5 min read",
    author: post.author || "CGS Team",
    category: post.category || "Technology",
    tags: post.tags || ["Blog"],
    featured: post.featured || false,
    image: post.image || "/api/placeholder/800/400",
    likes: post.likes || Math.floor(Math.random() * 200) + 50,
    comments: post.comments || Math.floor(Math.random() * 50) + 5,
    views: post.views || Math.floor(Math.random() * 5000) + 500
  };
};

export default async function Blog() {
  // Get posts from MDX files
  const rawPosts = getAllPosts();
  const posts = rawPosts.map(processPost);
  
  // Create some categories based on the posts
  const categories = ["All", ...Array.from(new Set(posts.map(post => post.category)))];
  
  // Mark some posts as featured (first 2 posts)
  const processedPosts = posts.map((post, index) => ({
    ...post,
    featured: index < 2
  }));

  const featuredPosts = processedPosts.filter(post => post.featured);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 ${righteousFont.className}`}>
              <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-white bg-clip-text text-transparent">
                CGS Blog
              </span>
            </h1>
            <p className={`text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed ${robotoFont.className}`}>
              Discover insights, tutorials, and stories from the world of
              computer graphics, web development, and cutting-edge technology.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">{processedPosts.length}</div>
                <div className="text-sm text-gray-500">Articles</div>
              </div>
              <div className="w-px h-8 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">15k+</div>
                <div className="text-sm text-gray-500">Readers</div>
              </div>
              <div className="w-px h-8 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">{categories.length - 1}</div>
                <div className="text-sm text-gray-500">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="py-16 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <Star className="w-6 h-6 text-pink-400" />
              <h2 className={`text-3xl md:text-4xl font-bold text-white ${righteousFont.className}`}>
                Featured Articles
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
                >
                  <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-500/20 text-pink-300 border border-pink-500/30">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                      <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-pink-400 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-pink-400 transition-colors">
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-sm font-medium border border-pink-500/20">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium">
                            {post.author}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {post.date}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-pink-400" />
              <h2
                className={`text-3xl md:text-4xl font-bold text-white ${righteousFont.className}`}
              >
                All Articles
              </h2>
            </div>

            <div className="text-gray-400">
              {filteredPosts.length} article
              {filteredPosts.length !== 1 ? "s" : ""}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/10"
              >
                <div className="aspect-video bg-gradient-to-br from-pink-500/10 to-purple-500/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-pink-300 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex gap-1">
                    <button className="p-1.5 bg-black/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-pink-400 transition-colors">
                      <Heart className="w-3 h-3" />
                    </button>
                    <button className="p-1.5 bg-black/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-pink-400 transition-colors">
                      <Share2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {post.views.toLocaleString()}
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-pink-300 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-gray-400 mb-4 text-sm line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs hover:bg-pink-500/10 hover:text-pink-400 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">
                          {post.author}
                        </div>
                        <div className="text-gray-400 text-xs">{post.date}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3" />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        {post.comments}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-800"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-white mb-4 ${righteousFont.className}`}
            >
              Stay Updated
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get the latest articles, tutorials, and insights delivered
              straight to your inbox. Join our community of developers and
              designers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/25">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
