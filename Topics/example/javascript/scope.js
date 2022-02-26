

// var test = 10
function hello(){
    test = 18 // aaya aapde var keyword use kariye toh niche test undefined male pan var keyword use no kariye ane 
                   // khali aam declare kariye toh o/p mal
   console.log(test);
}
hello()
// console.log(typeof(hello));
console.log(test);


//let var const
// var for global access but in function is local scope

let bb = [1,2,3]

console.log(bb);

// let bb=555 // aa je karu ene re-assign karu kevay
bb=555    // aa je karu ene re-declare karu kevay
console.log(bb);

// let and const ma aa ek j difference che bane re-assign no thai
// let re declare thai pan const toh redclare pan no thai

const bb = [1,2,3]

console.log(bb);

// let bb=555 // aa je karu ene re-assign karu kevay
bb=555    // aa je karu ene re-declare karu kevay
console.log(bb);

// throw error


