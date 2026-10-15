import type { Bot } from "grammy";

// 👤 Mening profilim
export function registerMenuHandlers(bot: Bot) {
  bot.hears("👤 Mening profilim", async (ctx) => {
    const user = ctx.from;

    if (!user) {
      await ctx.reply("❌ Foydalanuvchi ma'lumotlarini olish imkonsiz.");
      return;
    }

    await ctx.reply(
      "👤 Mening profilim\n\n" +
        `Telegram ID: ${user.id}\n` +
        `Ism: ${user.first_name}\n` +
        `Username: ${user.username ? `@${user.username}` : "Mavjud emas"}`,
    );
  });

  // 📅 Dars jadvali
  bot.hears("📅 Dars jadvali", async (ctx) => {
    await ctx.reply(
      "📅 Dars jadvali\n\n" +
        "Hozircha siz birorta guruhga biriktirilmagansiz.\n" +
        "Tez orada bu yerda dars jadvalingiz ko‘rinadi.",
    );
  });

  // 📚 Uy vazifalari
  bot.hears("📚 Uy vazifalari", async (ctx) => {
    await ctx.reply(
      "📚 Uy vazifalari\n\n" +
        "Hozircha sizga biriktirilgan uy vazifalari mavjud emas.",
    );
  });

  // 📊 Mening natijalarim
  bot.hears("📊 Mening natijalarim", async (ctx) => {
    await ctx.reply(
      "📊 Mening natijalarim\n\n" +
        "O‘quv natijalaringiz hozircha mavjud emas.\n" +
        "Natijalar bu yerda ko‘rsatiladi.",
    );
  });
}
