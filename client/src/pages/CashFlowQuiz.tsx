import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertTriangle, ShieldAlert } from "lucide-react";

type CashFlowAnswer = {
  questionId: number;
  answerIndex: number;
  text: string;
};

type CashFlowQuestion = {
  id: number;
  text: string;
  options: string[];
};

const cashFlowQuestions: CashFlowQuestion[] = [
  {
    id: 1,
    text: "Бывают ли кассовые разрывы?",
    options: ["регулярно", "иногда", "редко", "никогда"],
  },
  {
    id: 2,
    text: "Какой срок оплаты клиентов?",
    options: ["до 15 дней", "15–30 дней", "30–60 дней", "более 60 дней"],
  },
  {
    id: 3,
    text: "Какой срок оплаты поставщикам?",
    options: ["платим быстрее клиентов", "примерно одинаково", "платим позже клиентов", "не отслеживаем"],
  },
  {
    id: 4,
    text: "Есть ли прогноз движения денежных средств?",
    options: ["на 3 месяца", "на месяц", "только текущий баланс", "нет"],
  },
];

export default function CashFlowQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<CashFlowAnswer[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerIndex: number, answerText: string) => {
    const newAnswers = [...answers, { questionId: cashFlowQuestions[currentStep].id, answerIndex, text: answerText }];
    setAnswers(newAnswers);

    if (currentStep < cashFlowQuestions.length - 1) {
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

    // Check for cash gaps (question 1)
    const gapAnswer = answers.find(a => a.questionId === 1);
    if (gapAnswer) {
      if (gapAnswer.answerIndex === 0) {
        riskLevel = "high";
        insights.push("Бизнес работает с постоянным давлением на ликвидность.");
      } else if (gapAnswer.answerIndex === 1) {
        if (riskLevel === "low") riskLevel = "medium";
      }
    }

    // Check client payment terms (question 2)
    const clientPaymentAnswer = answers.find(a => a.questionId === 2);
    const supplierPaymentAnswer = answers.find(a => a.questionId === 3);

    // If clients pay slower than suppliers
    if (clientPaymentAnswer && supplierPaymentAnswer) {
      const clientIndex = clientPaymentAnswer.answerIndex;
      const supplierIndex = supplierPaymentAnswer.answerIndex;

      // Scenario: client payment is slower (higher index) than supplier payment
      if (supplierIndex === 0 && (clientIndex === 1 || clientIndex === 2 || clientIndex === 3)) {
        // Suppliers paid fast, clients pay slow = mismatch
        if (riskLevel === "low") riskLevel = "medium";
        insights.push("Высокий риск кассовых разрывов из-за структуры оборотного капитала.");
      }

      // If clients pay very slowly (more than 60 days)
      if (clientIndex === 3) {
        if (riskLevel === "low") riskLevel = "medium";
      }

      // If supplier payment is not tracked
      if (supplierIndex === 3) {
        if (riskLevel === "low") riskLevel = "medium";
      }
    }

    // Check cash flow forecast (question 4)
    const forecastAnswer = answers.find(a => a.questionId === 4);
    if (forecastAnswer) {
      if (forecastAnswer.answerIndex === 2 || forecastAnswer.answerIndex === 3) {
        if (riskLevel === "low") riskLevel = "medium";
        insights.push("Отсутствие прогноза движения денег увеличивает риск неожиданных кассовых разрывов.");
      }
    }

    if (riskLevel === "high") {
      return {
        title: "Высокий риск",
        description: "Ваша компания сталкивается с критическими рисками кассовых разрывов. Требуется срочное переструктурирование оборотного капитала и условий платежей.",
        color: "text-red-600",
        bgColor: "bg-red-50",
        icon: ShieldAlert,
        insights,
      };
    }

    if (riskLevel === "medium") {
      return {
        title: "Умеренный риск",
        description: "Ваш денежный поток требует внимания. Есть риск временных кассовых разрывов при изменении условий бизнеса.",
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        icon: AlertTriangle,
        insights,
      };
    }

    return {
      title: "Низкий риск",
      description: "Ваша структура денежных потоков выглядит здоровой. Вы хорошо синхронизируете сроки платежей и имеете предсказуемость cash flow.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      icon: CheckCircle2,
      insights: ["Продолжайте поддерживать баланс между сроками платежей клиентов и поставщиков."],
    };
  };

  const result = getResult();

  return (
    <div className="flex flex-col gap-12 max-w-5xl pb-16 scroll-mt-20">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Экспресс-диагностика денежного потока (Cash Flow)</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Определите риски кассовых разрывов и дисбаланса оборотного капитала.
        </p>
      </div>

      <div className="max-w-2xl w-full">
        {!showResult ? (
          <div className="bg-card border p-8 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 bg-primary/10 w-full">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${((currentStep + 1) / cashFlowQuestions.length) * 100}%` }}
              />
            </div>
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                Вопрос {currentStep + 1} из {cashFlowQuestions.length}
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                {cashFlowQuestions[currentStep].text}
              </h3>
            </div>

            <div className="grid gap-3">
              {cashFlowQuestions[currentStep].options.map((option, idx) => (
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
                  <strong>Рекомендуется диагностика денежного потока:</strong>
                </p>
                <ul className="text-sm space-y-2 ml-4">
                  <li>• анализ оборотного капитала</li>
                  <li>• синхронизация сроков платежей</li>
                  <li>• построение прогноза cash flow</li>
                </ul>
                <p className="text-sm italic text-muted-foreground pt-2">
                  Это соответствует услуге <strong>B2.CF</strong> — анализ денежного потока и ликвидности.
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
