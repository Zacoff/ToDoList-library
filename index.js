import Apperance from "./functions/Apperance.js";
import Create from "./functions/Create.js";
import Validates from "./Validates/Validate.js";
const header = document.getElementById('header');
const table = document.getElementById('table')

const titles = ['Name', 'Weigth', 'Birthday#'];

const createForm = Create.createForm(header,titles);
const createTable = Create.createTable(table,titles)

for(let i = 0; i < createForm[1].length; i++)
if((createForm[1][i].id).includes('#')) Validates.dateController(createForm[1][i])

createForm[0].addEventListener('click', (event) => {
    event.preventDefault();
    let tr = Create.createElement(createTable,'tr')
    createForm[1].map(a => {
        const value = a.value;
        if(a.getAttribute('id').includes('#')) Validates.dateFormat(value);
        Create.createElement(tr,'th',a.getAttribute('id'),a.value)
    })
});