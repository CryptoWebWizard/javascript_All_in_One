

function forloop(n){
for( i = 0 ; i < 4*n + 1 ; i++ ){

	if( i% 2 == 0 ){
		console.log("@");
	}else{
		// console.log("_");
	}
}
// console.log("/n");
}

forloop(5)