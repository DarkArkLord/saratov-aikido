export function addElement(parrent, tag, attributes, innerHTML) {
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

    if (parrent) {
        parrent.append(element);
    }

    return element;
}

export function addMetaData(parrent, attributes) {
    return addElement(parrent, 'meta', attributes);
}