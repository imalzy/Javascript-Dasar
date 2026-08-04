// const arr1 = [1, 2, 3, 4, 5];
// console.log('arr index ke 0:', arr1[0]);
// console.log('arr index ke 4:', arr1[4]);

const arr2 = ["satu", "dua", "tiga", "empat"];
// cara untuk melihat panjang suatu array 
// array.length;
const panjangArr = arr2.length;
// console.log('Panjang Array:', panjangArr)
// for (let i = 0; i < arr2.length; i++) {
//    console.log(arr2[i]);
// }
// Iterasi 1
// i = 0
// i < 4
// arr2[i] // arr2[0] -> "satu"

const buah = ["Jeruk", "Semangka", "Pear", "Jambu", "Anggur", "Kurma"];
// Buah semangka ada di rak 1 atau semangka ada di index 1;
// ada di index ke berapakah jambu ? index 3
for (let i = 0; i < buah.length; i++) {
    if(buah[i] === "Jambu"){
        console.log(`Buah jambu ada di rak / index ke - ${i}`);
    }
}
