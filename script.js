let db = [{
        nama: 'Bitcoin',
        code: 'BTC',
        konversi: 1.048
    },
    {
        nama: 'Etherium',
        code: 'ETH',
        konversi: 55.000
    },
    {
        nama: 'Pepe',
        code: 'Pepe',
        konversi: 0.0000048
    },
    {
        nama: 'Avax',
        code: 'AVX',
        konversi: 20.000
    },
    {
        nama: 'BlackCoq',
        code: 'Bcoq',
        konversi: 1.111
    },
];


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