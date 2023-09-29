<p align="center">
   <img src="https://avatars.githubusercontent.com/u/88400076?s=200&v=4" alt="power" width="300" height="300">
</p>

# Interactions
## 🗡️ An interactions library made for Discord interactions

 `npm i @antibot/interactions`
 
 `yarn add @antibot/interaction`

# Usage

```js
const { Interactions, Command, ApplicationCommandType } = require('@antibot/interactions');
const interactions = new Interactions({
    publicKey: "key",
    botID: "Bot ID",
    botToken: "Bot Token",
    debug: true
});

const pingCommand = new Command()
.Name("animal")
.Type(ApplicationCommandType.Message)
.Description("Send a random adorable animal photo")
.Options([
    {
      name: "animal",
      description: "The type of animal",
      type: ApplicationCommandType.MESSAGE,
      required: true,
      choices: [
        {
          name: "Dog",
          value: "animal_dog",
        },
        {
          name: "Cat",
          value: "animal_cat",
        },
        {
          name: "Penguin",
          value: "animal_penguin",
        },
      ],
    },
  ]);

async function main() {
 await interactions.createGlobalCommand(pingCommand);
}

main();
```

