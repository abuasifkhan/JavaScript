'use strict';

var myObject = { 
		test: 3,
		n: 5,
		option: [
		 {
		 	parent: 0,
		 	index: 1,
		 	priority: 1,
		 	message: "Message 1"
		 },
		 {
		 	parent: 1,
		 	index: 2,
		 	priority: 1,
		 	message: "Message 2"
		 },
		 {
		 	parent: 2,
		 	index: 3,
		 	priority: 1,
		 	message: "Message 3"
		 },
		 {
		 	parent: 1,
		 	index: 4,
		 	priority: 2,
		 	message: "Message 4"
		 },
		 {
		 	parent: 0,
		 	index: 5,
		 	priority: 2,
		 	message: "Message 5"
		 }

		]
 };

var result = {};
for (var i=0;i<myObject.n;i++){
  result[i] = myObject.option[i].parent;
}
//console.log(result);

var frequency = [];
for (var i=0;i<myObject.n;i++){
	if(!frequency[result[i]])
		frequency[result[i]] = 0;
	frequency[result[i]]++;
}

var freequencyOfPriority = [];
var indexValue = [];
var k = 0;
var output = "";


for (var i=0;i<frequency.length;i++){
	for( var j=0;j<myObject.n;j++){ 
		if(myObject.option[j].parent === i)
		{
			freequencyOfPriority[k] = myObject.option[j].priority;
			indexValue[k] = myObject.option[j].index;
			k++;
		}
	}

	freequencyOfPriority = freequencyOfPriority.sort(function(a,b){
		return b-a;
	});

	indexValue = indexValue.sort(function(a,b){
		return b-a;
	});

	for(var t = 0; t<k;t++){
		if(i>0)
		for(var un = 0;un<i;un++)
			output += " - ";

		output += indexValue[t] + " ";
		for(var j = 0; j<myObject.n;j++)
		{
			if(indexValue[t] == myObject.option[j].index)
				output+= myObject.option[j].message+"\n";
		}
		
	}

	indexValue = [];
	freequencyOfPriority = [];
	k = 0;
}

console.log(output);
document.getElementById("mainContent").innerHTML = output;

