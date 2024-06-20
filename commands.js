export function setupCommands(bot) {
  bot.start((ctx) => {
      ctx.reply(`Hello ${ctx.from.first_name}!`);
  })

  bot.help((ctx) => {
      ctx.reply('How can I help you?');
  })

  bot.settings((ctx) => {
      ctx.reply('Settings');
  })

  bot.command(['hello', 'hi'], (ctx) => {
      ctx.reply('Hello!');
  })

  bot.hears('cat', (ctx) => {
      ctx.reply('Meow');
  })

  bot.on('text', (ctx) => {
      ctx.reply('I don\'t understand');
  })

  bot.on('sticker', (ctx) => {
      ctx.reply('You sent a sticker');
  })
}