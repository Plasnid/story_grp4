/**
 * * What is our title: The Immortal Portal
 * * story has
 * * a fallen powerful kingpin
 * 
 * * an impulsive academic
 * 
 * * want to save a life with a protective portal
 * 
 * * a terrible secret will come out
 */

/**
 * * Characters
 * * Description: the Powerful Fallen Kingpin
 * * Name: Steve
 * * Gender: Male
 * * Age: 15 year old
 * * What made Steve notorious: fart powers
 * * isImmortal: yes
 * * badThingsHeDid: patricide, eats kitkat bars without breaking them, didn't hand in assignments on time, noxious farts
 * * Why did he fall:  He ate a gentically modified bean, and gained fart powers
 */

let steve = {
    desc: "The powerful fallen kingpin",
    name: "Steeeeeeeeeeeeeeeeeeve",
    gender: "m",
    age: 15,
    whyNotorious: "fart powers",
    isImmortal: true,
    badThingsHeDid: ["patricide(due to farts)", "eats kitkat bars without breaking them", "didn't hand in assignments on time", "noxious farts"],
    whyTheFall:  "ate a genetically modified bean...gained fart powers",
    releaseTheKraken: function(target, beanPower){
        let endEffect = "";
        if(beanPower==100){
            endEffect = `${target} and all others nearby, are knocked unconscious and fly into another dimension!`;
        }else if(beanPower>0 && beanPower<=20){
            endEffect = `${target} has gas to give to the power industry...and they no longer have to drill wells!`
        }else if(beanPower>20 && beanPower<=40){
            endEffect = `${target} now has their own gas fireplace with unlimited fuel.`
        }else{
            endEffect = `${target} experiences a massive stinky earthquake!`;
        }
        return endEffect;
    }
}
console.log(steve.age);
console.log(steve["age"]);
console.log(steve.badThingsHeDid[1]);
console.log(steve.releaseTheKraken("Violent Space Wombats",30));

/**
 * * The Impulsive Academic
 * * Name: Captain Jack Squirrel
 * * Gender: male
 * * Age: 40
 * * What Jack has done: Dropped a candle in the library, crashed his car, volunteered to find a legendary portal, stealing a kids lunch box
 * * isInsane: true 
 */

let captainJack = {
    desc:"Slightly loony academic with a habit of getting into bad situations due to being impulsive.",
    name:"Captain Jack Squirrel",
    gender:"m",
    age:35,
    backpackContents: ["mixed nuts", "chocolate", "pipe", "rum", "book about the legend of the immortal portal"],
    // * steal lunchboxes
    // * dropping candle in library
    // * driving(poorly)
    clumsyTheft: function(target, fatigue){
        // * early morning most alert 90-100
        // * too much rum 10-20
        // * really really tired 0-10
        let consequences = "";
        /**
         * * < less than
         * * > greater than
         * * >= greater than or equal to
         * * <= less than or equal to
         * * == equal to
         * * != not equal to
         * 
         * * "" '' ``
         */
        if(fatigue>=0 && fatigue<=10){
            consequences = `he trips over a random ball and drops the ${target} to the floor`;
        }else if(fatigue>10 && fatigue<=20){
            consequences = `Captain Jack Squirrel goes to get the${target} but hits their head on the bookshelf which then falls on them.`
        }else{
            consequences = `Tries to grab ${target} but misses and slams hand into what they seem to actually need by mistake.`;
        }
        return consequences;
    }
}

function showStory(displayStr){
    // * grab the body tag
    let theBody = document.querySelector("body");
    // * create a p tag
    let storyElement =  document.createElement("p");
    // * add display string to the p tag
    storyElement.innerText = displayStr;
    // * append it to the body tag and to the console
    // * parent.appendChild(elementToAdd)
    theBody.appendChild(storyElement);
    console.log(displayStr);
}

function showTitle(titleStr){
    console.log(titleStr);
    //* grab the body tag
    let myBody = document.querySelector("body");
    //* make an h1 tag
    let myTitle = document.createElement("h1");
    //* add the titleStr to the h1 tag
    myTitle.innerText = titleStr;
    //* put the h1 tag into the body tag
    myBody.appendChild(myTitle);
}
let storyTitle = "The Immortal Portal";
showTitle(storyTitle);

/**
 * * Story Notes
 * * trying to save steves life...but he is immortal....the story is about how steve became immortal
 * * steve is not immortal yet, but is going to be because of the actions of Captain Jack Squirrel
 */

showStory(`${steve.name} and ${captainJack.name} are in the library`);
showStory(`${steve.name} reaches into their backpack and pulls out a kitkat bar`);
showStory(`${steve.name} evilly takes a bite out of the side of the kitkat bar!`);
showStory(`${steve.name} feels a crazy electric shock as he bites into the bar!`);
showStory(`${captainJack.name} wakes up, sees the kitkat bar and plots to steal it!`);
showStory("The librarian points him in the direction of steve but advises him to avoid Steve due to his eating KitKat bars without breaking them.");
showStory(captainJack.clumsyTheft("kitkat bar", 3));
showStory(`${captainJack.name} realizes the bar is made of beans and tries to avoid the candle as he is falling to the floor.`);
showStory(`At that moment ${steve.name} feels a ripper about to emerge!`);
showStory(steve.releaseTheKraken("Steve",100));
showStory(`${steve.name} has opened the immortal portal and gained its immortality powers...but the library is ruined`);

/**
 * * = is to set a value
 * * == compares two values
 * * === compares values and datatype
 * * != looks for when things are not equal
 */

console.log(1==1);
console.log(1=="1");
console.log(1==="1");

let toughManBeast = "Professor Stu"
function localInfo(){
    const bestSubject = "Programming";
    console.log(toughManBeast);
    return bestSubject;
}
bestSubject = localInfo();
console.log(bestSubject);

