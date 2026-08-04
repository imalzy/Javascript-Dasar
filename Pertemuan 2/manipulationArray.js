// Map
function getMonthName(month) {
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
    let result;
    if (Array.isArray(month)) {
        result = month.map((m) => {
            return name[m - 1]
        })
    } else {
        return name[month - 1];
    }
    return result;
}

const single = getMonthName(2);
// Feb
console.log(single);

const arr = getMonthName([2, 6, 7]);
// Feb, Jun, Jul
console.log(arr);

// FindIndex
const buah = ["Jeruk", "Semangka", "Pear", "Jambu", "Anggur", "Kurma"];
const jambuIndex = buah.findIndex(b => b === "Jambu");
console.log(`Buah jambu ada di rak / index ke - ${jambuIndex}`);

// push
let result = [];
function getEvenNumber(n) {
    for (let i = 1; i < n; i++) {
        if (i % 2 === 0) {
            result.push(i)
        }
    }
}

console.log('Sebelum di tambah ' + result);

getEvenNumber(6);
console.log(`Sesudah di tambah ${result}`);

// Sort
const arrayPoint = [40, 100, 1, 5, 25, 10];

function sortAscending(point) { // parameter array
    const isArray = Array.isArray(point);
    let result = [];
    if (isArray) {
        // result = point.sort((a, b) => a - b);
        result = point.sort((a, b) => {
            return a - b
        });
        return result;
    } else {
        return 'Parameter berupa Array';
    }
}

function sortDescending(point) {
    const isArray = Array.isArray(point);
    let result = [];
    if (isArray) {
        // result = point.sort((a, b) => b - a);
        result = point.sort((a, b) => {
            return b - a
        });
        return result;
    } else {
        return 'Parameter berupa Array';
    }
}

console.log(sortAscending(arrayPoint)); // [ 1, 5, 10, 25, 40, 100 ]
console.log(sortDescending(arrayPoint)); // [ 100, 40, 25, 10, 5, 1 ]

// Splice
const buah2 = ["Jeruk", "Semangka", "Pear", "Jambu"];
buah2.splice(2, 1, "Buah Naga");
console.log(buah2);

// menghapus jeruk
buah2.splice(0, 1);
console.log(buah2);

buah2.splice(1, 2, "Apa aja deh");
console.log(buah2);