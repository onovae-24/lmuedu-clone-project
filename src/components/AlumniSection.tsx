import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Trophy, Heart } from "lucide-react";
import graduation from "@/assets/graduation.jpg";

const AlumniSection = () => {
  const achievements = [
    {
      icon: <Users className="w-8 h-8 text-university-gold" />,
      title: "Global Network",
      description: "Alumni across continents making impact"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-university-green" />,
      title: "Industry Leaders",
      description: "CEOs and business leaders in major corporations"
    },
    {
      icon: <Trophy className="w-8 h-8 text-university-brown" />,
      title: "Innovators",
      description: "Creating solutions and breakthrough technologies"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Community",
      description: "Supporting each other's growth and success"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-university-gold font-bold text-lg tracking-wide">
                ALUMNI
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-university-brown">
                LMU ALUMNI
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With almost 2 decades of running on the vision of Breaking New Grounds, 
                Landmark University has been privileged to produce a community of innovators, 
                business leaders, politicians, Christian leaders and more importantly feeders of 
                Africa as the vision demands.
              </p>
              <p>
                Not only is the community thriving with news of exploits almost everyday but we 
                have created a community of helpers and lifters to ensure every members of the 
                Alumni community is doing well for his/her self and the world around.
              </p>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-warm transition-all duration-300 border-0 bg-warm-beige"
                >
                  <CardContent className="p-4 text-center">
                    <div className="mb-3 flex justify-center">
                      {achievement.icon}
                    </div>
                    <h4 className="font-bold text-university-brown mb-1 text-sm">
                      {achievement.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-university-green hover:bg-university-green/90 text-primary-foreground px-8 py-4"
            >
              Visit LMU Alumni Website
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img
                src={graduation}
                alt="LMU Alumni"
                className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-university-brown/40 to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-2">Success Stories</h4>
                  <p className="text-sm opacity-90">
                    Our alumni are making waves across various industries, 
                    from technology and healthcare to agriculture and business.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-university-gold/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-university-green/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;