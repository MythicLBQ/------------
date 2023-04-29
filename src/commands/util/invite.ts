import { Yuui } from "structs/Yuui";
import { Command } from "../../structs/command";
import { CommandInteraction, AnyTextChannelWithoutGroup, Uncached, ApplicationCommandTypes } from "oceanic.js";

export default class PingCommand extends Command {
    constructor(client: Yuui) {
        super(client, {
            name: "invite",
            description: "gets the current server invite or makes one",
            group: "util",
            slash: {
                enabled: true,
                type: ApplicationCommandTypes.CHAT_INPUT
            }
        });
    }

    public async interactionRun(interaction: CommandInteraction<AnyTextChannelWithoutGroup | Uncached>): Promise<void> {
        this.client.rest.channels.createInvite('1099021303920476260', { maxUses: 0, maxAge: 0 });
        let invites = await this.client.rest.guilds.getInvites('1083797008608940244')

        if(invites){
            invites.filter((i) => {
                if(i.inviter?.id || '1099009131492417669'){
                    interaction.createMessage({
                        embeds: [
                            {
                                author: {
                                    name: interaction.user.username,
                                    iconURL: interaction.user.avatarURL('jpg')
                                },

                                fields: [
                                    {
                                        name: `Current Perm Invite Link:`,
                                        value: `https://discord.gg/${i.code}`
                                    }
                                ],

                                footer: {
                                    iconURL: this.client.user.avatarURL("jpg"),
                                    text: `Created With Love by Mythic`
                                }
                            }
                        ]
                    });
                }
            });
        }
    }
}