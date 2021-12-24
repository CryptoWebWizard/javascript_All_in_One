// good example of call back - async / await -- link below

//https://www.youtube.com/watch?v=ZYb_ZU8LNxs
//article link -- https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/


let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };



 let order = (fruit_name,gotoproduction)=>{

    setTimeout(()=>{
    let picker = stocks.Fruits[fruit_name]
    console.log(picker+"selected");

    gotoproduction();
    
    },2000)
}

let production=()=>{
    setTimeout(()=>{
        console.log("order process started");

    setTimeout(()=>{
        console.log("strat cutting");

        setTimeout(()=>{
            console.log(`${stocks.liquid[0]}  ${stocks.liquid[1]} + was added `);

            setTimeout(() => {
                console.log("machine started");

                setTimeout(() => {
                    console.log(`${stocks.holder[0]} added`);

                    setTimeout(() => {
                        console.log(`${stocks.toppings[0]} added`);

                        setTimeout(() => {
                            console.log(`ice creame served`);
                        }, 2000);
                    }, 2000);
                    
                }, 2000);
                
            }, 1000);
        },1000)

    },1000)    
    },1000)
}

order(0,production)