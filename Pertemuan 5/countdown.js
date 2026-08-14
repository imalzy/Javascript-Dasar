function countDown(date) {
  const target = new Date(date).getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const sisaWaktu = target - now;

    if (sisaWaktu <= 0) {
      clearInterval(timer);
      console.log("Waktu Habis");
      return;
    }

    const hari = Math.floor(sisaWaktu / (1000 * 60 * 60 * 24));
    const jam = Math.floor(
      (sisaWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const menit = Math.floor((sisaWaktu % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((sisaWaktu % (1000 * 60)) / 1000);
    console.log(`sisa waktu : ${hari}h ${jam}j ${menit}m ${detik}d`);
  }, 1000);
}

countDown("2026-08-14T23:59:59")
