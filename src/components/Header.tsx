import { useState, useEffect } from "react";
import { Button } from "./ui/button";

import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we need to scroll on page load (from hash navigation)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Gallery", id: "gallery" },
    { name: "Subscriptions", href: "/pricing" }, // external route
  ];

  const handleNavigation = (e: React.MouseEvent, item: typeof navItems[0]) => {
    e.preventDefault();
    
    if (item.href) {
      // External route - use React Router navigation and scroll to top
      window.scrollTo(0, 0);
      navigate(item.href);
      setIsMenuOpen(false);
    } else if (item.id) {
      // Internal section navigation
      const section = document.getElementById(item.id);
      
      if (section) {
        // Section exists on current page, just scroll to it
        section.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      } else {
        // Section doesn't exist, navigate to home page with hash
        navigate(`/#${item.id}`);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="/#home" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              setTimeout(() => {
                const homeSection = document.getElementById('home');
                if (homeSection) {
                  homeSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img
              src="https://i.ibb.co/rRnbQb89/NRlogo.png"
              alt="NR Media Logo"
              className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href || `/#${item.id}`}
                onClick={(e) => handleNavigation(e, item)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              className="bg-gradient-to-r from-primary to-primary/90 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              onClick={() => {
                window.open(
                  "https://wa.me/918886649499?text=Hi%20I%20am%20interested%20in%20your%20services",
                  "_blank"
                );
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-4 h-0.5 bg-current transition-all duration-300 origin-left ${
                  isMenuOpen ? "rotate-45 translate-x-0.5" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 origin-left ${
                  isMenuOpen ? "-rotate-45 translate-x-0.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="bg-white dark:bg-card shadow-xl rounded-b-2xl mx-4 mb-4 p-6 space-y-2 backdrop-blur-xl border border-border/50">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href || `/#${item.id}`}
                onClick={(e) => handleNavigation(e, item)}
                className="block w-full text-left text-foreground hover:text-primary hover:bg-primary/5 font-medium transition-all duration-300 py-3 px-4 rounded-lg"
                style={{
                  animation: isMenuOpen
                    ? `slideIn 0.3s ease-out ${index * 0.1}s both`
                    : "none",
                }}
              >
                {item.name}
              </a>
            ))}
            <Button
              className="w-full bg-gradient-to-r from-primary to-primary/90 mt-4 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              onClick={() => {
                window.open(
                  "https://wa.me/918886649499?text=Hi%20I%20am%20interested%20in%20your%20services",
                  "_blank"
                );
              }}
            >
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;