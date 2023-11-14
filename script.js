function stringChop(str, size) {
  // your code here
	if(str == ''){
		return ''
	}
	let arr = str.split('');
   let result = [];
   for(let i = 0; i < arr.length; i++){
      let sub = '';
      let k = i;
      for(let j = k; j < k + size; j++){
         if(arr[j] != undefined){
         sub += arr[j];
      }
      i = j;
      }
      result.push(sub);
   }
   return result;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
