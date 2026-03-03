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
  EyeOff,
  Users
} from "lucide-react";

export default function Methodology() {
  return (
    <div className="flex flex-col gap-16 max-w-4xl pb-16">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Метод и принципы</h1>
        <div className="bg-primary text-primary-foreground p-8 md:p-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Услуга управленческой ясности бизнеса</h2>
          <p className="text-xl opacity-90 leading-relaxed max-w-2xl">
            Цель — восстановление пригодной для решений картины.
          </p>
        </div>
      </div>

      <section className="grid md:grid-cols-2 gap-12 border-b pb-16">
        <div>
          <h2 className="text-xl font-bold mb-4 font-mono uppercase tracking-widest text-muted-foreground text-sm">Роль специалиста</h2>
          <h3 className="text-2xl font-bold mb-4">Внешний управленческий аналитик</h3>
          <p className="text-muted-foreground leading-relaxed">
            Свидетель управленческой реальности. Не CFO, не COO, не управленец внутри вашей структуры.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4 font-mono uppercase tracking-widest text-muted-foreground text-sm">Целевая аудитория</h2>
          <h3 className="text-2xl font-bold mb-4">Собственники и CEO</h3>
          <p className="text-muted-foreground leading-relaxed">
            Для тех, кто принимает стратегические решения и нуждается в твердой опоре на факты.
          </p>
        </div>
      </section>

      <section className="bg-secondary/30 p-8 md:p-12 border border-border/50">
        <h2 className="text-xl font-bold mb-6">Когда услуга необходима</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><span>•</span> отчёты есть, но нет уверенности</li>
            <li className="flex gap-2"><span>•</span> цифры противоречат друг другу</li>
            <li className="flex gap-2"><span>•</span> решения принимаются интуитивно</li>
          </ul>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><span>•</span> цена ошибки в управлении растёт</li>
            <li className="flex gap-2"><span>•</span> рост бизнеса идет без управляемости</li>
            <li className="flex gap-2"><span>•</span> туман в процессах и отчетности</li>
          </ul>
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
          <h2 className="text-2xl font-bold mb-6">Результат и критерии качества</h2>
          <ul className="space-y-4">
            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-primary"/> ясная картина реальности</li>
            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-primary"/> выявленные корневые причины</li>
            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-primary"/> карта рисков и точки решений</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6 text-destructive">Границы ответственности</h2>
          <ul className="space-y-4">
            <li className="flex gap-3 items-center"><ShieldAlert className="w-5 h-5 text-destructive"/> снижение неопределенности</li>
            <li className="flex gap-3 items-center"><ShieldAlert className="w-5 h-5 text-destructive"/> рост управляемости</li>
            <li className="flex gap-3 items-center text-muted-foreground"><XCircle className="w-5 h-5"/> не заменяем управленческую волю</li>
          </ul>
        </div>
      </section>

      <section className="border-l-4 border-muted pl-6 py-2 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-bold text-foreground mb-4">Ограничения и честные рамки</h2>
        <p>
          <strong className="text-foreground font-semibold">НЕ:</strong> внедрение, управление вместо собственника, гарантия финрезультата.
        </p>
        <p>
          <strong className="text-foreground font-semibold">ДА:</strong> снижение неопределенности, рост управляемости, ясность для решений.
        </p>
      </section>
    </div>
  );
}