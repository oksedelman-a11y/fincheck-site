import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { LayoutGrid, Layers, FileText, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Обзор" },
    { href: "/catalog", label: "Каталог услуг" },
    { href: "/methodology", label: "Методология" },
    { href: "/pricing", label: "Логика ценообразования" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-display font-bold text-xl tracking-tight">FinCheck</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={cn(
                  "transition-colors hover:text-foreground/80",
                  location === link.href ? "text-foreground" : "text-foreground/60"
                )}>
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center">
          <Link href="/catalog">
            <a className="inline-flex h-9 items-center justify-center rounded-none bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Запросить FinCheck
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
