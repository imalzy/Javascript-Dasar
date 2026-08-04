// let nilai = 1;
// let skor = 10;

// switch (nilai) { // 3
//     case 1: // tidak
//         skor += 5;
//     case 2: // tidak
//         skor += 10;
//         break;
//     case 3: // ya
//         skor += 15;
//         // break;
//     case 4:
//         skor *= 2;
//         break;
//     default:
//         skor = 0;
//         break;
// }


// console.log(skor);


let x = 17;
let y = 5;
let hasil = "";

if (x % 2 === 0) {
    hasil = "A"; // tidak akan di eksekusi
} else if (x > 15 && y < 10) {
    if (x - y === 10) {
        hasil = "B";
    } else {
        hasil = "C";
    }
} else {
    hasil = "D";
}

console.log(hasil);
