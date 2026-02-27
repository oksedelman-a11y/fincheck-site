export default function Footer() {
  return (
    <footer className="w-full border-t py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="font-display font-bold text-lg tracking-tight">Упр.Диагностика</span>
          <p className="text-sm text-muted-foreground mt-2 max-w-sm">
            Системная архитектура управленческой диагностики для владельцев и руководителей бизнеса.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-foreground transition-colors">Договор оферты</a>
        </div>
      </div>
    </footer>
  );
}