import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import universityHero from "@/assets/university-hero.jpg";
import studentsStudying from "@/assets/students-studying.jpg";
import graduation from "@/assets/graduation.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: universityHero,
      title: "Experience Landmark University",
      subtitle: "Watch the Virtual Tour of Landmark University",
      cta: "Click to Watch"
    },
    {
      image: studentsStudying,
      title: "Excellence in Education",
      subtitle: "Join thousands of students who are breaking new grounds",
      cta: "Learn More"
    },
    {
      image: graduation,
      title: "Your Future Starts Here",
      subtitle: "Become part of our success story and alumni network",
      cta: "Apply Now"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-hero"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white space-y-6 max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl animate-slide-up">
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  className="bg-university-gold hover:bg-university-gold/90 text-university-brown font-semibold px-8 py-4 text-lg animate-scale-in"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-university-gold" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;