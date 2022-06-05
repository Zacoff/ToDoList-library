export default class Create {
    static createForm (parentElement,elements) {
        let form = this.createElement(parentElement,'form');
        let inputs = elements.map((a,i) => {
            let text = /((?!#).)*/.exec(a)[0]
            let label = this.createElement(form, 'label', i.toString(), text);
            let input = this.createElement(label, 'input', a + 'input');
            input.setAttribute('placeholder', text)
            return input
        });
        let submit = this.createElement(form, 'input','test');
        submit.setAttribute('type', 'submit');

        return [submit,inputs]
    }
    static createTable (parentElement,elements) {
        let table = this.createElement(parentElement,'table');
        let tHead = this.createElement(table,'thead');
        let tr = this.createElement(tHead,'tr');
        elements.map((a,i) => {
            let text = /((?!#).)*/.exec(a)[0]
            let th = this.createElement(tr, 'th', i.toString() + 'Title');
            this.createElement(th, 'p', a, text);
        })
        let tbody = this.createElement(table,'tbody');
        return tbody
    }
    static createElement (parentElement,el,name,text) {
        let element = document.createElement(el);
        if(text !== undefined) element.innerHTML = text;
        if(name !== undefined) element.setAttribute('id', name.toLowerCase());
        parentElement.appendChild(element);
        return element;
    }
}