import { BaseInteraction, CommandInteraction, GuildMember, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import {env }from "@env/server"

export default {
    "data":new SlashCommandBuilder()
        .setName("whoami")
        .setDescription("Prints effective user name"),
    async execute(interaction:CommandInteraction){
        
        interaction.reply("hello there")
        
    }
}

