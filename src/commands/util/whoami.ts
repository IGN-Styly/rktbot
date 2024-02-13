import { BaseInteraction, CommandInteraction, EmbedBuilder, GuildMember, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import {env }from "@env/server"

export default {
    "data":new SlashCommandBuilder()
        .setName("whoami")
        .setDescription("Prints effective user name"),
    async execute(interaction:CommandInteraction){

        

        const member = interaction.guild?.members.cache.get(interaction.user.id)
        if(member?.roles.cache.some(role=>role.id==env.sudo_role)){
            await interaction.reply({content:"root",ephemeral:true})
            return;
        }
        interaction.reply({content:`<@${interaction.user.id}>`,ephemeral:true})
        
    }
}

