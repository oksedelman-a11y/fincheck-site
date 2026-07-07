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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Услуга управленческой ясности бизнес-процесса «Финчек»</h2>
          <p className="text-xl opacity-90 leading-relaxed max-w-2xl">
            Цель — восстановить картину существующего процесса, которой можно доверять при принятии управленческих решений.<br/><br/>
            Сначала понять, что происходит → Потом решать, что менять.
          </p>
        </div>
      </div>

      <section className="grid md:grid-cols-2 gap-12 border-b pb-16">
        <div>
          <h2 className="text-xl font-bold mb-4 font-mono uppercase tracking-widest text-muted-foreground text-sm">Роль специалиста</h2>
          <h3 className="text-2xl font-bold mb-4">Внешний управленческий аналитик</h3>
          <p className="text-muted-foreground leading-relaxed">
            Независимо восстанавливаю фактическую модель отдельного процесса на основе данных, документов и интервью.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4 font-mono uppercase tracking-widest text-muted-foreground text-sm">Целевая аудитория</h2>
          <h3 className="text-2xl font-bold mb-4">Собственники, ЛПР и руководители функций</h3>
          <p className="text-muted-foreground leading-relaxed">
            Для тех, кому необходимо понять, что происходит в процессе на самом деле, прежде чем принимать решения или начинать изменения.
          </p>
        </div>
      </section>

      <section className="bg-secondary/30 p-8 md:p-12 border border-border/50">
        <h2 className="text-xl font-bold mb-6">Когда услуга необходима</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><span>•</span> отчеты противоречат друг другу</li>
            <li className="flex gap-2"><span>•</span> невозможно определить, каким данным доверять</li>
            <li className="flex gap-2"><span>•</span> данные находятся в разных системах и Excel</li>
          </ul>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><span>•</span> процесс зависит от отдельных сотрудников</li>
            <li className="flex gap-2"><span>•</span> невозможно автоматизировать процесс без подготовки</li>
            <li className="flex gap-2"><span>•</span> решения принимаются при высокой степени неопределенности</li>
          </ul>
        </div>
      </section>

      <section className="space-y-8 border-b pb-16">
        <h2 className="text-2xl font-bold">Метод «Финчек»</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-2"><Map className="w-5 h-5 text-primary"/> Clean Data + AS IS</h4>
            <p className="text-sm text-muted-foreground">Авторская методология объединяет практики качества данных и бизнес-анализа (AS IS).<br/>Цель — восстановить достоверную информационную модель существующего процесса без проектирования будущего состояния.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-2"><Search className="w-5 h-5 text-primary"/> Метод вопросов</h4>
            <p className="text-sm text-muted-foreground">Что → Кто → Когда → Как → Зачем<br/>Каждый элемент процесса анализируется через вопросы, позволяющие восстановить его назначение, происхождение, владельца и роль в системе.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-2"><GitCommit className="w-5 h-5 text-primary"/> Метод связей</h4>
            <p className="text-sm text-muted-foreground">Концентрация → Вопросы → Связи<br/>3 плоскости: данные / процессы / решения. Ни один отчет не живет в вакууме.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary"/> Аналитика как инструмент</h4>
            <p className="text-sm text-muted-foreground">Аналитика и не является целью работы.<br/>Диагностика возникает как следствие построения непротиворечивой модели процесса.</p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 border-b pb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Результат</h2>
          <ul className="space-y-4">
            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-primary"/> единая модель данных процесса</li>
            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-primary"/> аналитическая карта процесса</li>
            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-primary"/> карта управленческих изменений</li>
            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-primary"/> выявленные противоречия и ограничения</li>
            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-primary"/> основа для дальнейших управленческих и технологических решений</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Принципы работы</h2>
          <ul className="space-y-4">
            <li className="flex gap-3 items-center text-muted-foreground"><span>•</span> независимость</li>
            <li className="flex gap-3 items-center text-muted-foreground"><span>•</span> временное участие</li>
            <li className="flex gap-3 items-center text-muted-foreground"><span>•</span> скорость</li>
            <li className="flex gap-3 items-center text-muted-foreground"><span>•</span> работа с «сырыми» данными</li>
            <li className="flex gap-3 items-center text-muted-foreground"><span>•</span> ограниченный контур</li>
            <li className="flex gap-3 items-center text-muted-foreground"><span>•</span> экономически оправдано</li>
          </ul>
        </div>
      </section>

      <section className="border-l-4 border-muted pl-6 py-2 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-bold text-foreground mb-4">Ограничения и честные рамки</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-foreground mb-3 text-lg">ДА</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span>•</span> восстанавливаю достоверную модель данных и процесса</li>
              <li className="flex gap-2"><span>•</span> выявляю причины противоречий</li>
              <li className="flex gap-2"><span>•</span> снижаю неопределенность</li>
              <li className="flex gap-2"><span>•</span> создаю основу для принятия решений</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-3 text-lg">НЕТ</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span>•</span> не проектирую будущее состояние процесса</li>
              <li className="flex gap-2"><span>•</span> не внедряю информационные системы</li>
              <li className="flex gap-2"><span>•</span> не управляю компанией вместо собственника</li>
              <li className="flex gap-2"><span>•</span> не гарантирую финансовый результат</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}