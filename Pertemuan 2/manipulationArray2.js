const name = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agt",
    "Sep",
    "Okt",
    "Nov",
    "Des"
]
let result = [];

[2, 6, 7].map((m) => {
    // return name[m - 1];
    console.log(m, m - 1);
    console.log(name[2])
});
// const arr = [2, 6, 7];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }


// [2, 6, 7].forEach((m) => {
//     result.push(name[m - 1])
// });

// console.log(result);

let keranjangBelanja = [
    { nama: "Buku", harga: 50000, qty: 2 },
    { nama: "Pensil", harga: 5000, qty: 5 },
    { nama: "Tas", harga: 200000, qty: 1 }
];

const res2 = keranjangBelanja.filter((v) => {
    return v.harga <= 15000
})
const res = keranjangBelanja.filter(function (v) {
    return v.harga <= 15000
});
console.log(res);