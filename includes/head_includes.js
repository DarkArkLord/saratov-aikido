import { addMetaData } from "./dom_functions.js";


let headElement = document.getElementsByTagName('head')[0];
addMetaData(headElement, { charset: 'utf-8' });
addMetaData(headElement, { name: 'description', content: 'Общественная организация по занятиям Айкидо Айкикай в Саратове' });
addMetaData(headElement, {
    name: 'keywords',
    content: 'айкидо, саратов, айкидо саратов, клубы айкидо, психологическое айкидо, ' +
        'школы айкидо, школа айкидо, секция айкидо, занятия айкидо, семинары айкидо, ' +
        'айкидо центры, айкидо России, секция айкидо саратов, клуб айкидо саратов, ' +
        'что такое айкидо, Станислав Петров, Михаил Сафронов, Кристиан Тисье, ' +
        'Кристиан Тиссье, Патрик Бенези, Сейширо Эндо, бокен, танто, атеми, укеми ' +
        'aikido, aikikai, Stanislav Petrov, Mikhail Safronov, Christian Tissier, ' +
        'Patrick Behezi, aikiken, айкидо для детей, спорт, рукопашный бой, самооборона'
});

let titleElement = document.createElement('title');
titleElement.innerHTML = 'Саратовская Федерация Айкидо Айкикай';
headElement.append(titleElement);

let stylesElement = document.createElement('link');
stylesElement.setAttribute('rel', 'stylesheet');
stylesElement.setAttribute('href', '/styles/MyStyle.css');
headElement.append(stylesElement);