



import defaultExport from "./sample.js";
import {tellTime} from "./sample.js";
// import {tellTime as aa allise} from "./sample.js";
let resultEle = document.querySelector('.result');
document.querySelector('.Btn').addEventListener('click',()=>{
   resultEle.innerHTML+=defaultExport();
   resultEle.innerHTML+=tellTime();
//    resultEle.innerHTML+=allise();
})

// simplally export is that you want to use some function/object in another file you want to 
// just do export that function and that function is import where to use that function in another file

// but what is export default vs export ?

// export default is justttt name convention means you can make only one function on that file export default 

// but why only one time?
// because export default function --> if you import in another file so you can rename with like line no 5 ,
// that only diffrence , if you simply export you have use only that name but you can add as to rename that export 
// function
 
export default function testImport(){
    return 'Module testImport has been imported'+'';
 }
 export function tellTime(){
    return new Date();
 }

