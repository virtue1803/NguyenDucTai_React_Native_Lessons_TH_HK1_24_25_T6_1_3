// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

//data 1
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

//data 2

let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

// tính BMI cho data1
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

// tính BMI cho data2
let markBMI2 = markMass2 / markHeight2 ** 2;
let johnBMI2 = johnMass2 / johnHeight2 ** 2;

// so sánh BMI của 2 người trong 2 data
let markHigherBMI = markBMI > johnBMI;
let markHigherBMI2 = markBMI2 > johnBMI2;

//hiển thị kết quả
console.log(markBMI, johnBMI, `-------Mark có BMI cao hơn trong Data 1 không? ${markHigherBMI}`);
console.log(markBMI2, johnBMI2, `------Mark có BMI cao hơn trong Data 1 không? ${markHigherBMI2}`);

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 

// so sánh kết quả bằng data 1
if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`);
} else if(markBMI1 < johnBMI1){
    console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})!`);
} else {
    console.log(`Mark's BMI (${markBMI.toFixed(2)}) is equal to John's (${johnBMI.toFixed(2)})!`);
}

// so sánh kết quả bằng data 2
if(markBMI2 > johnBMI2){
    console.log(`Mark's BMI (${markBMI2.toFixed(2)}) is higher than John's (${johnBMI2.toFixed(2)})!`);
} else if(markBMI2 < johnBMI2){
    console.log(`John's BMI (${johnBMI2.toFixed(2)}) is higher than Mark's (${markBMI2.toFixed(2)})!`);
} else { 
    console.log(`Mark's BMI (${markBMI2.toFixed(2)}) is equal to John's (${johnBMI2.toFixed(2)})!`);
}
