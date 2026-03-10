import { cn } from "@/lib/utils";

type DiagnosticItem = {
  id: string;
  label: string;
};

const diagnostics: DiagnosticItem[] = [
  { id: "ar", label: "Дебиторская задолженность" },
  { id: "ap", label: "Кредиторская задолженность" },
  { id: "pl", label: "Прибыльность (P&L)" },
  { id: "cashflow", label: "Денежный поток (Cash Flow)" },
  { id: "calendar", label: "Платежный календарь" },
  { id: "regulations", label: "Финансовые регламенты" },
];

interface DiagnosticSelectorProps {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function DiagnosticSelector({ selectedId, onSelect }: DiagnosticSelectorProps) {
  return (
    <div className="w-full mb-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
          Что вы хотите проверить?
        </h2>
        <p className="text-muted-foreground">
          Выберите интересующую вас диагностику
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {diagnostics.map((diagnostic) => (
          <button
            key={diagnostic.id}
            onClick={() => onSelect(diagnostic.id)}
            className={cn(
              "p-6 border rounded-lg transition-all duration-300 text-left",
              "hover:border-primary hover:shadow-md hover:-translate-y-1",
              "bg-card hover:bg-primary/5",
              selectedId === diagnostic.id && "border-primary bg-primary/10"
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
