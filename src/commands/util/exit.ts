import { env } from "@env/server";
import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
    data:new SlashCommandBuilder()
    .setName("exit")
    .setDescription("Leaves the sudo Account."),
    async execute(interaction:CommandInteraction){
        const member = interaction.guild?.members.cache.get(interaction.user.id)
        if(member?.roles.cache.some(role=>role.id==env.sudo_role)){
            member?.roles.remove(env.sudo_role)
            await interaction.reply({content:`You are now in <@${interaction.user.id}>`,ephemeral:true})
            return;
        }
       
        await interaction.reply({content:"You aren't logged onto the sudo account.",ephemeral:true})
    }
}