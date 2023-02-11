// for (let i = 0; i < 10; i++) {
//     if (i === 2) {
//         break;
//     }
//     console.log(i)
// }
// console.log('test')

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i > 5) {
//         break;
//     }
//     i++
// }

// const tableItems = ['Keyboard', 'Mobile', 'UPS', 'Mouse', 'Monitor', 'Pen'];
// for (let i = 0; i < tableItems.length; i++) {
//     const item = tableItems[i];
//     if (item === 'Monitor') {
//         break;
//     }
//     console.log(item)
// }

const numbers = [34, 45, 56, 67, 78, 98, 12, 43, 90, 10];
let i = 0;
while (i < numbers.length) {
    const number = numbers[i];
    if (number > 80) {
        break;
    }
    i++;
    console.log(number)
}