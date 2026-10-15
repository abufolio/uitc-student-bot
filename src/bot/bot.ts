import { Bot } from "grammy";

import { env } from "../config/env.js";

export const bot = new Bot(env.botToken);

// Global error handler
bot.catch((error) => {
  console.error("❌ Bot update bilan ishlashda xatolik yuz berdi:");
  console.error(error);
});
