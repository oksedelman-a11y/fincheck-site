import { Link } from "wouter";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="font-display font-bold text-lg tracking-tight">FinCheck</span>
          <p className="text-sm text-muted-foreground mt-2 max-w-sm">
            Системная архитектура управленческой диагностики для владельцев и руководителей бизнеса.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-muted-foreground items-start md:items-center">
          <Link href="/privacy" className="hover:text-foreground transition-colors">Политика конфиденциальности</Link>
          <Link href="/offer" className="hover:text-foreground transition-colors">Публичная оферта</Link>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="rounded-none hover:bg-secondary/50 transition-all group"
            title="Наверх"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
