import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";

const AdmissionSection = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Quality Education",
      description: "World-class education with industry-relevant curriculum"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Scholarships Available",
      description: "Merit-based scholarships and financial aid opportunities"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Vibrant Community",
      description: "Join a diverse community of future leaders"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Modern Facilities",
      description: "State-of-the-art learning and research facilities"
    }
  ];

  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-current rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-current rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-current rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-university-gold font-bold text-lg tracking-wide mb-2">
            ADMISSION NOW ON
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            2025/2026 Undergraduate Admission is On-going
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Another opportunity is here again for you to take the next step with Landmark University. 
            Admission is opened for our Undergraduate 2025/2026 Academic Session, take this opportunity 
            of a lifetime to be part of this history makers that will break new grounds and create exploits. 
            There will be aid and scholarship opportunity for intending students as well.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="text-university-gold mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h4 className="font-bold mb-2">{highlight.title}</h4>
                <p className="text-sm text-primary-foreground/80">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ready to Begin Your Journey?</h3>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of students who have chosen Landmark University as their pathway to success. 
              Apply now and be part of our legacy of excellence.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-university-gold hover:bg-university-gold/90 text-university-brown font-bold px-8 py-4 text-lg"
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-university-brown px-8 py-4 text-lg"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;