import { HTMLTags, ItemTypes } from "./render_lib.js";
import { menuItem } from "./menu_includes.js";
import { rambler, hotLog, yandexMetrika } from "./metrika_codes.js";

export const fullMenuItem = {
    tag: HTMLTags.Table,
    attributes: { border: "0", cellpadding: "0", cellspacing: "0", width: "100%" },
    type: ItemTypes.Container,
    childs: [
        {
            tag: HTMLTags.TableRow,
            type: ItemTypes.Container,
            childs: [
                {
                    tag: HTMLTags.TableData,
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
                    type: ItemTypes.Value,
                    value: 'news'
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

/*
                                    <td width="100%" align="left" valign="top">
                                        <table id="tAllMenu" border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <!-- menu -->
                                            <tr>
                                                <td>
                                                    <table border="0" cellpadding="3" cellspacing="0" width="100%" style="background: #CCCCCC">
                                                        <tr>
                                                            <td>
                                                                <span class="txt_style">
                                                                    <a href="/index.html" class="txt_style">
                                                                        Главная
                                                                    </a>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span class="txt_style">
                                                                    <a href="/pages/DMenu/DAikidoVSaratove/PAikidoVSaratove.html" class="txt_style">
                                                                        Айкидо в Саратове
                                                                    </a>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span class="txt_style">
                                                                    <a href="/pages/DMenu/DSpecialProject/PSpecialProject.html" class="txt_style">
                                                                        Наш проект "Aikido for all"
                                                                    </a>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span class="txt_style">
                                                                    <a href="/pages/DMenu/DChildren/PChildren.html" class="txt_style">
                                                                        Детские группы
                                                                    </a>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span class="txt_style">
                                                                    <a href="/pages/DMenu/DZaliIRasp/PZaliIRasp.html" class="txt_style">
                                                                        Залы и расписания
                                                                    </a>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span class="txt_style">
                                                                    <a href="/pages/DMenu/DSeminary/PSeminary.html" class="txt_style">
                                                                        Семинары
                                                                    </a>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span class="txt_style">
                                                                    <a href="/pages/DMenu/DAttestation/PAttestation.html" class="txt_style">
                                                                        Аттестации
                                                                    </a>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span class="txt_style">
                                                                    <a href="/pages/DMenu/DLinks/PLinks.html" class="txt_style">
                                                                        Ссылки
                                                                    </a>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span class="txt_style">
                                                                    <a href="/pages/DMenu/DContacts/PContacts.html" class="txt_style">
                                                                        Контакты
                                                                    </a>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <!-- end menu -->
                                            <tr>
                                                <td>
                                                    <div style="height: 10px">
                                                    </div>
                                                </td>
                                            </tr>
                                            <!-- news -->
                                            <tr>
                                                <td>
                                                    <table id="tNews" border="0" cellpadding="3" cellspacing="0" width="100%" style="background: #CCCCCC">
                                                        <tr>
                                                            <td align="center" valign="top" class="txt_style_red">
                                                                <b>
                                                                    Новости
                                                                </b>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="news_table_bottom">
                                                                <span class="txt_style_gray">
                                                                    <a href="https://vk.com/wall-3928256_2143" class="txt_style_gray">
                                                                        &#8226; Приглашаем на занятия по айкидо в "Эверест"!
                                                                    </a>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="news_table_bottom">
                                                                <span class="txt_style_gray">
                                                                    <a href="https://vk.com/aikidovsaratove?w=wall-3928256_2089" class="txt_style_gray">
                                                                        &#8226; Детская летняя школа айкидо в Саратове.
                                                                    </a>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="news_table_bottom">
                                                                <span class="txt_style_gray">
                                                                    <a href="https://vk.com/wall-3928256_2088" class="txt_style_gray">
                                                                        &#8226; Экзамен. Май 2021.
                                                                    </a>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="news_table_bottom">
                                                                <span class="txt_style_gray">
                                                                    <a href="http://www.saratov-aikido.ru/pages/DMenu/DAikidoVSaratove/DArchive/DArticles/DInterviewPascal/PInterviewPascal.html" class="txt_style_gray">
                                                                        &#8226; Интервью Паскаля Гиймана: отход от дисциплины айкидо.
                                                                    </a>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="news_table_bottom">
                                                                <span class="txt_style_gray">
                                                                    <a href="http://vk.com/aikidovsaratove" class="txt_style_gray">
                                                                        &#8226; Интерактивное обновление новостей
                                                                    </a>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <!-- end news -->
                                            <!-- rambler -->
                                            <tr>
                                                <td>
                                                    <br>
                                                    <!-- Top100 (Kraken) Widget -->
<span id="top100_widget"></span>
<!-- END Top100 (Kraken) Widget -->

<!-- Top100 (Kraken) Counter -->
<script>
    (function (w, d, c) {
    (w[c] = w[c] || []).push(function() {
        var options = {
            project: 5148281,
            element: 'top100_widget',
        };
        try {
            w.top100Counter = new top100(options);
        } catch(e) { }
    });
    var n = d.getElementsByTagName("script")[0],
    s = d.createElement("script"),
    f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src =
    (d.location.protocol == "https:" ? "https:" : "http:") +
    "//st.top100.ru/top100/top100.js";

    if (w.opera == "[object Opera]") {
    d.addEventListener("DOMContentLoaded", f, false);
} else { f(); }
})(window, document, "_top100q");
</script>
<noscript>
  <img src="//counter.rambler.ru/top100.cnt?pid=5148281" alt="Топ-100" />
</noscript>
<!-- END Top100 (Kraken) Counter -->
                                                </td>
                                            </tr>
                                            <!-- end rambler -->
                                            <tr>
                                                <td>
                                                     <!-- HotLog -->
                                                     <span id="hotlog_counter"></span>
                                                     <span id="hotlog_dyn"></span>
                                                     <script type="text/javascript">
                                                     var hot_s = document.createElement('script');
                                                     hot_s.type = 'text/javascript'; hot_s.async = true;
                                                     hot_s.src = 'http://js.hotlog.ru/dcounter/2566980.js';
                                                     hot_d = document.getElementById('hotlog_dyn');
                                                     hot_d.appendChild(hot_s);
                                                     </script>
                                                     <noscript>
                                                     <a href="http://click.hotlog.ru/?2566980" target="_blank"><img
                                                     src="http://hit20.hotlog.ru/cgi-bin/hotlog/count?s=2566980&amp;im=466" border="0"
                                                     alt="HotLog"></a>
                                                     </noscript>
                                                     <!-- /HotLog -->
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(47998934, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/47998934" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>
                                        <div style="width: 10px;">
                                        </div>
                                    </td>
*/