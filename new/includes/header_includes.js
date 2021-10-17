import { HTMLTags, ItemTypes } from "./render_lib.js";

const height = '150px';

export const headerItem = {
    tag: HTMLTags.Table,
    attributes: { border: "0", cellpadding: "0", cellspacing: "0", width: "100%" },
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
                    attributes: { class: "align_left", width: '20%' },
                    childs: [
                        {
                            tag: HTMLTags.Image,
                            attributes: { src: "/pic/header/header_left.gif", height: height }
                        }
                    ],
                },
                {
                    tag: HTMLTags.TableData,
                    type: ItemTypes.Container,
                    attributes: { width: '60%' },
                    childs: [
                        {
                            tag: HTMLTags.Image,
                            attributes: { src: "/pic/header/header_center.gif", height: height }
                        }
                    ],
                },
                {
                    tag: HTMLTags.TableData,
                    type: ItemTypes.Container,
                    attributes: { class: "align_right", width: '20%' },
                    childs: [
                        {
                            tag: HTMLTags.Image,
                            attributes: { src: '/pic/header/header_right.gif', height: height }
                        }
                    ],
                }
            ],
        }
    ]
}
