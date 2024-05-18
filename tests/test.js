const {
  Command,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  Interactions,
  Permissions,
  PermissionsBitField,
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
  .Permissions(Permissions({
    Administrator: true,
    AttachFiles: true
  }))
  .ForNSFW(false);
async function test() {
  console.log(cmd)
  console.log(Permissions({
    Administrator: true,
    AttachFiles: true
  }))
}

test();
