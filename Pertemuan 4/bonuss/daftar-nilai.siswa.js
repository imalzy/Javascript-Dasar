const list = [
  {
    nama: "Budi",
    nilai: 85,
  },
  { nama: "Siti", nilai: 62 },
  { nama: "Andi", nilai: 78 },
  { nama: "Dewi", nilai: 55 },
  { nama: "Eko", nilai: 90 },
];

const btn = document.getElementById("btnHighlight");
const listItem = document.getElementById("daftarSiswa");

list.forEach((siswa) => {
  const li = document.createElement("li");
  let statusText = "";
  let statusClass = "";

  if (siswa.nilai >= 70) {
    statusText = "Lulus";
    statusClass = "badge-lulus";
    li.classList.add("lulus");
  } else {
    statusText = "Gagal";
    statusClass = "badge-gagal";
    li.classList.add("gagal");
  }

  //   li.textContent = `${siswa.nama}`;
  li.innerHTML = `
    <span><strong>${siswa.nama}</strong> (${siswa.nilai})</span>
    <span class="${statusClass}">${statusText}</span>
  `;
  listItem.appendChild(li);
});

btn.addEventListener("click", function () {
  const allSiswa = document.querySelectorAll("#daftarSiswa li");

  allSiswa.forEach((li) => {
    if (li.classList.contains("lulus")) {
      li.classList.toggle("highlight");
    }
  });
});
