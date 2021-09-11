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

addElement(headElement, 'title', undefined, 'Саратовская Федерация Айкидо Айкикай');
addElement(headElement, 'link', { rel: 'stylesheet', href: '/styles/MyStyle.css' });

/*
<meta name="description" content="Общественная организация по занятиям Айкидо Айкикай в Саратове">
<meta name="keywords" content="айкидо, саратов, айкидо саратов, клубы айкидо, психологическое айкидо,
                                        школы айкидо, школа айкидо, секция айкидо, занятия айкидо, семинары айкидо,
                                        айкидо центры, айкидо России, секция айкидо саратов, клуб айкидо саратов,
                                        что такое айкидо, Станислав Петров, Михаил Сафронов, Кристиан Тисье,
                                        Кристиан Тиссье, Патрик Бенези, Сейширо Эндо, бокен, танто, атеми, укеми
                                        aikido, aikikai, Stanislav Petrov, Mikhail Safronov, Christian Tissier,
                                        Patrick Behezi, aikiken, айкидо для детей, спорт, рукопашный бой, самооборона">



<meta charset="utf-8">
<title>Саратовская Федерация Айкидо Айкикай</title>
<link rel="stylesheet" href="/styles/MyStyle.css">

<script>
    $(
        function () {
            $('#head').load('/includes/head.inc')
        }
    );
</script>
<script>
    $(
        function () {
            $('#menu').load('/includes/menu.inc')
        }
    );
</script>
<script>
    $(
        function () {
            $('#right').load('/includes/right.inc')
        }
    );
</script>
<script>
    $(
        function () {
            $('#creators').load('/includes/creators.inc')
        }
    );
</script>
*/