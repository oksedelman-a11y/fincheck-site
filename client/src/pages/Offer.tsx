export default function Offer() {
  return (
    <div className="max-w-3xl mx-auto py-12 prose prose-slate">
      <h1 className="text-3xl font-bold mb-8">Публичная оферта</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">1. Общие положения</h2>
        <p className="mb-4">
          Настоящий документ является публичной офертой в соответствии со Гражданский кодекс Российской Федерации и регулирует порядок оказания аналитических и консультационных услуг.
        </p>
        <div className="bg-secondary/30 p-6 border border-border/50 space-y-2 mb-4">
          <p><strong>Исполнитель:</strong> Эдельман Оксана Евгеньевна</p>
          <p><strong>Самозанятость (НПД), г. Москва</strong></p>
          <p><strong>Бренд:</strong> FinCheck</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">2. Предмет договора</h2>
        <p className="mb-4">Исполнитель оказывает услуги управленческой диагностики и аналитического сопровождения, направленные на восстановление управленческой ясности и формирование управленческих выводов.</p>
        <p className="mb-2">Услуги оказываются:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>в дистанционном или очном формате;</li>
          <li>в рамках согласованного объёма;</li>
          <li>в виде самостоятельных продуктовых единиц.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">3. Важная позиция</h2>
        <p className="mb-2">Услуги:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>не являются аудитом;</li>
          <li>не являются бухгалтерским сопровождением;</li>
          <li>не являются юридической экспертизой;</li>
          <li>не являются внедрением управленческих изменений.</li>
        </ul>
        <p className="mt-4">Результатом является аналитическое заключение и управленческие выводы.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">4. Порядок заключения договора</h2>
        <p className="mb-2">Договор считается заключённым с момента:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>согласования объёма работ;</li>
          <li>выставления счёта;</li>
          <li>поступления оплаты.</li>
        </ul>
        <p className="mt-4">Оплата означает акцепт оферты.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">5. Стоимость и расчёты</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Стоимость определяется исходя из выбранного продукта и согласованного объёма.</li>
          <li>Оплата производится по счёту.</li>
          <li>Исполнитель применяет налог на профессиональный доход (НПД). НДС не начисляется.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">6. Ответственность сторон</h2>
        <div className="space-y-4">
          <div>
            <p className="font-bold mb-2">Исполнитель отвечает за:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>корректность анализа;</li>
              <li>логичность выводов;</li>
              <li>прозрачность аргументации.</li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-2">Исполнитель не отвечает за:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>управленческие решения клиента;</li>
              <li>финансовые результаты;</li>
              <li>последствия действий, принятых на основе анализа.</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 font-medium italic">Клиент самостоятельно принимает решения и несёт ответственность за их реализацию.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">7. Конфиденциальность</h2>
        <p>Информация, полученная в рамках оказания услуг, считается конфиденциальной и не подлежит разглашению без согласия другой стороны, за исключением случаев, предусмотренных законодательством РФ.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">8. Форс-мажор</h2>
        <p>Стороны освобождаются от ответственности при наступлении обстоятельств непреодолимой силы.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">9. Разрешение споров</h2>
        <p>Споры разрешаются путём переговоров. При недостижении соглашения — в суде по месту регистрации Исполнителя (г. Москва).</p>
      </section>
    </div>
  );
}
