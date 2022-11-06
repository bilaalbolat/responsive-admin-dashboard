let numbersales = document.getElementById('numbersales');
let countersales = 0;

setInterval (()=> {
    if (countersales == 65) {
        clearInterval;
    } else {
        countersales += 1;
        numbersales.innerHTML = `${countersales}%`
    }
},30)

let numberexpenses = document.getElementById('numberexpenses');
let counterexpenses = 0;

setInterval (()=> {
    if (counterexpenses == 72) {
        clearInterval;
    } else {
        counterexpenses += 1;
        numberexpenses.innerHTML = `${counterexpenses}%`
    }
},27)

let numberincome = document.getElementById('numberincome');
let counterincome = 0;

setInterval (()=> {
    if (counterincome == 85) {
        clearInterval;
    } else {
        counterincome += 1;
        numberincome.innerHTML = `${counterincome}%`
    }
},24)