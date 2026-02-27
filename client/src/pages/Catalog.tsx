import { useState } from "react";
import { Link, useSearch } from "wouter";
import { products } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter } from "lucide-react";

export default function Catalog() {
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  const initialLevel = searchParams.get('level');
  
  // Custom minimal local state since wouter's useSearch is basic
  const [activeFilter, setActiveFilter] = useState<string | null>(initialLevel || null);

  const filteredProducts = activeFilter 
    ? products.filter(p => p.level.startsWith(activeFilter))
    : products;

  const levels = [
    { id: 'A0', label: 'A0: Экспресс' },
    { id: 'A', label: 'Уровень A (Основа)' },
    { id: 'B', label: 'Уровень B (Операции)' }
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Каталог услуг</h1>
        <p className="text-muted-foreground max-w-2xl">
          Стандартизированные продукты управленческой диагностики с понятными границами, входом и выходом.
        </p>
      </div>

      <div className="flex items-center gap-4 pb-4 border-b">
        <Filter className="w-4 h-4 text-muted-foreground" />
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={activeFilter === null ? "default" : "outline"}
            size="sm"
            className="rounded-none h-8"
            onClick={() => setActiveFilter(null)}
            data-testid="filter-all"
          >
            Все продукты
          </Button>
          {levels.map(level => (
            <Button
              key={level.id}
              variant={activeFilter === level.id ? "default" : "outline"}
              size="sm"
              className="rounded-none h-8"
              onClick={() => setActiveFilter(level.id)}
              data-testid={`filter-${level.id}`}
            >
              {level.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <a className="group block border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-sm" data-testid={`card-product-${product.code}`}>
              <div className="flex justify-between items-start mb-4">
                <Badge variant="secondary" className="rounded-none font-mono font-bold px-2 py-1">
                  {product.code}
                </Badge>
                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{product.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                {product.shortDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm pt-4 border-t border-border/50">
                <div>
                  <span className="block text-xs text-muted-foreground mb-1 uppercase tracking-wider">Единица продукта</span>
                  <span className="font-medium truncate block">{product.unitOfProduct}</span>
                </div>
                <div>
                  <span className="block text-xs text-muted-foreground mb-1 uppercase tracking-wider">Роль</span>
                  <span className="font-medium truncate block">{product.role}</span>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}