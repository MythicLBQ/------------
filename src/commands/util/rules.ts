import { Yuui } from "structs/Yuui";
import { Command } from "../../structs/command";
import { CommandInteraction, AnyTextChannelWithoutGroup, Uncached, ApplicationCommandTypes, ApplicationCommandOptionTypes } from "oceanic.js";

export default class RulesCommand extends Command {
    constructor(client: Yuui) {
        super(client, {
            name: "rules",
            description: "posts the servers rules",
            group: "util",
            slash: {
                enabled: true,
                type: ApplicationCommandTypes.CHAT_INPUT,
            }
        });
    }

    public async interactionRun(interaction: CommandInteraction<AnyTextChannelWithoutGroup | Uncached>): Promise<void> {
        await interaction.createMessage({
            embeds: [
                {
                    title: 'Rules',

                    image: {
                        url: 'https://i.imgur.com/00cVYAi.png'
                    },

                    fields: [
                        {
                            name: '',
                            value: ''
                        }
                    ],

                    footer: {
                        text: 'Created With Love By Mythic'
                    }
                }
            ]
        });
    }
}