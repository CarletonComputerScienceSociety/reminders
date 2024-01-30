import { Client, TextChannel } from "discord.js";
import { config } from "./config";
import { commands } from "./commands";

export const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

// client.once("ready", () => {
//   console.log("Discord bot is ready! 🤖");
// });

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  if (commands[commandName as keyof typeof commands]) {
    commands[commandName as keyof typeof commands].execute(interaction);
  }
});

export async function sendMessage(channelId: string, message: string) {
  const channel = await client.channels.fetch(channelId);

  if (channel instanceof TextChannel) {
    channel.send(message);
  }
}

client.login(config.DISCORD_TOKEN);
