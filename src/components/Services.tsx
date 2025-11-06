import { Newspaper, TrendingUp, Share2, Youtube, Video, Mic, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import newsImage from "@/assets/news-content.jpg";
import marketingImage from "@/assets/digital-marketing.jpg";
import socialImage from "@/assets/social-engineering.jpg";
import vipImage from "@/assets/SocialM.png";
import youtubeImage from "@/assets/youtube-support.jpg";
import scriptImage from "@/assets/script-editing.jpg";

const services = [
  {
    icon: Newspaper,
    title: "News & Content Provider",
    description: "Professional news coverage and content creation tailored to your audience needs. We deliver compelling stories that resonate with your target audience.",
    image: newsImage,
    features: ["Breaking News", "Feature Articles", "Content Strategy"]
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that drive engagement and deliver measurable results. From SEO to social media, we've got you covered.",
    image: marketingImage,
    features: ["SEO Optimization", "Social Media", "Analytics"]
  },
  {
    icon: Share2,
    title: "Social Engineering",
    description: "Building authentic connections and managing your brand's social presence effectively. Create meaningful engagement with your community.",
    image: socialImage,
    features: ["Community Building", "Brand Strategy", "Engagement"]
  },
  {
    icon: Youtube,
    title: "VIP Social Platforms",
    description: "Exclusive management of high-profile social media accounts with premium services. White-glove service for influential personalities.",
    image: "https://i.ibb.co/yB5B44Qw/vip.jpg",
    features: ["Account Management", "Reputation", "Growth Strategy"]
  },
  {
    icon: Video,
    title: "YouTube Channel Support",
    description: "End-to-end YouTube channel management, optimization, and growth strategies. Maximize your reach and monetization potential.",
    image: "https://i.ibb.co/QvJc3gzy/YT.png",
    features: ["Channel Growth", "Monetization", "Analytics"]
  },
  {
    icon: Mic,
    title: "Script, Editing & Anchoring",
    description: "Professional scriptwriting, video editing, anchoring, and interview production services. Bringing your stories to life with cinematic quality.",
    image: scriptImage,
    features: ["Scriptwriting", "Video Editing", "Interviews"]
  }
];

const Services = () => {
  return (
    <section id="services" className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Premium Media Services</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Your Success Is Our Goal
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Elevate your brand with our comprehensive suite of professional media and marketing solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-transparent"></div>
                
                <div className="absolute top-6 left-6">
                  <div className="p-3 bg-primary rounded-xl shadow-lg">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 group-hover:bg-primary/10 transition-all duration-700"></div>
            </Card>
          ))}
        </div>

        {/* <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-glow)] hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
