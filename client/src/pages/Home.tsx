import { Link } from "wouter";
import { ArrowRight, Activity, GitCommit, Search, Briefcase, AlertTriangle, Scale, Target, ShieldAlert, XOctagon, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-16">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-start gap-6 pt-12 md:pt-24 min-h-[500px] justify-center border-b pb-16">
        <div 
          className="absolute inset-0 -z-10 opacity-20 pointer-events-none"
          style={{ 
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)'
          }}
        />
        <div className="max-w-3xl flex flex-col gap-6">
          <div className="inline-flex self-start items-center rounded-none border px-2.5 py-0.5 text-xs font-semibold border-primary bg-primary text-primary-foreground uppercase tracking-widest">
            Управленческая диагностика
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-[1.1]">
            От управленческой неопределенности — <br/>к ясности решений.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Системная архитектура диагностики для собственников и CEO. Калибровка проблем, независимый аудит структуры, процессов и команды.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Link href="/catalog">
              <Button size="lg" className="rounded-none font-medium px-8 h-12 text-base" data-testid="button-go-to-catalog">
                Запросить FinCheck (Входной аудит)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 1. Problem & 2. Consequences */}
      <section className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">1. Проблема неопределенности</h2>
          <h3 className="text-3xl font-bold tracking-tight">Иллюзия контроля</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            На определенном масштабе бизнеса внутренние метрики и отчеты начинают искажаться. Собственник получает информацию, прошедшую через фильтры интересов топ-менеджмента. Возникает эффект "управленческой близорукости".
          </p>
          <ul className="space-y-4 pt-4">
            <li className="flex gap-4">
              <AlertTriangle className="w-5 h-5 text-primary shrink-0" />
              <span>Решения принимаются интуитивно из-за противоречивых данных.</span>
            </li>
            <li className="flex gap-4">
              <AlertTriangle className="w-5 h-5 text-primary shrink-0" />
              <span>Симптомы путаются с первопричинами (например, лечат продажи, когда проблема кроется в структуре потоков).</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-6 bg-secondary/30 p-8 border border-border/50">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">2. Бизнес-последствия</h2>
          <h3 className="text-2xl font-bold tracking-tight">Цена искажений</h3>
          <ul className="space-y-6">
            <li className="border-l-2 border-primary pl-4">
              <h4 className="font-bold mb-1">Потеря динамики</h4>
              <p className="text-sm text-muted-foreground">Бизнес упирается в "стеклянный потолок", старые модели управления перестают масштабироваться.</p>
            </li>
            <li className="border-l-2 border-primary pl-4">
              <h4 className="font-bold mb-1">Кассовые разрывы и рост OPEX</h4>
              <p className="text-sm text-muted-foreground">Дублирование функций, раздутый штат, неэффективные процессы съедают маржу.</p>
            </li>
            <li className="border-l-2 border-primary pl-4">
              <h4 className="font-bold mb-1">Организационный паралич</h4>
              <p className="text-sm text-muted-foreground">Конфликты подразделений, размытая ответственность, сбои на стыках зон ответственности.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. What FinCheck is (Positioning) */}
      <section className="border-t pt-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">3. Система FinCheck</h2>
            <h3 className="text-3xl font-bold tracking-tight mb-6">Структурированная <br/>диагностика</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              FinCheck — это не консалтинг ради консалтинга. Это инструмент получения объективной, независимой картины бизнеса. Внешний диагност свободен от корпоративной политики и способен указать на системные ошибки.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <Search className="w-6 h-6 mb-3 text-primary" />
                <h4 className="font-bold text-sm mb-2">Независимость</h4>
                <p className="text-sm text-muted-foreground">Отсутствие конфликта интересов внутри компании.</p>
              </div>
              <div>
                <GitCommit className="w-6 h-6 mb-3 text-primary" />
                <h4 className="font-bold text-sm mb-2">Системность</h4>
                <p className="text-sm text-muted-foreground">Анализ взаимосвязей, а не изолированных функций.</p>
              </div>
            </div>
          </div>

          <div className="bg-card border p-8 shadow-sm">
            <h3 className="text-xl font-bold tracking-tight mb-6 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-primary" />
              Чем мы НЕ являемся
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start text-sm">
                <XCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-foreground">Не классический аудит</strong>
                  <span className="text-muted-foreground">Мы не проверяем правильность проводок для налоговой. Мы проверяем управленческий смысл.</span>
                </div>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <XCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-foreground">Не аутсорсинг учета</strong>
                  <span className="text-muted-foreground">Мы проектируем архитектуру, но не вводим первичку руками за вас.</span>
                </div>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <XCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-foreground">Не внедренцы 1С</strong>
                  <span className="text-muted-foreground">Мы описываем бизнес-логику для автоматизации, а не пишем код.</span>
                </div>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <XCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-foreground">Не "CFO в аренду"</strong>
                  <span className="text-muted-foreground">Мы строим систему, которая будет работать на вас, а не подсаживаем на постоянную иглу наших услуг.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Client Journey Schema */}
      <section className="border-t pt-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 text-center">4. Клиентский путь</h2>
        <h3 className="text-3xl font-bold tracking-tight mb-12 text-center">Архитектура движения</h3>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-2">
            
            {/* A0 */}
            <div className="flex-1 bg-secondary/30 border border-border/50 p-6 relative">
              <div className="text-xs font-mono font-bold mb-2 text-primary">ШАГ 1: КАЛИБРОВКА</div>
              <h4 className="font-bold text-lg mb-2">A0: FinCheck</h4>
              <p className="text-sm text-muted-foreground">Опциональный входной аудит. Поиск корневой проблемы и постановка точного диагноза.</p>
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-border z-10"></div>
            </div>

            {/* A / B */}
            <div className="flex-1 flex flex-col gap-2 relative">
              <div className="bg-primary text-primary-foreground p-6">
                <div className="text-xs font-mono font-bold mb-2 opacity-80">ШАГ 2: ПРОЕКТИРОВАНИЕ</div>
                <h4 className="font-bold text-lg mb-2">Уровни A и B</h4>
                <p className="text-sm opacity-90">Внедрение целевых модулей: Ликвидность (A) и Финансовая Архитектура (B).</p>
              </div>
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-border z-10"></div>
            </div>

            {/* C */}
            <div className="flex-1 bg-secondary/30 border border-border/50 p-6 relative">
              <div className="text-xs font-mono font-bold mb-2 text-primary">ШАГ 3: СБОРКА</div>
              <h4 className="font-bold text-lg mb-2">Уровень C</h4>
              <p className="text-sm text-muted-foreground">Связка разрозненных модулей в единый интегрированный контур управления.</p>
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-border z-10"></div>
            </div>

            {/* D */}
            <div className="flex-1 bg-secondary/10 border border-dashed border-primary/50 p-6">
              <div className="text-xs font-mono font-bold mb-2 text-primary">ШАГ 4: ВНЕДРЕНИЕ</div>
              <h4 className="font-bold text-lg mb-2">Уровень D</h4>
              <p className="text-sm text-muted-foreground">Методологическое сопровождение команды заказчика (Adviser) при автоматизации.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Catalog Hierarchy */}
      <section className="border-t pt-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 text-center">5. Каталог продуктов</h2>
        <h3 className="text-3xl font-bold tracking-tight mb-12 text-center">Структура решений</h3>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          
          <div className="border border-border p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl font-bold tracking-tighter">A0</div>
            <h4 className="text-xl font-bold mb-2">Входной аудит (FinCheck)</h4>
            <p className="text-sm text-muted-foreground mb-6 max-w-[85%]">Опциональная экспресс-диагностика для локализации проблемы.</p>
            <Link href="/catalog?level=A0">
              <Button variant="outline" size="sm" className="rounded-none">Смотреть продукт</Button>
            </Link>
          </div>

          <div className="border border-border p-6 md:p-8 bg-secondary/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl font-bold tracking-tighter">A</div>
            <h4 className="text-xl font-bold mb-2">Уровень A (Ликвидность)</h4>
            <p className="text-sm text-muted-foreground mb-6 max-w-[85%]">Контроль денежных потоков: управление ДЗ, КЗ и платежная дисциплина.</p>
            <Link href="/catalog?level=A">
              <Button variant="outline" size="sm" className="rounded-none">3 модуля</Button>
            </Link>
          </div>

          <div className="border border-border p-6 md:p-8 bg-primary text-primary-foreground relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl font-bold tracking-tighter">B</div>
            <h4 className="text-xl font-bold mb-2">Уровень B (Фин. Архитектура)</h4>
            <p className="text-sm opacity-90 mb-6 max-w-[85%]">P&L, Cash Flow, Баланс, Финмодель, Регламенты и Договорная логика.</p>
            <Link href="/catalog?level=B">
              <Button variant="secondary" size="sm" className="rounded-none font-bold text-secondary-foreground">7 модулей</Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-border p-6 flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl font-bold tracking-tighter">C</div>
              <div>
                <h4 className="font-bold mb-2">Уровень C</h4>
                <p className="text-xs text-muted-foreground">Интегрированный контур управления.</p>
              </div>
              <Link href="/catalog?level=C" className="text-sm font-medium hover:text-primary mt-4 inline-flex items-center">&rarr; Подробнее</Link>
            </div>
            <div className="border border-border border-dashed p-6 flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl font-bold tracking-tighter">D</div>
              <div>
                <h4 className="font-bold mb-2">Уровень D</h4>
                <p className="text-xs text-muted-foreground">Методологическое сопровождение (Adviser).</p>
              </div>
              <Link href="/catalog?level=D" className="text-sm font-medium hover:text-primary mt-4 inline-flex items-center">&rarr; Подробнее</Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CTA */}
      <section className="border-t pt-16 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance">
          Перестаньте лечить симптомы. <br/>Найдите корневую проблему.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          Запишитесь на короткую 15-минутную вводную встречу. Мы обсудим ситуацию и решим, имеет ли смысл запускать FinCheck.
        </p>
        <Link href="/catalog">
          <Button size="lg" className="rounded-none font-bold px-10 h-14 text-base shadow-lg hover:shadow-xl transition-all">
            Смотреть полный каталог
          </Button>
        </Link>
      </section>

    </div>
  );
}