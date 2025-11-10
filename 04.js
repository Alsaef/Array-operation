// Reverse an Array

const ReverseanArray = (numbers) => {

    if (!Array.isArray(numbers) || numbers.length <= 2) {
        return 'invalid input'
    }

    const reverseArr = [...numbers].reverse()
    //  console.log(numbers);
    return reverseArr
}



const arr = [10, 20, 30, 40,70];

console.log(ReverseanArray(arr));