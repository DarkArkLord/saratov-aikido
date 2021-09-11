export const HTMLTags = {
    Table: 'table',
    TableRow: 'tr',
    TableData: 'td'
}

export const ItemTypes = {
    Value: 'VALUE',
    Container: 'CONTAINER'
}

export function render(item) {
    let element = document.createElement(item.tag);
    item.element = element;

    if(item.attributes) {
        for(let name in item.attributes) {
            let value = item.attributes[name];
            element.setAttribute(name, value);
        }
    }

    switch(item.type) {
        case ItemTypes.Value:
            if(item.value) {
                element.innerHTML = item.value;
            }
            break;
        case ItemTypes.Container:
            if(item.childs) {
                for(let i in item.childs) {
                    let child = item.childs[i];
                    if(!child.element) {
                        render(child);
                    }
                    element.append(child.element);
                }
            }
            break;
    }

    return element;
}