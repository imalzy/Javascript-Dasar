// function 2 tipe
// 1. void function = Tidak Mengembalikan nilai;
// 2. return function = Mengembalikan nilai;
// 3. function dengan parameter

// void
// function name_function(){
// code
// }

// function name_function(){
// code
// return value
// }

// function dengan parameter boleh berbentuk void atau return function !!
// function name_function(param1, param2, param3, ....paramN){
    // code
// }

// function name_function(item){
    // code
// }

const user = {
    fullname: 'Jos',
    email : 'jos.46@gmail.com'
}

function mapItem(item){
    console.log(item.fullname);

}

// mapItem(user);

function tambah(a, b=5, c = 0){
    return a + b;
}

function kurang(a, b){
    return a - b;
}

function bagi(a, b){
    return a /b
}

function kali(a, b){
    return a*b;
}

const totalTambah = tambah(10);
console.log('hasil', totalTambah);

// Buatlah 1 fungsi kalkulator (+, -, *, /);
function kalkulator(nilai1, nilai2, operator){
    // 
}

const hasil = kalkulator(20, 100, '+');
// 120
const hasil2 = kalkulator(20, 2, '*');
// 40