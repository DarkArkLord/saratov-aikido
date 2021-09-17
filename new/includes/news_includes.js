import { HTMLTags, ItemTypes } from "./render_lib.js";

const newsElements = [
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
                            tag: HTMLTags.Span,
                            type: ItemTypes.Container,
                            childs: [
                                {
                                    tag: 'b',
                                    type: ItemTypes.Value,
                                    value: 'Новости'
                                }
                            ],
                        }
                    ],
                }
            ],
        }
    ]
};

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