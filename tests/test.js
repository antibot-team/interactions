const {
  Command,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  Interactions,
  Permissions,
} = require("../dist");
const config = require("./config.json");
const interaction = new Interactions({
  publicKey: config.publicKey,
  botID: config.botID,
  botToken: config.botToken,
  debug: true,
});

const cmd = new Command()
  .Name("ddd")
  .Description("d")
  .Options([])
  .Permissions(
    Permissions({
      SendMessages: true,
    })
  )
  .ForNSFW(false);
async function test() {
  interaction.createGuildCommand("845605014663856158", cmd);
}

test();
