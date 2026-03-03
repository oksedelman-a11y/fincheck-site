import { methodologyPoints } from "@/lib/data";
import { 
  CheckCircle2, 
  XCircle, 
  ShieldAlert, 
  Target, 
  GitCommit, 
  Search, 
  Activity, 
  ArrowRight,
  TrendingUp,
  Map,
  Eye,
  EyeOff
} from "lucide-react";

export default function Methodology() {
  return (
    <div className="flex flex-col gap-16 max-w-4xl pb-16">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Метод и принципы</h1>
        <div className="bg-primary text-primary-foreground p-8 md:p-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Я продаю не диагностику.</h2>
          <p className="text-xl opacity-90 leading-relaxed max-w-2xl">
            Я продаю восстановление управляемости бизнеса. Диагностика — это мой инструмент для достижения этой цели.
          </p>
        </div>
      </div>

      <section className="grid md:grid-cols-2 gap-12 border-b pb-16">
        <div>
          <h2 className="text-xl font-bold mb-4 font-mono uppercase tracking-widest text-muted-foreground text-sm">Что это за услуга</h2>
          <h3 className="text-2xl font-bold mb-4">Услуга управленческой ясности бизнеса</h3>
          <p className="text-muted-foreground leading-relaxed">
            Цель — восстановление пригодной для решений картины. Мы убираем туман и неопределенность, заменяя их твердыми данными.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4 font-mono uppercase tracking-widest text-muted-foreground text-sm">Роль специалиста</h2>
          <h3 className="text-2xl font-bold mb-4">Внешний управленческий аналитик</h3>
          <p className="text-muted-foreground leading-relaxed">
            Свидетель управленческой реальности. Я не CFO, не COO и не штатный управленец. Моя задача — объективная фиксация фактов.
          </p>
        </div>
      </section>

      <section className="space-y-8 border-b pb-16">
        <h2 className="text-2xl font-bold">Метод</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-2"><Map className="w-5 h-5 text-primary"/> as is → to be</h4>
            <p className="text-sm text-muted-foreground">Четкая фиксация текущего состояния и проектирование целевого контура.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-2"><Search className="w-5 h-5 text-primary"/> Метод вопросов</h4>
            <p className="text-sm text-muted-foreground">ЧТО–КАК–КТО–КОГДА–ЗАЧЕМ. Поиск смысла за каждой цифрой и процессом.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-2"><GitCommit className="w-5 h-5 text-primary"/> Метод связей</h4>
            <p className="text-sm text-muted-foreground">3 плоскости: данные / процессы / решения. Ни один отчет не живет в вакууме.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary"/> Аналитика как инструмент</h4>
            <p className="text-sm text-muted-foreground">Аналитика не является самоцелью. Она нужна только для того, чтобы вы могли принять решение.</p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 border-b pb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Результат</h2>
          <ul className="space-y-4">
            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-primary"/> ясная картина реальности</li>
            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-primary"/> выявленные корневые причины</li>
            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-primary"/> карта рисков и точки решений</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6 text-destructive">Честные рамки</h2>
          <ul className="space-y-4">
            <li className="flex gap-3 items-center"><ShieldAlert className="w-5 h-5 text-destructive"/> снижение неопределенности</li>
            <li className="flex gap-3 items-center"><ShieldAlert className="w-5 h-5 text-destructive"/> рост управляемости</li>
            <li className="flex gap-3 items-center text-muted-foreground"><XCircle className="w-5 h-5"/> не заменяем управление собственника</li>
          </ul>
        </div>
      </section>

      <section className="bg-secondary/30 p-8 border border-border/50">
        <h2 className="text-xl font-bold mb-6">Когда необходима диагностика</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><span>•</span> отчёты есть, но нет уверенности</li>
            <li className="flex gap-2"><span>•</span> цифры противоречат</li>
            <li className="flex gap-2"><span>•</span> решения интуитивны</li>
          </ul>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><span>•</span> цена ошибки растёт</li>
            <li className="flex gap-2"><span>•</span> рост без управляемости</li>
            <li className="flex gap-2"><span>•</span> туман в процессах</li>
          </ul>
        </div>
      </section>
    </div>
  );
}