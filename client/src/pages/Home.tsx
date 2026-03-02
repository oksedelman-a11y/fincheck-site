import { Link } from "wouter";
import { 
  ArrowRight, 
  Activity, 
  GitCommit, 
  Search, 
  Briefcase, 
  AlertTriangle, 
  Scale, 
  Target, 
  ShieldAlert, 
  XOctagon, 
  CheckCircle2, 
  XCircle,
  Clock,
  User,
  MessageSquare,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-16">
      
      {/* HERO */}
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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-[1.1]">
            Когда в бизнесе есть данные, люди и отчёты, <br/>но нет ясности.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            FinCheck — управленческая диагностика, которая возвращает целостную картину бизнеса и управляемость.
          </p>
          <p className="text-lg font-medium">
            Ясность через операционную и финансовую диагностику процессов.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Link href="/catalog?level=A0">
              <Button size="lg" className="rounded-none font-bold px-8 h-12 text-base" data-testid="button-understand">
                Понять, что происходит
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/catalog">
              <Button variant="outline" size="lg" className="rounded-none font-bold px-8 h-12 text-base" data-testid="button-catalog">
                Каталог услуг
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Блок: В какой момент нужна управленческая диагностика */}
      <section className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 font-mono">Ситуация</h2>
          <h3 className="text-3xl font-bold tracking-tight">В какой момент нужна диагностика</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Когда привычные инструменты управления перестают давать результат, а цена ошибки в решениях становится критической.
          </p>
        </div>
        
        <div className="space-y-6 bg-secondary/30 p-8 border border-border/50">
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-1" />
              <span className="text-lg font-medium leading-tight">отчёты есть, но нет уверенности</span>
            </li>
            <li className="flex gap-4 items-start">
              <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-1" />
              <span className="text-lg font-medium leading-tight">цифры противоречат друг другу</span>
            </li>
            <li className="flex gap-4 items-start">
              <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-1" />
              <span className="text-lg font-medium leading-tight">решения принимаются интуитивно</span>
            </li>
            <li className="flex gap-4 items-start">
              <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-1" />
              <span className="text-lg font-medium leading-tight">цена ошибки растёт</span>
            </li>
            <li className="flex gap-4 items-start">
              <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-1" />
              <span className="text-lg font-medium leading-tight">рост есть, но система не выдерживает</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Блок: Что такое управленческая диагностика */}
      <section className="border-t pt-16 grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 font-mono">Определение</h2>
            <h3 className="text-3xl font-bold tracking-tight mb-6">Это:</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-center text-lg">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span>временное погружение</span>
              </li>
              <li className="flex gap-3 items-center text-lg">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span>анализ ограниченного контура</span>
              </li>
              <li className="flex gap-3 items-center text-lg">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span>работа с причинами</span>
              </li>
              <li className="flex gap-3 items-center text-lg">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span>восстановление логики</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 font-mono text-destructive">Границы</h2>
            <h3 className="text-3xl font-bold tracking-tight mb-6">Это не:</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-center text-lg opacity-80">
                <XCircle className="w-5 h-5 text-destructive shrink-0" />
                <span>внедрение</span>
              </li>
              <li className="flex gap-3 items-center text-lg opacity-80">
                <XCircle className="w-5 h-5 text-destructive shrink-0" />
                <span>аутсорсинг управления</span>
              </li>
              <li className="flex gap-3 items-center text-lg opacity-80">
                <XCircle className="w-5 h-5 text-destructive shrink-0" />
                <span>управление вместо собственника</span>
              </li>
              <li className="flex gap-3 items-center text-lg opacity-80">
                <XCircle className="w-5 h-5 text-destructive shrink-0" />
                <span>обещание финансового результата</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Блок: Обо мне */}
      <section className="border-t pt-16 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 font-mono">Экспертиза</h2>
          <h3 className="text-3xl font-bold tracking-tight">Обо мне</h3>
        </div>
        <div className="md:col-span-2 space-y-6">
          <p className="text-xl leading-relaxed">
            Я помогаю собственникам и руководителям среднего и крупного бизнеса увидеть реальную картину их операционных и финансовых процессов. Моя задача — не критиковать, а дать твердую опору для принятия решений.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            В основе моего подхода — системный анализ и многолетний опыт работы с корпоративными структурами, где сложность процессов часто скрывает неэффективность. Я фокусируюсь на поиске корневых причин, а не на лечении симптомов.
          </p>
          <div className="flex flex-wrap gap-12 pt-6 grayscale opacity-60">
            <div className="font-bold tracking-tighter text-xl">X5 Group</div>
            <div className="font-bold tracking-tighter text-xl">Магнит</div>
            <div className="font-bold tracking-tighter text-xl">Мегафон</div>
            <div className="font-bold tracking-tighter text-xl">Arena Data</div>
          </div>
        </div>
      </section>

      {/* Блок: Как начинается работа */}
      <section className="border-t pt-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 text-center font-mono">Процесс</h2>
        <h3 className="text-3xl font-bold tracking-tight mb-12 text-center">Как начинается работа</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="border p-6 space-y-4">
            <MessageSquare className="w-6 h-6 text-primary" />
            <h4 className="font-bold">Контакт</h4>
            <p className="text-sm text-muted-foreground">Первичное обсуждение симптомов и задач собственника.</p>
          </div>
          <div className="border p-6 space-y-4">
            <Target className="w-6 h-6 text-primary" />
            <h4 className="font-bold">Формулировка контура</h4>
            <p className="text-sm text-muted-foreground">Определение границ исследования и состава данных.</p>
          </div>
          <div className="border p-6 space-y-4">
            <Activity className="w-6 h-6 text-primary" />
            <h4 className="font-bold">Диагностика</h4>
            <p className="text-sm text-muted-foreground">Глубинная работа с данными, интервью и процессами.</p>
          </div>
          <div className="border p-6 space-y-4 bg-primary text-primary-foreground">
            <FileText className="w-6 h-6 opacity-80" />
            <h4 className="font-bold">Выводы</h4>
            <p className="text-sm opacity-80">Представление отчета с картой рисков и рекомендациями.</p>
          </div>
        </div>
      </section>

      {/* Client Journey (Existing Visual Schema) */}
      <section className="border-t pt-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 text-center font-mono">Архитектура движения</h2>
        <h3 className="text-3xl font-bold tracking-tight mb-12 text-center">Клиентский путь</h3>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-2">
            <div className="flex-1 bg-secondary/30 border border-border/50 p-6 relative">
              <div className="text-xs font-mono font-bold mb-2 text-primary">ШАГ 1: КАЛИБРОВКА</div>
              <h4 className="font-bold text-lg mb-2">A0: FinCheck</h4>
              <p className="text-sm text-muted-foreground">Опциональный входной аудит. Поиск корневой проблемы.</p>
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-border z-10"></div>
            </div>
            <div className="flex-1 flex flex-col gap-2 relative">
              <div className="bg-primary text-primary-foreground p-6">
                <div className="text-xs font-mono font-bold mb-2 opacity-80">ШАГ 2: ПРОЕКТИРОВАНИЕ</div>
                <h4 className="font-bold text-lg mb-2">Уровни A и B</h4>
                <p className="text-sm opacity-90">Внедрение целевых модулей: Ликвидность и Фин. Архитектура.</p>
              </div>
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-border z-10"></div>
            </div>
            <div className="flex-1 bg-secondary/30 border border-border/50 p-6 relative">
              <div className="text-xs font-mono font-bold mb-2 text-primary">ШАГ 3: СБОРКА</div>
              <h4 className="font-bold text-lg mb-2">Уровень C</h4>
              <p className="text-sm text-muted-foreground">Связка модулей в единый интегрированный контур.</p>
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-border z-10"></div>
            </div>
            <div className="flex-1 bg-secondary/10 border border-dashed border-primary/50 p-6">
              <div className="text-xs font-mono font-bold mb-2 text-primary">ШАГ 4: ВНЕДРЕНИЕ</div>
              <h4 className="font-bold text-lg mb-2">Уровень D</h4>
              <p className="text-sm text-muted-foreground">Методологическое сопровождение (Adviser).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Блок: Честные рамки */}
      <section className="border-t pt-16 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 font-mono">Принципы</h2>
          <h3 className="text-3xl font-bold tracking-tight mb-6">Честные рамки</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Я придерживаюсь позиции прозрачности в отношениях с заказчиком. Работа строится на взаимном доверии и четком понимании границ ответственности.
          </p>
        </div>

        <div className="bg-destructive/5 border border-destructive/20 p-8 space-y-6">
          <ul className="space-y-4 text-lg">
            <li className="flex gap-3 items-start">
              <ShieldAlert className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
              <span>можно ограничиться A0</span>
            </li>
            <li className="flex gap-3 items-start">
              <ShieldAlert className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
              <span>можно не продолжать работу</span>
            </li>
            <li className="flex gap-3 items-start">
              <ShieldAlert className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
              <span>диагностика ≠ обязательство на внедрение</span>
            </li>
            <li className="flex gap-3 items-start">
              <ShieldAlert className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
              <span>решения остаются за собственником</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t pt-16 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance">
          Готовы вернуть управление на основе данных?
        </h2>
        <Link href="/catalog?level=A0">
          <Button size="lg" className="rounded-none font-bold px-10 h-14 text-base shadow-lg hover:shadow-xl transition-all">
            Запросить диагностику
          </Button>
        </Link>
      </section>

    </div>
  );
}