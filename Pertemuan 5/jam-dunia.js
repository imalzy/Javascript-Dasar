const cities = [
  { name: "London", timeZone: "Europe/London" },
  { name: "Kuala Lumpur", timeZone: "Asia/Kuala_Lumpur" },
  { name: "Paris", timeZone: "Europe/Paris" },
];

const jamEl = document.getElementById("myclock");

function formatTime(timezone, now) {
  // "Europe/London"
  return Intl.DateTimeFormat("id-ID", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
    .format(now)
    .replace(".", ":");
}

function getOffset(targetTimezone) {
  const now = new Date();
  const jkt = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));;
  const targetTz = new Date(
    now.toLocaleString("en-US", { timeZone: targetTimezone }),
  );
  const getDiffHours = Math.round((targetTz - jkt) / (1000 * 60 * 60));
  const dayDiff = targetTz.getDate() - jkt.getDate();

  if (getDiffHours === 0) {
    return `Today, 0h`;
  }

  const sign = getDiffHours > 0 ? "+" : "";
  return `Today, ${sign}${getDiffHours}h`;
}

function renderWorldClock(now) {
  const cityListElement = document.getElementById("city-list");
  cityListElement.innerHTML = "";
  cities.forEach((city) => {
    // looping 1
    // { name: "London", timeZone: "Europe/London" },
    // city.timeZone => "Europe/London"
    // city.name =>  "London"

    // looping 2
    // { name: "Kuala Lumpur", timeZone: "Asia/Kuala_Lumpur" },
    // city.timeZone => "Asia/Kuala_Lumpur"
    const timeText = formatTime(city.timeZone, now); // 13:46
    const offset = getOffset(city.timeZone);
    const cityItem = document.createElement("div");
    cityItem.className = "clock-card city-item";
    cityItem.innerHTML = `
              <div class="city-info">
                <div class="city-name-wrap">
                  <span class="city-name">${city.name}</span>
                  <span class="offset-text">${offset}</span>
                  <span class="offset-text">${city.timeZone}</span>
                </div>
                <div class="city-time">${timeText}</div>
              </div>
    `;

    cityListElement.appendChild(cityItem);
  });
}

function init() {
  const now = new Date();
  const jam = now.getHours();
  const menit = now.getMinutes();
  const detik = now.getSeconds();

  const formatJam = String(jam).padStart(2, "0");
  const formatMenit = String(menit).padStart(2, "0");
  const formatDetik = String(detik).padStart(2, "0");

  jamEl.textContent = `${formatJam}:${formatMenit}:${formatDetik}`;
  renderWorldClock(now);
}

// Panggil Fungsi init
init();

setInterval(init, 1000);
