import { HTMLTags } from "./htmlTags.js";

const newsElements = [
    { title: 'Приглашаем на занятия по айкидо в "Эверест"!', link: 'https://vk.com/wall-3928256_2143' },
    { title: 'С Новым 2022 годом!', link: 'https://vk.com/wall-3928256_2196' },
    { title: 'Экзамен. Декабрь 2021.', link: 'https://vk.com/wall-3928256_2194' },
    { title: 'Интервью Паскаля Гиймана: отход от дисциплины айкидо.', link: 'http://www.saratov-aikido.ru/pages/DMenu/DAikidoVSaratove/DArchive/DArticles/DInterviewPascal/PInterviewPascal.html' },
    { title: 'Интерактивное обновление новостей', link: 'http://vk.com/aikidovsaratove' },
];

export const newsItem = {
    tag: HTMLTags.Table,
    attributes: { cellpadding: "3", cellspacing: "0", class: "menu_container" },
    childs: [
        {
            tag: HTMLTags.TableRow,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    attributes: { class: "align_center color_red font_14" },
                    childs: [
                        {
                            tag: HTMLTags.Bold,
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
        childs: [
            {
                tag: HTMLTags.TableData,
                attributes: { class: "news_record" },
                childs: [
                    {
                        tag: HTMLTags.Anchor,
                        attributes: { href: element.link, class: "color_gray bold font_14" },
                        value: '&#8226; ' + element.title
                    }
                ],
            }
        ],
    }

    newsItem.childs.push(item);
});