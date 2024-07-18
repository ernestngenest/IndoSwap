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
let CoinStatus = '';




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
    // console.log('Selected value:', selectedValue);
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
    console.log(factor);
    return factor;

}


// let factor = 14000;

const usd = document.getElementById("usd");
const idr = document.getElementById("idr");

function convertCurrency(inputField, targetField, conversionRate) {
    inputField.addEventListener("input", function(ev) {
        const value = ev.currentTarget.value;
        if (conversionRate !== 0) {
            const convertedValue = value * conversionRate;
            targetField.value = convertedValue;
        } else {
            targetField.value = "Invalid conversion rate";
        }
    });
}



document.getElementById('swap-btn').addEventListener('click', function() {

    let factor = selectedCoin(selectedValue, db);
    console.log(factor);

    const valueIDR = source * factor; // factor is the conversion rate
    idr.value = valueIDR;
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

function handleAllCoin(event) {
    event.preventDefault();
    document.getElementById('view-home').style.display = 'none'
    document.getElementById('menu-view').style.display = 'none'
    document.getElementById('all-view').style.display = 'contents'
}

function handleBackCoinView(event) {
    event.preventDefault();
    document.getElementById('view-home').style.display = 'contents'
    document.getElementById('menu-view').style.display = 'none'
    document.getElementById('all-view').style.display = 'none'
}