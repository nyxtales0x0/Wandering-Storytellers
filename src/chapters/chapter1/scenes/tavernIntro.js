import * as stats from "../../../stats.js";

export const start = {
    text() {return `You take a deep sigh and slump back in the chair, taking in your surrounding. You are sitting in a tavern named Winter Bear's Tavern in a city called Vernes. The building itself is not quite large, infact small you would say compared to the taverns in the Kingdom but it's surptisingly well maintained and it has a cozy spirit to it which makes you feel at home. The tavern is bustling with life, it's the liveliest place of the entirety of Vernes at this time of the day. You let the environment take over you and can listen to a pretty voice performing on a small stage on one side of the tavern, her voice so comforting that it calms down your nerves and make you feel relaxed. On the other side of the tavern you see a group of nobles betting and playing cards, on some other table are a bunch of drunkards crackling and laughing to their hearts content. But you are all on your own this evening.
    
    You now let the surrounding fade away and focus on your table. There lies a warm loaf of bread and some honey along with a half filed mug of ale. You take a small piece of bread, dip it in the honey and let the taste flow in your mouth calming down your nerves. You shift your gaze to your left, looking at the roaring flames of the fireplace, soaking in all the warmth your body can. You can see the reflection of your face in the dancing flames and can hear your name as if the flames itself are calling you.`},
    getTextInputFor: "mcName",
    choices: [
        {
            text: "Continue",
            run: function () {
                start.nextScene = helloRalf;
            }
        }   
    ]
}

const helloRalf = {
    text() {return `Then in the corner of your eyes you see somebody walking towards you, seems like you will be left to your own thoughts no longer. You see an atheletic man with a tan skin tone, green emerald like eyes and a thick orange beard approaching towards you.
    
    "Ahh Ralf, good day old man. How's it going?"

    Ralf, the owner of the Winter Bear's tavern. Every time you come back from your quests and ventures Ralf's old tavern is the first place you visit. Ralf has become a regular sight to your eyes since you moved to Vernes. He's one of the few people you have started to get along with in this new town.
    
    "Errr you know them young bloody bastards! Always makin' a mess of this place. This one laddie was fightin' with Valor over Syrine. Stupid dumplings have nothin' better to do than keepin their dirty eyes ove' the waitress and fightin' in my shack." Ralf grunts as he turns a bit angry, You turn your gaze to your right and look at a pale skinned young lady, she has black hair, her eyes sparkling blue like lapiz, with freckles running across her face.`},
    choices: [
        {
            text: `I'm not surprised that people always seem to flirt with her, she looks quite beautiful afterall`,
            run: function() {
                helloRalf.nextScene = whosTheLass;
            }
        },
        {
            text: `She's just an ordinary girl... why waste time on a waitress`,
            run: function() {
                helloRalf.nextScene = whosTheLass;
            }
        },
        {
            text: `Sip your ale`,
            run: function() {
                helloRalf.nextScene = whosTheLass;
            }
        }
    ]
}

const whosTheLass = {
    text() {return ``},
    choices: []
}
