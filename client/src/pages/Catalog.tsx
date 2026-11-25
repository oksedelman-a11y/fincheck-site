import { useState, useEffect } from "react";
import { Link, useSearch } from "wouter";
import { products } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

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

  const PricingLogic = () => (
    <div className="mt-20 pt-16 border-t max-w-3xl">
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
  );

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Каталог решений</h1>
      </div>

      <div className="space-y-12">
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
                   <h3 className="text-lg font-bold mb-3 tracking-tight leading-tight">
                     {product.id === "a0-fincheck"
                       ? "1. Финчек-старт. Экспресс-разбор процесса (конкретный процесс не определен, нужно понять фокус работ)"
                       : product.id === "a1"
                         ? "2. Финчек. Полный разбор 1 процесса (определенного процесса: расчеты, ДЗ, КЗ, ОДДС, ОДР и т.д)"
                         : product.title}
                   </h3>
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
      
      <PricingLogic />
    </div>
  );
}
