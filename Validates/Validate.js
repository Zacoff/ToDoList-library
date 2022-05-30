export default class Validates {
    static dateFormat (str) {
        const regex = /\d{2}\/\d{2}\/\d{4}/;
        if(!regex.test(str)) throw new Error('Invalid Date Format');
    }
    static dateController (el) {
        el.addEventListener('keypress', (event) => { 
            const keyNotANumber = event.keyCode > 57 || event.keyCode < 48;
            const lengthInput = el.value.length === 10
            if(keyNotANumber || lengthInput) event.preventDefault();
            if(el.value.length === 2 || el.value.length === 5) el.value += '/';
        });
    }
    static inputFilled (inputs) {
        inputs.map((input, i) => {if(input.value === '') throw new Error(`Input Empty ${i}`)})      
    }
}