
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HistoryIcon, Users, BookOpen, School } from "lucide-react";
import Header from "@/components/Header";
import Timeline from "@/components/Timeline";
import Quiz from "@/components/Quiz";
import HistoricalFigure from "@/components/HistoricalFigure";
import Footer from "@/components/Footer";
import VerticalTimeline from "@/components/VerticalTimeline";
import { timelinePeriods, historicalFigures } from "@/data/timelineData";
import { quizQuestions } from "@/data/quizData";
import { useGradientBackground } from "@/hooks/use-gradient-background";

const Index = () => {
  useGradientBackground();

  return (
    <div className="min-h-screen flex flex-col gradient-background text-white">
      <Header />
      <VerticalTimeline />

      <section className="relative min-h-[80vh] z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Погружение в историю ЛЭТИ
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Прокрутите вниз, чтобы погрузиться в историю первого электротехнического института России с 1886 года до наших дней
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#timeline" 
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-md hover:bg-white/30 transition-colors"
              >
                Начать погружение
              </a>
            </div>
          </div>
        </div>
        
      </section>

      <section id="timeline" className="py-16 px-4 z-10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Хронология истории ЛЭТИ</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Скролльте вниз, чтобы погрузиться глубже в историю университета от его основания до наших дней
            </p>
          </div>
          <Timeline periods={timelinePeriods} />
        </div>
      </section>

      <section id="figures" className="py-16 px-4 z-10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Выдающиеся деятели ЛЭТИ</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Познакомьтесь с учёными и преподавателями, внесшими значительный вклад в развитие ЛЭТИ и мировой науки
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 equal-height-cards">
            {historicalFigures.map(figure => (
              <div key={figure.id} className="h-full">
                <HistoricalFigure
                  name={figure.name}
                  years={figure.years}
                  description={figure.description}
                  imageUrl={figure.imageUrl}
                  contributions={figure.contributions}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quiz" className="py-16 px-4 z-10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Проверьте свои знания</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Пройдите викторину и узнайте, насколько хорошо вы знаете историю ЛЭТИ
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg">
            <Quiz
              title="Викторина по истории ЛЭТИ"
              description="Ответьте на 10 вопросов о ключевых событиях и личностях в истории университета"
              questions={quizQuestions}
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 z-10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">ЛЭТИ в цифрах</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Ключевые цифры, отражающие историю и масштаб университета
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-leti-gold">130+</div>
                <p className="text-white/80">лет истории</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-leti-gold">7</div>
                <p className="text-white/80">факультетов</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-leti-gold">11000+</div>
                <p className="text-white/80">студентов</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-leti-gold">100000+</div>
                <p className="text-white/80">выпускников</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
