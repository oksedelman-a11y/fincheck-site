import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertTriangle, ShieldAlert } from "lucide-react";

type RulesAnswer = {
  questionId: number;
  answerIndex: number;
  text: string;
};

type RulesQuestion = {
  id: number;
  text: string;
  options: string[];
};

const rulesQuestions: RulesQuestion[] = [
  {
    id: 1,
    text: "Есть ли в компании зафиксированные финансовые правила или регламенты?",
    options: ["есть понятные и используемые регламенты", "есть документы, но ими пользуются редко", "есть отдельные инструкции", "правил фактически нет"],
  },
  {
    id: 2,
    text: "Насколько единообразно формируется финансовая отчетность?",
    options: ["единый стандарт и формат", "частично унифицировано", "каждый делает по-своему", "стандарта нет"],
  },
  {
    id: 3,
    text: "Как принимаются решения по расходам?",
    options: ["по четким правилам и лимитам", "частично по правилам", "часто по ситуации", "решения принимаются вручную"],
  },
  {
    id: 4,
    text: "Понятно ли сотрудникам, кто принимает финансовые решения и на основании чего?",
    options: ["роли и правила четко описаны", "описаны частично", "многое решается неформально", "логика решений не зафиксирована"],
  },
];

export default function ManagementRulesQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<RulesAnswer[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerIndex: number, answerText: string) => {
    const newAnswers = [...answers, { questionId: rulesQuestions[currentStep].id, answerIndex, text: answerText }];
    setAnswers(newAnswers);

    if (currentStep < rulesQuestions.length - 1) {
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

    // Check financial rules (question 1)
    const rulesAnswer = answers.find(a => a.questionId === 1);
    if (rulesAnswer) {
      if (rulesAnswer.answerIndex === 2 || rulesAnswer.answerIndex === 3) {
        if (riskLevel === "low") riskLevel = "medium";
        insights.push("Финансовые правила не зафиксированы и зависят от отдельных людей.");
      }
      if (rulesAnswer.answerIndex === 3) {
        riskLevel = "high";
      }
    }

    // Check reporting standards (question 2)
    const reportingAnswer = answers.find(a => a.questionId === 2);
    if (reportingAnswer) {
      if (reportingAnswer.answerIndex === 2 || reportingAnswer.answerIndex === 3) {
        if (riskLevel === "low") riskLevel = "medium";
        insights.push("Отсутствие единого стандарта отчетности затрудняет управление финансами.");
      }
    }

    // Check expense approvals (question 3)
    const expenseAnswer = answers.find(a => a.questionId === 3);
    if (expenseAnswer) {
      if (expenseAnswer.answerIndex === 2 || expenseAnswer.answerIndex === 3) {
        if (riskLevel === "low") riskLevel = "medium";
        insights.push("Согласование расходов зависит от ситуации, а не от управленческих правил.");
      }
      if (expenseAnswer.answerIndex === 3) {
        riskLevel = "high";
      }
    }

    // Check responsibility clarity (question 4)
    const responsibilityAnswer = answers.find(a => a.questionId === 4);
    if (responsibilityAnswer) {
      if (responsibilityAnswer.answerIndex === 2 || responsibilityAnswer.answerIndex === 3) {
        if (riskLevel === "low") riskLevel = "medium";
        insights.push("Не зафиксировано, кто принимает финансовые решения и на каких основаниях.");
      }
    }

    if (riskLevel === "high") {
      return {
        title: "Высокий риск",
        description: "Ваша компания работает без четких финансовых правил. Управление финансами зависит от отдельных людей и решается на лету, что создает риск ошибок и невозможности масштабирования.",
        color: "text-red-600",
        bgColor: "bg-red-50",
        icon: ShieldAlert,
        insights,
      };
    }

    if (riskLevel === "medium") {
      return {
        title: "Умеренный риск",
        description: "Ваши финансовые правила существуют, но не полностью структурированы и применяются непоследовательно. Это затрудняет управление и создает пробелы в контроле.",
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        icon: AlertTriangle,
        insights,
      };
    }

    return {
      title: "Низкий риск",
      description: "Ваша компания имеет четкие и применяемые финансовые правила. Управление структурировано и понятно всем сотрудникам.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      icon: CheckCircle2,
      insights: ["Продолжайте поддерживать дисциплину в применении финансовых правил."],
    };
  };

  const result = getResult();

  return (
    <div className="flex flex-col gap-12 max-w-5xl pb-16 scroll-mt-20">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Экспресс-диагностика управляемости финансовых правил</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Определите, насколько финансовые правила компании реально работают как управленческий инструмент, а не просто существуют в виде документов.
        </p>
      </div>

      <div className="max-w-2xl w-full">
        {!showResult ? (
          <div className="bg-card border p-8 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 bg-primary/10 w-full">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${((currentStep + 1) / rulesQuestions.length) * 100}%` }}
              />
            </div>
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                Вопрос {currentStep + 1} из {rulesQuestions.length}
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                {rulesQuestions[currentStep].text}
              </h3>
            </div>

            <div className="grid gap-3">
              {rulesQuestions[currentStep].options.map((option, idx) => (
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
                  <strong>Часто проблема не в отсутствии документов, а в том, что правила не структурированы и ими сложно пользоваться.</strong>
                </p>
                <p className="text-sm leading-relaxed">
                  В таких случаях применяется управленческая декомпозиция регламентов:
                </p>
                <ul className="text-sm space-y-2 ml-4">
                  <li>• извлечение управленческой логики из существующих документов</li>
                  <li>• устранение противоречий и дублирования</li>
                  <li>• фиксация понятных правил принятия решений</li>
                  <li>• формирование прикладных инструкций (2–5 страниц)</li>
                </ul>
                <p className="text-sm italic text-muted-foreground pt-2">
                  Результат — краткие и применимые правила, которыми реально пользуются.
                </p>
                <p className="text-sm italic text-muted-foreground">
                  Это соответствует услуге <strong>B5</strong> — декомпозиция регламентов и инструкций.
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
