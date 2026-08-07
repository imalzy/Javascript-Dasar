// Object
// const user = {
//     key: value
// }

// ex: 
const user = {
    fullname: 'Jos',
    role: 'student',
    status: true
}

console.log(typeof user);
console.log('Nama saya adalah ' + user.fullname);
console.log('Saya adalah ' + user.role);
console.log('Status ' + user['status'] ? 'Aktif' : 'Tidak Aktif');

const users = [
    {
        fullname: 'Jos',
        role: 'student',
        status: true
    },
    {
        fullname: 'Rey',
        role: 'student',
        status: false
    }
]

let keranjangBelanja = [
    { nama: "Buku", harga: 50000, qty: 2 },
    { nama: "Pensil", harga: 5000, qty: 5 },
    { nama: "Tas", harga: 200000, qty: 1 }
];
// Total belanja.

const totalHarga = keranjangBelanja.map((item) => {
    // return{
    //     nama: item.nama,
    //     harga: item.harga,
    //     qty: item.qty,
    //     total: item.harga * item.qty
    // }

    // Spread
    return {
        ...item,
        total: item.harga * item.qty
    }
});
console.log('List Belanja', totalHarga);
let totalBelanja = totalHarga.reduce((prev, currentValue) =>
    prev + currentValue.total, 0);
console.log(totalBelanja);


// Copy array;
const arr1 = ['a', 'b', 'd'];
const arr2 = ['x', 'y', 'z', 'a'];
const arr3 = [...arr1, ...arr2];
const arrConcat = arr1.concat(arr2);
console.log(arr3);
console.log(arrConcat);

const car = {
    name: 'Toyota',
    slinder: 1300,
}

const detailCar = {
    color: 'red',
    tahun: 2027
}

const mergeObj = {...car, ...detailCar};
const mergeObj2 = Object.assign(car, detailCar);
console.log('Merge Obj', mergeObj);
console.log('Merge Obj 2', mergeObj2);
