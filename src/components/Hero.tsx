import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import servicesBg from "@/assets/services-bg.jpg";

const Hero = () => {
  const services = [
    {
      icon: Sparkles,
      title: "News & Content",
      description: "Premium content creation and distribution",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic campaigns that drive results",
    },
    {
      icon: Zap,
      title: "Social Engineering",
      description: "Innovative social media strategies",
    },
    {
      icon: Users,
      title: "VIP Platform Management",
      description: "Elite social media handling",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
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
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-primary/5 transition-all duration-300"
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

          {/* Services Grid with Background */}
          <div className="relative animate-fade-in-delayed">
            {/* Background Image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-10">
              <img
                src={servicesBg}
                alt="Services background"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group p-5 md:p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 hover:bg-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
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
