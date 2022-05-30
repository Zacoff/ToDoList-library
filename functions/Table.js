export default class Table {
    static createForm (parentElement,elements) {
        const form = Table.createElement(parentElement,'form');
        const inputs = elements.map((a,i) => {
            const text = /((?!#).)*/.exec(a)[0]
            const label = this.createElement(form, 'label', i.toString(), text);
            const input = this.createElement(label, 'input', a);
            input.setAttribute('placeholder', text)
            return input
        });
        const submit = Table.createElement(form, 'input','test');
        submit.setAttribute('type', 'submit');

        return [submit,inputs]
    }
    static createElement (parentElement,el,name,text) {
        const element = document.createElement(el);
        if(text !== undefined) element.innerHTML = text;
        if(name !== undefined) element.setAttribute('id', name.toLowerCase());
        parentElement.appendChild(element);
        return element;
    }
}