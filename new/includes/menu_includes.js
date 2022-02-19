import { HTMLTags } from "./htmlTags.js";

const menuElements = [
    { title: 'Главная', link: '/index.html' },
    { title: 'Айкидо в Саратове', link: '/pages/DMenu/DAikidoVSaratove/PAikidoVSaratove.html' },
    { title: 'Наш проект "Aikido for all"', link: '/pages/DMenu/DSpecialProject/PSpecialProject.html' },
    { title: 'Детские группы', link: '/pages/DMenu/DChildren/PChildren.html' },
    { title: 'Залы и расписания', link: '/pages/DMenu/DZaliIRasp/PZaliIRasp.html' },
    { title: 'Семинары', link: '/pages/DMenu/DSeminary/PSeminary.html' },
    { title: 'Аттестации', link: '/pages/DMenu/DAttestation/PAttestation.html' },
    { title: 'Ссылки', link: '/pages/DMenu/DLinks/PLinks.html' },
    { title: 'Контакты', link: '/pages/DMenu/DContacts/PContacts.html' },
];

export const menuItem = {
    tag: HTMLTags.Table,
    attributes: { cellpadding: "3", cellspacing: "0", class: "menu_container" },
    childs: []
};

menuElements.forEach(element => {
    let item = {
        tag: HTMLTags.TableRow,
        childs: [
            {
                tag: HTMLTags.TableData,
                childs: [
                    {
                        tag: HTMLTags.Anchor,
                        attributes: { href: element.link, class: "color_black bold nowarp" },
                        value: element.title
                    }
                ],
            }
        ],
    }

    menuItem.childs.push(item);
});