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

/**
 * * Story Notes
 * * trying to save steves life...but he is immortal....the story is about how steve became immortal
 * * steve is not immortal yet, but is going to be because of the actions of Captain Jack Squirrel
 */



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