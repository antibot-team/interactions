<p align="center">
   <img src="https://avatars.githubusercontent.com/u/88400076?s=200&v=4" alt="power" width="300" height="300">
</p>

# Interactions
## 🗡️ An interactions library made for Discord interactions

 `npm i @antibot/interactions`
 
 `yarn add @antibot/interaction`

# Usage

```js
const { Interactions, Command } = require('@antibot/interactions');
const interactions = new Interactions({
    publicKey: "key",
    botID: "Bot ID",
    botToken: "Bot Token"
});

const pingCommand = new Command()
.setName("ping")
.setDescription("Pong!")
.setOptions([]);

async function main() {
    const pushCommand = await interactions.createGlobalCommand(pingCommand);
}

main();
```

