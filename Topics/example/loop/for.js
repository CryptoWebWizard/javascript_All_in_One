
function print2largest(arr, arr_size) {
	let i, first, second;

	// There should be atleast two elements
	if (arr_size < 2) {
		console.log(" Invalid Input ");
		return;
	}
	// sort the array
	// arr.sort();
	// start from second last element
	// as the largest element is at last
	for (i = arr_size - 2; i >= 0; i--) {
		// if the element is not
		// equal to largest element
		console.log(i);
		
		// console.log(arr[arr_size - 1]);
		var x =arr[i] != arr[arr_size - 1]
		console.log(arr[arr_size - 1]);
		// console.log(x);
		if (arr[i] != arr[arr_size - 1]) {
			console.log("The second largest element is " + arr[i]);
			// return;
		}
		// else{
		// 	console.log("r=gus==");
		// 	console.log(arr[arr_size - 1]);
		// }
	}
	// document.write("There is no second largest element<br>");
}
let arr= [ 12, 35, 1, 10, 13];
// console.log(arr[3]);
let n = arr.length;
// console.log(n);
print2largest(arr, n);
