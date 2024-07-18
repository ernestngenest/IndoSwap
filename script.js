let db = [{
        nama: 'Bitcoin',
        code: 'BTC',
        konversi: 1342342
    },
    {
        nama: 'Etherium',
        code: 'ETH',
        konversi: 53333
    },
    {
        nama: 'Pepe',
        code: 'Pepe',
        konversi: 2323238
    },
    {
        nama: 'Avax',
        code: 'AVX',
        konversi: 3432432
    },
    {
        nama: 'BlackCoq',
        code: 'Bcoq',
        konversi: 32432
    },
];


// Sample data for the dropdown options
const dropdownData = dropdownpush(db);

function dropdownpush(data) {
    let result = []
    for (let i = 0; i < data.length; i++) {
        result.push(data[i]['nama'])
    }
    return result;
}

function populateDropdown() {
    const dropdown = document.getElementById('dynamicDropdown');

    dropdownData.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        dropdown.appendChild(optionElement);
    });
}

const dropdown = document.getElementById('dynamicDropdown');
let selectedValue = '';

dropdown.addEventListener('change', function() {
    selectedValue = this.value;

});
populateDropdown();

function selectedCoin(selectedValue, database) {
    let factor = 0;
    for (let i = 0; i < database.length; i++) {
        if (database[i].nama === selectedValue) {
            factor = database[i].konversi;
            console.log(database[i]);
            break;
        }
    }
    // console.log(factor);
    return factor;

}


let factor = selectedCoin(selectedValue, db);

const usd = document.getElementById("usd");
const idr = document.getElementById("idr");

document.getElementById('swap-btn').addEventListener('click', function() {
    let crypto = document.getElementById('cryptoValue').value
    let result = 0
    console.log('crypto = ' + crypto);
    for (let i = 0; i < db.length; i++) {
        console.log(db[i].konversi + ' ' + db[i].nama);
        if (selectedValue === db[i].nama) {
            result = crypto * db[i].konversi
        }
    }
    console.log(result);
    document.getElementById('idr').value = result
});


function handleAddCoin(event) {
    event.preventDefault();
    document.getElementById('view-home').style.display = 'none'
    document.getElementById('menu-view').style.display = 'contents'
    document.getElementById('all-view').style.display = 'none'
}

document.getElementById('backCoin').addEventListener('click', function() {
    document.getElementById('view-home').style.display = 'Contents'
    document.getElementById('menu-view').style.display = 'none'
    document.getElementById('all-view').style.display = 'none'
})

// function handleAllCoin(event) {
//     event.preventDefault();
//     document.getElementById('view-home').style.display = 'none'
//     document.getElementById('menu-view').style.display = 'none'
//     document.getElementById('all-view').style.display = 'contents'
// }

function handleBackCoinView(event) {
    event.preventDefault();
    document.getElementById('view-home').style.display = 'contents'
    document.getElementById('menu-view').style.display = 'none'
    document.getElementById('all-view').style.display = 'none'
}

document.getElementById('viewAll-btn').addEventListener('click', function() {
    document.getElementById('view-home').style.display = 'none'
    document.getElementById('menu-view').style.display = 'none'
    document.getElementById('all-view').style.display = 'contents'
});

// function addDropdown(temp) {
//     const dropdown = document.getElementById('dynamicDropdown');
//     dropdownData.push(temp)
// }

function submitCoin(event) {
    event.preventDefault();
    let nama = document.getElementById('coin-nama').value
    let code = document.getElementById('coin-code').value
    let price = document.getElementById('coin-price').value

    let temp = {
        nama,
        code,
        konversi: Number(price)
    }

    db.push(temp);
    // addDropdown(temp);
    let dropdown = document.getElementById('dynamicDropdown');
    const optionElement = document.createElement('option');
    optionElement.value = temp.nama;
    optionElement.text = temp.nama;
    dropdown.appendChild(optionElement);
    // console.log(db);
    alert('berhasil tambah data');
}

function handleViewAll(event) {
    event.preventDefault();
    for (let i = 0; i < db.length; i++) {
        newDiv
    }
}