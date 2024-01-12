const express = require("express");
const app = express();

const { Telegraf } = require('telegraf');

const bot = new Telegraf('');
bot.start((ctx) => ctx.reply('Welcome'));
bot.on('text', (ctx) => ctx.reply(ctx.message));
bot.launch();
