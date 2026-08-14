const jamEl = document.getElementById('jam-digital');
const progressBarEl = document.getElementById('progress-bar');
const teksPersentaseEl = document.getElementById('teks-persentase');

function init() {
    const now = new Date();

    const jam = now.getHours();
    const menit = now.getMinutes();
    const detik = now.getSeconds();

    const formatJam = String(jam).padStart(2, '0');
    const formatMenit = String(menit).padStart(2, '0');
    const formatDetik = String(detik).padStart(2, '0');


    jamEl.textContent = `${formatJam}:${formatMenit}:${formatDetik}`;

    const totalSecondToday = (jam * 3600) + (menit * 60) + detik;
    const totalSecondOfDay = 24 * 3600;

    const persentage = ((totalSecondToday / totalSecondOfDay) * 100).toFixed(2);
    progressBarEl.style.width = persentage + '%';
    teksPersentaseEl.textContent = `${persentage}% hari ini telah berlalu`;
}

init();

setInterval(init, 1000);