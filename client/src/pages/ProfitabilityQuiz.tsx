import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertTriangle, ShieldAlert } from "lucide-react";

type ProfitAnswer = {
  questionId: number;
  answerIndex: number;
  text: string;
};

type ProfitQuestion = {
  id: number;
  text: string;
  options: string[];
};

const profitQuestions: ProfitQuestion[] = [
  {
    id: 1,
    text: "Как менялась выручка за последние 12 месяцев?",
    options: ["растет быстрее 15%", "растет 5–15%", "стабильна", "падает"],
  },
  {
    id: 2,
    text: "Как ведет себя валовая маржа?",
    options: ["растет", "стабильна", "постепенно падает", "сильно падает"],
  },
  {
    id: 3,
    text: "Как меняются операционные расходы?",
    options: ["растут медленнее выручки", "растут вместе с выручкой", "растут быстрее выручки", "не контролируются"],
  },
  {
    id: 4,
    text: "Есть ли у вас регулярный анализ P&L?",
    options: ["ежемесячный управленческий", "раз в квартал", "только бухгалтерский", "нет анализа"],
  },
];

export default function ProfitabilityQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<ProfitAnswer[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerIndex: number, answerText: string) => {
    const newAnswers = [...answers, { questionId: profitQuestions[currentStep].id, answerIndex, text: answerText }];
    setAnswers(newAnswers);

    if (currentStep < profitQuestions.length - 1) {
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

    // Check revenue and margin (questions 1 and 2)
    const revenueAnswer = answers.find(a => a.questionId === 1);
    const marginAnswer = answers.find(a => a.questionId === 2);

    if (revenueAnswer && marginAnswer) {
      // Revenue grows but margin falls
      if ((revenueAnswer.answerIndex === 0 || revenueAnswer.answerIndex === 1) && 
          (marginAnswer.answerIndex === 2 || marginAnswer.answerIndex === 3)) {
        riskLevel = "medium";
        insights.push("Вероятна проблема в ценообразовании или себестоимости.");
      }

      // Revenue falls
      if (revenueAnswer.answerIndex === 3) {
        riskLevel = "high";
      }

      // Margin falls significantly
      if (marginAnswer.answerIndex === 3) {
        if (riskLevel === "low") riskLevel = "medium";
      }
    }

    // Check operating expenses (question 3)
    const expensesAnswer = answers.find(a => a.questionId === 3);
    if (expensesAnswer) {
      if (expensesAnswer.answerIndex === 2 || expensesAnswer.answerIndex === 3) {
        if (riskLevel === "low") riskLevel = "medium";
        if (expensesAnswer.answerIndex === 3) riskLevel = "high";
        insights.push("Операционные расходы требуют структурного анализа.");
      }
    }

    // Check P&L analysis (question 4)
    const analysisAnswer = answers.find(a => a.questionId === 4);
    if (analysisAnswer) {
      if (analysisAnswer.answerIndex === 2 || analysisAnswer.answerIndex === 3) {
        if (riskLevel === "low") riskLevel = "medium";
        insights.push("Отсутствие управленческого P&L не позволяет выявить источник потери прибыли.");
      }
    }

    if (riskLevel === "high") {
      return {
        title: "Высокий риск",
        description: "Ваша прибыльность находится под серьезным давлением. Требуется комплексный анализ структуры доходов и расходов для выявления источников потери прибыли.",
        color: "text-red-600",
        bgColor: "bg-red-50",
        icon: ShieldAlert,
        insights,
      };
    }

    if (riskLevel === "medium") {
      return {
        title: "Умеренный риск",
        description: "Есть зоны для улучшения прибыльности. Рекомендуется детальный анализ валовой маржи и структуры операционных расходов.",
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        icon: AlertTriangle,
        insights,
      };
    }

    return {
      title: "Низкий риск",
      description: "Ваша прибыльность выглядит стабильной. Вы хорошо контролируете валовую маржу и операционные расходы.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      icon: CheckCircle2,
      insights: ["Продолжайте поддерживать эффективность управления прибыльностью."],
    };
  };

  const result = getResult();

  return (
    <div className="flex flex-col gap-12 max-w-5xl pb-16 scroll-mt-20">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Экспресс-диагностика прибыльности (P&L)</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Быстро определите, вызваны ли проблемы прибыльности ценообразованием, структурой затрат или операционными расходами.
        </p>
      </div>

      <div className="max-w-2xl w-full">
        {!showResult ? (
          <div className="bg-card border p-8 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 bg-primary/10 w-full">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${((currentStep + 1) / profitQuestions.length) * 100}%` }}
              />
            </div>
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                Вопрос {currentStep + 1} из {profitQuestions.length}
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                {profitQuestions[currentStep].text}
              </h3>
            </div>

            <div className="grid gap-3">
              {profitQuestions[currentStep].options.map((option, idx) => (
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
                  <strong>Рекомендуется диагностика структуры прибыли:</strong>
                </p>
                <ul className="text-sm space-y-2 ml-4">
                  <li>• анализ валовой маржи</li>
                  <li>• структура операционных расходов</li>
                  <li>• выявление точек утечки прибыли</li>
                </ul>
                <p className="text-sm italic text-muted-foreground pt-2">
                  Это соответствует услуге <strong>B1.PL</strong> — анализ прибыльности и структуры P&L.
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
