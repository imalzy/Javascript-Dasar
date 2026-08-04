<!-- 1. If
2. Else If
3. Else -->

ex:
if(true){ // Kondisi
    console.log('Statement')
}

const tanggal = 10;
if(tanggal < 5){
    console.log('Kode ini tidak akan pernah di execute)
}else if(tanggal > 8){
    console.log('Kode Ini pasti akan di execute)
}else{
    console.log('Kode ini tidak akan pernah di execute);
}

if(false){
    console.log('Kode tidak akan di execute')
}else{
    console.log('Kode ini pasti jalan');
}
# Pengulangan / Looping
=======================
## Jenis-enis Looping
1. For
for(initial, conditional, increment){
    <!-- statement -->
}
contoh:
for(let i = 0; i < 10; i++){
    console.log(i);
}
<!-- Iterasi 1 -->
i = 0
apakah i < 10 ? (0 < 10)
cetak 0
i++ (0 + 1)
<!-- Iterasi 2 -->
i = 1
apakah 1 < 10 ? (1 < 10)
cetak 1
i++ (1+1)
<!-- Iterasi 3 -->
i = 2
apakah 2 < 10 ? (2 < 10)
cetak 2
i++ (2+1)
........ (skip).....
i = 10
apakah i < 10 ? (10 < 10) => tidak
<!-- Selesai -->

## 2. While

while(boolean){
    <!-- statement -->
}

contoh:
let angka = 0;

while(angka < 5){
    angka +=1;
    console.log(angka);
}
## 3. Do While
do{


}while(boolean)

contoh:
let stock = -2;

do{
    stock +=3;
    console.log(stock);
}while(stock < 20)

## Break
Break = Untuk mengakhiri perulangan, biasanya digunakan kondisi untuk menghentikannya.

for(let i = 0; i<=20; i++){
    if(i > 14){
        break;
    }

    console.log(i);
}

## Continue
Continue = Untuk Melewati / skip perulangan dan melanjutkan ke perulangan selanjutnya.

for(let i = 0; i<=20;i++){
    if(i%2===0){
        continue;
    }
    console.log(i)
}

## Array
Array = Variable yang menampung banyak data dan ditandai dengan simbol siku buka ([) dan siku tutup (])

contoh definisi array;
let buah = new Array();
let buah2 = []

const arr1 = [1, 2, 3, 4, 5];
1 = index ke 0
2 = index ke 1
3 = index ke 2
<!-- cara ambil data harus berdasarkan index -->
arr1[0] => 1
arr1[4] => 5

## Array Manipulation
1. Filter
Method Filter() akan membuat sebuah Array baru berisi Element yang sesuai dengan kondisi yang diberikan. Method ini tidak akan mengubah array yang sebelumnya.

format:
Let result = array.filter(function(item, index){
    return true;
})

contoh:
let numbers = [1,2,3,4,5];
let bilGenap = numbers.filter(function(number){
    return number % 2 === 0;
})

<!-- arrow function -->
let bilGanjil = numbers.filter((number)=>{
    return number % 2 !== 0;
})

2. Map
method .map akan membuat array baru berisikan hasil dari operasi yang diberikan

format:
let result = array.map((item, index)=>{
    return true;
})

contoh:
let numbers = [1,2,3,4,5];
let calculate = numbers.map((number)=>{
    return number * 2;
})


3. Sort
Method .sort() untuk mengurutkan element dalam array

format:
array.sort();
array.sort((a, b)=>{
    ...
});

Contoh:
let numbers = [3, 5, 1, 2, 7];
numbers.sort();
console.log(numbers);

4. Push & Pop
Method .push() akan menambahkan element baru pada akhir array.
Method .pop() akan menghapus element terakhir dari array.

format:
array.push(item1, item2, ...itemN)
array.pop();

Contoh:
let numbers = [3, 5, 1, 2, 7];

numbers.push(6);
<!-- [3, 5, 1, 2, 7, 6]; -->

numbers.pop();
<!-- [3, 5, 1, 2, 7]; -->

5. shift & unshift
. unshift() menambahkan element baru di awal array
. shift() manghapus element pertama dari sebuah array.

format
array.unshift(item1, item2, ...itemN)
array.shift();

contoh:
let numbers =  [3, 5, 1, 2, 7];

numbers.unshift(6);
<!-- [3, 5, 1, 2, 7, 6]; -->

numbers.shift();
<!-- [3, 5, 1, 2, 7]; -->

6. reduce
.reduce akan menjalankan fungsi pada setiap element dimana pada setiap iterasinya menggunakan hasil return dari iterasi sebelumnya.

const numbers = [1, 2, 3, 4, 5];
const totalNumber = numbers.reduce((akumulator, number) => akumulator + number);
// untuk setiap elemen akan menjalankan fungsi menambahkan akumulator dengan nilai dirinya
// akumulator adalah nilai dari perhitungan semua elemen sebelumnya

console.log(totalNumber);	// 15

dalam contoh di atas nilai awal akumulator secara default adalah 0, sehingga:

0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10 + 5 = 15 (nilai totalNumber menjadi 15)
Nilai awal akumulator dapat ditentukan pada parameter kedua method .reduce()

Contoh:
const numbers = [1, 2, 3, 4, 5];

const totalNumber = numbers.reduce((akumulator, number) => akumulator + number, 100);
// parameter kedua (nilai awal akumulator) diberi nilai 100 sehingga perhitungan dimulai dari 100

console.log(totalNumber);	// 115
// nilai totalNumber menjadi 115

7. FindIndex
Method .findIndex() akan mengembalikan indeks elemen pertama yang memenuhi kondisi pengujian.

const animals = ["cat", "dog", "wolf"];

console.log(animals.findIndex((animal) => animal === "cat")); // 0 --> mencari indeks cat dalam array animals
console.log(animals.findIndex((animal) => animal === "dog")); // 1 --> mencari indeks dog dalam array animals

8. Splice
.splice() akan mengganti isi element array dengan menghapus atau mengubah isi dari element tersebut.
format:
array.splice(indexStart, deleteCount, NewItem, ...itemN);

ket:
indexStart: index dari elemen yang dihapus/ubah
deleteCount: banyaknya elemen yang akan dihapus/ubah dimulai dari indexStart
newItem: item yang akan mengisi elemen yang dihapus/ubah

let food = ['Pizza', 'Nugget', 'Burger'];

food.splice(1, 1, 'Spaghetti');

console.log(food); // expected output: ['Pizza', 'Spaghetti', 'Burger']