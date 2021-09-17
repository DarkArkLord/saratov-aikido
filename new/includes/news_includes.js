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
    attributes: { border: "0", cellpadding: "3", cellspacing: "0", width: "100%", style: "background: #CCCCCC" },
    type: ItemTypes.Container,
    childs: [
        {
            tag: HTMLTags.TableRow,
            type: ItemTypes.Container,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    attributes: { align: "center", valign: "top", class: "txt_style_red" },
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
                attributes: { class: "news_table_bottom" },
                type: ItemTypes.Container,
                childs: [
                    {
                        tag: HTMLTags.Span,
                        attributes: { class: "txt_style_gray" },
                        type: ItemTypes.Container,
                        childs: [
                            {
                                tag: HTMLTags.Anchor,
                                attributes: { href: element.link, class: "txt_style_gray" },
                                type: ItemTypes.Value,
                                value: '&#8226; ' + element.title
                            }
                        ],
                    }
                ],
            }
        ],
    }

    newsItem.childs.push(item);
});

/*
<table id="tNews" border="0" cellpadding="3" cellspacing="0" width="100%" style="background: #CCCCCC">
    <tr>
        <td align="center" valign="top" class="txt_style_red">
            <b>
                Новости
            </b>
        </td>
    </tr>
    <tr>
        <td class="news_table_bottom">
            <span class="txt_style_gray">
                <a href="https://vk.com/wall-3928256_2143" class="txt_style_gray">
                    &#8226; Приглашаем на занятия по айкидо в "Эверест"!
                </a>
            </span>
        </td>
    </tr>
    <tr>
        <td class="news_table_bottom">
            <span class="txt_style_gray">
                <a href="https://vk.com/aikidovsaratove?w=wall-3928256_2089" class="txt_style_gray">
                    &#8226; Детская летняя школа айкидо в Саратове.
                </a>
            </span>
        </td>
    </tr>
    <tr>
        <td class="news_table_bottom">
            <span class="txt_style_gray">
                <a href="https://vk.com/wall-3928256_2088" class="txt_style_gray">
                    &#8226; Экзамен. Май 2021.
                </a>
            </span>
        </td>
    </tr>
    <tr>
        <td class="news_table_bottom">
            <span class="txt_style_gray">
                <a href="http://www.saratov-aikido.ru/pages/DMenu/DAikidoVSaratove/DArchive/DArticles/DInterviewPascal/PInterviewPascal.html" class="txt_style_gray">
                    &#8226; Интервью Паскаля Гиймана: отход от дисциплины айкидо.
                </a>
            </span>
        </td>
    </tr>
    <tr>
        <td class="news_table_bottom">
            <span class="txt_style_gray">
                <a href="http://vk.com/aikidovsaratove" class="txt_style_gray">
                    &#8226; Интерактивное обновление новостей
                </a>
            </span>
        </td>
    </tr>
</table>
*/