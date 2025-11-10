// Remove Duplicates

const RemoveDuplicates=(numbers)=>{
     if (!Array.isArray(numbers) || numbers.length <= 2) {
        return 'invalid input'
    }

    // console.log(numbers.indexOf(2)===2);
    return numbers.filter((num,index)=>numbers.indexOf(num)===index)
}

const arr = [1, 2, 2, 3, 4, 4, 5,6,7,6];

console.log(RemoveDuplicates(arr));