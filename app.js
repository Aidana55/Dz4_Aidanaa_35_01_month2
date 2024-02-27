// Цикл должен проходится по массиву и просто выводить среднюю арифметическую
let numbers = [10, 15, 20, 25, 30];

for (let i = 0; i < numbers.length; i++) {
    let average = 0;
    average += numbers[i];
}
average = (10 + 15 + 20 + 25 + 30) / numbers.length;
console.log("Среднее значение в массиве:", average);


const getSimpleNum = (num) => {
    if (num === 1) {
        return false
    } else if (num === 2) {
        return true
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
}
console.log(getSimpleNum(7))
console.log(getSimpleNum(6))


const nums = (...array) => {
    let result = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result += array[i] * array[i]
        }
    }
    console.log(result)
}
nums(2, -78, 45, 4, -7, -6, -10, 26, 30, 8)


const count = (number) => {
    let results = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            results += number[i] * number[i]
        }
    }
    console.log(results)
}
count(4,5,9,3,23)