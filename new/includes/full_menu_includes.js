import { HTMLTags } from "./htmlTags.js";
import { menuItem } from "./menu_includes.js";
import { newsItem } from "./news_includes.js";
import { rambler, hotLog, yandexMetrika } from "./metrika_codes.js";

export const fullMenuItem = {
    tag: HTMLTags.Table,
    attributes: { border: "0", cellpadding: "0", cellspacing: "0", class: "width_100" },
    childs: [
        {
            tag: HTMLTags.TableRow,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    attributes: { class: 'padding_rb_10' },
                    childs: [menuItem]
                }
            ],
        },
        {
            tag: HTMLTags.TableRow,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    attributes: { class: 'padding_rb_10' },
                    childs: [newsItem]
                }
            ],
        },
        {
            tag: HTMLTags.TableRow,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    value: rambler
                }
            ],
        },
        {
            tag: HTMLTags.TableRow,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    value: hotLog
                }
            ],
        },
        {
            tag: HTMLTags.TableRow,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    value: yandexMetrika
                }
            ],
        }
    ]
};