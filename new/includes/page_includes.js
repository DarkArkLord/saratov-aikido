// import './head_includes.js';
// import './header_includes.js';
// import './menu_includes.js';

function createColumnForParent(parent) {
    let columnElement = document.createElement('td');
    parent.appendChild(columnElement);
    return columnElement;
}

function createRowForParent(parent) {
    let rowElement = document.createElement('tr');
    parent.appendChild(rowElement);
    return {
        element: rowElement,
        addColumn: () => createColumnForParent(rowElement)
    };
}

function createTableForParent(parent) {
    let tableElement = document.createElement('table');
    parent.appendChild(tableElement);
    return {
        element: tableElement,
        addRow: () => createRowForParent(tableElement)
    };
}

function getTableById(id) {
    let tableElement = document.getElementById(id);
    return {
        element: tableElement,
        addRow: () => createRowForParent(tableElement)
    };
}

const mainPageTable = getTableById('mainPageTable');
const mainPageContent = document.getElementById('mainPageContent');

mainPageTable.element.innerHTML = '';

(function() {
    const header = mainPageTable.addRow().addColumn();
    header.setAttribute('colspan', 3);
    header.innerHTML = 'header';
})();

(function() {
    const body = mainPageTable.addRow();

    const menu = body.addColumn();
    menu.innerHTML = 'menu';

    const content = body.addColumn();
    content.append(mainPageContent);

    const right = body.addColumn();
    right.innerHTML = 'right';
})();

(function() {
    const footer = mainPageTable.addRow().addColumn();
    footer.setAttribute('colspan', 3);
    footer.innerHTML = 'footer';
})();