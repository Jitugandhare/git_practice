function reverse(str){
	let bag="";
	for(let i=str.length-1;i>=0;i--){
		bag+=str[i];
	}
	return bag;

let rev=reverse(str);

if(str==rev){
	console.log("String is Palindrome");
} else{
	console.log("String is not Palindrome");
}
}