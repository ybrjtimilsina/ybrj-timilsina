import React, { useState } from 'react';
import { Play, BookOpen, Youtube, Mail, Menu, X } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Replace these with actual YouTube video IDs and info
  const videos = [
    {
      id: 1,
      title: "Introduction to Algebra",
      thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=450&fit=crop",
      videoId: "dQw4w9WgXcQ",
      category: "Mathematics",
      views: "12K"
    },
    {
      id: 2,
      title: "Physics: Newton's Laws Explained",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=450&fit=crop",
      videoId: "dQw4w9WgXcQ",
      category: "Physics",
      views: "8.5K"
    },
    {
      id: 3,
      title: "Essay Writing Masterclass",
      thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=450&fit=crop",
      videoId: "dQw4w9WgXcQ",
      category: "Writing",
      views: "15K"
    },
    {
      id: 4,
      title: "Chemistry Basics: The Periodic Table",
      thumbnail: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&h=450&fit=crop",
      videoId: "dQw4w9WgXcQ",
      category: "Chemistry",
      views: "9.2K"
    },
    {
      id: 5,
      title: "Study Tips for Exam Success",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=450&fit=crop",
      videoId: "dQw4w9WgXcQ",
      category: "Study Skills",
      views: "22K"
    },
    {
      id: 6,
      title: "Calculus Made Simple",
      thumbnail: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&h=450&fit=crop",
      videoId: "dQw4w9WgXcQ",
      category: "Mathematics",
      views: "11K"
    }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">
              <BookOpen className="logo-icon" />
              <span className="logo-text">YubaTeaches</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="desktop-menu">
              <a href="#videos" className="nav-link">Videos</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#contact" className="nav-link">Contact</a>
              <a 
                href="https://youtube.com/@yubateaches" 
                target="_blank"
                rel="noopener noreferrer"
                className="subscribe-btn"
              >
                <Youtube className="btn-icon" />
                <span>Subscribe</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="mobile-menu">
              <a href="#videos" className="mobile-link">Videos</a>
              <a href="#about" className="mobile-link">About</a>
              <a href="#contact" className="mobile-link">Contact</a>
              <a 
                href="https://youtube.com/@yubateaches" 
                target="_blank"
                rel="noopener noreferrer"
                className="subscribe-btn"
              >
                <Youtube className="btn-icon" />
                <span>Subscribe</span>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-container">
          <h1 className="hero-title">
            Learn. Grow. <span className="hero-gradient">Succeed.</span>
          </h1>
          <p className="hero-subtitle">
            Master complex topics with clear, engaging video tutorials designed to help you excel in your studies.
          </p>
          <div className="hero-buttons">
            <a href="#videos" className="btn-primary">
              Explore Videos
            </a>
            <a 
              href="https://youtube.com/@yubateaches"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit Channel
            </a>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div id="videos" className="videos-section">
        <h2 className="section-title">Latest Tutorials</h2>
        <div className="video-grid">
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="video-card"
            >
              <div className="video-thumbnail-wrapper">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="video-thumbnail"
                />
                <div className="video-overlay">
                  <div className="play-button">
                    <Play className="play-icon" />
                  </div>
                </div>
                <div className="video-category">
                  {video.category}
                </div>
              </div>
              <div className="video-info">
                <h3 className="video-title">
                  {video.title}
                </h3>
                <p className="video-views">{video.views} views</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="about-section">
        <div className="about-container">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            Hi! I'm a passionate educator dedicated to making learning accessible and enjoyable. With years of teaching experience, 
            I create videos that break down complex concepts into digestible, easy-to-understand lessons. My goal is to help 
            students not just pass their exams, but truly understand and appreciate the subjects they're studying.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Subscribers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">200+</div>
              <div className="stat-label">Videos</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5M+</div>
              <div className="stat-label">Views</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-text">
          Have questions or suggestions? I'd love to hear from you!
        </p>
        <a 
          href="mailto:contact@yubateaches.com"
          className="contact-btn"
        >
          <Mail className="btn-icon" />
          <span>Send Email</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 YubaTeaches. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}