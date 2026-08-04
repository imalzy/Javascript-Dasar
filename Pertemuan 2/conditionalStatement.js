// const x = 10;

// if (x < 11) {
//     console.log('Benar, variable x lebih kecil dari angka 11')
// } else {
//     console.log('Salah, varibale x lebih besar dari angka 11');
// }

// const status = 1;

// if (status === 1) {
//     console.log('Pembayaran di pending');
//     // render(<Badge />)
// } else if (status === 2) {
//     console.log('Pembayaran berhasil')
// } else if (status === 3) {
//     console.log('Pembayaran Gagal');
// } else if (status === 4) {
//     console.log('Pembayaran Di refund');
// } else {
//     console.log('Internal Server Error');
// }

// let message = "Login Gagal";
// const username = 'user';
// if(username === 'admin'){
//     message = 'Login Sukses';
// }
// Ternary atau short if

// const message = username === 'user' ? 'Login Gagal' : 'Login Berhasil';
// console.log(message);

const buah = 'jeruk';

switch (buah) {
    case 'jeruk':
        console.log('Jeruk Harganya 10 Ribu');
        break;
    case 'apel':
        console.log('Apel Harganya 12 Ribu');
        break;
    case 'Anggur':
        console.log('Apel Harganya 22 Ribu');
        break;
    default:
        console.log(`${buah} sudah habis`)
        break;
}