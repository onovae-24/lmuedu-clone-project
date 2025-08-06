import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      category: "IMPACT",
      title: "Landmark University Attains Leading Position in THE Impact Rankings 2025",
      date: "March 15, 2025",
      excerpt: "University achieves remarkable positioning in international rankings for sustainable development goals."
    },
    {
      category: "PARTNERSHIP",
      title: "Strategic Meeting with Covenant University and Jiangsu Academy of Agricultural Sciences",
      date: "March 10, 2025",
      excerpt: "Paving the way for international collaboration in agriculture and agripreneurship."
    },
    {
      category: "RECOGNITION",
      title: "MAX Africa Launches Internship Programme with Landmark University",
      date: "March 8, 2025",
      excerpt: "Life-applicable education system recognized as MAX Africa launches comprehensive internship programme."
    },
    {
      category: "RESEARCH",
      title: "MOU Signed with Cocoa Research Institute of Nigeria",
      date: "March 5, 2025",
      excerpt: "Advancing agricultural research and innovation through strategic partnership."
    },
    {
      category: "STUDENTS",
      title: "15th Matriculation Ceremony Welcomes 882 New Students",
      date: "February 28, 2025",
      excerpt: "Landmark University celebrates another milestone with record enrollment numbers."
    },
    {
      category: "ACHIEVEMENT",
      title: "Faculty Member Wins L'Oréal-UNESCO Young Talents Award",
      date: "February 25, 2025",
      excerpt: "PhD student receives prestigious international award for women in science."
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      IMPACT: "bg-university-green/10 text-university-green",
      PARTNERSHIP: "bg-university-gold/10 text-university-brown",
      RECOGNITION: "bg-university-brown/10 text-university-brown",
      RESEARCH: "bg-blue-100 text-blue-700",
      STUDENTS: "bg-purple-100 text-purple-700",
      ACHIEVEMENT: "bg-green-100 text-green-700"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700";
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-university-gold font-bold text-lg tracking-wide mb-2">
            NEWS AT LMU
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-university-brown mb-4">
            LMU NEWS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, achievements, and developments at Landmark University.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 shadow-warm"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-university-brown group-hover:text-university-gold transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center text-university-brown group-hover:text-university-gold transition-colors">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-university-brown text-university-brown hover:bg-university-brown hover:text-primary-foreground px-8 py-4"
          >
            View News Archive
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;