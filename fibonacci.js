// Fibonacci sequence, firstly done without recursion 

function fibs(n) {

    let fibArray = [0, 1];

    for (let i = 2; i < n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray;
}

// Same function but done via recursion
let fibsRec = function(n) {

    console.log("This was executed recursively");

    if (n <= 1) {
        return [0, 1];
    } else {
        let sequencyArray = fibsRec(n - 1);
        sequencyArray.push(sequencyArray[sequencyArray.length - 1] +
        sequencyArray[sequencyArray.length - 2]);

        return sequencyArray;

    }

}

console.log(fibsRec(8));