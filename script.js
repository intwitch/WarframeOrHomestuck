var correctAnswer = "";

var HomestuckPlotPoints = [
    "Clown murders five people",
    "Someone becomes a dog",
    "A salamander gets adopted by four different children, and they each give her a different name",
    "A lot of dramatics go into putting a rabbit in a box",
    "Someone's grandma is wicked nasty with a hammer",
    "Fish Hitler fucked it",
    "One of the main characters high fives a ghost while travelling in the void between two timelines",
    "Kissing servered heads can bring your friend back from the dead",
    "Jackass that doesn't belive in magic uses a magic wand in a fight",
    "Jackass teenager wearing glasses gets chainsawed in half",
    "Lipstick gets used as a weapon, multiple times",
    "Several characters are revealed to be caucasion, this is unfortunately an important plot point",
    "Fingerless gloves are a fashion statement by men who are into muscular men",
    "There's a very sweaty gay boy, he's absurdly strong.",
    "Someone makes porn for an alien by drawing scribbles",
    "Everyone has Mommy/Daddy issues",
    "A puppet is the mastermind of the entire story.",
    "Someone becomes a dog and falls in love with a mailwoman (who also becomes a dog)",
    "Being a dad gives you super strength",
    "Some asshole cuts a meteor in half",
    "Everything is related to frogs, this is an incredibly important plot point."
];

var WarframePlotPoints = [
    "CEO wants AI to go back to killing people",
    "Character has like three different moms",
    "People in too much debt get brain shelved",
    "Main character has to play family therapist (multiple times)",
    "Dating Sim",
    "Old Man's ex boyfriend lives in his family's basement, the family doesn't know either are alive",
    "Man cut in half keeps coming back to rant about kids these days",
    "A guitar is taught about the concept of informed consent",
    "Gas leak pauses bloodsport, it's replaced with a pool party",
    "Horrible step father that was tossed into the sun, sadly, cannot be killed again",
    "Bloodsport gambling for kidnapped children",
    "Space Uncle is under control of evil worms",
    "Evil concrete wants to steal a book",
    "Severed finger powered spaceships",
    "Child soldiers overthrow government",
    "Man gets adopted by the grandfather of the group he's hunting down",
    "Hunting down clones of a boyband",
    "Clem"
]

var BothPlotPoints = [
    "helping someone give birth",
    "There are two dudes but technically they're the same dude because of time travel bullshit",
    "Weird amount of real life media references",
    "Somebody gave a teenager a gun, and saw no problems with that",
    "PTSD"
]

function checkAnswer(){
    var correctColor = "#00ff00";
    var wrongColor = "#ff0000";

    var WarframeButton = document.getElementById("WarframeButton");
    var HomestuckButton = document.getElementById("HomestuckButton");

    switch(correctAnswer){
    case "Warframe":
        WarframeButton.style.backgroundColor = correctColor;
        HomestuckButton.style.backgroundColor = wrongColor;
        break;
    case "Homestuck":
        WarframeButton.style.backgroundColor = wrongColor;
        HomestuckButton.style.backgroundColor = correctColor;
        break;
    case "Both":
        WarframeButton.style.backgroundColor = correctColor;
        HomestuckButton.style.backgroundColor = correctColor;
        break;
    }

    correctAnswer = "";
    document.getElementById("SkipNextButton").innerHTML = "Next";
};

function newQuestion(){
    document.getElementById("SkipNextButton").innerHTML = "Skip";

    document.getElementById("WarframeButton").style.backgroundColor = "#AAAAFFFF"
    document.getElementById("HomestuckButton").style.backgroundColor = "#AAAAFFFF"

    var randomPercent = Math.floor(Math.random() * 101);
    var selectedList;

    if(randomPercent > 90){
        selectedList = BothPlotPoints;
        correctAnswer = "Both";
    }
    else if (randomPercent > 45){
        selectedList = WarframePlotPoints;
        correctAnswer = "Warframe";
    }
    else {
        selectedList = HomestuckPlotPoints;
        correctAnswer = "Homestuck";
    }

    document.getElementById("QuestionText").innerText =
        selectedList[Math.floor(Math.random() * selectedList.length)];
}