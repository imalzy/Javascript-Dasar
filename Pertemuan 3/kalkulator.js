
const display = document.getElementById('display');

function tambahInput(nilai) {
    display.value += nilai;
}

function clearDisplay() {
    display.value = "";
}

function hitung() {
    let item = display.value;

    if (item === "") {
        alert('Silahkan masukkan data');
        return;
    }

    try {
        let result = eval(item);

        if (!isFinite(result)) {
            alert('Tidak dapat di hitung!');
            clearDisplay()
            return;
        }
        display.value = result;

        console.log(result);
    } catch (error) {
        alert('Format tidak valid');
        clearDisplay();
    }
}