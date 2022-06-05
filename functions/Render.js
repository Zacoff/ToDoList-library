import Validates from "../Validates/Validate.js";
import Create from "./Create.js";
export default class Render {
    static InsertLineIntoTable (elements,table) {
            Validates.inputFilled(elements);
            let tr = Create.createElement(table,'tr');
            elements.map(a => {
                const value = a.value;
                    Create.createElement(tr,'th',a.getAttribute('id'),value)                
            })
            
    }
}