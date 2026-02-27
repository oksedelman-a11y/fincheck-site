import { Link } from "wouter";
import { ArrowRight, Activity, GitCommit, Search, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-16">
      {/* Hero Section */}
      <section className="relative flex flex-col items-start gap-6 pt-12 md:pt-24 min-h-[500px] justify-center">
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
          <div className="inline-flex self-start items-center rounded-none border px-2.5 py-0.5 text-xs font-semibold border-primary bg-secondary text-secondary-foreground uppercase tracking-widest">
            Системный подход к управлению
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-[1.1]">
            Управленческая ясность <br/>через объективную диагностику
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Архитектура продуктов по управленческой диагностике уровней A и B. Внешний и независимый взгляд на вашу организационную структуру, бизнес-процессы и управленческую команду.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Link href="/catalog">
              <Button size="lg" className="rounded-none font-medium px-8 h-12" data-testid="button-go-to-catalog">
                Смотреть каталог
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/methodology">
              <Button variant="outline" size="lg" className="rounded-none font-medium px-8 h-12" data-testid="button-go-to-methodology">
                О методологии
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="grid md:grid-cols-2 gap-16 items-start border-t pt-16">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-4">Роль внешнего диагноста</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Внешний аналитик — это не замена вашим топ-менеджерам, а объективный инструмент калибровки системы. Находясь вне корпоративной политики и рутины, диагност способен увидеть структурные искажения, которые скрыты от внутренних участников из-за эффекта "замыливания глаза".
          </p>
          <ul className="space-y-6">
            {[
              { icon: Activity, title: "Независимая экспертиза", desc: "Свобода от внутренних конфликтов интересов. Выводы не подвержены корпоративной политике." },
              { icon: GitCommit, title: "Системное видение", desc: "Понимание взаимосвязей между функциями. Проблема в продажах часто кроется в оргструктуре." },
              { icon: Search, title: "Доказательность", desc: "Выводы строятся на фактах, интервью и метриках, а не на субъективных мнениях сотрудников." }
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-5">
                <div className="p-3 bg-secondary border mt-1">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-secondary/30 p-8 border border-border/50">
          <h3 className="text-xl font-bold tracking-tight mb-8">Архитектура продуктов</h3>
          <div className="space-y-8">
            <div className="group relative">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold flex items-center gap-3">
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 font-mono">Уровень A</span> 
                  Основа
                </h4>
                <Link href="/catalog?level=A" className="text-sm font-medium text-muted-foreground hover:text-foreground">Смотреть &rarr;</Link>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed ml-12">Фундаментальные структуры бизнеса: стратегия, оргструктура, корпоративное управление, финансы.</p>
              <div className="w-full h-px bg-border mt-6"></div>
            </div>
            
            <div className="group relative">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold flex items-center gap-3">
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 font-mono">Уровень B</span> 
                  Операции
                </h4>
                <Link href="/catalog?level=B" className="text-sm font-medium text-muted-foreground hover:text-foreground">Смотреть &rarr;</Link>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed ml-12">Процессы и операционная эффективность: бизнес-процессы, IT, HR, маркетинг и продажи.</p>
              <div className="w-full h-px bg-border mt-6"></div>
            </div>

            <div className="group relative">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold flex items-center gap-3 text-muted-foreground">
                  <span className="bg-muted text-muted-foreground text-xs px-2 py-1 font-mono border">Уровень C</span> 
                  Исполнение
                </h4>
              </div>
              <p className="text-sm text-muted-foreground opacity-60 leading-relaxed ml-12">Точечные функции и линейный персонал (не входит в фокус текущего каталога).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Cases Section */}
      <section className="border-t pt-16">
        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-10 text-center">Опыт работы с корпоративными структурами</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-3 font-display font-bold text-2xl tracking-tighter"><Briefcase className="w-6 h-6"/> X5 Group</div>
          <div className="flex items-center gap-3 font-display font-bold text-2xl tracking-tighter"><Briefcase className="w-6 h-6"/> Магнит</div>
          <div className="flex items-center gap-3 font-display font-bold text-2xl tracking-tighter"><Briefcase className="w-6 h-6"/> Мегафон</div>
          <div className="flex items-center gap-3 font-display font-bold text-2xl tracking-tighter"><Briefcase className="w-6 h-6"/> Arena Data</div>
        </div>
      </section>
    </div>
  );
}