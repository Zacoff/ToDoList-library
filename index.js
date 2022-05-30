import Apperance from "./functions/Apperance.js";
import Table from "./functions/Table.js";
import Validates from "./Validates/Validate.js";
const header = document.getElementById('header');
const table = document.getElementById('table')

const titles = ['Name', 'Weigth', 'Birthday#'];

const create = Table.createForm(header,titles);

for(let i = 0; i < create[1].length; i++)
if((create[1][i].id).includes('#')) Validates.dateController(create[1][i])

create[0].addEventListener('click', (event) => {
    event.preventDefault();
    create[1].map(a => {
        const value = a.value;
        if(a.getAttribute('id').includes('#')) console.log(a.getAttribute('id'));
    })
});