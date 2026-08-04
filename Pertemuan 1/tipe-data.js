// // # Tipe  Data Primitif ( Data tunggal)
// // String => Teks
// // Number => angka
// // boolean => True or False
// // Undefined => Variabel Belum diberi nilai
// // Null => Nilai Kosong yang sengaja dibuat
// // Symbol => Nilai unik

// // # Tipe Data Non Primitif (Kumpulan data)
// // Object => Kumpulan data berpasangan {key: value}
// // Array => Kumpulan data berurutan [1, 2, 3, 4]
// // Function => Blok kode yang bisa dijalankan function print(){ /** kode kode */}

// // data primitif => nilainya secara langsung di simpan di memori
// // data non primitif => menyimpan alamat nilai tersebut di dalam memori

// let nama1 = 'Joshua';
// let nama2;
// console.log('nama 1', nama1);
// nama2 = nama1;
// console.log('nama 2', nama2);

// nama1 = 'Rey';
// console.log('nama 1', nama1);
// console.log('nama 2', nama2);

// let user1 = {
//     name: 'Joshua',
//     age: 14
// }

// console.log('user1 = ', user1)
// let user2 = user1; // memiliki address yang sama
//                    // ray = Jl. Gatot subroto Gg. xxx
//                     // imal = Jl. Gatot subroto Gg. xxx
//                     // imal => ubah jalan gg. xxx jadi warna merah
//                     // ray merasakan dampaknya jalan jadi warna merah 
//                     // imal merasakan dampaknya jalan jadi warna merah 
// console.log('user2 = ', user2)

// user2.name = 'Rey';
// console.log('user1 = ', user1)
// console.log('user2 = ', user2)

// ===============================================//
// TIPE DATA
// 1. string
let nama = 'Ray'; // tipe data string
let kota = 'Medan';
console.log('nama', nama);
console.log(typeof nama); // typeof untuk check tipe data


// 2. number
let umur = 14;
let tinggi = 155;
console.log('umur', umur);
console.log(typeof umur); // typeof untuk check tipe data


// 3. boolean;
let isLogin = true;
let isAdmin = false;
console.log('isLogin', isLogin);
console.log(typeof isLogin); // typeof untuk check tipe data

// 4. Undefined;
let nilai;
console.log(nilai);
console.log(typeof nilai); // typeof untuk check tipe data

// 5. Null;
let data = null;
console.log('data', data);
console.log(typeof data); // typeof untuk check tipe data

// 6. Symbol
const id1 = Symbol("id")
const id2 = Symbol("id")
console.log('Symbol', id1);
console.log('Symbol', id2);
console.log(typeof id1); // typeof untuk check tipe data


// TIPE DATA NON PRIMITIF
// 7. Object
let user1 = {
    name: 'Joshua',
    age: 14
}
console.log('user1', user1);
console.log(typeof user1); // typeof untuk check tipe data

// 8. Array
const buah = ["apple", "orange", "Mango"]
console.log('buah', buah);
console.log(typeof buah); // typeof untuk check tipe data


// 9. Function
function sayHello() {
    console.log(`Selamat Datang`);
}
console.log('sayHello', sayHello);
console.log(typeof sayHello); // typeof untuk check tipe data

// arrow function
const tambah = () => {
    let a = 10;
    let b = 10;

    return a + b;
}

// 10. Date
const now = new Date();
console.log('Jam sekarang', now);


// function sayHello(name){
//     console.log(`Selamat Datang ${name}`);
// }

// sayHello(1234);
// sayHello('Reynard');




