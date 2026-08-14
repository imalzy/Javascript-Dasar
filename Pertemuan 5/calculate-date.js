const startDate = new Date('2026-08-01')
const endDate = new Date('2026-08-14')

const selisih = endDate - startDate;

console.log('Selisih', selisih);
// 1123200000 => Epoch time

const convertToDay = selisih / (1000 * 60 * 60 * 24);
console.log('Selisih Hari', convertToDay);

const now = new Date();
// add 5 hari ke depan
now.setDate(now.getDate() + 5);
console.log('5 Hari ke depan ', now.toLocaleDateString('id-ID'));

// add 5 hari ke depan
now.setDate(now.getDate() - 2);
console.log('Setelah Dikurang 2 ', now.toLocaleDateString('id-ID'));

