console.log("Hi");
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

function reverse() {
    var left = null;
    var right = null;
    for (left = 0, right = inputObject.nA.length - 1; left < right; left += 1, right -= 1) {
        var temporary = inputObject.nA[left];
        inputObject.nA[left] = inputObject.nA[right];
        inputObject.nA[right] = temporary;
    }
}

function execute() {
    for (var i = 0; i < inputObject.m; i++) {
        switch (inputObject.mA[i].op) {
            case 'm':
                for (var j = 0; j < inputObject.n; j++) {
                    inputObject.nA[j] *= inputObject.mA[i].values[0];
                }
                break;
            case 's':
                for (var j = 0; j < inputObject.n; j++) {
                    inputObject.nA[j] += inputObject.mA[i].values[0];
                }
                break;
            case 'p':
                var flag = inputObject.nA[inputObject.mA[i].values[0]];
                inputObject.nA[inputObject.mA[i].values[0]] = inputObject.nA[inputObject.mA[i].values[1]];
                inputObject.nA[inputObject.mA[i].values[1]] = flag;

                break;
            case 'r':
                reverse();
                break;
            case 'd':
                for (var j = 0; j < inputObject.n; j++) {
                    inputObject.nA[j] /= inputObject.mA[i].values[0];
                }
                break;

            
            default:
              
        }
    }
}
console.log(inputObject.nA);
execute();
console.log(inputObject.nA)