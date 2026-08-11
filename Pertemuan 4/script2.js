// ======================================
// SPLIT BILL
// ======================================


// ======================================
// 1. VARIABLES
// ======================================

const foodInput =
    document.getElementById("foodPrice");

const drinkInput =
    document.getElementById("drinkPrice");

const peopleInput =
    document.getElementById("people");

const calculateButton =
    document.getElementById("calculateButton");

const result =
    document.getElementById("result");


// ======================================
// 2. ARRAY
// ======================================

const expenses = [
    "food",
    "drink"
];


// ======================================
// 3. FUNCTION
// HITUNG TOTAL
// ======================================

function calculateTotal(food, drink) {

    const total = food + drink;

    return total;
}


// ======================================
// 4. FUNCTION
// HITUNG DISKON
// ======================================

function calculateDiscount(total) {

    let discount = 0;

    if (total >= 100000) {
        discount = total * 0.10;
    }

    return discount;
}


// ======================================
// 5. FUNCTION
// HITUNG PER ORANG
// ======================================

function calculatePerPerson(total, people) {

    const perPerson = total / people;

    return perPerson;
}


// ======================================
// 6. FUNCTION UTAMA
// ======================================

function calculateBill() {

    // Ambil data dari input
    const food = Number(foodInput.value);

    const drink = Number(drinkInput.value);

    const people = Number(peopleInput.value);


    // Validasi input
    if (
        food <= 0 ||
        drink <= 0 ||
        people <= 0
    ) {

        result.innerHTML = `
            <p>
                Silakan masukkan data yang valid.
            </p>
        `;

        return;
    }


    // Hitung total
    const total =
        calculateTotal(food, drink);


    // Hitung diskon
    const discount =
        calculateDiscount(total);


    // Hitung total setelah diskon
    const finalTotal =
        total - discount;


    // Hitung biaya per orang
    const perPerson =
        calculatePerPerson(
            finalTotal,
            people
        );


    // Tampilkan hasil
    result.innerHTML = `

        <div class="result-row">
            <span>Makanan</span>
            <span>
                Rp${food.toLocaleString("id-ID")}
            </span>
        </div>

        <div class="result-row">
            <span>Minuman</span>
            <span>
                Rp${drink.toLocaleString("id-ID")}
            </span>
        </div>

        <div class="result-row">
            <span>Total</span>
            <span>
                Rp${total.toLocaleString("id-ID")}
            </span>
        </div>

        <div class="result-row">
            <span>Diskon</span>
            <span>
                Rp${discount.toLocaleString("id-ID")}
            </span>
        </div>

        <div class="result-row total">
            <span>Total Bayar</span>
            <span>
                Rp${finalTotal.toLocaleString("id-ID")}
            </span>
        </div>

        <div class="result-row">
            <span>Jumlah Orang</span>
            <span>
                ${people} orang
            </span>
        </div>

        <div class="result-row total">
            <span>Bayar Per Orang</span>
            <span>
                Rp${perPerson.toLocaleString("id-ID")}
            </span>
        </div>

    `;
}


// ======================================
// EVENT
// ======================================

calculateButton.addEventListener(
    "click",
    calculateBill
);