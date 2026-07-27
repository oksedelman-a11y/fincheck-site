import { Link } from "wouter";
import { 
  ArrowRight, 
  ArrowDown,
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
  FileText,
  TrendingUp,
  Map,
  Eye,
  EyeOff,
  Phone,
  Mail,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

export default function Home() {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col gap-24 pb-16">
      
      {/* HERO */}
      <section className="relative flex flex-col items-start gap-6 pt-12 md:pt-24 min-h-[500px] justify-center border-b pb-16">
        <div className="absolute right-4 md:right-8 bottom-8 z-10 hidden md:flex">
          <Button
            variant="default"
            size="icon"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
            className="rounded-none w-14 h-14 bg-primary hover:bg-primary/90 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-primary/30 transition-all group shrink-0"
            title="Вниз"
          >
            <ArrowDown className="h-7 w-7 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
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
            Отчёты есть. Вопрос: можно ли им доверять?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Финчек — восстановление достоверной модели процесса.<br/>Чтобы цифры перестали противоречить друг другу, а решения можно было принимать осознанно.
          </p>
          <p className="text-lg font-medium max-w-3xl">
            Ясность через диагностику данных и процессов.<br/>
            Авторская методология, которая объединяет данные и процессы, чтобы понять, что происходит на самом деле и каким данным можно доверять.
          </p>
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                size="lg" 
                className="rounded-none font-bold px-8 h-12 text-base" 
                data-testid="button-understand"
                onClick={scrollToContacts}
              >
                Разобрать ситуацию
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/catalog">
                <Button variant="outline" size="lg" className="rounded-none font-bold px-8 h-12 text-base" data-testid="button-catalog">
                  Каталог услуг
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground max-w-lg mt-2">
              Вы не обязаны сразу заказывать большую работу.<br/>
              Можно начать с экспресс-диагностики и остановиться на этом.
            </p>
          </div>
        </div>
      </section>

      {/* Блок: В какой момент нужна управленческая диагностика */}
      <section className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 font-mono">Ситуация</h2>
          <h3 className="text-3xl font-bold tracking-tight">В какой момент нужна диагностика</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Когда данные разбросаны по разным системам, люди отвечают на один вопрос по-разному, а каждый видит только свой участок процесса.<br/><br/>
            Результат: недели и месяцы уходят на поиск проблемы.<br/>
            А время — это деньги.<br/><br/>
            …и вы понимаете, что дальше тянуть нельзя.
          </p>
        </div>
        
        <div className="space-y-6 bg-secondary/30 p-8 border border-border/50">
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-1" />
              <span className="text-lg font-medium leading-tight">Разные цифры в разных отчетах.</span>
            </li>
            <li className="flex gap-4 items-start">
              <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-1" />
              <span className="text-lg font-medium leading-tight">Не можем сверить дебиторку.</span>
            </li>
            <li className="flex gap-4 items-start">
              <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-1" />
              <span className="text-lg font-medium leading-tight">Не понимаем, сколько товара.</span>
            </li>
            <li className="flex gap-4 items-start">
              <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-1" />
              <span className="text-lg font-medium leading-tight">Бюджет не сходится.</span>
            </li>
            <li className="flex gap-4 items-start">
              <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-1" />
              <span className="text-lg font-medium leading-tight">Не можем согласовать данные между отделами.</span>
            </li>
            <li className="flex gap-4 items-start">
              <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-1" />
              <span className="text-lg font-medium leading-tight">Не можем автоматизировать, сначала нужно разобраться с данными.</span>
            </li>
          </ul>
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
            Меня зовут Оксана Эдельман.<br/>
            Я - управленческий аналитик.<br/>
            Специализируюсь на восстановлении достоверной модели существующих бизнес-процессов. Работаю на стыке данных, процессов и решений.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Моя задача — собрать разрозненную информацию, выявить противоречия и восстановить единую картину процесса, которой можно доверять. Чтобы у вас появилась точка опоры для решений.
          </p>
          <ul className="space-y-3 text-lg text-muted-foreground">
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
              <span>Захожу в конкретный ограниченный контур и разбираюсь, что происходит на самом деле.</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
              <span>Собираю разрозненное в единую картину.</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
              <span>Убираю противоречия и дубли.</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
              <span>Показываю, где процесс разрывается и где никто не отвечает.</span>
            </li>
          </ul>
          <p className="text-lg text-muted-foreground leading-relaxed">
            На выходе — не отчёт, а точка опоры для решений:<br/>
            что происходит → где проблема → почему → что делать дальше.
          </p>
          <div className="flex flex-wrap gap-12 pt-6 grayscale opacity-60">
            <div className="font-bold tracking-tighter text-xl">X5 Group</div>
            <div className="font-bold tracking-tighter text-xl">Магнит</div>
            <div className="font-bold tracking-tighter text-xl">Мегафон</div>
            <div className="font-bold tracking-tighter text-xl">Arenadata</div>
          </div>
        </div>
      </section>

      {/* Блок: Как проходит работа */}
      <section className="border-t pt-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 text-center font-mono">Процесс</h2>
        <h3 className="text-3xl font-bold tracking-tight mb-12 text-center">Как проходит работа</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border p-6 space-y-4">
            <div className="text-xs font-mono font-bold mb-2 text-primary">1. Финчек-старт</div>
            <div className="text-xs text-muted-foreground font-medium">Экспресс (3–5 дней)</div>
            <h4 className="font-bold">Экспресс-диагностика процесса</h4>
            <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
              <li>определяем проблему;</li>
              <li>оцениваем масштаб;</li>
              <li>понимаем, есть ли смысл в полной реконструкции.</li>
            </ul>
            <div className="pt-4 mt-4 border-t border-border">
              <p className="text-sm font-medium">Результат:</p>
              <p className="text-sm text-muted-foreground">Краткое заключение и рекомендация по дальнейшим действиям.</p>
            </div>
          </div>
          
          <div className="border p-6 space-y-4">
            <div className="text-xs font-mono font-bold mb-2 text-primary">2. Финчек</div>
            <div className="text-xs text-muted-foreground font-medium">Полный (2–4 недели)</div>
            <h4 className="font-bold">Полная реконструкция процесса</h4>
            <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
              <li>сбор источников данных;</li>
              <li>построение модели данных;</li>
              <li>интервью с участниками;</li>
              <li>выявление противоречий.</li>
            </ul>
          </div>
          
          <div className="border p-6 space-y-4 bg-primary text-primary-foreground">
            <div className="text-xs font-mono font-bold mb-2 opacity-80">Что получает клиент</div>
            <p className="text-sm opacity-90 italic">В результате — не просто отчёт, а целостная картина процесса и точка опоры для решений.</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-sm mb-1">1. Модель данных процесса (excel).</h4>
                <p className="text-sm opacity-80">Единый источник правды по процессу.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-sm mb-1">2. Аналитическая карта процесса (pdf).</h4>
                <p className="text-sm opacity-80">Карта реальности, разрывов и ответственности.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-sm mb-1">3. Карта управленческих изменений процесса (pdf).</h4>
                <p className="text-sm opacity-80">Логика зависимостей: если хотите Х → сначала должно измениться А, Б, В.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Journey - Hidden by request */}
      <section className="hidden border-t pt-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 text-center font-mono">Архитектура движения</h2>
        <h3 className="text-3xl font-bold tracking-tight mb-12 text-center">Клиентский путь</h3>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-2">
            <div className="flex-1 bg-secondary/30 border border-border/50 p-6 relative">
              <div className="text-xs font-mono font-bold mb-2 text-primary">ШАГ 1: КАЛИБРОВКА</div>
              <h4 className="font-bold text-lg mb-2">Калибровка</h4>
              <p className="text-sm text-muted-foreground">Идентификация проблемы клиента. Сбор источников.</p>
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-border z-10"></div>
            </div>
            <div className="flex-1 flex flex-col gap-2 relative">
              <div className="bg-primary text-primary-foreground p-6">
                <div className="text-xs font-mono font-bold mb-2 opacity-80">ШАГ 2: ЯСНОСТЬ ДАННЫХ</div>
                <h4 className="font-bold text-lg mb-2">Уровень A</h4>
                <p className="text-sm opacity-90">Построение единой модели данных "Что реально существует?"</p>
              </div>
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-border z-10"></div>
            </div>
            <div className="flex-1 bg-secondary/30 border border-border/50 p-6 relative">
              <div className="text-xs font-mono font-bold mb-2 text-primary">ШАГ 3: ЯСНОСТЬ ПРОЦЕССА</div>
              <h4 className="font-bold text-lg mb-2">Уровень B</h4>
              <p className="text-sm text-muted-foreground">Построение аналитической карты. Управленческая карта реальности, связи данных и процессов "Как это работает сегодня?"</p>
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-border z-10"></div>
            </div>
            <div className="flex-1 bg-secondary/10 border border-dashed border-primary/50 p-6">
              <div className="text-xs font-mono font-bold mb-2 text-primary">ШАГ 4: СИСТЕМНОСТЬ</div>
              <h4 className="font-bold text-lg mb-2">Уровень C</h4>
              <p className="text-sm text-muted-foreground">Построение навигационной карты. Карта навигации и направлений изменений "Что можно делать дальше?"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Блок: Принципы */}
      <section className="border-t pt-16 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 font-mono">Принципы</h2>
          <h3 className="text-3xl font-bold tracking-tight mb-6">Честные рамки</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Я придерживаюсь позиции прозрачности в отношениях с заказчиком. <br/>
            Работа строится на взаимном доверии и четком понимании границ ответственности.
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

      {/* Блок: Что это за работа */}
      <section className="border-t pt-16 grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 font-mono">Что это за работа</h2>
            <h3 className="text-3xl font-bold tracking-tight mb-6">Это:</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-center text-lg">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span>восстановление существующего процесса (As Is)</span>
              </li>
              <li className="flex gap-3 items-center text-lg">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span>объединение данных из разных источников</span>
              </li>
              <li className="flex gap-3 items-center text-lg">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span>выявление противоречий</span>
              </li>
              <li className="flex gap-3 items-center text-lg">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span>построение единой модели</span>
              </li>
              <li className="flex gap-3 items-center text-lg">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span>основа для дальнейших изменений</span>
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
              <li className="flex gap-3 items-center text-lg opacity-80">
                <XCircle className="w-5 h-5 text-destructive shrink-0" />
                <span>разработка будущего процесса (To Be)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t pt-16 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance">
          Готовы вернуть управляемость?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            asChild
            size="lg" 
            className="rounded-none font-bold px-10 h-14 text-base shadow-lg hover:shadow-xl transition-all"
          >
            <a href="mailto:finance-check@mail.ru">Запросить диагностику</a>
          </Button>
          <Button 
            asChild
            variant="outline"
            size="lg" 
            className="rounded-none font-bold px-10 h-14 text-base border-2 hover:bg-secondary/20 transition-all flex items-center gap-2"
          >
            <a href="/fincheck-presentation.pptx" download>
              <FileText className="w-5 h-5" />
              Скачать презентацию
            </a>
          </Button>
        </div>
      </section>

      {/* Блок Контакты */}
      <section id="contacts" className="border-t pt-16 grid md:grid-cols-3 gap-12 scroll-mt-20">
        <div className="md:col-span-1">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 font-mono">Связь</h2>
          <h3 className="text-3xl font-bold tracking-tight">Контакты</h3>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              < Phone className="w-5 h-5 text-primary" />
              <a href="tel:+79652229652" className="text-lg font-medium hover:text-primary transition-colors">+7 (965) 222-965-2</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:finance-check@mail.ru" className="text-lg font-medium hover:text-primary transition-colors">finance-check@mail.ru</a>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Send className="w-5 h-5 text-primary" />
              <a 
                href="https://t.me/fin_check" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-medium hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
              >
                Дневник финансового диагноста (ТГ)
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Send className="w-5 h-5 text-primary" />
              <a 
                href="https://max.ru/join/3GneEYjgmtioFAOiSiV9cM32QbmR-1zkQ6k78EPRbdI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-medium hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
              >
                Дневник финансового диагноста (Max)
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-primary" />
              <a 
                href="https://max.ru/u/f9LHodD0cOILP3L2e51AWq_VVhq7lauGrcHfudXs4kERyADG269KsyOCU0E" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-medium hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
              >
                Отправить запрос в Max
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
