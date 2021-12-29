import { HTMLTags, ItemTypes } from "./render_lib.js";

export const footerItem = {
    tag: HTMLTags.Span,
    attributes: { class: "padding_r_10 font_12 bold color_gray" },
    type: ItemTypes.Container,
    childs: [
        {
            element: 'Дизайн: '
        },
        {
            tag: HTMLTags.Anchor,
            type: ItemTypes.Value,
            attributes: { href: "mailto:idomanskaya@yandex.ru", class: "font_12 bold color_gray" },
            value: 'Domanskaya I',
        },
        {
            tag: HTMLTags.Anchor,
            type: ItemTypes.Value,
            attributes: { href: "mailto:pushtaeva@yandex.ru", class: "font_12 bold color_gray" },
            value: ',',
        },
        {
            element: ' Изготовление сайта: '
        },
        {
            tag: HTMLTags.Anchor,
            type: ItemTypes.Value,
            attributes: { href: "mailto:dfhrhfan12@yandex.ru", class: "font_12 bold color_gray" },
            value: 'Петров А',
        },
        {
            tag: HTMLTags.Anchor,
            type: ItemTypes.Value,
            attributes: { href: "https://vk.com/id60983070", class: "font_12 bold color_gray" },
            value: '.',
        }
    ]
}