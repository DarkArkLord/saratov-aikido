export function createElement(tag, attributes, innerHTML) {
    let element = document.createElement(tag);

    if (attributes) {
        for (let name in attributes) {
            let value = attributes[name];
            element.setAttribute(name, value);
        }
    }

    if (innerHTML) {
        element.innerHTML = innerHTML;
    }

    return element;
}

export function addElementForParrent(parrent, tag, attributes, innerHTML) {
    let element = createElement(tag, attributes, innerHTML);

    if (parrent) {
        parrent.append(element);
    }

    return element;
}

export function addMetaData(parrent, attributes) {
    return addElementForParrent(parrent, 'meta', attributes);
}

export class Element {
    constructor(tag, attributes, innerHTML) {
        this.element = undefined;
        this.tag = tag;
        this.attributes = attributes;
        this.innerHTML = innerHTML;
    }
    createElement() {
        return createElement(this.tag, this.attributes, this.innerHTML);
    }
    getElement() {
        if(!this.element) {
            this.element = this.createElement();
        }
        return this.element;
    }
}

export class TableColumnElement extends Element {
    constructor() {
        super('td')
    }
}

export class TableRowElement extends Element {
    constructor() {
        super('tr')
    }
    addColumn() {
        let column = new TableColumnElement();
        let columnElement = new TableColumnElement();
        this.getElement().append(column.getElement())
    }
}