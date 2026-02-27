import { Link } from "wouter";
import { ArrowRight, Activity, GitCommit, Search, Briefcase, AlertTriangle, Scale, Target, ShieldAlert, XOctagon } from "lucide-react";
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
              <span>Симптомы путаются с первопричинами (например, лечат продажи, когда проблема в продукте или логистике).</span>
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

      {/* 3. What FinCheck is & 4. Format */}
      <section className="border-t pt-16 grid md:grid-cols-2 gap-16">
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

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">4. Формат и этапы</h2>
          <h3 className="text-2xl font-bold tracking-tight mb-8">Как мы работаем</h3>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-primary bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-sm font-bold">1</div>
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 border bg-card">
                <h4 className="font-bold text-sm">Вводная сессия</h4>
                <p className="text-sm text-muted-foreground mt-1">Определение симптомов (15 мин).</p>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-sm font-bold">2</div>
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 border bg-card">
                <h4 className="font-bold text-sm">A0: FinCheck Аудит</h4>
                <p className="text-sm text-muted-foreground mt-1">Обязательный первичный срез.</p>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-sm font-bold">3</div>
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 border bg-card">
                <h4 className="font-bold text-sm">Глубокая диагностика</h4>
                <p className="text-sm text-muted-foreground mt-1">Уровни A и B по узким местам.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Catalog Hierarchy */}
      <section className="border-t pt-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 text-center">5. Архитектура продуктов</h2>
        <h3 className="text-3xl font-bold tracking-tight mb-12 text-center">Иерархия решений</h3>
        
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="bg-primary text-primary-foreground p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div>
              <div className="text-xs font-mono font-bold mb-2 opacity-80">ОБЯЗАТЕЛЬНЫЙ ВХОД</div>
              <h4 className="text-2xl font-bold mb-2">A0: Экспресс-аудит (FinCheck)</h4>
              <p className="opacity-90 max-w-xl">Быстрая калибровка системы, постановка диагноза и определение, нужна ли глубокая экспертиза.</p>
            </div>
            <Link href="/product/a0-fincheck">
              <Button variant="secondary" className="rounded-none shrink-0 text-secondary-foreground font-bold">Подробнее</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border bg-secondary/10 p-6 md:p-8">
              <div className="text-xs font-mono font-bold mb-2 text-muted-foreground">ФУНДАМЕНТ</div>
              <h4 className="text-xl font-bold mb-2">Уровень A (Основа)</h4>
              <p className="text-sm text-muted-foreground mb-6">Оргструктура, команды, стратегия.</p>
              <div className="space-y-3">
                <Link href="/product/a1-org-audit"><a className="block text-sm font-medium hover:text-primary transition-colors border-b pb-2">&rarr; A1: Аудит оргструктуры</a></Link>
                <Link href="/product/a2-mgmt-team"><a className="block text-sm font-medium hover:text-primary transition-colors border-b pb-2">&rarr; A2: Оценка команды</a></Link>
              </div>
            </div>
            
            <div className="border bg-secondary/10 p-6 md:p-8">
              <div className="text-xs font-mono font-bold mb-2 text-muted-foreground">ОПЕРАЦИИ</div>
              <h4 className="text-xl font-bold mb-2">Уровень B (Процессы)</h4>
              <p className="text-sm text-muted-foreground mb-6">Бизнес-процессы, IT-архитектура.</p>
              <div className="space-y-3">
                <Link href="/product/b1-process"><a className="block text-sm font-medium hover:text-primary transition-colors border-b pb-2">&rarr; B1: Аудит бизнес-процессов</a></Link>
                <Link href="/product/b3-it-audit"><a className="block text-sm font-medium hover:text-primary transition-colors border-b pb-2">&rarr; B3: ИТ-аудит</a></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Methodology Limits & 7. Boundaries */}
      <section className="border-t pt-16 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">6. Принципы</h2>
          <h3 className="text-2xl font-bold tracking-tight mb-6">Методология</h3>
          <ul className="space-y-6">
            <li>
              <h4 className="font-bold flex items-center gap-2 mb-2"><Scale className="w-4 h-4"/> Доказательность</h4>
              <p className="text-sm text-muted-foreground">Выводы на фактах и метриках, а не мнениях.</p>
            </li>
            <li>
              <h4 className="font-bold flex items-center gap-2 mb-2"><Target className="w-4 h-4"/> Системность</h4>
              <p className="text-sm text-muted-foreground">Ни один процесс не рассматривается в вакууме.</p>
            </li>
          </ul>
        </div>

        <div className="bg-destructive/5 border border-destructive/20 p-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-destructive mb-4">7. Границы</h2>
          <h3 className="text-2xl font-bold tracking-tight mb-6">Честные ограничения</h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <XOctagon className="w-5 h-5 text-destructive shrink-0" />
              <span><strong>Мы не принимаем решения за вас.</strong> Наш продукт — ясность.</span>
            </li>
            <li className="flex gap-3">
              <XOctagon className="w-5 h-5 text-destructive shrink-0" />
              <span><strong>Диагностика ≠ Внедрение.</strong> Мы проектируем архитектуру, внедряет ваша команда или специализированные подрядчики.</span>
            </li>
            <li className="flex gap-3">
              <XOctagon className="w-5 h-5 text-destructive shrink-0" />
              <span><strong>Искаженные данные = искаженные выводы.</strong> Заказчик отвечает за полноту информации.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="border-t pt-16 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance">
          Перестаньте лечить симптомы. <br/>Найдите корневую проблему.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          Запишитесь на короткую 15-минутную вводную встречу. Мы обсудим ситуацию и решим, имеет ли смысл запускать FinCheck.
        </p>
        <Link href="/catalog">
          <Button size="lg" className="rounded-none font-bold px-10 h-14 text-base shadow-lg hover:shadow-xl transition-all">
            Запросить FinCheck
          </Button>
        </Link>
      </section>

    </div>
  );
}