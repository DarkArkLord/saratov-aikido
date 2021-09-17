import { HTMLTags, ItemTypes } from "./render_lib.js";

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
    attributes: { border: "0", cellpadding: "3", cellspacing: "0", width: "100%", style: "background: #CCCCCC" },
    type: ItemTypes.Container,
    childs: []
};

menuElements.forEach(element => {
    let item = {
        tag: HTMLTags.TableRow,
        type: ItemTypes.Container,
        childs: [
            {
                tag: HTMLTags.TableData,
                type: ItemTypes.Container,
                childs: [
                    {
                        tag: HTMLTags.Span,
                        attributes: { class: "txt_style" },
                        type: ItemTypes.Container,
                        childs: [
                            {
                                tag: HTMLTags.Anchor,
                                attributes: { href: element.link, class: "txt_style" },
                                type: ItemTypes.Value,
                                value: element.title
                            }
                        ],
                    }
                ],
            }
        ],
    }

    menuItem.childs.push(item);
});

/*
        <!-- menu -->
        <tr>
            <td>
                <table border="0" cellpadding="3" cellspacing="0" width="100%" style="background: #CCCCCC">
                    <tr>
                        <td>
                            <span class="txt_style">
                                <a href="/index.html" class="txt_style">
                                    Главная
                                </a>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="txt_style">
                                <a href="/pages/DMenu/DAikidoVSaratove/PAikidoVSaratove.html" class="txt_style">
                                    Айкидо в Саратове
                                </a>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="txt_style">
                                <a href="/pages/DMenu/DSpecialProject/PSpecialProject.html" class="txt_style">
                                    Наш проект "Aikido for all"
                                </a>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="txt_style">
                                <a href="/pages/DMenu/DChildren/PChildren.html" class="txt_style">
                                    Детские группы
                                </a>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="txt_style">
                                <a href="/pages/DMenu/DZaliIRasp/PZaliIRasp.html" class="txt_style">
                                    Залы и расписания
                                </a>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="txt_style">
                                <a href="/pages/DMenu/DSeminary/PSeminary.html" class="txt_style">
                                    Семинары
                                </a>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="txt_style">
                                <a href="/pages/DMenu/DAttestation/PAttestation.html" class="txt_style">
                                    Аттестации
                                </a>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="txt_style">
                                <a href="/pages/DMenu/DLinks/PLinks.html" class="txt_style">
                                    Ссылки
                                </a>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="txt_style">
                                <a href="/pages/DMenu/DContacts/PContacts.html" class="txt_style">
                                    Контакты
                                </a>
                            </span>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <!-- end menu -->
*/