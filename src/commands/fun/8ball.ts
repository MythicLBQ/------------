import { Yuui } from "structs/Yuui";
import { Command } from "../../structs/command";
import { CommandInteraction, AnyTextChannelWithoutGroup, Uncached, ApplicationCommandTypes, ApplicationCommandOptionTypes } from "oceanic.js";

export const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
  
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
  
    "Don't count on it.",
    "My reply is no.",
    "My Sources say no.",
    "Outlook not so good.",
    "Very doubtful."
  ];

export default class CrystalBallCommand extends Command {
    constructor(client: Yuui) {
        super(client, {
            name: "crystalball",
            description: "ask a question and I will answer",
            group: "fun",
            slash: {
                enabled: true,
                type: ApplicationCommandTypes.CHAT_INPUT,
                options: [
                    {
                        name: "question",
                        description: "question for me",
                        type: ApplicationCommandOptionTypes.STRING
                    },
                ],
            }
        });
    }

    public async interactionRun(interaction: CommandInteraction<AnyTextChannelWithoutGroup | Uncached>): Promise<void> {
        const aws = answers[Math.floor(Math.random() * answers.length)];
        const question = interaction.data.options.getString("question");

        if(question){
            interaction.createMessage({
                content: `You asked: ${question}, Fate Determined: ${aws}`
            })
        } else {
            interaction.createMessage({
                content: `Please provide me a question to answer`
            });
        }
    }
}