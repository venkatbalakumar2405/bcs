//Task 1
//Enter person1 name:Muthu
//Ener person2 name:Abishek
//Muthu tell me your height in cm:186
//Abishek tell me your  height in cm:165
//Muthu is taller than Abishek by 21 cm

var person1Name =window.prompt ("Enter person1Name:");
var person2Name =window.prompt ("Enter person2Name :");
var person1Height =+window.prompt(`$(person1Name} tell me your height inn cm:`);
var person2Height =+window.prompt(`$(person2Name} tell me your height in cm:`);
var difference = Math.abs(person1Height -person2Height)'
if ( person1Height>person2Height){
    console.log(`${person1Name}is taller than ${person2Name}by ${difference}cm)`);

};
elseif ( person1Height == person2Height){
    console.log(`${person1Name} and  ${person2Name} are of same height`);

} else {
    console.log(`${person2Name}is taller than `${person1Name} by ${difference}cm`
};