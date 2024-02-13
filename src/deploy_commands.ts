import { REST, Routes } from 'discord.js';
import {env} from "@env/server"
import fs from 'node:fs';
import path from 'node:path';
import whoami from './commands/util/whoami';

const commands = [whoami.data];
// Grab all the command folders from the commands directory you created earlier
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);


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
