import { Telegraf } from "telegraf";
import dotenv from "dotenv";
import { setupCommands } from "./commands.js";

dotenv.config();

// https://telegraf.js.org/
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.catch((err, ctx) => {
    console.log(`Ooops, encountered an error for ${ctx.updateType}`, err)
})

setupCommands(bot);

bot.launch();