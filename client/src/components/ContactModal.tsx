import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle2, Loader2 } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  service?: string;
}

export default function ContactModal({ open, onClose, service }: ContactModalProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setError("Необходимо дать согласие на обработку персональных данных.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message, service: service || null, consentGiven: consent }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Ошибка отправки");
      }
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Не удалось отправить заявку. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setName(""); setContact(""); setMessage("");
    setConsent(false); setError(""); setSuccess(false);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md rounded-none p-8">
        {success ? (
          <div className="flex flex-col items-center text-center gap-4 py-6">
            <CheckCircle2 className="w-12 h-12 text-primary" />
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Заявка отправлена!</DialogTitle>
              <DialogDescription className="text-base text-muted-foreground mt-2">
                Я свяжусь с вами в ближайшее время для уточнения деталей.
              </DialogDescription>
            </DialogHeader>
            <Button onClick={handleClose} className="rounded-none mt-4 w-full">
              Закрыть
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl font-bold tracking-tight">Запросить диагностику</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {service ? `Услуга: ${service}` : "Оставьте контакт — я отвечу и уточню детали."}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="cf-name">Ваше имя *</label>
                <input
                  id="cf-name"
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Как к вам обращаться"
                  className="w-full border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="cf-contact">Email или телефон *</label>
                <input
                  id="cf-contact"
                  type="text"
                  required
                  value={contact}
                  onChange={e => setContact(e.target.value)}
                  placeholder="Как с вами связаться"
                  className="w-full border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="cf-message">Кратко о ситуации</label>
                <textarea
                  id="cf-message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Необязательно, но поможет сразу войти в контекст"
                  rows={3}
                  className="w-full border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
              </div>

              <div className="flex items-start gap-3 pt-1">
                <input
                  id="cf-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={e => setConsent(e.target.checked)}
                  className="mt-0.5 shrink-0 accent-black w-4 h-4"
                />
                <label htmlFor="cf-consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  Я согласен(а) на обработку персональных данных в соответствии с{" "}
                  <a href="/privacy" target="_blank" className="underline hover:text-foreground transition-colors">
                    Политикой конфиденциальности
                  </a>
                </label>
              </div>

              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-none h-11 font-bold text-base"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                {loading ? "Отправляем…" : "Отправить заявку"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
