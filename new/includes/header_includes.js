import { addMetaData, addElementForParrent } from "./dom_functions.js";

let headElement = document.getElementById('head');
let td = addElementForParrent(headElement, 'td');
let table = addElementForParrent(td, 'td', { id: "tHead", border: "0", cellpadding: "0", cellspacing: "0", width: "100%" });
let tr = addElementForParrent(table, 'tr');

td = addElementForParrent(tr, 'td', { align: "left", valign: "middle", width: "20%" });
addElementForParrent(td, 'img', { src: "/pic/qq3.gif", width: "100%" });

// ???
td = addElementForParrent(tr, 'td');
addElementForParrent(td, 'div', { style: "width: 10px" });

td = addElementForParrent(tr, 'td', { width: "100%" });
addElementForParrent(td, 'img', { src: "/pic/main3.gif", width: "100%" });




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