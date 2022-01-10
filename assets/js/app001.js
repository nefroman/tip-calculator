/* //variables

const d = document;


const bill = d.querySelector('.input-bill')
const boton_custom = d.querySelector('.caja-custom');
const botones = d.querySelectorAll('.caja');
const numb_people = d.querySelector('.input-control');
const tip_amount = d.querySelector('.propina .dollar');
const total = d.querySelector('.personas .dollar')
const boton_reset = d.querySelector('.reset ');


//funciones
function five_percent () {
    const bill = d.querySelector('.input-bill').value;
    bill_num = Number.parseFloat(bill);
    const numb_people  = d.querySelector('.input-control').value;
    numb_people_num = Number.parseFloat(numb_people);
    calcularTipAmount(bill_num, numb_people_num);
    resetAll();
}

function calcularTipAmount (num, personas) { 
        let resultado = (num * 0.05)/personas;
        let resultadoTotal = (num * 1.05)/personas;
        if (isNaN(resultado)) return
        else  {
            tip_amount.innerHTML = resultado;
            total.innerHTML = resultadoTotal;
        }
}

function ten_percent () {
    const bill = d.querySelector('.input-bill').value;
    bill_num = Number.parseFloat(bill);
    const numb_people  = d.querySelector('.input-control').value;
    numb_people_num = Number.parseFloat(numb_people);
    
    
    calcularTipAmountTen(bill_num, numb_people_num);
    resetAll();
}

function calcularTipAmountTen (num, personas) { 
        let resultado = (num * 0.1)/personas;
        let resultadoTotal = (num * 1.10)/personas;
        if (isNaN(resultado)) return
        else  {
            tip_amount.innerHTML = resultado;
            total.innerHTML = resultadoTotal;
        }
}

function fifteen_percent () {
    const bill = d.querySelector('.input-bill').value;
    bill_num = Number.parseFloat(bill);
    const numb_people  = d.querySelector('.input-control').value;
    numb_people_num = Number.parseFloat(numb_people);
    
    
    calcularTipAmountFifteen(bill_num, numb_people_num);
    resetAll();
}

function calcularTipAmountFifteen (num, personas) { 
        let resultado = (num * 0.15)/personas;
        resultadoTotal = (num * 1.15)/personas;
        if (isNaN(resultado)) return
        else  {
            tip_amount.innerHTML = resultado;
            total.innerHTML = resultadoTotal;
        }
}

function Twentyfive_percent () {
    const bill = d.querySelector('.input-bill').value;
    bill_num = Number.parseFloat(bill);
    const numb_people  = d.querySelector('.input-control').value;
    numb_people_num = Number.parseFloat(numb_people);
    
    
    calcularTipAmountTwentyFive(bill_num, numb_people_num);
    resetAll();
}

function calcularTipAmountTwentyFive (num, personas) { 
        let resultado = (num * 0.25)/personas;
        resultadoTotal = (num * 1.25)/personas;
        if (isNaN(resultado)) return
        else  {
            tip_amount.innerHTML = resultado;
            total.innerHTML = resultadoTotal;
        }
}

function fifty_percent () {
    const bill = d.querySelector('.input-bill').value;
    bill_num = Number.parseFloat(bill);
    const numb_people  = d.querySelector('.input-control').value;
    numb_people_num = Number.parseFloat(numb_people);
    
    
    calcularTipAmountFifty(bill_num, numb_people_num);
    resetAll();
}

function calcularTipAmountFifty (num, personas) { 
        let resultado = (num * 0.50)/personas;
        resultadoTotal = (num * 1.50)/personas;
        if (isNaN(resultado)) return
        else  {
            tip_amount.innerHTML = resultado;
            total.innerHTML = resultadoTotal;
        }
}

function customButon (){
    const boton_custom = d.querySelector('.caja-custom').value;
    const boton_custom_numb = Number.parseFloat(boton_custom);
    const bill = d.querySelector('.input-bill').value;
    const bill_num = Number.parseFloat(bill);
    const numb_people  = d.querySelector('.input-control').value;
    const numb_people_num = Number.parseFloat(numb_people);
    calcularTipAmountCustom(bill_num, numb_people_num, boton_custom_numb);
    resetAll();
}

function calcularTipAmountCustom (num, personas, custom) { 

    let resultado = (num * (custom/100))/personas;
    let resultadoTotal = (num * ((custom/100) + 1)/personas);
    if (isNaN(resultado)) return
    else  {
        tip_amount.innerHTML = resultado;
        total.innerHTML = resultadoTotal;
    }
}

//funcion reset
function resetAll(){
    boton_reset.addEventListener('click', () => {
        tip_amount.innerHTML = 0;
        total.innerHTML = 0;
        bill.value = '';
        numb_people.value = '';
        boton_custom.value = '';
    })
}



 */