export function render(item){if(item.element){return item.element;}let element=item.element=document.createElement(item.tag);if(item.attributes){for(let name in item.attributes){let value=item.attributes[name];element.setAttribute(name,value);}}if(item.value) {element.innerHTML=item.value;}if(item.childs){for(let i in item.childs){let child=item.childs[i];if(!child.element){render(child);}element.append(child.element);}}return element;}