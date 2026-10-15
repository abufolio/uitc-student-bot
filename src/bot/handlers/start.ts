import type { Bot } from "grammy";
import { mainKeyboard } from "../keyboards/main.keyboard.js";

export function registerStartHandler(bot: Bot) {
  bot.command("start", async (ctx) => {
    await ctx.reply(
      "👋 Assalomu alaykum!\n\n" +
        "🎓 UITC Student Bot'ga xush kelibsiz!\n\n" +
        "Kerakli bo'limni tanlang:",
      {
        reply_markup: mainKeyboard,
      },
    );
  });
}
