import { HTMLTags } from "./htmlTags.js";
import { menuElements, newsElements } from "./menu_elements.js";
import { rambler, hotLog, yandexMetrika } from "./metrika_codes.js";
const menuItem = { tag: HTMLTags.Table, attributes: { cellpadding: "3", cellspacing: "0", class: "menu_container" }, childs: [] };
menuElements.forEach(element => {
    let item = { tag: HTMLTags.TableRow, childs: [{ tag: HTMLTags.TableData, childs: [{ tag: HTMLTags.Anchor, attributes: { href: element.link, class: "color_black bold nowarp" }, value: element.title }] }] };
    menuItem.childs.push(item);
});
const newsItem = { tag: HTMLTags.Table, attributes: { cellpadding: "3", cellspacing: "0", class: "menu_container" }, childs: [{ tag: HTMLTags.TableRow, childs: [{ tag: HTMLTags.TableData, attributes: { class: "align_center color_red font_14" }, childs: [{ tag: HTMLTags.Bold, value: 'Новости' }] }] }] };
newsElements.forEach(element => {
    let item = { tag: HTMLTags.TableRow, childs: [{ tag: HTMLTags.TableData, attributes: { class: "news_record" }, childs: [{ tag: HTMLTags.Anchor, attributes: { href: element.link, class: "color_gray bold font_14" }, value: '&#8226; ' + element.title }] }] };
    newsItem.childs.push(item);
});
export const fullMenuItem = { tag: HTMLTags.Table, attributes: { border: "0", cellpadding: "0", cellspacing: "0", class: "width_100" }, childs: [{ tag: HTMLTags.TableRow, childs: [{ tag: HTMLTags.TableData, attributes: { class: 'padding_rb_10' }, childs: [menuItem] }] }, { tag: HTMLTags.TableRow, childs: [{ tag: HTMLTags.TableData, attributes: { class: 'padding_rb_10' }, childs: [newsItem] }] }, ] };