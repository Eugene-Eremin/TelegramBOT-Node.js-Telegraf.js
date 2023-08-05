const { Telegraf, Markup, Extra } = require('telegraf')

const token = '6541592721:AAETiGpRb7BoaNybSAEJLq_wQAd2DUiZ6_E'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply('Привет!', {
        reply_markup: Markup.inlineKeyboard([
            [Markup.callbackButton('Далее', 'next')],
        ])
    })
})

// Более эстетичнее выглядит
// bot.command('start', (ctx) => {
//     ctx.reply('Привет! <b>Как дела?</b> https://youtube.com/', Extra.markup(
//         Markup.inlineKeyboard([
//             [Markup.callbackButton('Далее', 'next')],
//         ])
//     ).HTML().webPreview(false))
// })


bot.action('next', (ctx) => {
    ctx.editMessageText('Как дела?', {
        reply_markup: Markup.inlineKeyboard([
            [Markup.callbackButton('Хорошо', 'good'), Markup.callbackButton('Плохо', 'bad')],
            [Markup.callbackButton('Удалить сообщение', 'delete')],
        ])
    })
})

bot.action('good', (ctx) => {
    ctx.editMessageText('Отлично!')
})
bot.action('bad', (ctx) => {
    ctx.editMessageText('Плохо... Почему так?')
})

bot.action('delete', (ctx) => {
    ctx.deleteMessage()
})

// ==========

// bot.command('start', (ctx) => {
//     ctx.reply('Привет!', {
//         reply_markup: Markup.inlineKeyboard([
//             [Markup.callbackButton('Кнопка №1', 'one'), Markup.callbackButton('Кнопка №2', 'two')],
//             [Markup.callbackButton('Кнопка №3', 'three'), Markup.callbackButton('Кнопка №4', 'four'), Markup.callbackButton('Кнопка №5', 'five')]
//         ])
//     })
// })

// bot.action('one', (ctx) => {
//     ctx.reply('Вынажали на первую кнопку', {
//         reply_markup: Markup.keyboard([
//             [Markup.callbackButton('Кнопка'), Markup.callbackButton('№1')],
//         ])
//     })
// })

// bot.action('two', (ctx) => {
//     ctx.reply('Вынажали на вторую кнопку', {
//         reply_markup: Markup.keyboard([
//             [Markup.callbackButton('Кнопка'), Markup.callbackButton('№2')],
//         ])
//     })
// })

// bot.action('three', (ctx) => {
//     ctx.reply('Вынажали на третью кнопку')
// })

// bot.action('four', (ctx) => {
//     ctx.reply('Вынажали на четвертую кнопку')
// })

// bot.action('five', (ctx) => {
//     ctx.reply('Вынажали на пятую кнопку')
// })

// bot.on('text', (ctx) => {
//     ctx.reply('что то написали')
//     // так можно но это не удобно, лучше использовать bot.hears ниже
//     // ctx.message.text === 'Кнопка' ? ctx.reply('Общая для 1 и 2') :
//     //     ctx.message.text === '№1' ? ctx.reply('n1') :
//     //         ctx.message.text === '№2' ? ctx.reply('n2') :
//     //             ctx.reply('Ничего')
// })

// bot.hears('Кнопка', (ctx) => {
//     ctx.reply('Общая для 1 и 2')
// })

// bot.hears('№1', (ctx) => {
//     ctx.reply('n1')
// })

// bot.hears('№2', (ctx) => {
//     ctx.reply('n2')
// })

// bot.on('text', (ctx) => {
//     ctx.reply('что то написали')
// })

// ==========

// bot.command('start', (ctx) => {
//     ctx.reply('Привет!', {
//         reply_markup: Markup.keyboard([
//             'Привет'
//         ])
//     })
// })

// bot.on('text', (ctx) => {
//     ctx.reply('Как дела?', {
//         reply_markup: Markup.keyboard([
//             ['Отлично', 'Плохо'],
//             ['Неплохо', 'Нормально', 'Ужасно']
//         ])
//     })
// })

// ==========

// bot.command('start', (ctx) => {
//     console.log('Пользователь запустил бота')
//     console.log(ctx)
//     console.log(ctx.message)
// })

// bot.on('text', (ctx) => {
//     console.log(ctx.message.text)

//     ctx.replyWithPhoto({
//         source: 'files/Без названия.jpg'
//     }, { caption: 'Фото' })
//     // Если понадобится искать файл, который может отсутствовать, то
//     // тут поможет библиотека fs и потом в завимимости есть файл или нет
//     // отдавать найденный файл как показано ниже
//     ctx.replyWithDocument({
//         source: 'files/Резюме.docx'
//     })
// })

// bot.command('help', () => {
//     console.log('Пользователь попросил помощи')
// })

// // video, animation, sticker...
// bot.on('photo', async msg => {
//     console.log('Пользователь прислал фото')
//     console.log(msg)
//     console.log('---')
//     console.log(msg.update.message.photo)
// })

// bot.on('document', async msg => {
//     console.log('Пользователь прислал документ')
//     console.log(msg)
//     console.log('---')
//     console.log(msg.update.message.document)
// })

// bot.on('message', async msg => {
//     console.log('Пользователь что то прислал')
//     console.log(msg)
//     console.log('---')
//     console.log(msg.update.message.text)
// })

bot.launch().then(() => {
    console.log('Бот запущен!')
})