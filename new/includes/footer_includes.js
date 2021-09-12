import { HTMLTags, ItemTypes } from "./render_lib.js";

const height = '150px';

export const footerItem = {
    tag: HTMLTags.Span,
    attributes: { class: "for_creators_style_container" },
    type: ItemTypes.Container,
    childs: [
        {
            element: 'Дизайн: '
        },
        {
            tag: HTMLTags.Anchor,
            type: ItemTypes.Value,
            attributes: { href: "mailto:idomanskaya@yandex.ru", class: "for_creators_style" },
            value: 'Domanskaya I',
        },
        {
            tag: HTMLTags.Anchor,
            type: ItemTypes.Value,
            attributes: { href: "mailto:pushtaeva@yandex.ru", class: "for_creators_style" },
            value: ',',
        },
        {
            element: ' Изготовление сайта: '
        },
        {
            tag: HTMLTags.Anchor,
            type: ItemTypes.Value,
            attributes: { href: "mailto:dfhrhfan12@yandex.ru", class: "for_creators_style" },
            value: 'Петров А',
        },
        {
            tag: HTMLTags.Anchor,
            type: ItemTypes.Value,
            attributes: { href: "https://vk.com/id60983070", class: "for_creators_style" },
            value: '.',
        }
    ]
}

/*
<td height="20" colspan="2" align="right" valign="bottom">
    <span class="for_creators_style">
        Дизайн:
        <a href="mailto:idomanskaya@yandex.ru" class="for_creators_style"> Domanskaya I</a><a href="mailto:pushtaeva@yandex.ru" class="for_creators_style">,</a>
        Изготовление сайта:
        <a href="mailto:dfhrhfan12@yandex.ru" class="for_creators_style"> Петров А</a><a href="https://vk.com/id60983070" class="for_creators_style">.</a>
    </span>
</td>
*/