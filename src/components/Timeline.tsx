
import { useState, useEffect, useRef } from "react";
import HistoricalEvent from "./HistoricalEvent";
import { useIsMobile } from "@/hooks/use-mobile";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
  tags?: string[];
}

interface TimelinePeriod {
  id: number;
  title: string;
  yearRange: string;
  description: string;
  events: TimelineItem[];
}

interface TimelineProps {
  periods: TimelinePeriod[];
}

const Timeline = ({ periods }: TimelineProps) => {
  const [visibleEvents, setVisibleEvents] = useState<number[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [backgroundPosition, setBackgroundPosition] = useState(0);
  const isMobile = useIsMobile();
  
  const timelineRef = useRef<HTMLDivElement>(null);
  const eventRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const periodRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: isMobile ? '0px' : '0px',
      threshold: isMobile ? 0.1 : 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.getAttribute('data-event-id') || '0');
          if (id && !visibleEvents.includes(id)) {
            setVisibleEvents(prev => [...prev, id]);
          }
        }
      });
    }, options);

    Object.entries(eventRefs.current).forEach(([_, element]) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      Object.entries(eventRefs.current).forEach(([_, element]) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [eventRefs, visibleEvents, isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        
        const scrollPercentage = Math.min(
          100, 
          Math.max(0, (scrollTop / (scrollHeight - clientHeight) * 100))
        );
        
        setScrollProgress(scrollPercentage);
        
        setBackgroundPosition(scrollPercentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.style.backgroundPosition = `0% ${backgroundPosition}%`;
    }
  }, [backgroundPosition]);

  return (
    <div className="timeline-deep-sea" ref={timelineRef}>
      <div className="timeline-events">
        {periods.map((period, periodIndex) => {
          return (
            <div 
              key={period.id}
              id={`period-${period.id}`}
              className={`period-container mb-24 last:mb-64`}
              ref={(el) => periodRefs.current[period.id] = el}
              data-period-id={period.id}
            >
              <div className="period-header-container">
                <div className="period-header">
                  <div>
                    <h3 className="text-xl font-bold">{period.title}</h3>
                    <p className="text-sm opacity-80">{period.yearRange}</p>
                  </div>
                </div>
                
                <p className="mb-6 text-white">{period.description}</p>
              </div>
              
              <div className="period-events-container">
                {period.events.map((event, eventIndex) => (
                  <div 
                    key={event.id}
                    ref={el => eventRefs.current[event.id] = el}
                    data-event-id={event.id}
                    className={`event-card ${
                      isMobile ? '' : (eventIndex % 2 === 0 ? 'from-left' : 'from-right')
                    } mb-8 transition-all duration-1000 ${
                      visibleEvents.includes(event.id) 
                        ? "opacity-100 translate-x-0" 
                        : !isMobile && eventIndex % 2 === 0 
                          ? "opacity-0 -translate-x-full" 
                          : !isMobile 
                            ? "opacity-0 translate-x-full"
                            : "opacity-0"
                    }`}
                  >
                    <div className="event-year">{event.date}</div>
                    <HistoricalEvent 
                      title={event.title}
                      date={event.date}
                      description={event.description}
                      imageUrl={event.imageUrl}
                      tags={event.tags}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
