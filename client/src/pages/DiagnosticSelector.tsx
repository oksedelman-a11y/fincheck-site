import { useState } from "react";
import { cn } from "@/lib/utils";

type DiagnosticItem = {
  id: string;
  label: string;
  anchorId: string;
};

const diagnostics: DiagnosticItem[] = [
  { id: "ar", label: "Дебиторка", anchorId: "diagnostic-ar" },
  { id: "ap", label: "Кредиторка", anchorId: "diagnostic-ap" },
  { id: "pl", label: "Прибыльность", anchorId: "diagnostic-pl" },
  { id: "cashflow", label: "Денежный поток", anchorId: "diagnostic-cashflow" },
  { id: "calendar", label: "Платежный календарь", anchorId: "diagnostic-payment-calendar" },
  { id: "regulations", label: "Финансовые регламенты", anchorId: "diagnostic-regulations" },
];

export default function DiagnosticSelector() {
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const handleCardClick = (anchorId: string, id: string) => {
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      
      // Brief highlight effect
      setHighlightedId(id);
      setTimeout(() => setHighlightedId(null), 1500);
      
      // Add subtle background pulse
      const originalBg = element.style.backgroundColor;
      element.style.backgroundColor = "rgba(var(--primary), 0.1)";
      element.style.transition = "background-color 1.5s ease-out";
      setTimeout(() => {
        element.style.backgroundColor = originalBg;
      }, 50);
    }
  };

  return (
    <div className="w-full mb-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
          Что вы хотите проверить?
        </h2>
        <p className="text-muted-foreground">
          Выберите интересующую вас диагностику и перейдите к подробному анализу
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {diagnostics.map((diagnostic) => (
          <button
            key={diagnostic.id}
            onClick={() => handleCardClick(diagnostic.anchorId, diagnostic.id)}
            className={cn(
              "p-6 border rounded-lg transition-all duration-300 text-left",
              "hover:border-primary hover:shadow-md hover:-translate-y-1",
              "bg-card hover:bg-primary/5",
              highlightedId === diagnostic.id && "border-primary bg-primary/10"
            )}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">→</span>
              </div>
              <span className="font-medium text-base tracking-tight">
                {diagnostic.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
