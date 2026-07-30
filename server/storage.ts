import { db } from "./db";
import { contactRequests, type ContactRequest, type InsertContactRequest } from "@shared/schema";
import { desc } from "drizzle-orm";

export interface IStorage {
  createContactRequest(data: InsertContactRequest): Promise<ContactRequest>;
  getContactRequests(): Promise<ContactRequest[]>;
}

export class DatabaseStorage implements IStorage {
  async createContactRequest(data: InsertContactRequest): Promise<ContactRequest> {
    const [result] = await db.insert(contactRequests).values(data).returning();
    return result;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return db.select().from(contactRequests).orderBy(desc(contactRequests.createdAt));
  }
}

export const storage = new DatabaseStorage();
