import { methodologyPoints } from "@/lib/data";

export default function Methodology() {
  return (
    <div className="flex flex-col gap-16 max-w-4xl pb-16">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Методология</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Архитектура управленческой диагностики базируется на принципах системного анализа и доказательного менеджмента. Мы рассматриваем компанию не как набор изолированных функций, а как живой организм со сложными взаимосвязями.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-8">Базовые принципы</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {methodologyPoints.map((point, i) => (
            <div key={i} className="border-t pt-4">
              <span className="text-muted-foreground font-mono text-sm mb-2 block">0{i+1}</span>
              <h3 className="font-bold text-lg mb-3">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/30 p-8 md:p-12 border border-border/50">
        <h2 className="text-2xl font-bold mb-6">Триггеры для диагностики</h2>
        <p className="mb-8 text-muted-foreground">Ситуации, когда внутренний ресурс для решения проблемы исчерпан:</p>
        
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <div>
              <h4 className="font-bold text-sm mb-1">Остановка роста</h4>
              <p className="text-sm text-muted-foreground">Бизнес уперся в "стеклянный потолок", старые методы не дают масштабирования.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <div>
              <h4 className="font-bold text-sm mb-1">Смена топ-менеджмента</h4>
              <p className="text-sm text-muted-foreground">Необходимость получить объективный срез "наследства" перед передачей дел.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <div>
              <h4 className="font-bold text-sm mb-1">Систематические сбои</h4>
              <p className="text-sm text-muted-foreground">Повторяющиеся ошибки, перекладывание ответственности между подразделениями.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <div>
              <h4 className="font-bold text-sm mb-1">Подготовка к M&A</h4>
              <p className="text-sm text-muted-foreground">Приведение системы в прозрачный вид перед слиянием, поглощением или инвестициями.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Честные ограничения</h2>
        <div className="border-l-4 border-muted pl-6 py-2 space-y-4 text-muted-foreground">
          <p>
            <strong className="text-foreground font-semibold">Мы не принимаем решения за вас.</strong> Наш продукт — ясность и прозрачность. Решения на базе этой ясности принимает собственник или CEO.
          </p>
          <p>
            <strong className="text-foreground font-semibold">Диагностика — это не внедрение.</strong> Разработка целевой схемы (To-Be) и её внедрение — это разные продукты. Внедрение требует иных ресурсов и управления сопротивлением среды.
          </p>
          <p>
            <strong className="text-foreground font-semibold">Качество на входе = качество на выходе.</strong> Если предоставленные данные намеренно искажены, выводы будут отражать это искажение.
          </p>
        </div>
      </section>
    </div>
  );
}