import { Zap, Target, TrendingUp, Award, Users, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Choose = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const reasons = [
    {
      icon: Zap,
      title: "Lightning-Fast Delivery",
      description: "We deliver high-quality digital solutions at unprecedented speed without compromising excellence.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Data-driven strategies that reach your ideal audience and convert viewers into loyal customers.",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: TrendingUp,
      title: "Proven Growth Results",
      description: "Track record of 300% average ROI increase for our clients across all digital channels.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Award,
      title: "Award-Winning Creativity",
      description: "Industry-recognized team crafting campaigns that capture attention and drive engagement.",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Users,
      title: "Dedicated Support Team",
      description: "24/7 access to your personal account manager and expert support whenever you need it.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Sparkles,
      title: "Cutting-Edge Technology",
      description: "Latest AI-powered tools and platforms to keep your brand ahead of the competition.",
      gradient: "from-accent/20 to-accent/5"
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.reason-item');
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observerRef.current?.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Decorative geometric elements matching logo */}
      <div className="absolute top-0 left-0 w-64 h-64 border-t-4 border-l-4 border-primary opacity-20 -translate-x-12 -translate-y-12 hidden lg:block" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-b-4 border-r-4 border-primary opacity-20 translate-x-12 translate-y-12 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 relative">
            <span className="relative inline-block">
              Your Success Is
              <div className="absolute -top-2 -left-4 w-12 h-1 bg-primary" />
            </span>
            <br />
            <span className="text-primary">Our Goal</span>
            <div className="absolute -bottom-2 right-0 w-24 h-1 bg-primary hidden sm:block" />
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with NR Media and experience the difference that true digital expertise makes
          </p>
        </div>

        {/* Dynamic Alternating Layout */}
        <div className="space-y-10 lg:space-y-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isEven = index % 2 === 0;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`reason-item relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : `opacity-0 ${isEven ? '-translate-x-32' : 'translate-x-32'}`
                } ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Connecting Line */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                
                {/* Icon Side */}
                <div className={`relative flex-shrink-0 transition-all duration-700 ${isVisible ? 'scale-100 rotate-0' : 'scale-50 rotate-180'}`}>
                  <div className="relative group">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all duration-500" />
                    
                    {/* Main icon container */}
                    <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1 group-hover:scale-110 transition-all duration-500">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center border-2 border-primary/30 group-hover:border-primary transition-colors duration-300">
                        <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Corner brackets */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`flex-1 relative group transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  {/* Background accent */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} rounded-xl transform transition-all duration-500 ${isEven ? 'group-hover:translate-x-2 group-hover:-translate-y-2' : 'group-hover:-translate-x-2 group-hover:-translate-y-2'}`} />
                  
                  {/* Main content card */}
                  <div className="relative bg-card rounded-xl p-6 lg:p-7 border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_40px_rgba(230,57,70,0.2)]">
                    {/* Number indicator */}
                    <div className={`absolute -top-4 ${isEven ? '-left-4' : '-right-4'} w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-base shadow-lg`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                    
                    {/* Decorative line */}
                    <div className={`absolute bottom-0 ${isEven ? 'left-0' : 'right-0'} h-1 bg-primary w-0 group-hover:w-full transition-all duration-700`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in relative">
          <div className="inline-block relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-lg transform rotate-1" />
            <div className="relative bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-10 py-6 rounded-lg shadow-[0_0_30px_rgba(230,57,70,0.3)] hover:shadow-[0_0_50px_rgba(230,57,70,0.4)] transition-all duration-300 hover:scale-105 cursor-pointer group">
              <p className="text-2xl font-bold mb-2">Ready to Transform Your Digital Presence?</p>
              <p className="text-lg opacity-90 group-hover:opacity-100 transition-opacity">
                Let's create something amazing together
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Choose;
