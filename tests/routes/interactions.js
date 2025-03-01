const { Router } = require('@antibot/server');
const {
    verifyKeyMiddleware,
    InteractionResponseType,
    InteractionType,
} = require('discord-interactions');
const config = require('../config.json');
const route = Router();

route.post('/interactions', verifyKeyMiddleware(config.publicKey), (req, res) => {
    const { type, data } = req.body;
    if (type == InteractionType.PING) {
        res.send({ type: InteractionResponseType.PONG });
    }

    if (type == InteractionType.APPLICATION_COMMAND) {
        const name = data;
        if (name === 'real') {
            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    content: 'real',
                },
            });
        }
    }
});

exports.default = route;
