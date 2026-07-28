import { useState, useEffect } from "react";
import { Link, useSearch } from "wouter";
import { products } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter, Eye, Activity, Target } from "lucide-react";

export default function Catalog() {
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  const initialLevel = searchParams.get('level');
  
  const [activeFilter, setActiveFilter] = useState<string | null>(initialLevel || null);

  useEffect(() => {
    if (initialLevel) {
      setActiveFilter(initialLevel);
    }
  }, [initialLevel]);

  const filteredProducts = activeFilter 
    ? products.filter(p => p.level === activeFilter && !p.isHidden)
    : products.filter(p => !p.isHidden);

  const levels = [
    { id: 'A0', label: 'A0: Экспресс-ясность', icon: Eye },
    { id: 'A', label: 'Уровень A: Входная ясность', icon: Activity },
    { id: 'B', label: 'Уровень B: Расширенная ясность', icon: Target },
    { id: 'C', label: 'Уровень C: Сводная ясность' },
    { id: 'D', label: 'Уровень D: Сопровождение' }
  ];

  const ProcessBlock = () => (
    <div className="mt-20 pt-16 border-t space-y-10">

      {/* Блок: Что именно я проверяю */}
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Что именно я проверяю внутри процесса</h2>
        <p className="text-lg font-medium mb-6">Не просто отчёты. Связи.</p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Я смотрю, как операционное действие превращается в данные, документы и деньги.
        </p>
        <p className="text-sm text-muted-foreground mb-2">Например:</p>
        <div className="bg-secondary/30 border border-border/50 p-4 font-mono text-sm mb-8">
          заказ → отгрузка → документы → задолженность → оплата
        </div>

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

        <p className="text-muted-foreground leading-relaxed mb-6">
          Сопоставляю данные разных источников с тем, как участники процесса понимают происходящее.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Потому что одна и та же операция может выглядеть по-разному для каждого отдела.
        </p>

        <p className="font-medium mb-3">Моя задача — восстановить связь:</p>
        <p className="text-muted-foreground font-mono text-sm mb-8">
          что произошло → где это зафиксировано → как это повлияло на деньги → что видит руководитель.
        </p>

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
        <p className="text-muted-foreground leading-relaxed mb-2">Не просто список расхождений.</p>
        <p className="text-muted-foreground leading-relaxed mb-2">А восстановленная картина:</p>
        <p className="text-muted-foreground font-mono text-sm">
          что происходит → где разрыв → почему он возникает → что с этим можно сделать.
        </p>
      </div>

      {/* Блок: Как формируется стоимость */}
      <div className="pt-10 border-t max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Как формируется стоимость</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Стоимость зависит от масштаба и сложности исследуемого процесса: количества источников данных, информационных систем, участников и периода восстановления модели.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Каждый проект оценивается индивидуально после определения границ процесса.
        </p>
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b pb-3">
            <span className="font-medium">Финчек-старт</span>
            <span className="font-mono font-bold text-primary">30 000 ₽</span>
          </div>
          <div className="flex justify-between items-center border-b pb-3">
            <span className="font-medium">Полный Финчек</span>
            <span className="font-mono font-bold text-primary">от 90 000 ₽</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Точная стоимость определяется после оценки границ и сложности процесса.
        </p>
      </div>

    </div>
  );

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Каталог решений</h1>
      </div>

      <div className="space-y-12">
        {/* Intro per level if filtered */}
        {activeFilter === 'A' && (
          <div className="bg-secondary/20 p-6 border-l-4 border-primary">
            <p className="text-sm font-medium leading-relaxed">
              Быстрое, точечное восстановление управляемости в конкретном финансовом контуре. <br/>
              <span className="text-muted-foreground">Роль: временный операционный аналитик (захожу → восстанавливаю контроль → выхожу).</span>
            </p>
          </div>
        )}
        {activeFilter === 'B' && (
          <div className="bg-secondary/20 p-6 border-l-4 border-primary">
            <p className="text-sm font-medium leading-relaxed">
              Связать деньги, решения и действия в единую управленческую картину. <br/>
              <span className="text-muted-foreground">Не продаётся первым. Не обязателен. Не универсален.</span>
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <a className={`group flex flex-col justify-between border bg-card p-6 transition-all hover:border-primary hover:shadow-sm ${product.level === 'A0' ? 'border-primary border-l-4 shadow-sm' : ''}`}>
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={product.code === 'A0' || product.code === 'A1' ? 'default' : 'secondary'} className="rounded-none font-mono font-bold px-2 py-1 bg-black text-white hover:bg-black/90">
                      {product.code === 'A0' ? '1' : product.code === 'A1' ? '2' : product.code}
                    </Badge>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 tracking-tight leading-tight">{product.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                    {product.shortDescription}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-3 text-sm pt-4 border-t border-border/50 mt-auto">
                  <div>
                    <span className="block text-xs text-muted-foreground mb-1 uppercase tracking-wider">Единица продукта</span>
                    <span className="font-medium line-clamp-1">{product.unitOfProduct}</span>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
      
      <ProcessBlock />
    </div>
  );
}
