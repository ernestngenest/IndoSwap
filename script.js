// let db = {};
// let konversi = document.getElementById('konversi-btn')
// document.getElementById('coin-btn').addEventListener('click', function() {
//     document.getElementById('coin').value
//     document.getElementById('amount').value = document.getElementById('coin').value
// });

const factor = 14000;

const usd = document.getElementById("usd");
const idr = document.getElementById("idr");

usd.addEventListener("input", function(ev) {
    const value = ev.currentTarget.value;
    const valueIDR = value * factor;
    idr.value = valueIDR;
});

idr.addEventListener("input", function(ev) {
    const value = ev.currentTarget.value;
    const valueUSD = value / factor;
    usd.value = valueUSD;
});