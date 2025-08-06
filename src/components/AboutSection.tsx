import { Button } from "@/components/ui/button";
import studentsStudying from "@/assets/students-studying.jpg";

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-university-gold font-bold text-lg tracking-wide">
                BREAKING NEW GROUNDS
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-university-brown">
                Built On a Vision
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Landmark University, we take special pride in our approach to the structure 
                of our teaching, mentoring and research.
              </p>
              <p>
                We believe Education is far beyond the walls of the class and we therefore built 
                a learning environment that ensures students are truly engaged, staff are not just 
                teaching but also learning.
              </p>
              <p>
                Our research is not limited to our internals but also collaborative. We ensure to 
                work with the biggest names and brands to ensure our students are well exposed and 
                our researches are well funded.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-university-brown hover:bg-deep-brown text-primary-foreground px-8 py-4"
            >
              Read More About Us
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img
                src={studentsStudying}
                alt="Students studying"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-university-brown/20 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-university-gold/10 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-university-brown/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;