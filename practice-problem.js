//* problem-01
// function calculate(gaveMoney, apple, orange) {
//     const totalCost = apple + orange;
//     const remaining = gaveMoney - totalCost;
//     return remaining;
// }
// const result = calculate(1000, 400, 500);
// console.log(result);

//* problem-02
// const fruits = ['Apple', 'Banana', 'Orange'];

// //? a) 
// console.log(fruits.indexOf('Banana'));
// fruits[1] = 'Mango';
// console.log(fruits)

// //? b
// fruits.pop();
// fruits.push('Watermelon')
// console.log(fruits)

//* problem-03
// function gradeGenerator(marks){
//     if(marks >= 80){
//         console.log('A')
//     }else if(marks >= 60 && marks <= 79){
//         console.log('B')
//     }else if(marks >= 50 && marks <= 59){
//         console.log('C')
//     }else if(marks >= 40 && marks <= 49){
//         console.log('D')
//     }else if(marks <= 39){
//         return console.log('F')
//     }
// }
// const result = gradeGenerator(520);
// console.log(result)

//* problem-04
let num1 = 8;
let num2 = 98;
let num3 = 67;

if(num1 > num2){
    if(num1 > num3){
        console.log(num1)
    }else{
        console.log(num3)
    }
}else{
    if(num2 > num3){
        console.log(num2)
    }else{
        console.log(num3)
    }
}