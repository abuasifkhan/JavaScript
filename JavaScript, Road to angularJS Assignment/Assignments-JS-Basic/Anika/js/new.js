function myFunction() {
	
	inputObject  = {
		n:5,
		nA: [1,2,3,4,5],
		m:3,
		mA: [
			{ op:'p' , values:[0,1]},
			{ op:'s' , values:[1]},
			{ op:'r' , values:[]}
			
		]
	}
	 var sum = function(arr,value)
	 {
		 for(i=0;i<=arr.length-1;i++){
			 arr[i]=value+arr[i];
		 }
		 console.log("sum");
		 console.log(arr);
		 
	 }
	 var swap=function(arr,val1,val2)
	 {
			 var temp = arr[val1];   
             arr[val1] = arr[val2];
             arr[val2] = temp;
			console.log("swap"); 
		 	console.log(arr);
            			
	 }
	 var revers=function(arr)
	 {
		  for(k=0;k <=arr.length/2;k++){
			 var l = arr.length-k-1;
			 var temp = arr[k];   
             arr[k] = arr[l];
             arr[l] = temp;
 		 }
		
		console.log("revers");
		console.log(arr); 
	 }
	  var div=function(arr,value){
		   for(i=0;i<=arr.length-1;i++){
			 arr[i]=value/arr[i];
		 }
		 console.log(arr);
	 }
	  var mul=function(arr,value){
		   for(i=0;i<=arr.length-1;i++){
			 arr[i]=value*arr[i];
		 }
		 console.log(arr);
	 }
	
	 for(x=0;x<=inputObject.m - 1;x++)
	 {
		 
		 var op = inputObject.mA[x].op;
		 if (op=='s'){
			sum(inputObject.nA,inputObject.mA[x].values[0]); 
			
		 }
		 if (op=='p'){
			swap(inputObject.nA,inputObject.mA[x].values[0],inputObject.mA[x].values[1]);
			
		 }
		 if (op=='r'){
			revers(inputObject.nA);
            			
		 }
		 if (op=='d'){
			 div(inputObject.nA,inputObject.mA[x].values[0]);
             			 
		 }
		 if (op=='m'){
			 mul(inputObject.nA,inputObject.mA[x].values[0]); 
		 }
	 }
	 
//console.log(inputObject);
//console.log(inputObject.n);
//console.log(inputObject.nA[3]);
//console.log(inputObject.mA[2].values.push(3));	
    //document.getElementById("demo").innerHTML = "Paragraph changed.";
}
