import Apperance from "./functions/Apperance.js";
import Create from "./functions/Create.js";
import Render from "./functions/Render.js";
import Validates from "./Validates/Validate.js";


const header = document.getElementById('header');
const table = document.getElementById('table')

const titles = ['Name', 'Weigth', 'Birthday#'];

const createForm = Create.createForm(header,titles);
const createTable = Create.createTable(table,titles);
const inputs = createForm[1];
const submit = createForm[0];

inputs.map((a,i) => {
    if((inputs[i].id).includes('#')) Validates.dateController(inputs[i])
})


submit.addEventListener('click', (e) => {
    e.preventDefault()
    Render.InsertLineIntoTable(inputs,createTable);
})