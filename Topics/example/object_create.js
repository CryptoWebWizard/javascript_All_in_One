
//  this file ois for create objects with differernt method in javbascript

// the link when you find thia articals below here
// https://stackoverflow.com/questions/16109108/javascript-creating-objects-multiple-approaches-any-differences


// 1 => Object constructor ===============================================================================
var person = new Object();
person.name = "Diego";
person.getName = function () {
    return this.name;
};
// console.log(typeof(person),"Object constructor")

// 2 => Literal notation =================================================================================
let obj1 = {
    name: "kd",
    getName:function test() {
        return this.name
    }
}
// console.log(obj1.method1(), "Literal notation");

// In above method we create obj manually 
// how manually ? == because in both object is same functionality means 
// we just return name of both object
// so if same functionality use for object we need to create that common function for that
// we craete function which create multiple object that why we use constructor 
// yaahh -- constructor i basiaclly function which use to create multiple object 


// 3 function contructor ==============================================================================

let Person  = function (name){  
    this.name = name;  
    this.getName = function(){  
        return this.name;  
    };  
};  
var person1 = new Person("Diego");  
var person2 = new Person("mango");  
// console.log(person1.getName()); 
// console.log(person2.getName()); 

// that work propelly but now 2022 in es6 introduced class concept in javascript
// above same function in class 
class Persons {
    constructor(name) {
        this.name = name;
        this.getName = function () {
            return this.name;
        };
    }
}  
var person1 = new Persons("Diego");  
var person2 = new Persons("mango");  
// console.log(person1.getName()); 
// console.log(person2.getName()); 

// 4 factory function  =============================================================================
//  to create multiple Object now we are not using it

//  difference in contructor function and factory function is 

//  we did not need to use this keyword to access inner properties and 
// but in case if you want to use object inside object properties you can use this other wise 
// you can use like that in --- > line no 73

//  we not need to use "new" keyword to create new instance

var newPerson=function(name){  
    var result = new Object();  
    // var result  = {}  both are same
    result.name = name;  
    result.getName = function(){  
        return result.name;  
    };  
    return result;  
};  
var personOne = newPerson("Diego");  
var personTwo = newPerson("Gangelo");  
// console.log(personOne.getName()); 
// console.log(personTwo.getName()); 

// 2 way to factory function
var newPerson=function(name){  
    // let myname;
    return {
        
        getName: function () {
           return name
        }
    };

   
};  
var personOne = newPerson("Diego");  
var personTwo = newPerson("Gangelo");  
// console.log(personOne.getName()); 
// console.log(personTwo.getName());






// 5 method factory function ===============================================================

// both example are same but currently i dont know how both are same
var singleton = new function(){  
    this.name = "application 1";  
};
// console.log(singleton);

let dualton = {
    name:"application 2"
}
// console.log(dualton);



// 6 method Prototype   -==============================================================================
// i am understanding deep from now  how it works 
function Person_proto(){};  
Person_proto.prototype.name = "Diego";  
var personOne = new Person_proto();  
var personTwo = new Person_proto();  
// console.log(personOne.constructor == Person_proto); // prints true  
// console.log(personOne.name); // prints Diego  
// console.log(personTwo.constructor == Person_proto); // prints true  
// console.log(personTwo.name); // prints Diego 



// 7 method Function/Prototype combination  -==============================================================================

function Test(name){  
    this.name = name;  
};  
Test.prototype.getName = function(){  
        return this.name;  
    };  
var personOne = new Test("Diego");  
var personTwo = new Test("Filippo");  
console.log(personOne.getName()); // prints Diego  
console.log(personTwo.getName()); // prints Filippo  
console.log(personOne.getName === personTwo.getName) //prints true 