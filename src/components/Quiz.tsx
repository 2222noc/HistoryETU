
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Award, RotateCcw, ArrowRight } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  title: string;
  description: string;
  questions: QuizQuestion[];
}

const Quiz = ({ title, description, questions }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { toast } = useToast();

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = selectedOption !== null ? selectedOption : -1;
    setUserAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
      setShowResults(true);
      
      const correctAnswers = newAnswers.filter((answer, index) => 
        answer === questions[index].correctAnswer
      ).length;
      
      const percentage = Math.round((correctAnswers / questions.length) * 100);
      
      toast({
        title: `Результат: ${correctAnswers} из ${questions.length} (${percentage}%)`,
        description: percentage > 70 
          ? "Отличный результат! Вы хорошо знаете историю ЛЭТИ." 
          : "Вы можете изучить историю ЛЭТИ получше и попробовать снова.",
      });
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowResults(false);
    setUserAnswers(Array(questions.length).fill(-1));
    setQuizCompleted(false);
  };

  const currentQuizQuestion = questions[currentQuestion];
  const score = userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="bg-leti-blue text-white">
        <CardTitle className="text-center">{title}</CardTitle>
        <p className="text-center opacity-90">{description}</p>
      </CardHeader>

      <CardContent className="p-6">
        {!showResults ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-500">
                Вопрос {currentQuestion + 1} из {questions.length}
              </span>
              <div className="w-1/2 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-leti-blue h-2 rounded-full" 
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="text-xl font-medium mb-6">{currentQuizQuestion.question}</div>

            <RadioGroup value={selectedOption?.toString()} className="space-y-3">
              {currentQuizQuestion.options.map((option, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 p-3 border rounded-md hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleOptionSelect(index)}
                >
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="cursor-pointer flex-1">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-center items-center flex-col">
              <Award className="h-16 w-16 text-leti-gold mb-2" />
              <h3 className="text-2xl font-bold mb-2">Результат: {score} из {questions.length}</h3>
              <p className="text-gray-600">
                {score === questions.length
                  ? "Превосходно! Вы отлично знаете историю ЛЭТИ."
                  : score >= questions.length / 2
                  ? "Хороший результат! Вы неплохо знаете историю ЛЭТИ."
                  : "Попробуйте еще раз после изучения материалов."}
              </p>
            </div>

            <div className="space-y-4 mt-6">
              {questions.map((q, index) => (
                <div 
                  key={q.id} 
                  className={`p-4 rounded-md ${
                    userAnswers[index] === q.correctAnswer 
                      ? "bg-green-50 border border-green-200" 
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <p className="font-medium mb-2">{index + 1}. {q.question}</p>
                  <p className="text-sm mb-1">
                    <span className="font-medium">Ваш ответ:</span> {
                      userAnswers[index] >= 0 
                        ? q.options[userAnswers[index]] 
                        : "Нет ответа"
                    }
                  </p>
                  <p className="text-sm mb-2">
                    <span className="font-medium">Правильный ответ:</span> {q.options[q.correctAnswer]}
                  </p>
                  <p className="text-sm text-gray-600 italic">{q.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between border-t p-4">
        {!showResults ? (
          <>
            <Button 
              variant="outline" 
              onClick={handleReset} 
              className="flex items-center"
              disabled={currentQuestion === 0 && selectedOption === null}
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Начать заново
            </Button>
            <Button 
              onClick={handleNext}
              disabled={selectedOption === null}
              className="flex items-center"
            >
              {currentQuestion < questions.length - 1 ? (
                <>
                  Следующий
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              ) : (
                'Завершить'
              )}
            </Button>
          </>
        ) : (
          <Button onClick={handleReset} className="w-full flex items-center justify-center">
            <RotateCcw className="h-4 w-4 mr-2" />
            Пройти еще раз
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Quiz;
