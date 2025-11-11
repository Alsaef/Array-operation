// Find Second LargestNumber

const FindSecondLargestNumber=(numbers)=>{
   if (!Array.isArray(numbers) || numbers.length <= 2) {
        return 'invalid input'
    }

    const sort=[...numbers].sort((a,b)=>b-a)
   

    for (let i = 0; i < sort.length; i++) {
        if (sort[i]<sort[0]) {
            return sort[i]
        }
        
    }

     return 'No second largest number found';

}
const arr = [10, 40, 30, 20, 50];
console.log(FindSecondLargestNumber(arr));