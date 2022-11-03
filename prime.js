let count=0;
function checkprime(num){

	for(let i=1;i<=num;i++){
		if(num%i==0){
			return true;
          count++
		}
	else {
   return false;
          }
	
}
checkprime(23);
if(count==2){
console.log("prime number")
} else {
console.log("not prime")
}