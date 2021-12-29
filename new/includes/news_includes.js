import { HTMLTags, ItemTypes } from "./render_lib.js";

const newsElements = [
    { title: 'Приглашаем на занятия по айкидо в "Эверест"!', link: 'https://vk.com/wall-3928256_2143' },
    { title: 'Детская летняя школа айкидо в Саратове.', link: 'https://vk.com/aikidovsaratove?w=wall-3928256_2089' },
    { title: 'Экзамен. Май 2021.', link: 'https://vk.com/wall-3928256_2088' },
    { title: 'Интервью Паскаля Гиймана: отход от дисциплины айкидо.', link: 'http://www.saratov-aikido.ru/pages/DMenu/DAikidoVSaratove/DArchive/DArticles/DInterviewPascal/PInterviewPascal.html' },
    { title: 'Интерактивное обновление новостей', link: 'http://vk.com/aikidovsaratove' },
];

export const newsItem = {
    tag: HTMLTags.Table,
    attributes: { cellpadding: "3", cellspacing: "0", class: "menu_container" },
    type: ItemTypes.Container,
    childs: [
        {
            tag: HTMLTags.TableRow,
            type: ItemTypes.Container,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    attributes: { class: "align_center color_red font_14" },
                    type: ItemTypes.Container,
                    childs: [
                        {
                            tag: HTMLTags.Bold,
                            type: ItemTypes.Value,
                            value: 'Новости'
                        }
                    ],
                }
            ],
        }
    ]
};

newsElements.forEach(element => {
    let item = {
        tag: HTMLTags.TableRow,
        type: ItemTypes.Container,
        childs: [
            {
                tag: HTMLTags.TableData,
                attributes: { class: "news_record" },
                type: ItemTypes.Container,
                childs: [
                    {
                        tag: HTMLTags.Anchor,
                        attributes: { href: element.link, class: "color_gray bold font_14" },
                        type: ItemTypes.Value,
                        value: '&#8226; ' + element.title
                    }
                ],
            }
        ],
    }

    newsItem.childs.push(item);
});