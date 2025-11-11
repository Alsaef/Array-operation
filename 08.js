//Find Frequency of Each Element

const FindFrequencyofEachElement=(numbers)=>{
    let result={}
   if (!Array.isArray(numbers) || numbers.length <= 2) {
        return 'invalid input'
    }


  numbers.forEach(num => {
    result[num]=(result[num] || 0) + 1;
  });

  return result
}

const arr = [1, 2, 2, 3, 3, 3];

console.log(FindFrequencyofEachElement(arr));