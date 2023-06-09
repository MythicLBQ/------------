import { Yuui } from "structs/Yuui";
import { Command } from "../../structs/command";
import { CommandInteraction, AnyTextChannelWithoutGroup, Uncached, ApplicationCommandTypes, ApplicationCommandOptionTypes } from "oceanic.js";

import { Kawaii } from "kawaii-api";
import * as dotenv from 'dotenv';
dotenv.config()

export default class BakaCommand extends Command {
    constructor(client: Yuui) {
        super(client, {
            name: "baka",
            description: "mention a user to mess with",
            group: "roleplay",
            slash: {
                enabled: true,
                type: ApplicationCommandTypes.CHAT_INPUT,
                options: [
                    {
                        name: "user",
                        description: "user to mention",
                        type: ApplicationCommandOptionTypes.USER
                    }
                ],
            }
        });
    }

    public async interactionRun(interaction: CommandInteraction<AnyTextChannelWithoutGroup | Uncached>): Promise<void> {
        const api = new Kawaii(`${process.env.KAWAIITOKEN}`);
        const user = interaction.data.options.getUser("user");
        const data = await api.get("gif", "baka")
        
        if(user){
            if(interaction.user.mention === user.mention){
                interaction.createMessage({
                    content: `We both know if your choosing yourself you must have no friends`
                });
            } else {
                interaction.createMessage({
                    content: `${interaction.user.mention} Called ${user.mention} a Baka`,
                    embeds: [
                        {
                            author: {
                                name: user.username,
                                iconURL: user.avatarURL("jpg")
                            },
    
                            image: {
                                url: data
                            },
    
                            footer: {
                                iconURL: this.client.user.avatarURL("jpg"),
                                text: `Created With Love by Mythic`
                            }
                        },
                    ]
                });
            }
        } else {
            interaction.createMessage({
                content: 'Please provide a user'
            });
        }
    }
}