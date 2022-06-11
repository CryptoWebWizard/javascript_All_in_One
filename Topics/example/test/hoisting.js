




console.log(typeof(String));
console.log(typeof(null));

let beforeDeclare = checkHoisting(5,6)

console.log(beforeDeclare);

// console.log(c);

function checkHoisting(a,b){

    let c = a+b
    return c
}