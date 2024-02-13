import { env } from "@env/server"

import { ApplicationCommand, Client, Collection, CommandInteraction, CommandInteractionOptionResolver, Events, SlashCommandBuilder, type ApplicationCommandData} from "discord.js"
import index from '@/commands/index'


const client = new Client({intents:['Guilds','GuildMessages','GuildMembers','MessageContent']});
const guild = client.guilds.cache.get('1205479733844910131')
var commands:Collection<string,cmd> = new Collection();
type cmd = {
    data:SlashCommandBuilder,
    execute:CallableFunction
}
for (let i = 0; i < index.length; i++) {
    commands.set(index[i].data.name,index[i])
}


client.once(Events.ClientReady, readyClient =>{
    console.log(`[LOG] Client Logged in as ${readyClient.user.tag}.`)
});
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = commands.get(interaction.commandName);
	
	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}
	const member = interaction.guild?.members.cache.get(interaction.user.id)
        if(!member?.roles.cache.some(role=>role.id==env.role)){
            await interaction.reply("No perms")
			return;
        }
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});

client.login(env.token).catch((err)=>{
    console.log(`[ERROR] ${err}`)
   }) ;