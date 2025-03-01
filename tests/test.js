const {
    verifyKeyMiddleware,
    InteractionResponseType,
    InteractionType,
} = require('discord-interactions');
const ngrok = require('ngrok');
const {
    Command,
    ApplicationCommandOptionType,
    ApplicationCommandType,
    Interactions,
    Permissions,
    PermissionsBitField,
} = require('../dist');
const config = require('./config.json');
const interaction = new Interactions({
    publicKey: config.publicKey,
    botID: config.botID,
    botToken: config.botToken,
    debug: true,
    server: {
        settings: {
            routesDirectory: require('path').join(process.cwd(), '/tests/routes/'),
            routesEndpoint: '/',
            port: 3000,
            useJson: true,
            debug: true,
        },
    },
});

const cmd = new Command()
    .Name('real')
    .Description('d')
    .Options([])
    .Permissions(
        Permissions({
            Administrator: true,
            AttachFiles: true,
        }),
    )
    .ForNSFW(false);
const commands = {};
async function test() {
    const url = await ngrok.connect({ addr: 3000, authtoken: config.ngrok });

    Object.assign(commands, cmd);
    interaction.overwriteGuildCommands('845605014663856158', commands);
    console.log(url);
    interaction.server.start();
}

(async () => {
    await test();
})();
