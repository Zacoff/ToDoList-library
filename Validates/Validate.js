export default class Validates {
    static dateFormat (str) {
        const regex = /\d{2}\/\d{2}\/\d{4}/;
        if(!regex.test(str)) throw new Error('Invalid Date Format');
    }
    static dateController (el) {
        el.addEventListener('keypress', (event) => { 
            if(el.value.length === 10) event.preventDefault();
            if(el.value.length === 2 || el.value.length === 5) el.value += '/';
        })
    }
    static inputFilled (inputs) {
        inputs.map(input => {if(input.value === '') throw new Error('Input Empty')})      
    }
}