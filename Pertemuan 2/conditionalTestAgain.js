// ## 1. Check Segitiga ##
// Diberikan 1 Fungsi,  dengan 3 parameter bilangan bulat positif yang merupakan panjang sisi sebuah segitiga.
// =====================================================
// Buatlah fungsi yang mengembalikan nilai string:
// 1. "Sama sisi": jika semua sisi sama.
// 2. "Sama kaki": jika hanya 2 sisi yang sama.
// 3. "Sembarang": jika tidak ada sisi yang sama.
// 4. "Bukan segitiga": jika sisi tersebut tidak bisa membentuk segitiga (Aturan: jumlah 2 sisi terkecil harus lebih besar dari sisi terpanjang);

// Input: (5, 5, 5) → "Sama Sisi"
// Input: (3, 4, 4) → "Sama Kaki"
// Input: (3, 4, 5) → "Sembarang"
// Input: (1, 2, 5) → "Bukan Segitiga"

function checkSegitiga(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        console.log("Bukan Segitiga");
    } else if (a === b && b === c) {
        console.log("Sama Sisi");
    } else if (a === b || b === c || c === a) {
        console.log("sama kaki")
    } else {
        console.log("Sembarang")
    }
}

checkSegitiga(5, 2, 1);