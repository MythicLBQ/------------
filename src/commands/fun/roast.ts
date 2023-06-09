import { Yuui } from "structs/Yuui";
import { Command } from "../../structs/command";
import { CommandInteraction, AnyTextChannelWithoutGroup, Uncached, ApplicationCommandTypes, ApplicationCommandOptionTypes } from "oceanic.js";

export const answers = [
    "You are what happens when women drink during pregnancy.",
    "When I look at you, I wish I could meet you again for the first time… and walk past.",
    "You are the sun in my life… now get 93 million miles away from me.",
    "You have such a beautiful face… But let’s put a bag over that personality.",
    "There is someone out there for everyone. For you, it’s a therapist.",
    "I would smack you, but I’m against animal abuse.",
    "If I wanted to kill myself, I would simply jump from your ego to your IQ.",
    "I can’t wait to spend my whole life without you.",
    "Whoever told you to be yourself, gave you a bad advice.",
    "I didn’t mean to offend you… but it was a huge plus.",
    "I don’t hate you, but if you were drowning, I would give you a high five.",
    "If I throw a stick, will you leave me too?",
    "Sorry I can’t think of an insult dumb enough for you to understand.",
    "I don’t know what makes you so stupid, but it works.",
    "Whatever doesn’t kill you, disappoints me.",
    "It is hilarious how you are trying to fit your entire vocabulary into one sentence.",
    "I like the way you comb your hair, so horns don’t show up.",
    "Have a nice day… somewhere else.",
    "I would call you an idiot, but it would be an insult for stupid people.",
    "I told my therapist about you; she didn’t believe me.",
    "Did you know your incubator had tinted windows? That explains a lot.",
    "The last time I saw something like you, it was behind metal grids.",
    "If I had a dollar every time you shut up, I would give it back as a thank you.",
    "You were so happy for the negativity of your Covid test, we didn’t want to spoil the happiness by telling you it was IQ test.",
    "Honey, only thing bothering me is placed between your ears.",
    "Only thing that is pleasing about our relationship is that you are no longer in it.",
    "Every time I have a stick in my hand, you look like a pinata.",
    "You are like a software update. every time I see you, I immediately think “not now”.",
    "When I look at you, I think to myself where have you been my whole life? Can you go back there?",
    "You are the reason why there are instructions on shampoo bottles.",
    "I think you just need a high five… in the face… with a chair.",
    "When I listen to you, I think you really going to go far. I hope you stay there.",
    "I look at you and think what a waste of two billion years of the evolution.",
    "It would be a great day If you used a glue stick instead of Chapstick.",
    "Yes, I’m fully vaccinated, but I will still not hang out with you.",
    "When I see you coming, I get pre annoyed. I’m just giving myself a head start.",
    "You are the reason why God is not talking to us anymore.",
    "You can’t imagine how much happiness you can bring… by leaving the room.",
    "I know you don’t like me, that says a lot. You need to acquire a better taste.",
    "It’s all about balance… you start talking, I stop listening.",
    "Are you talking to me? I thought you only talk behind my back.",
    "I’m sorry… did my back hurt your knife?",
    "Everyone is allowed to act stupid once, but you… you are abusing that privilege.",
    "Cry me a river, then drown yourself in it.",
    "Ola soy Dora. Can you help me find where we asked?",
    "Somewhere tree is producing oxygen for you. I’m sorry for it.",
    "Earth is full. Go home.",
    "Everyone has purpose in this life, yours is to become an organ donor.",
    "I am jealous of people who didn’t meet you.",
    "Why are you rolling your eyes? Are you looking for your brain?",
    "You didn’t change since last time I saw you. You should.",
    "What is wrong with you? Have you had too many drugs in mental hospital today?",
    "It is better to shut your mouth and make people think you are stupid than open it and remove all doubt.",
    "Hurting you is the least thing I want to do… but it’s still in the list.",
    "Oh, sorry, did the middle of my sentence interrupted the beginning of yours?",
    "Let me tell you. If I don’t answer you the first time, what makes you think the next 25 will work?",
    "I am not ignoring you; I am just giving you a time to understand what you just said.",
    "Every time I think you can’t get any dumber, you are proving me wrong.",
    "Where is your off button?"
];

export default class RoastCommand extends Command {
    constructor(client: Yuui) {
        super(client, {
            name: "roast",
            description: "Have fun roast another user",
            group: "fun",
            slash: {
                enabled: true,
                type: ApplicationCommandTypes.CHAT_INPUT,
                options: [
                    {
                        name: "user",
                        description: "roasts another user",
                        type: ApplicationCommandOptionTypes.USER
                    },
                ],
            }
        });
    }

    public async interactionRun(interaction: CommandInteraction<AnyTextChannelWithoutGroup | Uncached>): Promise<void> {
        const aws = answers[Math.floor(Math.random() * answers.length)];
        const user = interaction.data.options.getUser("user");


        if(user){
            if(user.id === this.client.user.id){
                interaction.createMessage({
                    content: `You cant roast me because Im god! :)`
                });
            }

            interaction.createMessage({
                content: `<@${user.id}>, ${aws}`
            });
        } else {
            interaction.createMessage({
                content: `<@${interaction.user.id}>, ${aws}`
            });
        }
    }
}