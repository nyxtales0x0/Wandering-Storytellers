export const start = {
    text: `In a calm evening, as the winds graze past you and flow along your skin, you find yourself standing in the town square of a city called Vernes, a city you recently moved into after you were released from your old job,The town square is busy as per usual making it look like the liveliest part of the city.
    
    You look at the old tavern settled on a stone foundation and can see the sun starting to set behind it. You let out a deep sigh, now all that your mind cares about is getting a nice warm piece of bread and honey along with a mug of refreshing ale.

    "I deserve it after all the days work" you think to yourself.
    
    As your stomach starts to growl in excitement, you move forward and open the door of the Winter Bear's Tavern, the warmth flushing at you as the door opens.
    
    "Welcome to Winter Bear tavern laddie what will you be having t'night?" Says the bartender as you enter,the place is busling with adventurers and soldiers alike talking about their own sets of achivements, in various stages of drunkenness, it's a well reputed inn afterall,
    
    You order yourself some bread and honey, with a pint of ale as you sit at one of the tables, you food was quickly served and soon enough you are enjoying your well deserved food after a long and hectic day with a mug of ale in your left hand and honey laced bread in your right.`,
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
    text: `As you eat and drink your fill, you start to take in the medium sized tavern's atmosphere, the usual cheers and songs of drunken patrons, the warmth of the fire from the hearth, the warm lanterns hung from the walls, lights the wooden furnitures scattered about the tavern, as one of the people surrounding a table stands up giggling with glee as he takes a pot of money from their game of cards,

    Then in the corner of your eyes you see somebody walking towards you, seems like you will be left to your own thoughts no longer. You see an atheletic man with a tan skin tone, green emerald like eyes and a thick orange beard approaching towards you.
    
    "Ahh Ralf, good day old man. How's it going?"

    Ralf, the owner of the Winter Bear's tavern. Every time you come back from your quests and ventures Ralf's old tavern is the first place you visit. Ralf has become a regular sight to your eyes since you moved to Vernes. He's one of the few people you have started to get along with in this new town.
    
    "Errr you know them young bloody bastards! Always makin' a mess of this place. This one laddie was fightin' with Valor over Syrine. Stupid dumplings have nothin' better to do than keepin their dirty eyes ove' the waitress and fightin' in my shack." Ralf grunts as he turns a bit angry, You turn your gaze to your right and look at a pale skinned young lady, she has black hair, her eyes sparkling blue like lapiz, with freckles running across her face.`,
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
    text: ``,
    choices: []
}
