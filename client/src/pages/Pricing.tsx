import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Pricing() {
  return (
    <div className="flex flex-col gap-16 max-w-5xl pb-16">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Логика ценообразования</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Прозрачная математическая модель формирования стоимости консалтинговых продуктов. Мы продаем не часы, а конкретные единицы результата.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Базовая формула</h2>
            <div className="bg-primary text-primary-foreground p-6 font-mono text-sm md:text-base">
              Стоимость = (Базовая ставка продукта) × Коэффициент масштаба × Коэффициент сложности
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3 border-b pb-2">Коэффициент масштаба бизнеса</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>До 100 сотрудников</span> <span className="font-mono">k = 1.0</span></li>
              <li className="flex justify-between"><span>100 - 500 сотрудников</span> <span className="font-mono">k = 1.5</span></li>
              <li className="flex justify-between"><span>500 - 2000 сотрудников</span> <span className="font-mono">k = 2.2</span></li>
              <li className="flex justify-between"><span>Свыше 2000 сотрудников</span> <span className="font-mono">k = 3.5</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 border-b pb-2">Множители сложности (могут суммироваться)</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-start">
                <span className="text-muted-foreground mr-4">Распределенная филиальная сеть (более 5 регионов)</span>
                <span className="font-mono bg-secondary px-1 py-0.5 rounded-sm">+20%</span>
              </li>
              <li className="flex justify-between items-start">
                <span className="text-muted-foreground mr-4">Холдинговая структура (несколько юрлиц с кросс-функциями)</span>
                <span className="font-mono bg-secondary px-1 py-0.5 rounded-sm">+30%</span>
              </li>
              <li className="flex justify-between items-start">
                <span className="text-muted-foreground mr-4">Высокая срочность (сокращение нормативного срока на 30%)</span>
                <span className="font-mono bg-secondary px-1 py-0.5 rounded-sm">+50%</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-secondary/30 p-8 border border-border/50 sticky top-24">
          <h2 className="text-2xl font-bold mb-2">Запрос калибровки</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Оставьте заявку на короткую 15-минутную вводную беседу. Мы обсудим ваши симптомы и определим, нужен ли вам уровень A0 или другая конфигурация.
          </p>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-medium">Как к вам обращаться</label>
              <Input placeholder="Иван Иванов" className="rounded-none bg-background" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Роль в компании</label>
              <Input placeholder="CEO / Собственник" className="rounded-none bg-background" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Краткое описание ситуации</label>
              <Textarea 
                placeholder="Например: Остановился рост выручки при увеличении штата..." 
                className="rounded-none min-h-[100px] bg-background"
              />
            </div>
            <div className="pt-2">
              <Button type="button" className="w-full rounded-none h-11" data-testid="button-submit-lead">
                Запросить встречу
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}