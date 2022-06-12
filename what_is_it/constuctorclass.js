var test =(function(){}).constructor === Function
// console.log(test);
function complex(var1){
    var1.name = "kd";
}
const simpleobjwithoutclass ={
    // test:"godhani",
    name :'kashyap'
}
// console.log(simpleobjwithoutclass.name);
// complex(simpleobjwithoutclass)
// console.log(simpleobjwithoutclass.name);

var multiply = new Function('x', 'y', 'return x * y'); // function object hoi ene aapne new keyword thi pan declare kari shakiye by constructor
// console.log(multiply(10,20));




 let x = [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ];

// for(let i=0;i<3;i++)
// {
//     console.log(i[0]);
// }

// using object lateral
// let person = {
//     name: 'Sam'
// }
// // console.log(person.name); 
// let student = person;
// // changes the property of an object
// student.name = 'John';

// changes the origins object property
// console.log(person.name); 

// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
let person1 = new Person();
let person2 = new Person();

// adding property to person1 object
person1.gender = 'male';

// adding method to person1 object
person1.greet = function () {
    console.log('hello');
}

person1.greet(); 

// console.log(Person());


// person2.greet()