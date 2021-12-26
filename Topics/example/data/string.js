// global variable
// aa global variable ne aapne function ni andar aavi rite use kari shakiye 
// pan jyare aapne var keyword thi declared kariye toh ee variable ni navi memory crate
//  thai ne output biju male

 var message = "Hello";
function say() {
    // local variable
     message = 'Hi';
    //  var message = 'Hi';
    console.log(message); // which message?
}
say();// Hi
console.log(message); // Hi


// in non strict mode ma aa ma pela massage variable print thai jyare aapne function call kariye 
// pan jyaye function vagar "message" print karaviye toh pela ee chaeck kare k ee nam toh koi 
// koi global variable nathi ne jo hoi toh upar na example pramane ee print thai ane jo 
// no hoi toh ee pela variable craete kari nakhe 

// aam no thavu joy ye karn k aapne variable declared karo jnathi toi print thai 
// javascript aa error aapta nathi atle aa programatically error j che ane aa code ni spped 
// ochi kari de excution ni atle aapnr strict mode no use kariye

// "use strict";

function say() {
    message = 'Hi'; // ReferenceError
    console.log(message);
}
say(); // Hi
console.log(message); // Hi