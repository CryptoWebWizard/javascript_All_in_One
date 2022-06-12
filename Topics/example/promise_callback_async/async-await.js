
// async/await atle ek vastu mate wait karu pan baki na function chalu re
// ane aa pan promise return kari shke
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };


let order =(ms)=>{
   return new Promise((resolve,reject)=>{
       if (true) { // aa atayer true rakhi che kai condition nathi ne atle
        setTimeout(resolve,ms)
       } else {
           reject()
       }
   })
}

async function kitchen() {
    try {
        await order(2000)
        console.log(`${stocks.Fruits[0]} was selected`);

        await order(1000)
        console.log("production start");

        await order(2000)
        console.log("strat cutting");

        await order(2000)
        console.log(`${stocks.liquid[0]}  ${stocks.liquid[1]} + was added `);

        await order(2000)
        console.log("so on and on .... finally order servered");


    } catch (error) {
        console.log(error);
    }
    
}
kitchen()
