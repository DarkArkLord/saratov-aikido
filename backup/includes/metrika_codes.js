export const rambler = `<!-- Top100 (Kraken) Widget -->
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
<!-- END Top100 (Kraken) Counter -->`;

export const hotLog = `<!-- HotLog -->
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
<!-- /HotLog -->`

export const yandexMetrika = `<!-- Yandex.Metrika counter -->
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
<!-- /Yandex.Metrika counter -->`;