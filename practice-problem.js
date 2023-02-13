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
// let num1 = 8;
// let num2 = 98;
// let num3 = 67;

// if(num1 > num2){
//     if(num1 > num3){
//         console.log(num1)
//     }else{
//         console.log(num3)
//     }
// }else{
//     if(num2 > num3){
//         console.log(num2)
//     }else{
//         console.log(num3)
//     }
// }

//* ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

// const myBudget = 65000;
// const mac = 80000;
// const gamingLaptop = 60000;
// const lenovo = 40000;
// const usedLaptop = 20000

// if(myBudget >= mac){
//     console.log('Buy Mac')
// }else if(myBudget >= gamingLaptop && myBudget < mac){
//     console.log('Buy Gaming Laptop')
// }else if(myBudget >= lenovo && myBudget < gamingLaptop){
//     console.log('Buy Lenovo')
// }else if(myBudget >= usedLaptop && myBudget < lenovo){
//     console.log('Buy Used Laptop')
// }

//* ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
// let i = 0;
// while (i < 99) {
//     if (i >= 58 && i <= 98) {
//         console.log(i)
//     }
//     i++
// }

//* ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও
// let i = 0;
// while (i <= 456) {
//     if (i >= 412 && i <= 456) {
//         if (i % 2 === 0) {
//             console.log(i)
//         }
//     };
//     i++
// }

//* ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও
// let i = 0;
// while (i <= 623) {
//     if (i >= 581 && i <= 623) {
//         if (i % 2 !== 0) {
//             console.log(i)
//         }
//     }
//     i++;
// }


//* ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও
// for (let i = 30; i <= 86; i++) {
//     if (i === 44) {
//         console.log(i)
//     }
// }


//* ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 

const booksPrice = [190, 200, 235, 258, 147, 123, 267];
// let i = 0;
// while (i < booksPrice.length) {
//     const bookPrice = booksPrice[i];
//     if(bookPrice > 200){
//         continue;
//     }
//     console.log(bookPrice);
//     i++;
// }
for(let i = 0; i < booksPrice.length; i++){
    const price = booksPrice[i];
    if(price > 200){
        continue;
    }else{
        console.log(price)
    }
}