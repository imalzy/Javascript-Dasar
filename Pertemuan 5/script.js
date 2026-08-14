const now = new Date();

// Convert String to Date
// Date.parse
const stringDate = '2026-07-09';
const timestamp = Date.parse(stringDate);
const date = new Date(timestamp);

const stringDateTime = '2026-07-09T17:22:22.000Z'
const convertToDate = new Date(stringDateTime);

const hariKemerdekaan = new Date(2026, 8, 17, 10, 0, 0);


// Get Years
console.log('Tahun:', now.getFullYear());
// Get Month
console.log('Bulan:', now.getMonth());
// Get Date
console.log('Tanggal:', now.getDate());
// Get Day
console.log('Hari:', now.getDay());
// Get Hours
console.log('Jam: ', now.getHours());
console.log('Jam UTC: ', now.getUTCHours());
// Get Minutes
console.log('Menit: ', now.getMinutes());
// Get Seconds
console.log('Detik: ', now.getSeconds());

const event2 = new Date();
event2.setFullYear(2030);
event2.setMonth(1);
event2.setDate(28);

console.log('Tahun:', event2.getFullYear());

console.log('Date string', now.toString());
console.log('Date toDateString', now.toDateString());
console.log('To TimeString', now.toTimeString());
console.log('Date ISO string', now.toISOString());
console.log('Date To Local string', now.toLocaleDateString());

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const formatWithIntl = Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}).format(new Date());

console.log('formatWithIntl: ', formatWithIntl)








