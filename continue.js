const numbers = [34, 45, 56, 67, 78, 98, 12, 43, 90, 10];
// let i = 0;
// while(i < numbers.length){
//     const number = numbers[i];
//     if(number > 70 && number < 100){
//         continue;
//     }
//     i++;
//     console.log(number)
// }

for(let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    if(number > 50 && number < 60){
        continue;
    }
    console.log(number)
}