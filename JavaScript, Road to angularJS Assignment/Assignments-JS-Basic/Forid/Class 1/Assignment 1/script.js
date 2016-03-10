
var myObject = { n: 5, 
				 nA: [1, 2, 3, 4, 5],
				 m: 5,
				 mA: [
				 		{
				 			op: 'p',
				 			values: [0, 1] 
				 		},
				 		{
				 			op: 's',
				 			values: [1]
				 		},
				 		// {
				 		// 	op: 'm',
				 		// 	values: [2]
				 		// },
				 		// {
				 		// 	op: 'd',
				 		// 	values: [2]
				 		// },
				 		{
				 			op: 'r',
				 			values: []
				 		}
				 	] };

for(var i=0; i<myObject.mA.length; i++){
	
	switch(myObject.mA[i].op){
		case 's':
			addWithArry(i);
			break;
		 case 'm':
		 	multiplyWithArry(i);
		 	break;
		 case 'd':
		 	dividedArryWithValue(i);
		 	break;
		 case 'r':
		 	reverseTheArry();
		 	break;
		 case 'p':
		 	swapArryElement(i);
		 	break;
	}
}

function addWithArry(a){

 	 for(var j = 0;j<myObject.nA.length;j++){
 	 	myObject.nA[j] = myObject.nA[j] + myObject.mA[a].values[0];
	}
 	return myObject.nA;
}
function multiplyWithArry(a){

 	 for(var j = 0;j<myObject.nA.length;j++){
 	 	myObject.nA[j] = myObject.nA[j] * myObject.mA[a].values[0];
	}
 	return myObject.nA;
}

function dividedArryWithValue(a){

 	 for(var j = 0;j<myObject.nA.length;j++){
 	 	myObject.nA[j] = myObject.nA[j] / myObject.mA[a].values[0];
	}
 	return myObject.nA;
}
function reverseTheArry(){
 	 	
 	return myObject.nA.reverse();
}

function swapArryElement(a){

	// var temp = myObject.nA[myObject.mA[a].values[0]];
	// myObject.nA[myObject.mA[a].values[0]] = myObject.nA[myObject.mA[a].values[1]];
	// myObject.nA[myObject.mA[a].values[1]] = temp;

	 // var firstNum = myObject.nA[myObject.mA[a].values[0]];
	 // var secondNum = myObject.nA[myObject.mA[a].values[1]];
    
  //    console.log(myObject.nA);
   myObject.nA[myObject.mA[a].values[0]]^=myObject.nA[myObject.mA[a].values[1]];
   myObject.nA[myObject.mA[a].values[1]]^=myObject.nA[myObject.mA[a].values[0]];
   myObject.nA[myObject.mA[a].values[0]]^=myObject.nA[myObject.mA[a].values[1]];
   
    // secondNum = firstNum + (firstNum = secondNum)-secondNum;

     // myObject.nA[myObject.mA[a].values[0]] = secondNum;
     // myObject.nA[myObject.mA[a].values[1]] = firstNum;

    console.log(myObject.nA);

    return myObject.nA;
}


// var output='Output: ';

// for(var j = 0;j<myObject.nA.length;j++){
//  	output = output + " "+ myObject.nA[j];
// }

var output = myObject.nA.join(' ');
console.log(output);

document.getElementById("mainContent").innerHTML = output;



