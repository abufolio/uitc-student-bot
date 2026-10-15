import { bot } from "./bot/bot.js";

import { registerStartHandler } from "./bot/handlers/start.js";
import { registerHelpHandler } from "./bot/handlers/help.js";
import { registerMenuHandlers } from "./bot/handlers/menu.js";

// Handlerlarni ro'yxatdan o'tkazish
registerStartHandler(bot);
registerHelpHandler(bot);
registerMenuHandlers(bot);

// Botni ishga tushirish
bot.start();

console.log("🤖 UITC Student Bot is running...");
