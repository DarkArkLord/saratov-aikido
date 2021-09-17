import { HTMLTags, ItemTypes } from "./render_lib.js";

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
