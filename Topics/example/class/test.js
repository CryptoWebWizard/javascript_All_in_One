


class test1{
    constructor(width,height){
       this.width =width,
       this.height =height,
       this.number = 0
    }

    get area(){

        this.number = this.number +1
        console.log(this.number);
        let areas = this.width * this.height
        return areas
    }

    set area(val){
         this.width = val/10
    }
}


// not Workind
// let a = Object.create(test1)
// console.log(a,"end");


// let b = new test1(5,10)
// console.log(b.area);


// let a = new test1(20,2)
// console.log(a.area);


let arr = [5,566,9,2,3,5,1,23,5,5]
function countFunc (){
    let count =0 ;
for (let i = 0; i < arr.length; i++) {
    // console.log(i);
    if(arr[i]==5){
        count = count +1
    }
}
// console.log(count);
return count
}
console.log(countFunc());
