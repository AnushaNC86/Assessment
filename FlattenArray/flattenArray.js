function  flatArray() {
    var inputArray = [ 1, 2, 3, 4, 5,[6],[9,6]];
    var n = inputArray.length;
    var flattenArray = [];
    for( var i = 0; i < n ; i++ ){
        const present = inputArray[i];
        if(!Array.isArray(present)){
            flattenArray.push(present);
        }
        console.log("present array",present);
        for (let j = 0; j < present.length; j++) {
            flattenArray.push(present[j]);
        } 
        
    }
    console.log("flattened array",flattenArray)
    document.getElementById("flat").innerHTML = "Flattened array is: " +flattenArray;
}