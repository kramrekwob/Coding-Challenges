function countPositivesSumNegatives(input){
if (input==null || input.length===0) return [];
let positive=0;
let negative=0;
for ( let i=0; i<input.length; input++){
    if (input[i]>0) positive++;
    else negative+= input[i];
}
return [positive, negative];
}