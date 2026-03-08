import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertTriangle, ShieldAlert } from "lucide-react";
import PayablesQuiz from "./PayablesQuiz";
import PaymentCalendarQuiz from "./PaymentCalendarQuiz";

type Question = {
  id: number;
  text: string;
  options: { text: string; score: number }[];
};

const questions: Question[] = [
  {
    id: 1,
    text: "Каков средний период оборачиваемости вашей дебиторской задолженности?",
    options: [
      { text: "До 30 дней", score: 1 },
      { text: "30–60 дней", score: 2 },
      { text: "Более 60 дней", score: 3 },
    ],
  },
  {
    id: 2,
    text: "Какую долю в общей дебиторской задолженности занимает просроченная задолженность?",
    options: [
      { text: "Менее 5%", score: 1 },
      { text: "5–15%", score: 2 },
      { text: "Более 15%", score: 3 },
    ],
  },
  {
    id: 3,
    text: "Как часто вы проводите сверку взаиморасчетов с крупнейшими дебиторами?",
    options: [
      { text: "Ежемесячно", score: 1 },
      { text: "Раз в квартал", score: 2 },
      { text: "Только по запросу или раз в год", score: 3 },
    ],
  },
  {
    id: 4,
    text: "Есть ли у вас формализованная процедура проверки контрагентов перед отгрузкой в долг?",
    options: [
      { text: "Да, строгий регламент", score: 1 },
      { text: "Частично, для новых клиентов", score: 2 },
      { text: "Нет, работаем на доверии", score: 3 },
    ],
  },
];

export default function Pricing() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  
  const getResult = () => {
    if (totalScore <= 5) return {
      title: "Низкий риск",
      description: "Ваша система управления дебиторской задолженностью выглядит стабильной. Риски кассовых разрывов минимальны.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      icon: CheckCircle2
    };
    if (totalScore <= 9) return {
      title: "Умеренный риск",
      description: "Есть зоны роста. Просрочки могут начать влиять на ликвидность. Рекомендуется калибровка процессов контроля.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      icon: AlertTriangle
    };
    return {
      title: "Высокий риск",
      description: "Критический уровень. Высокая вероятность потери оборотного капитала и возникновения кассовых разрывов.",
      color: "text-red-600",
      bgColor: "bg-red-50",
      icon: ShieldAlert
    };
  };

  const result = getResult();

  const scrollToContacts = () => {
    if (window.location.pathname === "/") {
      document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contacts";
    }
  };

  return (
    <div className="flex flex-col gap-16 max-w-5xl pb-16">
      <div>
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">Экспресс-диагностика</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Экспресс-диагностика дебиторской задолженности
          </p>
          <p className="mt-4 text-lg">
            Ответьте на несколько вопросов и получите быструю оценку риска вашей дебиторской задолженности.
          </p>
        </div>

        <div className="max-w-2xl w-full mt-12">
          {!showResult ? (
            <div className="bg-card border p-8 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 bg-primary/10 w-full">
                <div 
                  className="h-full bg-primary transition-all duration-500" 
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>
              
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                  Вопрос {currentStep + 1} из {questions.length}
                </span>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                  {questions[currentStep].text}
                </h2>
              </div>

              <div className="grid gap-3">
                {questions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full text-left p-4 border hover:border-primary hover:bg-primary/5 transition-all group flex justify-between items-center"
                  >
                    <span className="font-medium">{option.text}</span>
                    <div className="w-5 h-5 border rounded-full group-hover:border-primary flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className={cn("border p-8 space-y-6", result.bgColor)}>
                <div className="flex items-center gap-4">
                  <result.icon className={cn("w-8 h-8", result.color)} />
                  <h2 className={cn("text-3xl font-bold tracking-tight", result.color)}>
                    {result.title}
                  </h2>
                </div>
                <p className="text-lg leading-relaxed">
                  {result.description}
                </p>
                
                <div className="pt-6 border-t border-black/5 space-y-4">
                  <p className="text-sm italic text-muted-foreground">
                    Экспресс-диагностика носит ориентировочный характер. Для точной оценки требуется анализ структуры дебиторской задолженности и условий работы с клиентами.
                  </p>
                  <div className="bg-primary/5 p-4 border-l-4 border-primary">
                    <p className="text-sm font-medium">
                      Инсайт: Компании с дебиторской задолженностью более 60 дней обычно теряют 5–15% оборотного капитала.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="rounded-none font-bold"
                    onClick={scrollToContacts}
                  >
                    Связаться для полной диагностики
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="rounded-none"
                    onClick={resetQuiz}
                  >
                    Пройти еще раз
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t pt-16">
        <PayablesQuiz />
      </div>

      <div className="border-t pt-16">
        <PaymentCalendarQuiz />
      </div>
    </div>
  );
}
