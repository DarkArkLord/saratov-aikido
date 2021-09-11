import { addMetaData, addElement } from "./dom_functions.js";

let headElement = document.getElementById('head');
let td = addElement(headElement, 'td');
let table = addElement(td, 'td', { id: "tHead", border: "0", cellpadding: "0", cellspacing: "0", width: "100%" });
let tr = addElement(table, 'tr');

td = addElement(tr, 'td', { align: "left", valign: "middle", width: "20%" });
addElement(td, 'img', { src: "/pic/qq3.gif", width: "100%" });

// ???
td = addElement(tr, 'td');
addElement(td, 'div', { style: "width: 10px" });

td = addElement(tr, 'td', { width: "100%" });
addElement(td, 'img', { src: "/pic/main3.gif", width: "100%" });




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