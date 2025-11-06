import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";


const PricingCard = ({
  title,
  badge,
  price,
  period,
  features,
  isPopular,
  onSubscribe,
}: {
  title: string;
  badge: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  onSubscribe: () => void;
}) => {
  return (
    <Card 
      className={`group relative overflow-hidden bg-card border-2 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 ${
        isPopular 
          ? "border-primary shadow-[0_10px_40px_-10px_hsl(0_84%_55%/0.3)] hover:shadow-[0_20px_60px_-15px_hsl(0_84%_55%/0.4)]" 
          : "border-border hover:border-primary/30 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_-10px_hsl(0_84%_55%/0.15)]"
      }`}
    >
      {/* Popular ribbon */}
      {isPopular && (
        <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
          <div className="absolute top-6 right-[-35px] w-40 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-xs font-bold py-1 text-center rotate-45 shadow-lg">
            POPULAR
          </div>
        </div>
      )}

      <div className="p-6 md:p-8 relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              {title}
            </h3>
            <Badge 
              variant={badge === "Popular" ? "default" : "secondary"}
              className={`${
                badge === "Popular" 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : badge === "premium"
                  ? "bg-gradient-to-r from-primary/90 to-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground"
              } font-semibold px-3 py-1`}
            >
              {badge}
            </Badge>
          </div>
        </div>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-transparent">
              {price}
            </span>
            <span className="text-muted-foreground text-lg">/ {period}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-start gap-3 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-primary font-bold" strokeWidth={3} />
              </div>
              <span className="text-sm md:text-base text-foreground/80 leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button 
          onClick={onSubscribe}
          className={`w-full font-bold text-base md:text-lg py-6 md:py-7 transition-all duration-300 ${
            isPopular
              ? "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl"
              : "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg"
          } transform hover:scale-[1.02]`}
        >
          Subscribe {title}
        </Button>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  );
};

export const SubscriptionPage = () => {
  const handleSubscribe = (planName: string, price: string, features: string[]) => {
    const message = `Hello! I'm interested in the *${planName}* plan (${price}/month).%0A%0A*Features I'm interested in:*%0A${features.map(f => `• ${f}`).join('%0A')}%0A%0APlease provide me with more details about this subscription.`;
    
    // Replace with actual WhatsApp number
    const whatsappNumber = "+918886649499"; // Update this with the actual business number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const plans = [
    {
      title: "Starter",
      badge: "basic",
      price: "₹25,000",
      period: "month",
      features: [
        "12 posts • 5 reels • 2 blogs",
        "Basic SEO • 1 platform SMM",
        "1-page landing site • Monthly analytics",
        "Email support • Basic BD insights",
      ],
      isPopular: false,
    },
    {
      title: "Professional",
      badge: "Popular",
      price: "₹50,000",
      period: "month",
      features: [
        "25 posts • 10 reels • 4 blogs",
        "Advanced SEO • 2 platforms SMM • Ads mgmt",
        "3-page site • Bi-weekly reviews",
        "Priority support • Lead-gen & CRM basics",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      badge: "premium",
      price: "₹90,000",
      period: "month",
      features: [
        "50 posts • 20 reels • 6 blogs",
        "Full SEO • 4 platforms SMM • Advanced Ads",
        "7-page pro site • Weekly strategy",
        "24/7 support • Global lead-gen • Full CRM",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/[0.02] to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Logo */}
          

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-4 animate-fade-in mt-10">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
              Choose Your Growth Plan
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tailored digital marketing solutions customized for your brand's growth and long-term success
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 md:mt-12 text-sm md:text-base text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1s' }} />
              <span>Dedicated Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 md:py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={plan.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
              >
                <PricingCard
                  title={plan.title}
                  badge={plan.badge}
                  price={plan.price}
                  period={plan.period}
                  features={plan.features}
                  isPopular={plan.isPopular}
                  onSubscribe={() =>
                    handleSubscribe(plan.title, plan.price, plan.features)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 md:py-16 border-t border-border/50 relative z-10 bg-gradient-to-b from-transparent to-primary/[0.02]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
              <p className="text-sm md:text-base font-medium text-primary">
                🎯 All plans include dedicated account management and regular performance reports
              </p>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              Join hundreds of businesses growing with NR Media's expert digital marketing services
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
