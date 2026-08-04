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