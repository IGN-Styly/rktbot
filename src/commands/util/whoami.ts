import { BaseInteraction, CommandInteraction, GuildMember, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";

export default {
    "data":new SlashCommandBuilder()
        .setName("whoami")
        .setDescription("Prints effective user name"),
    async execute(interaction:CommandInteraction){
        const member = interaction.guild?.members.cache.get(interaction.user.id)
        if(member?.roles.cache.some(role=>role.id=='1206933463580803083')){
            await interaction.reply("Hello World!");
            return;
        }
        await interaction.reply("No Perms")
        
    }
}

