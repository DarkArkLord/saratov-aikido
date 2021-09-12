import './head_includes.js';

import { HTMLTags, ItemTypes, render } from "./render_lib.js";
import { headerItem } from './header_includes.js';
import { footerItem } from './footer_includes.js';

const mainPageContent = document.getElementById('mainPageContent');
const rightPageContent = document.getElementById('rightPageContent');

let pageItem = {
    tag: HTMLTags.Table,
    attributes: { border: "1", cellpadding: "0", cellspacing: "0", width: "100%" },
    type: ItemTypes.Container,
    childs: [
        {
            tag: HTMLTags.TableRow,
            type: ItemTypes.Container,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    type: ItemTypes.Container,
                    attributes: { width: "100%" },
                    childs: [headerItem]
                }
            ],
        },
        {
            tag: HTMLTags.TableRow,
            type: ItemTypes.Container,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    type: ItemTypes.Container,
                    childs: [
                        {
                            tag: HTMLTags.Table,
                            type: ItemTypes.Container,
                            attributes: { border: "1", cellpadding: "0", cellspacing: "0", width: "100%" },
                            childs: [
                                {
                                    tag: HTMLTags.TableRow,
                                    type: ItemTypes.Container,
                                    childs: [
                                        {
                                            tag: HTMLTags.TableData,
                                            type: ItemTypes.Value,
                                            value: 'menu',
                                        },
                                        {
                                            tag: HTMLTags.TableData,
                                            type: ItemTypes.HtmlElementContainer,
                                            innerElement: mainPageContent
                                        },
                                        {
                                            tag: HTMLTags.TableData,
                                            type: ItemTypes.HtmlElementContainer,
                                            innerElement: rightPageContent
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            tag: HTMLTags.TableRow,
            type: ItemTypes.Container,
            childs: [
                {
                    tag: HTMLTags.TableData,
                    type: ItemTypes.Container,
                    attributes: { height: "20", colspan: "2", align: "right", valign: "bottom" },
                    childs: [footerItem]
                }
            ],
        },
    ],
};

document.body.innerHTML = '';
let pageElement = render(pageItem);
document.body.append(pageElement);