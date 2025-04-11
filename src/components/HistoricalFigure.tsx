
import { Card, CardContent } from "@/components/ui/card";

interface HistoricalFigureProps {
  name: string;
  years: string;
  description: string;
  imageUrl: string;
  contributions: string[];
}

const HistoricalFigure = ({ name, years, description, imageUrl, contributions }: HistoricalFigureProps) => {
  return (
    <Card className="overflow-hidden historical-card border-white/30 aspect-[4/5] max-w-md w-full">
      <div className="flex h-full">
        <div className="w-1/2 h-full">
          <div className="h-full bg-gray-300 overflow-hidden">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/400x600?text=Фото+не+найдено';
              }}
            />
          </div>
        </div>

        <CardContent className="w-1/2 p-4 flex flex-col overflow-auto">
          <div className="mb-2">
            <h3 className="text-lg font-bold text-white break-words">{name}</h3>
            <p className="text-xs text-white/70 mb-2">{years}</p>
            <p className="text-sm text-white/90 break-words">{description}</p>
          </div>

          {contributions.length > 0 && (
            <div className="mt-auto">
              <h4 className="font-medium text-white text-sm mb-1">Вклад в историю ЛЭТИ:</h4>
              <ul className="list-disc pl-4 text-white/90 text-sm overflow-auto">
                {contributions.map((contribution, index) => (
                  <li key={index} className="break-words">{contribution}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default HistoricalFigure;
