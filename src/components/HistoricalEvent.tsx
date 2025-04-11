
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HistoricalEventProps {
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
  tags?: string[];
}

const HistoricalEvent = ({ title, date, description, imageUrl, tags = [] }: HistoricalEventProps) => {
  return (
    <Card className="overflow-hidden historical-card shadow-lg bg-white/10 backdrop-blur-sm border-white/30">
      <div className={`${imageUrl ? 'md:flex' : ''}`}>
        {imageUrl && (
          <div className={`${imageUrl ? 'md:w-2/5' : ''} h-48 md:h-auto overflow-hidden`}>
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/800x400?text=Изображение+не+найдено';
              }}
            />
          </div>
        )}
        <CardContent className={`p-6 ${imageUrl ? 'md:w-3/5' : ''}`}>
          <div className="mb-2">
            <h3 className="text-2xl font-bold mb-1 text-white break-words">{title}</h3>
          </div>
          <p className="text-white/90 mb-4 break-words">{description}</p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="bg-white/10 text-white border-white/30 break-words">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default HistoricalEvent;
