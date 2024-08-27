const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const token = 'YOUR_BOT_TOKEN_HERE'; // Replace with your bot's token

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    // Avoid replying to the bot's own messages
    if (message.author.bot) return;

    // Define responses
    const responses = {
        'hello': 'Hi there! How can I help you today?',
        'how are you': 'I’m just a bot, but I’m doing great! How about you?',
        'bye': 'Goodbye! Have a great day!',
    };

    // Check if the message content matches any of the keywords
    const reply = responses[message.content.toLowerCase()];
    if (reply) {
        message.reply(reply);
    }
});

client.login(token);