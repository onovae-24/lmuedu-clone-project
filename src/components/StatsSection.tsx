import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import graduation from "@/assets/graduation.jpg";

const StatsSection = () => {
  const [counts, setCounts] = useState({
    graduates: 0,
    foreignStudents: 0,
    scholarships: 0,
    programmes: 0
  });

  const finalCounts = {
    graduates: 5557,
    foreignStudents: 33,
    scholarships: 200,
    programmes: 26
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    const timers = Object.keys(finalCounts).map((key) => {
      const increment = finalCounts[key as keyof typeof finalCounts] / steps;
      let currentStep = 0;

      return setInterval(() => {
        currentStep++;
        setCounts(prev => ({
          ...prev,
          [key]: Math.min(
            Math.floor(increment * currentStep),
            finalCounts[key as keyof typeof finalCounts]
          )
        }));

        if (currentStep >= steps) {
          clearInterval(timers[Object.keys(finalCounts).indexOf(key)]);
        }
      }, stepTime);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  const stats = [
    {
      number: counts.graduates.toLocaleString(),
      label: "Graduated Students",
      icon: "🎓"
    },
    {
      number: counts.foreignStudents.toString(),
      label: "Foreign Students",
      icon: "🌍"
    },
    {
      number: counts.scholarships.toString(),
      label: "Scholarships Issued",
      icon: "💰"
    },
    {
      number: counts.programmes.toString(),
      label: "Programmes",
      icon: "📚"
    }
  ];

  return (
    <section className="py-20 bg-university-brown relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${graduation})` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-university-gold font-bold text-lg tracking-wide mb-2">
            STATS
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            OUR STATS PROVES IT ALL
          </h2>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            At Landmark University, we invest specially in our approach, mentoring and teaching culture 
            in ensuring we produce the bests and our alumni circle can give you the evidence
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-university-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-university-gold/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-university-gold/10 rounded-full"></div>
    </section>
  );
};

export default StatsSection;