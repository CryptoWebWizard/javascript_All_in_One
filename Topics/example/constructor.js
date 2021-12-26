function Person(firstName, lastName) {
    // this = {};
    console.log(this);

    // add properties to this
    this.firstName = firstName;
    this.lastName = lastName;

    console.log(this); 
}
// this hold the entire object not value

var test =  Person("hello","useer")


