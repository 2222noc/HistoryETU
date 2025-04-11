
import { useEffect, useState, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface TimelineMarker {
  id: number;
  years: string;
  targetId: string;
}

const markers: TimelineMarker[] = [
  { id: 1, years: "1886–1917", targetId: "period-1" },
  { id: 2, years: "1917–1941", targetId: "period-2" },
  { id: 3, years: "1941–1950", targetId: "period-3" },
  { id: 4, years: "1950–1980", targetId: "period-4" },
  { id: 5, years: "1991 – наст. время", targetId: "period-5" }
];

const VerticalTimeline = () => {
  const [activeMarker, setActiveMarker] = useState(1);
  const timelineRef = useRef<HTMLDivElement>(null);
  const observersRef = useRef<IntersectionObserver[]>([]);
  const isMobile = useIsMobile();

  const progressPercentage = ((activeMarker - 1) / (markers.length - 1)) * 100;
  
  useEffect(() => {
    if (observersRef.current.length > 0) {
      observersRef.current.forEach(observer => observer.disconnect());
      observersRef.current = [];
    }
    
    markers.forEach((marker) => {
      const targetElement = document.getElementById(marker.targetId);
      if (targetElement) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveMarker(marker.id);
              }
            });
          },
          { 
            threshold: isMobile ? 0.05 : 0.1,
            rootMargin: isMobile ? "-5% 0px" : "-10% 0px"
          }
        );
        
        observer.observe(targetElement);
        observersRef.current.push(observer);
      }
    });
    
    const handleScroll = () => {
      const lastPeriod = document.getElementById(markers[markers.length - 1].targetId);
      if (lastPeriod) {
        const rect = lastPeriod.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.bottom <= windowHeight) {
          setActiveMarker(markers.length);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      if (observersRef.current.length > 0) {
        observersRef.current.forEach(observer => observer.disconnect());
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);
  
  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isMobile) {
    return (
      <div className="mobile-vertical-timeline-container">
        <div className="mobile-vertical-timeline" ref={timelineRef}>
          <div 
            className="timeline-progress"
            style={{ 
              height: `${progressPercentage}%`,
              transition: "height 0.4s ease-in-out"
            }}
          />
          
          {markers.map((marker, index) => {
            const position = index * (100 / (markers.length - 1));
            
            return (
              <div 
                key={marker.id}
                className={`mobile-timeline-marker ${activeMarker === marker.id ? 'active' : ''}`}
                style={{ top: `${position}%` }}
                onClick={() => scrollToSection(marker.targetId)}
              >
                <div className="marker-dot" />
                <span className="marker-label">{marker.years}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="vertical-timeline-container">
      <div className="vertical-timeline" ref={timelineRef}>
        <div 
          className="timeline-progress"
          style={{ 
            height: `${progressPercentage}%`,
            transition: "height 0.4s ease-in-out"
          }}
        />
        
        {markers.map((marker, index) => {
          const position = index * (100 / (markers.length - 1));
          
          return (
            <div 
              key={marker.id}
              className={`timeline-marker ${activeMarker === marker.id ? 'active' : ''}`}
              style={{ top: `${position}%` }}
              onClick={() => scrollToSection(marker.targetId)}
            >
              <div className="marker-dot" />
              <span className="marker-label">{marker.years}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VerticalTimeline;
