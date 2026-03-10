import { cn } from "@/lib/utils";

interface DiagnosticProgressProps {
  checkedCount: number;
}

export default function DiagnosticProgress({ checkedCount }: DiagnosticProgressProps) {
  const totalCount = 6;
  const percentage = (checkedCount / totalCount) * 100;

  const getLevel = () => {
    if (checkedCount <= 2) return "Базовая проверка";
    if (checkedCount <= 4) return "Расширенная проверка";
    return "Практически полный экспресс-аудит";
  };

  return (
    <div className="w-full border-t pt-16">
      <div className="max-w-3xl space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            Экспресс-проверка финансового управления
          </h2>
          <p className="text-lg text-muted-foreground">
            Вы проверили {checkedCount} из {totalCount} финансовых областей.
          </p>
        </div>

        <div className="space-y-3">
          <div className="h-1 bg-secondary/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="text-sm font-medium text-primary">
            {getLevel()}
          </p>
        </div>

        {checkedCount < totalCount && (
          <div className="bg-secondary/10 border border-border/30 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Для более полной картины проверьте остальные показатели.
            </p>
          </div>
        )}

        {checkedCount === totalCount && (
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <p className="text-sm font-medium text-green-700">
              ✓ Вы завершили полную экспресс-проверку всех финансовых областей!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
