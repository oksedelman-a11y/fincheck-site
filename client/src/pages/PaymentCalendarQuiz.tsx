import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertTriangle, ShieldAlert } from "lucide-react";

type CalendarAnswer = {
  questionId: number;
  answerIndex: number;
  text: string;
};

type CalendarQuestion = {
  id: number;
  text: string;
  options: string[];
};

const calendarQuestions: CalendarQuestion[] = [
  {
    id: 1,
    text: "Есть ли у вас платежный календарь?",
    options: ["да, ведется регулярно", "есть, но обновляется редко", "ведется вручную", "нет"],
  },
  {
    id: 2,
    text: "На какой период вы планируете платежи?",
    options: ["3 месяца", "1 месяц", "2 недели", "не планируем"],
  },
  {
    id: 3,
    text: "Кто принимает решение о платежах?",
    options: ["по календарю", "финансовый директор", "собственник", "по ситуации"],
  },
  {
    id: 4,
    text: "Бывают ли неожиданные кассовые разрывы?",
    options: ["регулярно", "иногда", "редко", "никогда"],
  },
];

export default function PaymentCalendarQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<CalendarAnswer[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerIndex: number, answerText: string) => {
    const newAnswers = [...answers, { questionId: calendarQuestions[currentStep].id, answerIndex, text: answerText }];
    setAnswers(newAnswers);

    if (currentStep < calendarQuestions.length - 1) {
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

  const scrollToContacts = () => {
    if (window.location.pathname === "/") {
      document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contacts";
    }
  };

  const getResult = () => {
    let riskLevel = "low";
    const insights: string[] = [];

    // Check for payment calendar (question 1)
    const calendarAnswer = answers.find(a => a.questionId === 1);
    if (calendarAnswer && calendarAnswer.answerIndex === 3) {
      riskLevel = "high";
      insights.push("Отсутствие платежного календаря увеличивает риск кассовых разрывов.");
    }

    // Check decision making (question 3)
    const decisionAnswer = answers.find(a => a.questionId === 3);
    if (decisionAnswer && decisionAnswer.answerIndex === 3) {
      if (riskLevel === "low") riskLevel = "medium";
      insights.push("Платежи принимаются без системы планирования.");
    }

    // Check for cash gaps (question 4)
    const gapAnswer = answers.find(a => a.questionId === 4);
    if (gapAnswer && gapAnswer.answerIndex === 0) {
      riskLevel = "high";
      insights.push("Компания работает без предсказуемости денежных потоков.");
    } else if (gapAnswer && gapAnswer.answerIndex === 1) {
      if (riskLevel === "low") riskLevel = "medium";
    }

    // Check planning period (question 2)
    const periodAnswer = answers.find(a => a.questionId === 2);
    if (periodAnswer && periodAnswer.answerIndex === 3) {
      if (riskLevel === "low") riskLevel = "medium";
    }

    if (riskLevel === "high") {
      return {
        title: "Высокий риск",
        description: "Ваша система управления денежными потоками требует серьезных улучшений. Высокий риск кассовых разрывов и финансовых кризисов.",
        color: "text-red-600",
        bgColor: "bg-red-50",
        icon: ShieldAlert,
        insights,
      };
    }

    if (riskLevel === "medium") {
      return {
        title: "Умеренный риск",
        description: "Есть зоны для улучшения. Рекомендуется внедрить более структурированное планирование платежей и прогнозирование денежных потоков.",
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        icon: AlertTriangle,
        insights,
      };
    }

    return {
      title: "Низкий риск",
      description: "Ваша система планирования платежей выглядит стабильной. Вы хорошо контролируете денежные потоки и имеете предсказуемость в управлении финансами.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      icon: CheckCircle2,
      insights: ["Продолжайте поддерживать эффективность планирования платежей."],
    };
  };

  const result = getResult();

  return (
    <div className="flex flex-col gap-12 max-w-5xl pb-16 scroll-mt-20">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Экспресс-диагностика платежного календаря</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Определите, есть ли у вашей компании правильное краткосрочное планирование денежных потоков.
        </p>
      </div>

      <div className="max-w-2xl w-full">
        {!showResult ? (
          <div className="bg-card border p-8 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 bg-primary/10 w-full">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${((currentStep + 1) / calendarQuestions.length) * 100}%` }}
              />
            </div>
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                Вопрос {currentStep + 1} из {calendarQuestions.length}
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                {calendarQuestions[currentStep].text}
              </h3>
            </div>

            <div className="grid gap-3">
              {calendarQuestions[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx, option)}
                  className="w-full text-left p-4 border hover:border-primary hover:bg-primary/5 transition-all group flex justify-between items-center"
                >
                  <span className="font-medium">{option}</span>
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
                <h3 className={cn("text-3xl font-bold tracking-tight", result.color)}>
                  {result.title}
                </h3>
              </div>
              <p className="text-lg leading-relaxed">
                {result.description}
              </p>

              {result.insights.length > 0 && (
                <div className="pt-4 space-y-3 border-t border-black/5">
                  {result.insights.map((insight, idx) => (
                    <p key={idx} className="text-sm italic text-muted-foreground">
                      • {insight}
                    </p>
                  ))}
                </div>
              )}
              
              <div className="pt-6 border-t border-black/5 space-y-4 bg-primary/5 p-4 border-l-4 border-primary">
                <p className="text-sm font-medium leading-relaxed">
                  <strong>Рекомендуется построение платежного календаря:</strong>
                </p>
                <ul className="text-sm space-y-2 ml-4">
                  <li>• прогноз платежей</li>
                  <li>• приоритизация расходов</li>
                  <li>• контроль кассовых разрывов</li>
                </ul>
                <p className="text-sm italic text-muted-foreground pt-2">
                  Это соответствует услуге <strong>B3.PC</strong> — построение платежного календаря.
                </p>
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
  );
}
