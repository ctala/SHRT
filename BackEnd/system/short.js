const short={}
const int_to_text = (num) =>{
	if ( num <26){
		return String.fromCharCode(97+num )
	}
	else{
		return String.fromCharCode(65+(num-26) )
	}
}
const text_to_int = (str) =>{

	let num = str.charCodeAt(0)
	let out 

	if ( num <=90){
		
		out =  num-65 +26
	}
	else{
		out =  num-97 
	}
	return out +1
		
}
short.encode = (num) =>{
	
	out = ""
	num = num 
	while (num >52 && num !=0 ){
//		console.log("ACO",num%52)
		out=out+int_to_text(num%52 -1 )
		num= num - (num % 52)
		num = num /52
	}
//	console.log("ACO",num-1)
	out=out+int_to_text(num-1)
	return out
}

short.decode = (str) =>{
	let num=0
	let large_revese= str.length
	for(let ix in str){
		num = num + ( 52**(ix) * text_to_int(str[ix]) )
		//console.log("AQUI",num,ix,str[ix],text_to_int(str[ix]))
	}
	return num
}


module.exports = short