import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertTriangle, ShieldAlert } from "lucide-react";

type QuizAnswer = {
  questionId: number;
  answerIndex: number;
  text: string;
};

type PayablesQuestion = {
  id: number;
  text: string;
  options: string[];
};

const payablesQuestions: PayablesQuestion[] = [
  {
    id: 1,
    text: "Какой средний срок оплаты поставщикам?",
    options: ["до 15 дней", "15–30 дней", "30–60 дней", "более 60 дней"],
  },
  {
    id: 2,
    text: "Бывают ли задержки платежей поставщикам?",
    options: ["регулярно", "иногда", "редко", "никогда"],
  },
  {
    id: 3,
    text: "Есть ли приоритеты платежей?",
    options: ["четкая система приоритетов", "частично", "решается вручную", "нет системы"],
  },
  {
    id: 4,
    text: "Есть ли контроль просроченной кредиторской задолженности?",
    options: ["регулярный анализ", "иногда проверяем", "только бухгалтерия", "нет контроля"],
  },
];

export default function PayablesQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerIndex: number, answerText: string) => {
    const newAnswers = [...answers, { questionId: payablesQuestions[currentStep].id, answerIndex, text: answerText }];
    setAnswers(newAnswers);

    if (currentStep < payablesQuestions.length - 1) {
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

    // Check for regular delays (question 2)
    const delayAnswer = answers.find(a => a.questionId === 2);
    if (delayAnswer && delayAnswer.answerIndex === 0) {
      riskLevel = "high";
      insights.push("Высокий риск давления со стороны поставщиков.");
    }

    // Check for payment prioritization (question 3)
    const priorityAnswer = answers.find(a => a.questionId === 3);
    if (priorityAnswer && (priorityAnswer.answerIndex === 2 || priorityAnswer.answerIndex === 3)) {
      if (riskLevel === "low") riskLevel = "medium";
      insights.push("Отсутствие системы приоритетов может приводить к хаотичным платежам.");
    }

    // Check for payables monitoring (question 4)
    const monitorAnswer = answers.find(a => a.questionId === 4);
    if (monitorAnswer && (monitorAnswer.answerIndex === 2 || monitorAnswer.answerIndex === 3)) {
      if (riskLevel === "low") riskLevel = "medium";
      insights.push("Просроченная кредиторская задолженность может накапливаться незаметно.");
    }

    // Check payment terms (question 1)
    const termsAnswer = answers.find(a => a.questionId === 1);
    if (termsAnswer && termsAnswer.answerIndex === 3) {
      if (riskLevel === "low") riskLevel = "medium";
    }

    if (riskLevel === "high") {
      return {
        title: "Высокий риск",
        description: "Ваша система управления кредиторской задолженностью требует серьезных улучшений. Есть риск конфликтов с поставщиками и нарушения деловых отношений.",
        color: "text-red-600",
        bgColor: "bg-red-50",
        icon: ShieldAlert,
        insights,
      };
    }

    if (riskLevel === "medium") {
      return {
        title: "Умеренный риск",
        description: "Есть зоны для улучшения системы управления кредиторской задолженностью. Рекомендуется внедрить процессы контроля и планирования платежей.",
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        icon: AlertTriangle,
        insights,
      };
    }

    return {
      title: "Низкий риск",
      description: "Ваша система управления кредиторской задолженностью выглядит стабильной. Вы хорошо контролируете сроки платежей и отношения с поставщиками.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      icon: CheckCircle2,
      insights: ["Продолжайте поддерживать эффективность управления платежами."],
    };
  };

  const result = getResult();

  return (
    <div className="flex flex-col gap-12 max-w-5xl pb-16 scroll-mt-20">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Экспресс-диагностика кредиторской задолженности</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Определите риски давления со стороны поставщиков и качество управления платежами.
        </p>
      </div>

      <div className="max-w-2xl w-full">
        {!showResult ? (
          <div className="bg-card border p-8 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 bg-primary/10 w-full">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${((currentStep + 1) / payablesQuestions.length) * 100}%` }}
              />
            </div>
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                Вопрос {currentStep + 1} из {payablesQuestions.length}
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                {payablesQuestions[currentStep].text}
              </h3>
            </div>

            <div className="grid gap-3">
              {payablesQuestions[currentStep].options.map((option, idx) => (
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
                  <strong>Рекомендуется диагностика кредиторской задолженности:</strong>
                </p>
                <ul className="text-sm space-y-2 ml-4">
                  <li>• анализ структуры платежей поставщикам</li>
                  <li>• контроль сроков оплаты</li>
                  <li>• оптимизация условий работы с поставщиками</li>
                </ul>
                <p className="text-sm italic text-muted-foreground pt-2">
                  Это соответствует услуге <strong>A2.AP</strong> — анализ кредиторской задолженности.
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
