import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { toast } from "sonner";
import nrLogo from "@/assets/nr-logo.jpeg";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing!");
      setEmail("");
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{ backgroundColor: "#E42320" }} // Matches NR Media logo red
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 group">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-white/10 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={nrLogo}
                alt="NR Media Logo"
                className="relative h-16 w-auto object-contain bg-white/5 p-2 rounded hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-2 -right-2 rounded pointer-events-none animate-pulse" />
            </div>
            <p className="text-sm leading-relaxed text-white/90">
              NR Media is your trusted source for digital news and media content.
              We deliver accurate, timely, and engaging stories that matter to you.
            </p>
            <div className="pt-2 relative">
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-full" />
              <p className="font-bold text-sm pl-4 animate-pulse">Your Success Is Our Goal</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 relative inline-block group">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </h3>
            <ul className="space-y-3 mt-6">
  {[
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Subscriptions", href: "pricing" },
  ].map(({ name, href }, idx) => (
    <li key={name} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
      <a
        href={href}
        className="text-sm hover:text-gray-200 transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
      >
        <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300" />
        {name}
      </a>
    </li>
  ))}
</ul>

          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 relative inline-block group">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </h3>
            <ul className="space-y-3 mt-6">
              {[
                "Digital Marketing",
                "Content Creation",
                "Social Media",
                "News Coverage",
                "Video Production",
                
              ].map((service, idx) => (
                <li key={service} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <a
                    href="#"
                    className="text-sm hover:text-gray-200 transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 relative inline-block group">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </h3>
            <div className="space-y-4 mt-6">
              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:+918886649499"
                  className="flex items-start gap-3 text-sm hover:text-gray-200 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone className="w-4 h-4 flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all" />
                  </div>
                  <span className="pt-1">+91 8886649499</span>
                </a>
                <a
                  href="mailto:nrmediagroup@gmail.com"
                  className="flex items-start gap-3 text-sm hover:text-gray-200 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail className="w-4 h-4 flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all" />
                  </div>
                  <span className="pt-1">nrmediagroup@gmail.com</span>
                </a>
                <div className="flex items-start gap-3 text-sm group">
                  <div className="w-9 h-9 rounded-lg  flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                  </div>
                  <span className="pt-1">8-3-673, Madhuban Apartments, Flat No:402, 4th Floor, Sri Nagar Colony, Yellareddy Guda, Hyd - 500075.</span>
                </div>
              </div>

              {/* Newsletter */}
              {/* <div className="pt-4">
                <h4 className="font-semibold text-sm mb-3">Subscribe to Newsletter</h4>
                <form onSubmit={handleSubscribe} className="flex gap-2 group">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/20 border-white/20 text-white placeholder:text-gray-200/70 focus-visible:ring-white focus-visible:ring-2 transition-all"
                    required
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="bg-white text-[#E42320] hover:bg-gray-100 hover:scale-110 transition-all duration-300 flex-shrink-0 shadow-lg hover:shadow-white/50"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom Bar */}
      <div className="relative container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-center md:text-left">
            © {currentYear} NR Media. All rights reserved. StaffArc
             
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm hidden sm:inline">Follow us:</span>
            <div className="flex gap-3">
              {[
                // { icon: Facebook, label: "Facebook", href: "#" },
                // { icon: Twitter, label: "Twitter", href: "#" },
                // { icon: Instagram, label: "Instagram", href: "#" },
                // { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Youtube, label: "YouTube", href: "http://www.youtube.com/@nrmedianews" },
              ].map(({ icon: Icon, label, href }, idx) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#E42320] transition-all duration-300 flex items-center justify-center group hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-white/50 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-all" />
                </a>
              ))}
            </div>
          </div>
          

          {/* Legal Links */}
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-gray-200 transition-colors">
              Privacy Policy
            </a>
            <span className="opacity-70">|</span>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
