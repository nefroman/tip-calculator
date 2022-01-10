const d = document;


const bill = d.querySelector('.input-bill')
const boton_custom = d.querySelector('.caja-custom');
const botones = d.querySelectorAll('.caja');
const numb_people = d.querySelector('.input-control');
const tip_amount = d.querySelector('.propina .dollar');
const total = d.querySelector('.personas .dollar')
const boton_reset = d.querySelector('.reset ');


bill.addEventListener('input', function(){
    const bill = d.querySelector('.input-bill').value;    
})

numb_people.addEventListener('input', function(){
    const numb_people = d.querySelector('.input-control').value;
})

boton_custom.addEventListener('input', (e) => {
    const custom = d.querySelector('.input-control').value;
    console.log(custom);
})


botones.forEach( boton => boton.addEventListener('click', function(){
    const bill = d.querySelector('.input-bill').value; 
    const bill_num = Number.parseFloat(bill);
    const numb_people = d.querySelector('.input-control').value;
    const numb_people_num = Number.parseFloat(numb_people);
    let pressButton = Number.parseFloat(boton.textContent);

    calculateTip(bill_num, numb_people, pressButton);
}))


function calculateTip(bill, people, tip) {
    let tipValue = bill*(tip/100);
    let billValue =  Number(( tipValue / people)).toFixed(2); //Tip amount
    let totalValue = Number((bill / people) + Number.parseFloat(billValue)).toFixed(2);

    actualizarDisplay(billValue, totalValue)
}   


function actualizarDisplay(bill, totalPersons){
    total.innerHTML = totalPersons;
    tip_amount.innerHTML = bill;
    resetAll()
}

function resetAll(){
    boton_reset.addEventListener('click', () => {
        tip_amount.innerHTML = 0;
        total.innerHTML = 0;
        bill.value = '';
        numb_people.value = '';
        boton_custom.value = '';
    })
}