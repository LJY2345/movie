// config.js
$.ajaxSetup({
    cache: !0
}), $.getScript("https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.js", function() {
    $("head").append("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.css'/>");
    NProgress.start(), NProgress.set(.4), NProgress.inc(), NProgress.configure({
        ease: "ease",
        speed: 500
    }), NProgress.configure({
        trickleSpeed: 800
    }), NProgress.done()
}), Conch.Browser.useragent.mobile || setTimeout(() => {
    try {
        $.getScript("https://cdn.jsdelivr.net/gh/LJY2345/movie@main/asset/js/by.min.js", function() {
            new Blobity({
                licenseKey: "gmrchk",
                focusableElementsOffsetX: 5,
                focusableElementsOffsetY: 5,
                color: "rgb(180, 180, 180)",
                dotColor: "#ff5268",
                invert: !1,
                focusableElements: "[data-blobity], playleft, a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
                font: "'Helvetica','Arial','PingFang SC','Microsoft YaHei','sans-serif'",
                fontSize: 16,
                mode: "bouncy",
                fontWeight: 400,
                opacity: .3,
                zIndex: 1,
                size: 40,
                radius: 4
            })
        })
    } catch (e) {}
}, 500);
// get all link
var array = [];
var links = document.getElementsByTagName("a");

function sleep(n) {
    return new Promise(e => setTimeout(e, n))
}

function getHTML(n) {
    return new Promise(function(e, t) {
        var o = new XMLHttpRequest;
        o.open("get", n, !0), o.responseType = "document", o.onload = function() {
            var n = o.status;
            200 == n ? e(o.response.documentElement.innerHTML) : t(n)
        }, o.send()
    })
}

async function user_edge_cache() {
    for(var i=0, max=links.length; i<max; i++) {
        if (!/(javascript|search|rss|login|art|type|php|actor|role|rank|map|#|show|id)/gm.test(links[i].href) && links[i].href !== window.location.href && links[i].href !== window.location.protocol +'//'+ window.location.host + '/') {
            if (/(voddetail)/gm.test(window.location.pathname)){
                console.log("bypass")
            } else if (/(vodplay)/gm.test(window.location.pathname)) {
                if (!/(vodplay)/gm.test(links[i].href)){
                    array.push(links[i].href);
                }
            } else {
                array.push(links[i].href);
            }
        }
    }
    // remove duplicates
    let uniqueChars = [...new Set(array)];
    console.log(uniqueChars);
    for (var i = 0; i < uniqueChars.length; i++) {
        var a = uniqueChars[i];
        console.log(a), await getHTML(a), await sleep(i * Math.floor(1e3 * Math.random()))
    }
}
// check edge y/n
try {
    if (window.__rocketLoaderLoadProgressSimulator.simulatedReadyState.length > 0 || window.__cfBeacon.rayId.length > 0) {
        user_edge_cache();
    }
} catch(e) {
    console.log("not cloudflare cdn edge\n"+e);
}
// preload html
$.getScript("https://cdn.jsdelivr.net/gh/LJY2345/movie@main/asset/js/instant_click.min.js", function() {
    setTimeout(() => {
        if (/(vodplay)/gm.test(window.location.pathname)){
            var next_link = 'https://movie.ljy2345.com'+MacPlayer.PlayLinkNext;
            preload(next_link)
        }
        if (/(voddetail)/gm.test(window.location.pathname)){
            var playbtn_link = document.querySelector(".hl-play-btn").href;
            preload(playbtn_link)
        }
        if (/(vodshow)/gm.test(window.location.pathname)){
            var vodshow_next = document.querySelector(".hl-page-btns > a:nth-child(2)").href;
            preload(vodshow_next)
        }
    }, 500);
})
// Prevent the website stotage from being too large
function formatBytes(bytes, decimals = 2) {
	if (!+bytes) return '0 Bytes'
	const k = 1024
	const dm = decimals < 0 ? 0 : decimals
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
	const i = Math.floor(Math.log(bytes) / Math.log(k))
	return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
// Check if stotage regester and api available
if ('storage' in navigator && 'estimate' in navigator.storage) {
	navigator.storage.estimate().then(({usage, quota}) => {
	  console.log(`Using ${formatBytes(usage)} out of ${formatBytes(quota)} bytes.`);
	  if (usage > 1e+10) {
		console.log('${usage} > 1e+10 Too big of storage PWA cache removed');
		caches.delete("movie.ljy2345.com-PWA-ver2.2.8");
	  } else {
		console.log("${usage} < 1e+10")
	  }
	}).catch(error => {
	  console.error('Loading storage estimate failed:');
	  console.log(error.stack);
	});
} else {
	console.error('navigator.storage.estimate API unavailable.');
}