function findMissingTwo(arr) {
    const missingNumbers = [];
    let expectedNumber = 1;

    for (let i = 0; i < arr.length; i++) {
        while (arr[i] !== expectedNumber) {
            missingNumbers.push(expectedNumber);
            if (missingNumbers.length === 2) {
                return missingNumbers;
            }
            expectedNumber++;
        }
        expectedNumber++;
    }


    while (missingNumbers.length < 2) {
        missingNumbers.push(expectedNumber);
        expectedNumber++;
    }

    return missingNumbers;
}


function generateNumbers(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}
let missingValue = [3,2]
const sortedArray = generateNumbers(1, 10000000);
let arrayWithMissing = sortedArray.filter(it =>!missingValue.includes(it));

const [missing1, missing2] = findMissingTwo(arrayWithMissing);
console.log(`Missing values: ${missing1} and ${missing2}`);
