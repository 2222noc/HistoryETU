
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HistoryIcon, Users, BookOpen, School } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VerticalTimeline from "@/components/VerticalTimeline";
import { useGradientBackground } from "@/hooks/use-gradient-background";

const History = () => {
  const [activeTab, setActiveTab] = useState("overview");
  useGradientBackground();
  
  return (
    <div className="min-h-screen flex flex-col gradient-background">
      <Header />
      <VerticalTimeline />

      <section className="relative h-[40vh] bg-[url('https://images.unsplash.com/photo-1485833077593-4278bba3f11f?q=80&w=2070')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#05336e]/80 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              История ЛЭТИ
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Исследуйте богатую историю первого электротехнического института России
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="bg-white/10 backdrop-blur-sm">
                <TabsTrigger value="overview" className="data-[state=active]:bg-white/20">
                  <HistoryIcon className="mr-2 h-4 w-4" />
                  Обзор
                </TabsTrigger>
                <TabsTrigger value="founders" className="data-[state=active]:bg-white/20">
                  <Users className="mr-2 h-4 w-4" />
                  Основатели
                </TabsTrigger>
                <TabsTrigger value="achievements" className="data-[state=active]:bg-white/20">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Достижения
                </TabsTrigger>
                <TabsTrigger value="departments" className="data-[state=active]:bg-white/20">
                  <School className="mr-2 h-4 w-4" />
                  Факультеты
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white">
              {activeTab === "overview" && (
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">История ЛЭТИ</h2>
                  <p className="mb-4">
                    Санкт-Петербургский государственный электротехнический университет «ЛЭТИ» имени В.И. Ульянова (Ленина) — один из старейших электротехнических университетов Европы, основанный в 1886 году.
                  </p>
                  <p>
                    Университет был создан как Техническое училище почтово-телеграфного ведомства, а в 1891 году преобразован в Электротехнический институт — первое в России высшее учебное заведение электротехнического профиля.
                  </p>
                </div>
              )}

              {activeTab === "founders" && (
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">Основатели ЛЭТИ</h2>
                  <p className="mb-4">
                    У истоков создания ЛЭТИ стояли выдающиеся учёные и инженеры того времени, включая Александра Степановича Попова, изобретателя радио.
                  </p>
                </div>
              )}

              {activeTab === "achievements" && (
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">Научные достижения</h2>
                  <p>
                    За свою историю ЛЭТИ стал колыбелью многих научных школ в области электротехники, радиотехники, электроники и информационных технологий.
                  </p>
                </div>
              )}

              {activeTab === "departments" && (
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">Факультеты ЛЭТИ</h2>
                  <p>
                    Сегодня ЛЭТИ включает в себя 7 факультетов, охватывающих широкий спектр направлений подготовки в области электроники, информационных технологий, автоматизации и управления, биомедицинской инженерии и других областях.
                  </p>
                </div>
              )}
            </div>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default History;
