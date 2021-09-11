// import './head_includes.js';
// import './header_includes.js';
import { HTMLTags, ItemTypes, render } from "./render_lib.js";

function createColumnForParent(parent) {
    let columnElement = document.createElement("td");
    parent.appendChild(columnElement);
    return columnElement;
}

function createRowForParent(parent) {
    let rowElement = document.createElement("tr");
    parent.appendChild(rowElement);
    return {
        element: rowElement,
        addColumn: () => createColumnForParent(rowElement),
    };
}

function createTableForParent(parent) {
    let tableElement = document.createElement("table");
    parent.appendChild(tableElement);
    return {
        element: tableElement,
        addRow: () => createRowForParent(tableElement),
    };
}

function getTableById(id) {
    let tableElement = document.getElementById(id);
    return {
        element: tableElement,
        addRow: () => createRowForParent(tableElement),
    };
}

// const mainPageTable = getTableById('mainPageTable');
const mainPageContent = document.getElementById('mainPageContent');

// mainPageTable.element.innerHTML = '';

// (function() {
//     const header = mainPageTable.addRow().addColumn();
//     header.setAttribute('colspan', 3);
//     header.innerHTML = 'header';
// })();

// (function() {
//     const body = mainPageTable.addRow();

//     const menu = body.addColumn();
//     menu.innerHTML = 'menu';

//     const content = body.addColumn();
//     content.append(mainPageContent);

//     const right = body.addColumn();
//     right.innerHTML = 'right';
// })();

// (function() {
//     const footer = mainPageTable.addRow().addColumn();
//     footer.setAttribute('colspan', 3);
//     footer.innerHTML = 'footer';
// })();

let item = {
    tag: HTMLTags.Table,
    attributes: { border: "1", cellpadding: "0", cellspacing: "0", width: "100%" },
    type: ItemTypes.Container,
    childs: [
        {
            tag: HTMLTags.TableRow,
            type: ItemTypes.Container,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    type: ItemTypes.Value,
                    attributes: { colspan: 3 },
                    value: 'header',
                }
            ],
        },
        {
            tag: HTMLTags.TableRow,
            type: ItemTypes.Container,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    type: ItemTypes.Value,
                    value: 'menu',
                },
                {
                    tag: HTMLTags.TableData,
                    type: ItemTypes.Container,
                    childs: [
                        {
                            element: mainPageContent,
                        }
                    ]
                },
                {
                    tag: HTMLTags.TableData,
                    type: ItemTypes.Value,
                    value: 'smth',
                }
            ]
        },
        {
            tag: HTMLTags.TableRow,
            type: ItemTypes.Container,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    type: ItemTypes.Value,
                    attributes: { colspan: 3 },
                    value: 'footer',
                }
            ],
        },
    ],
};

document.documentElement.innerHTML = "";
let t = render(item);
document.documentElement.append(t);