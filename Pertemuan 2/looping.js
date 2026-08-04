// for (let i = 0; i <= 5; i++) {
//    console.log(`Interasi ke - ${i}`);

// }

// let visitor = 0;
// while(visitor < 20){
//     visitor++;
//     if(visitor > 0){
//         console.log(`Visitor ke ${visitor}`);
//     }
// }

// let penumpang = 0;
// do {
//     penumpang += 2;
//     console.log(`Jumlah Penumpang ${penumpang}`)
// } while (penumpang < 20);

// for(let i = 0; i<=20; i++){
//     if(i > 14){
//         break;
//     }

//     console.log(i);
// }

for(let i = 0; i<=20;i++){
    if(i%2===0){
        continue;
    }
    console.log(i)
}