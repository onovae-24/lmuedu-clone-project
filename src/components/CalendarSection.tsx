import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const CalendarSection = () => {
  const events = [
    {
      category: "General",
      title: "Departmental Board of Examiners Meeting",
      date: "Sun Aug 10 2025",
      location: "Landmark University"
    },
    {
      category: "General",
      title: "College Board of Examiners Meeting",
      date: "Wed Aug 13 2025",
      location: "Landmark University"
    },
    {
      category: "General",
      title: "SBC Meeting for Omega Semester Results",
      date: "Mon Aug 18 2025",
      location: "Landmark University"
    },
    {
      category: "General",
      title: "Special Senate Meeting for Omega Semester Results",
      date: "Wed Aug 20 2025",
      location: "Landmark University"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' }).toUpperCase(),
      year: date.getFullYear()
    };
  };

  return (
    <section className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-university-gold font-bold text-lg tracking-wide mb-2">
            WHATS GOING ON
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-university-brown mb-4">
            📅 CALENDAR
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with upcoming events, meetings, and important dates at Landmark University.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {events.map((event, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 shadow-warm"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Date Box */}
                  <div className="bg-university-brown text-primary-foreground rounded-lg p-3 text-center min-w-[70px]">
                    <div className="text-lg font-bold">
                      {formatDate(event.date).day}
                    </div>
                    <div className="text-xs">
                      {formatDate(event.date).month}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="bg-university-gold/20 text-university-brown px-2 py-1 rounded text-xs font-medium">
                        📅 {event.category}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-university-brown group-hover:text-university-gold transition-colors">
                      {event.title}
                    </h3>
                    
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View Full Calendar CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-university-brown hover:bg-deep-brown text-primary-foreground px-8 py-4"
          >
            View Full Calendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;