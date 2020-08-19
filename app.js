const input = document.querySelector('#lbsInput');
const firstOutput = document.querySelector('#firstOutput');
const secondOutput = document.querySelector('#secondOutput');
const thirdOutput = document.querySelector('#thirdOutput');
const fourthOutput = document.querySelector('#fourthOutput');
const firstCard = document.querySelector('#firstCard');
const secondCard = document.querySelector('#secondCard');
const thirdCard = document.querySelector('#thirdCard');
const fourthCard = document.querySelector('.card-4');
const units = document.querySelector('#units');
const options = document.querySelector('#options');
const output = document.querySelector('#output');

function updateOption(e) {
    const optionValue = options.value;
    if(optionValue === 'Weight'){
        output.style.display = 'none';
        input.disabled = true;
        input.placeholder = 'Enter Value...'
        units.disabled = false;
        clearField();
        const weight = `
            <option>--Select a Unit--</option>
            <option>Pounds</option>
            <option>Grams</option>
            <option>Kilograms</option>
        `
        units.innerHTML = weight;
    } else if(optionValue === 'Length') {
        output.style.display = 'none';
        input.disabled = true;
        units.disabled = false;
        input.placeholder = 'Enter Value...'
        clearField();
        const length = `
            <option>--Select a Unit--</option>
            <option>Metre</option>
            <option>Centimetre</option>
            <option>Inch</option>
            <option>Kilometre</option>
            <option>Foot</option>
        `
       units.innerHTML = length;
    } else {
        location.reload();
    };
}

function clearField() {
    input.value = '';
    firstOutput.textContent = '';
    secondOutput.textContent = '';
    thirdOutput.textContent = '';
    fourthOutput.textContent = '';
    input.focus();
};

function pounds() {
   const grams = input.value * 453.592;
   const kilograms = input.value * 0.453592;
   const ounces = input.value * 16;

   if(input.value) {
       firstOutput.textContent = grams.toFixed(2);
       secondOutput.textContent = kilograms.toFixed(2);
       thirdOutput.textContent = ounces.toFixed(2);
   } else {
    clearField();
   }
};

function grams() {
   const kilograms = input.value * 0.001;
   const pounds = input.value * 0.00220462;
   const ounces = input.value * 0.035274;

   if(input.value) {
       firstOutput.textContent = pounds.toFixed(3);
       secondOutput.textContent = kilograms.toFixed(3);
       thirdOutput.textContent = ounces.toFixed(2);
   } else {
    clearField();
   }
};

function kilograms() {
    const grams = input.value * 1000;
    const pounds = input.value * 2.20462;
    const ounces = input.value * 35.274;

    if(input.value) {
        firstOutput.textContent = grams.toFixed(2);
        secondOutput.textContent = pounds.toFixed(2);
        thirdOutput.textContent = ounces.toFixed(2);
    } else {
        clearField();
    }
};

function metre() {
    const CM = input.value * 100;
    const inch = input.value * 39.3701;
    const KM = input.value * 0.001;
    const FT = input.value * 3.28084;

    if(input.value) {
        firstOutput.textContent = CM.toFixed(2);
        secondOutput.textContent = inch.toFixed(2);
        thirdOutput.textContent = KM.toFixed(3);
        fourthOutput.textContent = FT.toFixed(2);
    } else {
        clearField();
    }
};

function centimetre() {
    const metre = input.value * 0.01;
    const inch = input.value * 0.393701;
    const KM = input.value * 1e-5;
    const FT = input.value * 0.0328084;

    if(input.value) {
        firstOutput.textContent = metre.toFixed(2);
        secondOutput.textContent = inch.toFixed(2);
        thirdOutput.textContent = KM.toFixed(6);
        fourthOutput.textContent = FT.toFixed(2);
    } else {
        clearField();
    }
};

function inch() {
    const metre = input.value * 0.0254;
    const CM = input.value * 2.54;
    const KM = input.value * 2.54e-5;
    const FT = input.value * 0.0833333;

    if(input.value) {
        firstOutput.textContent = metre.toFixed(2);
        secondOutput.textContent = CM.toFixed(2);
        thirdOutput.textContent = KM.toFixed(5);
        fourthOutput.textContent = FT.toFixed(2);
    } else {
        clearField();
    }
};

function kilometre() {
    const metre = input.value * 1000;
    const CM = input.value * 100000;
    const inch = input.value * 39370.1;
    const FT = input.value * 3280.84;

    if(input.value) {
        firstOutput.textContent = metre.toFixed(2);
        secondOutput.textContent = CM.toFixed(2);
        thirdOutput.textContent = inch.toFixed(2);
        fourthOutput.textContent = FT.toFixed(2);
    } else {
        clearField()
    }
};

function foot() {
    const metre = input.value * 0.3048;
    const CM = input.value * 30.48;
    const inch = input.value * 12;
    const KM = input.value * 0.0003048;

    if(input.value) {
        firstOutput.textContent = metre.toFixed(2);
        secondOutput.textContent = CM.toFixed(2);
        thirdOutput.textContent = inch.toFixed(2);
        fourthOutput.textContent = KM.toFixed(4);
    } else {
        clearField();
    }
};

function change() {
    const value = units.value;
    if (value === 'Pounds') {
        output.style.display = 'block';
        input.disabled = false;
        clearField();
        input.addEventListener('input', pounds)
        input.placeholder = 'Enter Pounds...';
        firstCard.textContent = 'Grams:';

    } else if (value === 'Grams') {
        output.style.display = 'block';
        input.disabled = false;
        clearField();
        input.addEventListener('input', grams)
        input.placeholder = 'Enter Grams...';
        firstCard.textContent = 'Pounds:';
        secondCard.textContent = 'Kilograms:';

    } else if(value === 'Kilograms') {
        output.style.display = 'block';
        input.disabled = false;
        clearField();
        input.addEventListener('input', kilograms)
        input.placeholder = 'Enter Kilograms...';
        firstCard.textContent = 'Grams:';
        secondCard.textContent = 'Pounds:';

    } else if(value === 'Metre') {
        output.style.display = 'block';
        input.disabled = false;
        clearField();
        fourthCard.style.display = 'block';
        input.addEventListener('input', metre)
        input.placeholder = 'Enter Metre...';
        firstCard.textContent = 'Centimetre:';
        secondCard.textContent = 'Inch:';
        thirdCard.textContent = 'Kilometre:';
        
    } else if(value === 'Centimetre') {
        output.style.display = 'block';
        input.disabled = false;
        clearField();
        fourthCard.style.display = 'block';
        input.addEventListener('input', centimetre);
        input.placeholder = 'Enter Centimetre...';
        firstCard.textContent = 'Metre:'
        secondCard.textContent = 'Inch:';
        thirdCard.textContent = 'Kilometre:';

    } else if(value === 'Inch') {
        output.style.display = 'block';
        input.disabled = false;
        clearField();
        input.placeholder = 'Enter Inch...';
        fourthCard.style.display = 'block';
        input.addEventListener('input', inch);
        firstCard.textContent = 'Metre:';
        secondCard.textContent = 'Centimetre:';
        thirdCard.textContent = 'Kilometre:';

    } else if(value === 'Kilometre') {
        output.style.display = 'block';
        input.disabled = false;
        clearField();
        input.placeholder = 'Enter Kilometre...';
        fourthCard.style.display = 'block';
        input.addEventListener('input', kilometre);
        firstCard.textContent = 'Metre:';
        secondCard.textContent = 'Centimetre:';
        thirdCard.textContent = 'Inch:';

    } else if(value === 'Foot') {
        output.style.display = 'block';
        input.disabled = false;
        clearField();
        input.placeholder = 'Enter Foot...';
        fourthCard.style.display = 'block';
        input.addEventListener('input', foot);
        firstCard.textContent = 'Metre:';
        secondCard.textContent = 'Centimetre:';
        thirdCard.textContent = 'Inch:';
        fourthCard.firstElementChild.firstElementChild.textContent = 'Kilometre:';

    } else {
        input.disabled = true;
        input.placeholder = 'Enter Value...';
    }
};

units.addEventListener('change', change);
options.addEventListener('change', updateOption);
