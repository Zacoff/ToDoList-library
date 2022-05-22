import Apperance from "./functions/Apperance.js";
import Table from "./functions/Table.js";
import Validates from "./Validates/Validate.js";
const task = document.getElementById('tarefa');
const date = document.getElementById('dia');
const button = document.getElementById('button');
const description = document.getElementById('description');
const tbody = document.getElementById('tbody');
const storage = []

Validates.dateController(date)

button.addEventListener('click', (event) => {
    event.preventDefault();
    try {
        Validates.inputFilled([task,date,description]);
        Validates.dateFormat(date.value);
        Table.lineCreate([task,date,description],tbody,storage);
        Apperance.setBackground(date,'white');
        Apperance.setBackground(task,'white');
    }catch (err) {
        if(err.message === 'Invalid Date Format') Apperance.setBackground(date,'red');
        if(err.message === 'Input Empty') {
            Apperance.setBackground(date,'red');
            Apperance.setBackground(task,'red');
        };
    }
});