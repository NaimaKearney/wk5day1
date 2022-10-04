//Callbacks
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
//
//Every
//Determine if every number is greater than or equal to 0
//Determine if every word shorter than 8 characters
const everyNum = (num) => (num >= 0);
nums.every(checkNum)
console.log(everyNum(nums))

const shorterWord = (word) => word.length < 8
panagram.every(shorterWord)
console.log(shorterWord(panagram))

//Filter
//filter the array for numbers less than 4
//filter words that have an even length

const fourFilter = (num) => num < 4
const lengthFilter = (word) => (word.length)

//Find
//Find the first value divisible by 5
//find the first word that is longer than 5 characters
//Find Index
//find the index of the first number that is divisible by 3
//find the index of the first word that is less than 2 characters long
//For Each
//console.log each value of the nums array multiplied by 3
//console.log each word with an exclamation point at the end of it

//Map
//make a new array of each number multiplied by 100
//make a new array of all the words in all uppercase

//Some
//Find out if some numbers are divisible by 7
//Find out if some words have the letter ain them

//Hungry for More
//Reduce
//Add all the numbers in the array together using the reducemethod
//concatenate all the words using reduce

//Sort
//Try to sort without any arguments, do you get what you'd expect with the numbers array?
//Try to sort without any arguments, do you get what you'd expect with the words array?
//Sort the numbers in ascending order
//Sort the numbers in descending order
//Sort the words in ascending order
//Sort the words in descending order