// alert, prompt, confirm

// alert
alert('Hello');

// prompt
// const result = prompt(title, [default])
let age = prompt("Berapakah usia anda", 14);
alert(`Umur Anda ${age} tahun`);

// confirm
let isBoss = confirm("Apakah anda bosnya??");
alert(`result = ${isBoss}`);

let hapus = confirm("Are you sure to delete this data ??");
if(hapus == true){
    // munculkan pesan data berhasil di hapus
    alert('Data berhasil di hapus');
}

