// Find Maximum Number

const FindMaximumNumber=(numbers)=>{

  if (!Array.isArray(numbers)||numbers.length <=2) {
    return 'invalid input'
   }

   let maxNum=numbers[0]

   numbers.forEach(value => {
       if (value>maxNum) {
         maxNum = value;
    }
   });


// for (let i = 0; i < numbers.length; i++) {
    

//     if (numbers[i]>maxNum) {
//         maxNum=numbers[i]
//     }
    
// }

   return maxNum

}
const arr = [5, 12, 7, 3, 25, 19];
console.log(FindMaximumNumber(arr));