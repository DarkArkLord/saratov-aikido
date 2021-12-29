import './head_includes.js';

import { HTMLTags, ItemTypes, render } from "./render_lib.js";
import { headerItem } from './header_includes.js';
import { footerItem } from './footer_includes.js';
import { fullMenuItem } from './full_menu_includes.js';

const mainPageContent = document.getElementById('mainPageContent');
const rightPageContent = document.getElementById('rightPageContent');

let pageItem = {
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
                    type: ItemTypes.Container,
                    attributes: { class: "width_100" },
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
                            attributes: { border: "0", cellpadding: "0", cellspacing: "0", class: "width_100" },
                            childs: [
                                {
                                    tag: HTMLTags.TableRow,
                                    type: ItemTypes.Container,
                                    childs: [
                                        {
                                            tag: HTMLTags.TableData,
                                            type: ItemTypes.Container,
                                            attributes: { class: "align_left valign_top width_20" },
                                            childs: [fullMenuItem]
                                        },
                                        {
                                            tag: HTMLTags.TableData,
                                            type: ItemTypes.HtmlElementContainer,
                                            attributes: { class: "align_left body_page_style valign_top width_100" },
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
                    attributes: { height: "20", colspan: "2", class: "align_right valign_bottom" },
                    childs: [footerItem]
                }
            ],
        },
    ],
};

document.body.innerHTML = '';
let pageElement = render(pageItem);
document.body.append(pageElement);

(function reloadScripts() {
    [...document.getElementsByTagName('script')].forEach(element => {
        if (element.id !== 'renderPageScript') {
            let parent = element.parentElement;
            parent.removeChild(element);
            let newScript = document.createElement('script');
            newScript.innerHTML = element.innerHTML;
            parent.append(newScript);
        }
    });
})();