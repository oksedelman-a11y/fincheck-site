import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";
import { sendNewRequestNotification } from "./mailer";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // POST /api/contact — сохранить заявку и отправить уведомление
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactRequestSchema.parse(req.body);
      if (!data.consentGiven) {
        return res.status(400).json({ message: "Необходимо дать согласие на обработку данных" });
      }

      const request = await storage.createContactRequest(data);

      // Отправляем уведомление на почту (не блокируем ответ при ошибке)
      sendNewRequestNotification(data).catch((err) =>
        console.error("Mail send error:", err)
      );

      return res.status(201).json({ ok: true, id: request.id });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: "Некорректные данные", errors: err.errors });
      }
      console.error("Contact form error:", err);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  });

  // GET /api/contact — просмотр всех заявок
  app.get("/api/contact", async (_req, res) => {
    try {
      const requests = await storage.getContactRequests();
      return res.json(requests);
    } catch (err) {
      console.error("Get contacts error:", err);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  });

  return httpServer;
}
