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
                    attributes: { align: "center" },
            childs: [
                {
                    tag: HTMLTags.TableData,
                    type: ItemTypes.Container,
                    attributes: { align: "left", width: '20%' },
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
                    attributes: { align: "right",  width: '20%' },
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

/*
<tr>
    <td>
        <table id="tHead" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td align="left" valign="middle" width="20%">
                    <img src="/pic/qq3.gif" width="100%">
                </td>
                <td>
                    <div style="width: 10px">
                    </div>
                </td>
                <td width="100%">
                    <div>
                        <img src="/pic/main3.gif" width="100%">
                    </div>
                </td>
            </tr>
        </table>
    </td>
</tr>
<tr>
    <td>
        <div style="height: 6px">
        </div>
    </td>
</tr>
*/