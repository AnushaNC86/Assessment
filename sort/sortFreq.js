function sortFrequency() {
    var inArray = [ 3, 3, 1, 1, 1, 8, 3, 6, 8, 3, 6, 8, 7, 8 ];

const occurance = inArray.reduce(function ( a, c ) {
    return a[c] ? ++a[c] : a[c] = 1, a 
}, {}); 

myArray = [];

sortedArray = Object.entries(occurance).sort((n1, n2) => n2[1]  - n1[1]);
console.log(sortedArray);

var result = [];

for( i in sortedArray ) {
    console.log(sortedArray[i][1])
    for ( var a = 0; a < sortedArray[i][1]; a++ ) {
        result.push(sortedArray[i][0])
    }
}

console.log(result);
}