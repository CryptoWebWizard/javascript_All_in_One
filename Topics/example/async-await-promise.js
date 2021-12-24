
// async/await atle ek vastu mate wait karu pan baki na function chalu re
// ane aa pan promise return kari shke
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };
let order =()=>{
   return new Promise((resolve,reject)=>{
       if (true) {
        setTimeout(() => {
            resolve(console.log("asking for c "))
        }, 2000)
       } else {
           reject()
       }
   })
}
async function askingchoise(){
    console.log("A");
    console.log("B");
    await order()
    console.log("D");
    console.log("E");
    console.log("F");
    
} 

// async function ma promise kari shakay 
// ane aa function complete thaya pachij call thai
askingchoise().then(()=>{
    console.log("you can do something");
})
// testing github

// baji badhi process chalu j re jem ka aa badhu print thai jay 

console.log("other process");

function test() {
    console.log("other function");    
}
test()
