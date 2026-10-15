import type { Bot } from "grammy";

export function registerHelpHandler(bot: Bot) {
  bot.command("help", async (ctx) => {
    await ctx.reply(
      "📚 UITC Student Bot — yordam\n\n" +
        "/start — Botni ishga tushirish\n" +
        "/help — Yordam olish",
    );
  });
}
