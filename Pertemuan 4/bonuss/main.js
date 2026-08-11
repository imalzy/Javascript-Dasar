const card = document.getElementById("myCard");
const title = document.querySelector(".myTitle");
const btn = document.getElementById("btn");

btn.addEventListener('click', handleUpdate)


function handleUpdate() {
    title.textContent = "Berhasil di update!"
    card.classList.toggle("highlight")

    btn.style.backgroundColor = '#28a745'
    btn.textContent = "Selesai!"
}