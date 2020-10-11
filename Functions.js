function firstLetterName(name) {
    alert("The name " + name + " starts with the letter " + name[0]);
}

function divisbleByTwo(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function largestNum(array) {
    return Math.max(...arr);
}

var arr = [32, -1, 2048, 420, 55, 0, 13, 800, 2049];

firstLetterName("Brian");
console.log(divisbleByTwo(2048));
console.log(largestNum(arr))