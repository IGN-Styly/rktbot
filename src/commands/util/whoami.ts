import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
    "data":new SlashCommandBuilder()
        .setName("whoami")
        .setDescription("Prints effective user name"),
    async execute(interaction:CommandInteraction){
        await interaction.reply("hello");
    }
}

