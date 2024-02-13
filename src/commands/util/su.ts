import { env } from "@env/server";
import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
    data:new SlashCommandBuilder()
    .setName("su")
    .setDescription("Enters the sudo Account."),
    async execute(interaction:CommandInteraction){
        const member = interaction.guild?.members.cache.get(interaction.user.id)
        if(member?.roles.cache.some(role=>role.id==env.sudo_role)){
            await interaction.reply({content:"you are already sudo",ephemeral:true})
            return;
        }
        member?.roles.add(env.sudo_role)
        await interaction.reply({content:"You are now in the sudo account.",ephemeral:true})
    }
}