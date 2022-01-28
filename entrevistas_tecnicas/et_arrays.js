//1. Implemente una algoritmo capaz de combinar dos array ordenados, 
//obteniendo un nuevo array ordenado.
arr1 = [1,2,3,4,5];
arr2 = [4,5,6,7,8];

// function merge(arr1, arr2) {
//    let combinedArray=[];
//    while(arr1.length && arr2.length){
//        if(arr1[0] < arr2[0]){
//            let elementToBeMergeA1 = arr1.shift();
//            combinedArray.push(elementToBeMergeA1);
//        }
//        else{
//            let elementToBeMergeA2 = arr2.shift();
//            combinedArray.push(elementToBeMergeA2); 
//        }
//    }
//    combinedArray.concat(arr1).concat(arr2);//en caso de que alguno quede vacío el otro lo concatena al final.
//    return combinedArray;
    
// }
//simplificado
function merge(arr1, arr2) {
    let combinedArray=[];
    
    while(arr1.length && arr2.length){
        let elementToBeMerge
        if(arr1[0] < arr2[0]){
            elementToBeMerge = arr1.shift();
        }          
        else{
            elementToBeMerge = arr2.shift();    
        }
        combinedArray.push(elementToBeMerge);
    }
    
    combinedArray = combinedArray.concat(arr1).concat(arr2);//en caso de que alguno quede vacío el otro lo concatena al final.
    return combinedArray;
     
 }



//2. Analice el orden de su algoritmo.


//3. implemente un algoritmo el cual dado un array cualquiera, lo ordene.



//4. Analice el orden de un algoritmo.