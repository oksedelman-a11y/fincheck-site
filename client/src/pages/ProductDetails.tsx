import { useRoute, Link } from "wouter";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronLeft, CheckCircle2, Circle, CheckSquare } from "lucide-react";

export default function ProductDetails() {
  const [match, params] = useRoute("/product/:id");
  const productId = params?.id;
  
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Продукт не найден</h2>
        <Link href="/catalog">
          <Button variant="outline" className="rounded-none">Вернуться в каталог</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 pb-16">
      <div>
        <Link href="/catalog">
          <a className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Назад в каталог
          </a>
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-primary text-primary-foreground text-sm px-2 py-1 font-mono font-bold">
            {product.code}
          </span>
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {product.role}
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          {product.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          {product.shortDescription}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 pt-8 border-t">
        <div className="md:col-span-2 space-y-12">
          
          <section>
            <h3 className="text-lg font-bold mb-4 flex items-center border-b pb-2">
              <span className="bg-muted text-muted-foreground w-6 h-6 inline-flex items-center justify-center rounded-full text-xs mr-3">1</span>
              Вход (Input)
            </h3>
            <ul className="space-y-3 pl-2">
              {product.input.map((item, i) => (
                <li key={i} className="flex items-start text-sm md:text-base">
                  <Circle className="w-4 h-4 text-muted-foreground mr-3 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-4 flex items-center border-b pb-2">
              <span className="bg-muted text-muted-foreground w-6 h-6 inline-flex items-center justify-center rounded-full text-xs mr-3">2</span>
              Процесс (Process)
            </h3>
            <ul className="space-y-3 pl-2">
              {product.process.map((item, i) => (
                <li key={i} className="flex items-start text-sm md:text-base">
                  <CheckSquare className="w-4 h-4 text-primary mr-3 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-4 flex items-center border-b pb-2">
              <span className="bg-muted text-muted-foreground w-6 h-6 inline-flex items-center justify-center rounded-full text-xs mr-3">3</span>
              Выход (Output)
            </h3>
            <div className="bg-secondary/30 p-6 border border-border/50">
              <div className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                Единица продукта: <span className="text-foreground">{product.unitOfProduct}</span>
              </div>
              <ul className="space-y-3">
                {product.output.map((item, i) => (
                  <li key={i} className="flex items-start text-sm md:text-base font-medium">
                    <CheckCircle2 className="w-5 h-5 text-foreground mr-3 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>

        <div className="space-y-8">
          <div className="bg-primary text-primary-foreground p-6">
            <h4 className="font-bold mb-3 uppercase tracking-wider text-xs opacity-80">Логика ценообразования</h4>
            <p className="text-sm leading-relaxed">{product.pricingLogic}</p>
          </div>

          <div className="border p-6 border-l-4 border-l-destructive/50 bg-secondary/10">
            <h4 className="font-bold mb-3 uppercase tracking-wider text-xs text-muted-foreground">Границы ответственности</h4>
            <p className="text-sm leading-relaxed">{product.boundaries}</p>
          </div>
          
          <div className="pt-6">
            <Button className="w-full rounded-none h-12" size="lg">
              Обсудить этот продукт
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}