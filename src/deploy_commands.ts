import { REST, Routes } from 'discord.js';
import {env} from "@env/server"
import index from "@/commands/index"

var commands = [];
for(var i=0;i<index.length;i++ ){
	commands.push(index[i].data)
}
// Grab all the command folders from the commands directory you created earlier

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(env.token);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data:any = await rest.put(
			Routes.applicationCommands(env.client_id),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();
