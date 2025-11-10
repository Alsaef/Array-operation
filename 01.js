// Sum of Array
function SumofArray(numbers) {
    let sum=0
   if (!Array.isArray(numbers)||numbers.length <=2) {
    return 'invalid input'
   }


   numbers.forEach(value=>sum+=value)
   

   return sum
}
const numbers = [2, 4, 6, 8, 10];

console.log(SumofArray(numbers));