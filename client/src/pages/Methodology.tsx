import { 
  GitCommit, 
  Map,
  Search
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

      <section className="border-b pb-16">
        <h2 className="text-2xl font-bold mb-4">Кто я и зачем</h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          Я — внешний управленческий аналитик с финансовым бэкграудом в корпорациях и управлении миллиардными финансовыми потоками. Моя задача — помочь навести порядок: собрать разрозненные данные, документы и процессы сотрудников в единую картину. Я работаю с собственниками и руководителями, которым важно опираться на факты, а не на догадки или противоречивые отчеты.
        </p>
      </section>

      <section className="space-y-8 border-b pb-16">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Метод «Финчек»: Clean Data + AS IS</h2>
          <p className="text-sm text-muted-foreground">Я не придумываю, как должно быть. Я восстанавливаю то, что есть на самом деле (подход AS IS), и параллельно навожу порядок в данных.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-2"><Search className="w-5 h-5 text-primary"/> Метод вопросов</h4>
            <p className="text-sm text-muted-foreground">Что → Кто → Когда → Как → Зачем<br/>Каждый элемент процесса анализируется через вопросы, позволяющие восстановить его назначение, происхождение, владельца и роль в системе.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-2"><GitCommit className="w-5 h-5 text-primary"/> Метод связей</h4>
            <p className="text-sm text-muted-foreground">Концентрация → Вопросы → Связи<br/>3 плоскости: данные / процессы / решения. Ни один отчет не живет в вакууме.</p>
          </div>
        </div>
      </section>

      <section className="border-t pt-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Что именно я проверяю внутри процесса</h2>
          <p className="text-lg font-medium mb-6">Не просто отчёты. Связи.</p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Я смотрю, как операционное действие превращается в данные, документы и деньги.
          </p>
          <p className="font-medium mb-3">Проверяю:</p>
          <ul className="space-y-2 text-muted-foreground mb-8">
            <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>где появляется каждая сущность;</span></li>
            <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>из какого источника берутся данные;</span></li>
            <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>как одна операция связана с другой;</span></li>
            <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>где данные теряются или дублируются;</span></li>
            <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>где возникают расхождения;</span></li>
            <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>как операционное действие отражается в финансовой картине.</span></li>
          </ul>

          <p className="font-medium mb-3">Смотрю на процесс целиком</p>
          <div className="bg-primary text-primary-foreground p-4 font-mono text-sm mb-6">
            Продажи → Логистика → Документооборот → Финансы
          </div>

          <div className="border-l-4 border-primary pl-6 space-y-3 mb-8">
            <p className="font-medium">Я не ищу виноватых</p>
            <p className="text-muted-foreground leading-relaxed">
              Я не прихожу проверять, кто работает неправильно.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Я ищу, где именно разрывается логика процесса.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Внешний взгляд позволяет посмотреть на процесс целиком и задать вопросы, которые внутри компании иногда остаются без ответа.
            </p>
          </div>

          <p className="font-medium mb-3">На выходе</p>
          <p className="text-muted-foreground font-mono text-sm">
            что происходит → где разрыв → почему он возникает → что с этим можно сделать.
          </p>
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