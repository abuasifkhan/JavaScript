inputObject = {
    n: 5,
    nA: [1, 2, 3, 4, 5],
    m: 3,
    mA: [
            { op: "p", values: [0, 1] },
			{ op: "s", values: [1] },
			{ op: "r", values: [] }
    ]
}

mordifyArray(inputObject);

function mordifyArray(inputObject) {

    for (var i = 0; i < inputObject.m; i++) {

        findCorrectOperation(inputObject.mA[i].op, inputObject.mA[i].values, inputObject.nA);

    }

    console.log(inputObject.nA);


}


function findCorrectOperation(operationSymbol, operationValues, arrayToBeMordified) {

    switch (operationSymbol) {
        case "p":
            swap(arrayToBeMordified, operationValues[0], operationValues[1]);
            break;
        case "s":
            addAValueWithAllElement(arrayToBeMordified, operationValues[0]);
            break;
        case "r":
            reversArray(arrayToBeMordified);
            break;
        case "m":
            multiplyAValueWithAllElement(arrayToBeMordified, operationValues[0]);
            break;
        case "d":
            divideAllElementByAValue(arrayToBeMordified, operationValues[0]);
            break;
    }



}


function swap(list, indexOne, indexTwo) {

    var temp = list[indexTwo];
    list[indexTwo] = list[indexOne];
    list[indexOne] = temp;


}
function reversArray(list) {

    list.reverse();

}
function addAValueWithAllElement(list, value) {

    for (var i = 0; i < list.length; i++) {

        list[i] += value;
    }

}
function multiplyAValueWithAllElement(list, value) {
    for (var i = 0; i < list.length; i++) {

        list[i] *= value;
    }

}
function divideAllElementByAValue(list, value) {
    for (var i = 0; i < list.length; i++) {

        list[i] /= value;
    }

}

