/* v6.9.11,6.9.12,1 release:7.1.2 2017-01-18 20:51:07 */
!function e(t,r,n){function a(o,i){if(!r[o]){if(!t[o]){var u="function"==typeof require&&require;if(!i&&u)return u(o,!0);if(s)return s(o,!0);throw new Error("Cannot find module '"+o+"'")}var l=r[o]={exports:{}};t[o][0].call(l.exports,function(e){var r=t[o][1][e];return a(r?r:e)},l,l.exports,e,t,r,n)}return r[o].exports}for(var s="function"==typeof require&&require,o=0;o<n.length;o++)a(n[o]);return a}({1:[function(e,t,r){"use strict";function n(e,t){return e&&e.getAttribute?e.getAttribute(t)||"":""}function a(e){return o=o||document.getElementsByTagName("head")[0],i&&!e?i:o?i=o.getElementsByTagName("meta"):[]}function s(e){var t,r,s,o=a(),i=o.length;for(t=0;i>t;t++)r=o[t],n(r,"name")===e&&(s=n(r,"content"));return s||""}var o,i;r.tryToGetAttribute=n,r.getMetaTags=a,r.getMetaCnt=s,r.indexof=function(e,t){for(var r=0;r<e.length;r++)if(e[r]===t)return r;return-1};var u=function(e,t){return e+="",e.length<t&&(e="0"+e),e};r.getDateMin=function(){var e=new Date,t="";return t+=e.getFullYear(),t+=u(e.getMonth()+1,2),t+=u(e.getDate(),2),t+=u(e.getHours(),2),t+=u(e.getMinutes(),2)}},{}],2:[function(e,t,r){t.exports=e("./src/grey")},{"./src/grey":3}],3:[function(e,t,r){function n(e){if(e)try{var t=f.createElement("script");t.appendChild(f.createTextNode(e)),p.parentNode.insertBefore(t,p)}catch(r){(v.execScript||function(e){v.eval.call(v,e)})(e)}}function a(e,t,r){if(/blitz/i.test(g))return void r();var n,a="GET",s=function(){n.responseText?t(n.responseText):r()};y?(n=new XMLHttpRequest,n.open(a,e,!0)):(n=new XDomainRequest,n.open(a,e)),n.timeout=b.timeout,n.onload=s,n.onerror=r,n.ontimeout=r,n.send()}function s(e,t){var r=f.createElement("script");r.async=!0,o(r,t),r.src=e,p.parentNode.insertBefore(r,p)}function o(e,t){function r(){e.onreadystatechange=e.onload=null,e=null,w(t)&&t({from:"script"})}if("onload"in e)e.onload=r;else{var n=function(){/loaded|complete/.test(e.readyState)&&r()};e.onreadystatechange=n,n()}}function i(e,t){return e+Math.floor(Math.random()*(t-e+1))}function u(e,t){return i(1,t)<=e}function l(e,t){var r;for(r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}function c(e,t){return function(r){return e.call(null,l(t,r||{}))}}function h(e){return function(t){return{}.toString.call(t)=="[object "+e+"]"}}var v=window,f=document,g=navigator.userAgent,p=f.getElementsByTagName("script")[0],d=v.XDomainRequest,y=v.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest,_=function(){},m={set:function(e,t){try{return localStorage.setItem(e,t),!0}catch(r){return!1}},get:function(e){return localStorage.getItem(e)},test:function(){var e="grey_test_key";try{return localStorage.setItem(e,1),localStorage.removeItem(e),!0}catch(t){return!1}}},b={base:1e4,timeout:1e4},j={_config:b};j.load=function(e){e=l({isLoadDevVersion:function(){},dev:"",devKey:"",devHash:"",stable:"",stableKey:"",stableHash:"",grey:"",greyKey:"",greyHash:"",base:b.base},e);var t,r,o,i,h=e.hash,v={};if(e.ratio>=e.base||u(e.ratio,e.base)?(t=e.greyKey,r=e.grey,i=e.greyHash,v.type="grey"):(t=e.stableKey,r=e.stable,i=e.stableHash,v.type="stable"),w(e.isLoadDevVersion)&&e.isLoadDevVersion()&&(t=e.devKey,r=e.dev,i=e.devHash,v.type="dev"),v.url=r,v.key=t,v.hash=i,w(e.before)&&e.before(v),e.after=w(e.after)?c(e.after,v):_,m.test()&&t&&(y||d)&&w(h))if(o=m.get(t),o&&i===h(o,v))try{n(o),e.after({from:"local"})}catch(f){s(r,e.after)}else a(r,function(r){m.set(t,r),n(r),e.after({from:"cors"})},function(){s(r,e.after)});else s(r,e.after);return this},j.config=function(e){return l(b,e||{}),this};var w=(Array.isArray||h("Array"),h("Function"));t.exports=j},{}],4:[function(e,t,r){"use strict";!function(){var t=e("../grey/util"),r=e("./for_aplus_fns"),n=JSON.parse('{"aplus_v2.js":{"stable_version":{"value":"6.9.11","hash":"aplus_v2.js6.9.11@427760b7"},"grey_version":{"value":"6.9.12","hash":"aplus_v2.js6.9.12@414c986b"},"dev_version":{"value":"7.1.2","hash":"aplus_v2.js7.1.2@414c986b"}},"aplus_std.js":{"stable_version":{"value":"6.9.11","hash":"aplus_std.js6.9.11"},"grey_version":{"value":"6.9.12","hash":"aplus_std.js6.9.12"},"dev_version":{"value":"7.1.2","hash":"aplus_std.js7.1.2@37fed9ba"}},"aplus_int.js":{"stable_version":{"value":"6.9.11","hash":"aplus_int.js6.9.11@51577c55"},"grey_version":{"value":"6.9.12","hash":"aplus_int.js6.9.12@d594782"},"dev_version":{"value":"7.1.2","hash":"aplus_int.js7.1.2@d594782"}}}'),a=window,s="g_aplus_grey_launched";if(!a[s]){a[s]=1;var o=e("@ali/grey-publish"),i=location.protocol;0!=i.indexOf("http")&&(i="http:");var u=i+"//g.alicdn.com/alilog/s",l=r.getAplusVersion(),c=1e4,h=[],v={"aplus_std.js":[/^https?:\/\/(.*\.)?www\.taobao\.com/i],"aplus_int.js":[/^https?:\/\/(.*\.)?scmp\.com/i,/^https?:\/\/(.*\.)?luxehomes\.com\.hk/i,/^https?:\/\/(.*\.)?ays\.com\.hk/i,/^https?:\/\/(.*\.)?cpjobs\.com/i,/^https?:\/\/(.*\.)?educationpost\.com\.hk/i,/^https?:\/\/(.*\.)?elle\.com\.hk/i,/^https?:\/\/(.*\.)?harpersbazaar\.com\.hk/i,/^https?:\/\/(.*\.)?esquirehk\.com/i]},f=function(){var e;if(l)if("aplus_std.js"===l||"aplus_int.js"===l||"aplus_w.js"===l)e=!0;else{var t,r=v[l]||[];for(t=0;t<r.length;t++)if(location.href.match(r[t])){e=!0;break}}return e},g=function(){var e="";if(h&&h.length>0)for(var r=t.getDateMin(),n=0;n<h.length;n++){var a=h[n].key+"";r>=a&&(e=Math.floor(1e4*h[n].value))}return e},p=function(){var e,t="aplus_grey_ratio";"number"==typeof a[t]&&(e=Math.floor(1e4*a[t]));var r=location.search.match(new RegExp("\\b"+t+"=([\\d\\.]+)"));return r&&(r=parseFloat(r[1]),isNaN(r)||(e=Math.floor(1e4*r))),e},d=g(),y=p();d&&(c=d),y&&(c=y),a.goldlog=a.goldlog||{},goldlog.record||(goldlog.record=function(e,t,r,n){(a.goldlog_queue||(a.goldlog_queue=[])).push({action:"goldlog.record",arguments:[e,t,r,n]})});var _=(r.getAplusFns(),n[l]),m=l.split(".")[0];o.load({isLoadDevVersion:f,dev:[u,_.dev_version.value,l].join("/"),devKey:"APLUSGREYd_"+m,devHash:_.dev_version.hash,stable:[u,_.stable_version.value,l].join("/"),stableKey:"APLUSGREYs_"+m,stableHash:_.stable_version.hash,grey:[u,_.grey_version.value,l].join("/"),greyKey:"APLUSGREYg_"+m,greyHash:_.grey_version.hash,ratio:c,hash:function(t,r){var n=e("./hash").hash(t);switch(r.type){case"stable":n=l+_.stable_version.value+"@"+n;break;case"grey":n=l+_.grey_version.value+"@"+n;break;case"dev":n=l+_.dev_version.value+"@"+n}return n},before:function(e){switch(e.type){case"grey":goldlog.lver=_.grey_version.value;break;case"stable":goldlog.lver=_.stable_version.value;break;case"dev":goldlog.lver=_.dev_version.value}}})}}()},{"../grey/util":1,"./for_aplus_fns":5,"./hash":6,"@ali/grey-publish":2}],5:[function(e,t,r){"use strict";var n=e("./util"),a=function(){return["aplus_v2.js","aplus_std.js","aplus_int.js"]};r.getAplusFns=a;var s=function(){var e="aplus_v2.js";return e},o=function(){for(var e,t=[{version:"aplus_std.js",domains:[/^https?:\/\/(.*\.)?www\.taobao\.com/i]},{version:"aplus_int.js",domains:[/^https?:\/\/(.*\.)?scmp\.com/i,/^https?:\/\/(.*\.)?luxehomes\.com\.hk/i,/^https?:\/\/(.*\.)?ays\.com\.hk/i,/^https?:\/\/(.*\.)?cpjobs\.com/i,/^https?:\/\/(.*\.)?educationpost\.com\.hk/i,/^https?:\/\/(.*\.)?elle\.com\.hk/i,/^https?:\/\/(.*\.)?harpersbazaar\.com\.hk/i,/^https?:\/\/(.*\.)?esquirehk\.com/i]}],r=0;r<t.length;r++)for(var n=t[r].domains,a=t[r].version,s=0;s<n.length;s++)if(location.href.match(n[s])){e=a;break}return e},i=function(){var e=n.getMetaCnt("aplus-version");e&&(e+=".js");var t=a();return n.indexof(t,e)>-1?e:null};r.getAplusVersion=function(){var e;try{e=s();var t=o();t&&(e=t);var r=i();r&&(e=r)}catch(n){e="aplus_v2.js"}finally{return e}}},{"./util":7}],6:[function(e,t,r){"use strict";r.hash=function(e){var t,r,n=1315423911;for(t=e.length-1;t>=0;t--)r=e.charCodeAt(t),n^=(n<<5)+r+(n>>2);return(2147483647&n).toString(16)}},{}],7:[function(e,t,r){t.exports=e(1)},{}]},{},[4]);