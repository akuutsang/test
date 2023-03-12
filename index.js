function spinWords(string){
    let array = string.split(" ");
 for (let i = 0; i < array.length; i++){
   if(array[i].length >= 5){
     array[i] = array[i].split("").reverse().join("");
   }
 }
 let newArray = array.join(" ");
 return newArray;
}
console.log(spinWords("hey fellow students"));