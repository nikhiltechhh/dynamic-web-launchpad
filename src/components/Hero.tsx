import { ArrowRight, Sparkles, Megaphone, Star, Globe } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import serviceContent from "@/assets/service-content.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceVip from "@/assets/SocialM.png";

const Hero = () => {
  const services = [
    {
      image: serviceContent,
      title: "Content Creation",
      description: "Professional media production",
      tag: "Creative",
    },
    {
      image: serviceMarketing,
      title: "Digital Strategy",
      description: "Data-driven marketing solutions",
      tag: "Growth",
    },
    {
      image: serviceSocial,
      title: "Social Media",
      description: "Engaging platform management",
      tag: "Engagement",
    },
    {
      image: serviceVip,
      title: "Premium Services",
      description: "Elite brand solutions",
      tag: "Exclusive",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 "
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Digital workspace"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      {/* Geometric Shapes */}
      <div className="absolute top-20 right-10 w-48 h-48 md:w-72 md:h-72 border-4 border-primary/10 rounded-lg rotate-12 animate-float hidden sm:block" />
      <div className="absolute bottom-20 left-10 w-64 h-64 md:w-96 md:h-96 border-4 border-primary/10 rounded-lg -rotate-6 animate-float-delayed hidden sm:block" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                Your Success Is Our Goal
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transform Your
              <span className="block text-primary mt-2">Digital Presence</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Elevate your brand with cutting-edge digital media solutions. From content creation to VIP platform management, we deliver excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
  size="lg"
  className="bg-gradient-to-r from-primary to-primary/90 hover:shadow-[var(--shadow-glow)] transition-all duration-300 group"
  onClick={() => {
    window.open(
      "https://wa.me/+918886649499?text=Hi%20I%20am%20interested%20in%20your%20services",
      "_blank"
    );
  }}
>
  Get Started
  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
</Button>

              <Button
  size="lg"
  variant="outline"
  className="border-2 hover:bg-primary/5 transition-all duration-300"
  onClick={() => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  View Our Work
</Button>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-border/50">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">200+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Clients</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">98%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Services Grid with Images */}
          <div className="relative animate-fade-in-delayed">
            {/* Floating Gradient Orbs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Floating Icons */}
            <div className="absolute top-0 right-0 opacity-10 animate-float hidden md:block">
              <Megaphone className="w-16 h-16 text-primary" />
            </div>
            <div className="absolute bottom-10 left-5 opacity-10 animate-float-delayed hidden md:block">
              <Globe className="w-20 h-20 text-primary" />
            </div>
            <div className="absolute top-1/2 -right-10 opacity-10 animate-float hidden lg:block" style={{ animationDelay: '0.5s' }}>
              <Star className="w-12 h-12 text-primary" />
            </div>
            
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
                    
                    {/* Tag */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
                        {service.tag}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  {/* <div className="p-5 md:p-6 relative">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div> */}
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
