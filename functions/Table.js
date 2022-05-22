export default class Table {
    static addHtml (el,element) {
        el.innerHTML += element
    }
    static lineCreate (inputs,el,storage) {
            const htmlConvert = inputs.map((campos,index) => {return (`<th id="${index}">${campos.value}</th>`)});
            this.addHtml(el ,`<tr>${htmlConvert.map(a => a).join('')}</tr>`);
    }
}
