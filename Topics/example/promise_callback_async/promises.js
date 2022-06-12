
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 // The Structure of Promises
//  let order =()=>{
//     return new Promise((resolve,reject)=>{
//         if (condition) {

//             resolve()
            
//         } else {
//             reject()
//         }
//     })}

let order =(work,time)=>{
   return new Promise((resolve)=>{
    // resolve(setTimeout(()=>{work()},time)) //it resolve take all as argument
    setTimeout(() => {
        resolve(work())
    }, time);
   })
}
//  let order = (work,time)=>{
//     setTimeout(()=>{
//     work();
//     },time)
// }
order(()=>{console.log(`${stocks.Fruits[0]} was selected`)},2000)
// order(()=>{console.log(`${stocks.Fruits[0]} was selecddted 111111`)},1000)
// order(()=>{console.log(`${stocks.Fruits[0]} was selected 111`)},7000)
// order(()=>{console.log(`${stocks.Fruits[0]} was selected`)},0000)
// .then(console.log("it;s working"))
.then(()=>{
    return order(()=>{console.log("production start")},1000)
})    
.then(()=>{
    return order(()=>{console.log("strat cutting");},2000)
})
.then(()=>{
    return order(()=>{console.log(`${stocks.liquid[0]}  ${stocks.liquid[1]} + was added `);},2000)
})
.then(()=>{
    return order(()=>{console.log("machine started");},2000)
})
.then(()=>{
    return order(()=>{console.log(`${stocks.holder[0]} added`);},2000)
})
.then(()=>{
    return order(()=>{console.log(`${stocks.toppings[0]} added`);},2000)
})
.then(()=>{
    return order(()=>{console.log(`ice creame served`);},2000)
})
.catch(()=>{console.log("That is not available sir plaese order something else");})

// jyare tame koi promise ni andar condition check karavata hov tyare aa catch run that nakar aa then j run thai

.finally(()=>{console.log("always run");})
// finally -- aa hamesh run thui promise return kartu hoi k no kartu hoi


