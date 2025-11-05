import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/nr-logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

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
          <a href="#home" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="NR Media Logo"
              className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
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
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-foreground/80 hover:text-primary font-medium transition-colors duration-300 py-2"
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full bg-gradient-to-r from-primary to-primary/90 mt-4">
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
