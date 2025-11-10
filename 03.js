// Count Even Numbers

const CountEvenNumbers = (numbers) => {
    if (!Array.isArray(numbers) || numbers.length <= 2) {
        return 'invalid input'
    }


    let findEven = 0
    for (let i = 0; i < numbers.length; i++) {



        if (numbers[i] % 2 === 0) {

            findEven++
        }

    }

    return findEven
}

const arr = [1, 2, 3, 4, 5, 6];

console.log(CountEvenNumbers(arr));