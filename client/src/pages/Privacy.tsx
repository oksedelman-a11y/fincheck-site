export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto py-12 prose prose-slate">
      <h1 className="text-3xl font-bold mb-8">Политика конфиденциальности</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">1. Общие положения</h2>
        <p className="mb-4">
          Настоящая политика обработки персональных данных разработана в соответствии с требованиями Федеральный закон №152-ФЗ и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных.
        </p>
        <div className="bg-secondary/30 p-6 border border-border/50 space-y-2 mb-4">
          <p><strong>Оператор персональных данных:</strong></p>
          <p>Эдельман Оксана Евгеньевна</p>
          <p><strong>Статус:</strong> физическое лицо, применяющее налог на профессиональный доход (самозанятость)</p>
          <p><strong>Бренд:</strong> Финчек</p>
          <p><strong>Место регистрации:</strong> г. Москва, Российская Федерация</p>
          <p><strong>Email:</strong> finance-check@mail.ru</p>
          <p><strong>Телефон:</strong> +7 (965) 222-965-2</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">2. Какие данные обрабатываются</h2>
        <p className="mb-4">Оператор может обрабатывать следующие данные:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>ФИО;</li>
          <li>адрес электронной почты;</li>
          <li>номер телефона;</li>
          <li>наименование компании;</li>
          <li>иные данные, предоставленные пользователем добровольно через форму обратной связи или в процессе делового взаимодействия.</li>
        </ul>
        <p>Сайт не использует системы веб-аналитики и не осуществляет автоматизированное профилирование пользователей.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">3. Цели обработки</h2>
        <p className="mb-4">Персональные данные обрабатываются исключительно для:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>установления и поддержания деловой связи;</li>
          <li>подготовки коммерческого предложения;</li>
          <li>заключения и исполнения договора оказания услуг;</li>
          <li>выставления счетов и исполнения налоговых обязательств;</li>
          <li>исполнения требований законодательства РФ.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">4. Правовые основания</h2>
        <p className="mb-4">Основания обработки:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>согласие субъекта персональных данных;</li>
          <li>необходимость исполнения договора;</li>
          <li>исполнение требований законодательства РФ.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">5. Порядок хранения</h2>
        <p className="mb-4">Персональные данные:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>не передаются третьим лицам, за исключением случаев, предусмотренных законодательством РФ;</li>
          <li>хранятся в течение срока делового взаимодействия и периода, необходимого для исполнения налоговых обязательств;</li>
          <li>защищаются организационными и техническими мерами.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">6. Права субъекта данных</h2>
        <p className="mb-4">Пользователь имеет право:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>запросить сведения о своих данных;</li>
          <li>потребовать их уточнения или удаления;</li>
          <li>отзывать согласие на обработку.</li>
        </ul>
        <p>Запрос направляется на: <a href="mailto:finance-check@mail.ru" className="text-primary hover:underline">finance-check@mail.ru</a></p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">7. Заключительные положения</h2>
        <p>Политика действует бессрочно до замены новой редакцией.</p>
      </section>
    </div>
  );
}
