// Filter Odd Numbers

const FilterOddNumbers = (numbers) => {

    if (!Array.isArray(numbers) || numbers.length <= 2) {
        return 'invalid input'
    }

    return numbers.filter(num=>num%2!==0)

    

}

const arr = [11, 20, 33, 42, 55];

console.log(FilterOddNumbers(arr));