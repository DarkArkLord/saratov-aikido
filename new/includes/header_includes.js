import { HTMLTags, ItemTypes } from "./render_lib.js";

export const headerItem = {
    tag: HTMLTags.Table,
    attributes: { border: "0", cellpadding: "0", cellspacing: "0", class: "width_100" },
    type: ItemTypes.Container,
    childs: [
        {
            tag: HTMLTags.TableRow,
            type: ItemTypes.Container,
            attributes: { class: "align_center" },
            childs: [
                {
                    tag: HTMLTags.TableData,
                    type: ItemTypes.Container,
                    attributes: { class: "align_left width_20" },
                    childs: [
                        {
                            tag: HTMLTags.Image,
                            attributes: { src: "/pic/header/header_left.gif", class: 'header_height' }
                        }
                    ],
                },
                {
                    tag: HTMLTags.TableData,
                    type: ItemTypes.Container,
                    attributes: { class: 'width_60' },
                    childs: [
                        {
                            tag: HTMLTags.Image,
                            attributes: { src: "/pic/header/header_center.gif", class: 'header_height' }
                        }
                    ],
                },
                {
                    tag: HTMLTags.TableData,
                    type: ItemTypes.Container,
                    attributes: { class: "align_right width_20" },
                    childs: [
                        {
                            tag: HTMLTags.Image,
                            attributes: { src: '/pic/header/header_right.gif', class: 'header_height' }
                        }
                    ],
                }
            ],
        }
    ]
}