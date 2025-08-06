import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      icon: <GraduationCap className="w-12 h-12 text-university-gold" />,
      title: "Under Graduate",
      description: "Learn more about Graduate Programmes and see all available programmes and requirements",
      ctaText: "See Programmes",
      ctaVariant: "default" as const
    },
    {
      icon: <BookOpen className="w-12 h-12 text-university-brown" />,
      title: "Post Graduate",
      description: "LMU Post Graduate offers some of the best Post Programmes. Achieve your dreams by applying",
      ctaText: "See Programmes",
      ctaVariant: "secondary" as const
    },
    {
      icon: <Award className="w-12 h-12 text-university-green" />,
      title: "Certificate Programmes",
      description: "Learn more about Certificate Programmes and see all available programmes and requirements",
      ctaText: "More Information",
      ctaVariant: "outline" as const
    }
  ];

  return (
    <section className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-university-brown mb-4">
            DISCOVER LMU PROGRAMMES
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of undergraduate, postgraduate, and certificate programmes 
            designed to prepare you for success in your chosen field.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-0 shadow-warm"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-university-brown mb-4">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                <Button
                  variant={program.ctaVariant}
                  className="w-full group-hover:scale-105 transition-transform"
                >
                  {program.ctaText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-university-brown hover:bg-deep-brown text-primary-foreground px-8 py-4"
          >
            View All Programmes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;