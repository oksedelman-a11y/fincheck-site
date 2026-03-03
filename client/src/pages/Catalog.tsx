import { useState } from "react";
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

  const filteredProducts = activeFilter 
    ? products.filter(p => p.level === activeFilter)
    : products;

  const levels = [
    { id: 'A0', label: 'A0: Экспресс-ясность', icon: Eye },
    { id: 'A', label: 'Уровень A: Входная ясность', icon: Activity },
    { id: 'B', label: 'Уровень B: Расширенная ясность', icon: Target },
    { id: 'C', label: 'Уровень C: Сводная ясность' },
    { id: 'D', label: 'Уровень D: Сопровождение' }
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Каталог решений</h1>
        <p className="text-muted-foreground max-w-2xl">
          Я продаю не диагностику. Я продаю восстановление управляемости. Диагностика — мой способ это сделать.
        </p>
      </div>

      <div className="flex items-center gap-4 pb-4 border-b overflow-x-auto whitespace-nowrap scrollbar-hide">
        <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
        <div className="flex gap-2">
          <Button 
            variant={activeFilter === null ? "default" : "outline"}
            size="sm"
            className="rounded-none h-8 shrink-0"
            onClick={() => setActiveFilter(null)}
          >
            Все
          </Button>
          {levels.map(level => (
            <Button
              key={level.id}
              variant={activeFilter === level.id ? "default" : "outline"}
              size="sm"
              className="rounded-none h-8 shrink-0"
              onClick={() => setActiveFilter(level.id)}
            >
              {level.icon && <level.icon className="w-3 h-3 mr-2" />}
              {level.label}
            </Button>
          ))}
        </div>
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
                    <Badge variant={product.level === 'A0' ? 'default' : 'secondary'} className="rounded-none font-mono font-bold px-2 py-1">
                      {product.code}
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
    </div>
  );
}