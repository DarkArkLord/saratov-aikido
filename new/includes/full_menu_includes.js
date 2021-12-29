import { HTMLTags, ItemTypes } from "./render_lib.js";
import { menuItem } from "./menu_includes.js";
import { newsItem } from "./news_includes.js";
import { rambler, hotLog, yandexMetrika } from "./metrika_codes.js";

export const fullMenuItem = {
    tag: HTMLTags.Table,
    attributes: { border: "0", cellpadding: "0", cellspacing: "0", class: "width_100" },
    type: ItemTypes.Container,
    childs: [
        {
            tag: HTMLTags.TableRow,
            type: ItemTypes.Container,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    attributes: { class: 'padding_rb_10' },
                    type: ItemTypes.Container,
                    childs: [menuItem]
                }
            ],
        },
        {
            tag: HTMLTags.TableRow,
            type: ItemTypes.Container,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    attributes: { class: 'padding_rb_10' },
                    type: ItemTypes.Container,
                    childs: [newsItem]
                }
            ],
        },
        {
            tag: HTMLTags.TableRow,
            type: ItemTypes.Container,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    type: ItemTypes.Value,
                    value: rambler
                }
            ],
        },
        {
            tag: HTMLTags.TableRow,
            type: ItemTypes.Container,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    type: ItemTypes.Value,
                    value: hotLog
                }
            ],
        },
        {
            tag: HTMLTags.TableRow,
            type: ItemTypes.Container,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    type: ItemTypes.Value,
                    value: yandexMetrika
                }
            ],
        }
    ]
};