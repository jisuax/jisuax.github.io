!function(t,e){"use strict";function i(t){var e,i,o,n;this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||u(),this.isIntersecting=!!t.intersectionRect,e=this.boundingClientRect,i=e.width*e.height,o=this.intersectionRect,n=o.width*o.height,this.intersectionRatio=i?Number((n/i).toFixed(4)):this.isIntersecting?1:0}function o(t,e){var i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=r(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function n(){return t.performance&&performance.now&&performance.now()}function r(t,e){var i=null;return function(){i||(i=setTimeout(function(){t(),i=null},e))}}function s(t,e,i,o){"function"==typeof t.addEventListener?t.addEventListener(e,i,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,i)}function a(t,e,i,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,i,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,i)}function c(t,e){var i=Math.max(t.top,e.top),o=Math.min(t.bottom,e.bottom),n=Math.max(t.left,e.left),r=Math.min(t.right,e.right),s=r-n,a=o-i;return s>=0&&a>=0&&{top:i,bottom:o,left:n,right:r,width:s,height:a}}function h(t){var e;try{e=t.getBoundingClientRect()}catch(i){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):u()}function u(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function p(t,e){for(var i=e;i;){if(i==t)return!0;i=d(i)}return!1}function d(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)return void("isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}));var l=[];o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.USE_MUTATION_OBSERVER=!0,o.prototype.observe=function(t){var e=this._observationTargets.some(function(e){return e.element==t});if(!e){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,i){if("number"!=typeof t||isNaN(t)||0>t||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==i[e-1]})},o.prototype._parseRootMargin=function(t){var e=t||"0px",i=e.split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return i[1]=i[1]||i[0],i[2]=i[2]||i[0],i[3]=i[3]||i[1],i},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,a(t,"resize",this._checkForIntersections,!0),a(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():u();this._observationTargets.forEach(function(o){var r=o.element,s=h(r),a=this._rootContainsTarget(r),c=o.entry,u=t&&a&&this._computeTargetAndRootIntersection(r,e),p=o.entry=new i({time:n(),target:r,boundingClientRect:s,rootBounds:e,intersectionRect:u});c?t&&a?this._hasCrossedThreshold(c,p)&&this._queuedEntries.push(p):c&&c.isIntersecting&&this._queuedEntries.push(p):this._queuedEntries.push(p)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(i,o){var n,r,s,a,u,p;if("none"!=t.getComputedStyle(i).display){for(n=h(i),r=n,s=d(i),a=!1;!a;){if(u=null,p=1==s.nodeType?t.getComputedStyle(s):{},"none"==p.display)return;if(s==this.root||s==e?(a=!0,u=o):s!=e.body&&s!=e.documentElement&&"visible"!=p.overflow&&(u=h(s)),u&&(r=c(u,r),!r))break;s=d(s)}return r}},o.prototype._getRootRect=function(){var t,i,o;return this.root?t=h(this.root):(i=e.documentElement,o=e.body,t={top:0,left:0,right:i.clientWidth||o.clientWidth,width:i.clientWidth||o.clientWidth,bottom:i.clientHeight||o.clientHeight,height:i.clientHeight||o.clientHeight}),this._expandRectByRootMargin(t)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,i){return"px"==e.unit?e.value:e.value*(i%2?t.width:t.height)/100}),i={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return i.width=i.right-i.left,i.height=i.bottom-i.top,i},o.prototype._hasCrossedThreshold=function(t,e){var i,o,n=t&&t.isIntersecting?t.intersectionRatio||0:-1,r=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==r)for(i=0;i<this.thresholds.length;i++)if(o=this.thresholds[i],o==n||o==r||n>o!=r>o)return!0},o.prototype._rootIsInDom=function(){return!this.root||p(e,this.root)},o.prototype._rootContainsTarget=function(t){return p(this.root||e,t)},o.prototype._registerInstance=function(){l.indexOf(this)<0&&l.push(this)},o.prototype._unregisterInstance=function(){var t=l.indexOf(this);-1!=t&&l.splice(t,1)},t.IntersectionObserver=o,t.IntersectionObserverEntry=i}(window,document),function(t){var e=function(){window.burying=new i},i=function(){this.init()};i.prototype={init:function(){this.url="//stpc.vivo.com.cn/eden/flyHeart",this.sessionId=$$.getCookie("sessionId"),this.sessionId||(this.sessionId=$$.newGuid(),$$.setCookie({name:"sessionId",value:this.sessionId,days:"browserClose"})),this.cid=$$.getQueryString("cid"),this.cid?$.ajax({url:"//www.vivo.com.cn/portal/open/api/set/cookie",data:{key:"vfe-cid",value:this.cid},type:"get",dataType:"jsonp",jsonp:"jsoncallback"}):this.cid=$$.getCookie("vfe-cid"),this.url+=this.cid?"?cid="+this.cid+"&":"?",this.url+="ref_url="+encodeURIComponent(document.referrer)+"&",this.url+="url="+encodeURIComponent(location.href)+"&",this.imei=$$.getCookie("imei")||"",this.imei&&(this.url+="imei="+this.imei+"&"),this.cookieId=$$.getCookie("vivo_fe_vftcookid")||$$.getCookie("cookieId"),this.cookieId||(this.cookieId=this.imei?this.imei:this.sessionId+this.getVisitTime(),$.ajax({url:"//www.vivo.com.cn/portal/open/api/set/cookie",data:{key:"cookieId",value:this.cookieId},type:"get",dataType:"jsonp",jsonp:"jsoncallback",success:function(){}})),this.openId=this.getUserId()},getVisitTime:function(){return(new Date).getTime()},getUserId:function(){$.ajax({url:"//www.vivo.com.cn/portal/open/api/cookie",type:"post",data:{cookieName:"vivo_account_cookie_iqoo_openid"}}).done(function(t,e){"success"===e&&t&&(this.url+="openid="+t+"&")}.bind(this)).always(function(){this.version="v1.0",this.visitType=this.getVisitType(),this.url+="cookid="+this.cookieId+"&sessionid="+this.sessionId+"&version="+this.version+"&visittype="+this.visitType+"&domain=www.vivo.com.cn",this.buryingInPage()}.bind(this))},getVisitType:function(){var t=navigator.userAgent.toLowerCase(),e=/android/i.test(t),i=/ipad|iphone|ipod/i.test(t)&&!window.MSStream,o=/micromessenger/i.test(t),n=/AlipayClient|AliApp\(AP/i.test(t),r=/VivoSpace/i.test(t),s=/vHome/i.test(t),a=/Bankabc/i.test(t);return o?"weichat":n?"alipay":r?"vivoapp":s?"vhomeapp":a?"bankABC":e||i?"wap":"pc"},commonBurying:function(){$$$.buryingPoint(this.url,"burying")},buryingInPage:function(){var e,i,o,n=t.location.pathname;switch(this.pageView="",n||(this.pageView=""),!0){case/^\/?$/.test(n):i=1,this.pageView="官网首页",this.url+="&pageview="+encodeURIComponent(this.pageView),(new Image).src=this.url+"&visittime="+this.getVisitTime()+"&cfrom=1100&is_done=1",$$.setCookie("pageTAG",gloablVAR.pageTAG,"browserClose");break;case/^\/products-\w+\.html\/?$/.test(n):i=2,o=document.getElementById("series-id").getAttribute("data-id"),this.pageView="官网系列主页",this.url+="&pageview="+encodeURIComponent(this.pageView)+"&series="+encodeURIComponent(o),(new Image).src=this.url+"&visittime="+this.getVisitTime()+"&cfrom=2100&is_done=1",$$.setCookie("pageTAG",gloablVAR.pageTAG,"browserClose");break;case/^\/vivo\/\w+\/?$/.test(n):i=3,o=document.getElementById("series-id").getAttribute("data-id"),this.pageView="官网系列详情页",this.url+="&pageview="+encodeURIComponent(this.pageView)+"&series="+encodeURIComponent(o),(new Image).src=this.url+"&visittime="+this.getVisitTime()+"&cfrom=2200&is_done=1&name="+encodeURIComponent(document.getElementById("series-id").getAttribute("data-name")),$$.setCookie("pageTAG",gloablVAR.pageTAG,"browserClose");break;case/^\/vivo\/os\/?/.test(n):i=3,(new Image).src=this.url+"&visittime="+this.getVisitTime()+"&is_done=1",$$.setCookie("pageTAG",gloablVAR.pageTAG,"browserClose");break;case/^\/vivo\/param\/?/.test(n):i=3,(new Image).src=this.url+"&visittime="+this.getVisitTime()+"&is_done=1",$$.setCookie("pageTAG",gloablVAR.pageTAG,"browserClose");break;case/^\/service\.html\/?$/.test(n):i=7,this.pageView="官网服务首页",this.url+="&pageview="+encodeURIComponent(this.pageView),$$.setCookie("pageTAG",gloablVAR.pageTAG,"browserClose");break;case/^\/service\/questions\/all\/?$/.test(n):this.pageView="官网服务首页全部问题",this.url+="&pageview="+encodeURIComponent(this.pageView),$$.setCookie("pageTAG",gloablVAR.pageTAG,"browserClose");break;case/^\/service\/?/.test(n):i=7,$$.setCookie("pageTAG",gloablVAR.pageTAG,"browserClose");break;case/^\/funtouchos\/?$/.test(n):i=4,this.pageView="官网funtouch系列页面",this.url+="&pageview="+encodeURIComponent(this.pageView),(new Image).src=this.url+"&visittime="+this.getVisitTime()+"&cfrom=6100&is_done=1",$$.setCookie("pageTAG",gloablVAR.pageTAG,"browserClose");break;case/^\/about\/?$/.test(n):this.pageView="官网关于vivo",this.url+="&pageview="+encodeURIComponent(this.pageView),(new Image).src=this.url+"&visittime="+this.getVisitTime()+"&is_done=1";break;case/^\/search\??$/.test(n):this.pageView="全局搜索结果页",this.url+="&pageview="+encodeURIComponent(this.pageView);var r=$$.getQueryString("q");(new Image).src=this.url+"&visittime="+this.getVisitTime()+"&cfrom=9104&is_done=1&keyword="+r+"&result_type=1&search_page="+($$.getCookie("pageTAG")||"null"),gloablVAR.buryingBridge=this.url+"&visittime="+this.getVisitTime()+"&cfrom=9105&keyword="+r+"&search_page="+($$.getCookie("pageTAG")||"null");break;default:window.PAGE_NAME&&(this.url+="&pageview="+encodeURIComponent(window.PAGE_NAME),window.PAGE_NAME)}var s,a=document.querySelectorAll("[data-cid],[data-search_kw]");for(e=0;e<a.length;e++)s="a"===a[e].tagName.toLowerCase()?a[e].getAttribute("href"):a[e].getAttribute("onclick").match(/'(.*)'/)[1],s+=-1===s.indexOf("?")?"?":"&",s+=a[e].getAttribute("data-cid")?"cid="+a[e].getAttribute("data-cid"):"search_kw="+a[e].getAttribute("data-search_kw"),"a"===a[e].tagName.toLowerCase()?a[e].setAttribute("href",s):a[e].setAttribute("onclick","location.href='"+s+"'");this.commonBurying()}},$$.domReady([e])}(window,document,void 0),function(){function t(t){(new Image).src="//stpc.vivo.com.cn/eden/flyHeart?"+t.concat("visittime="+Date.now()).join("&")}var e,i,o,n=$$.getCookie("sessionId")||$$.newGuid(),r=$$.getQueryString("cid")||$$.getCookie("vfe-cid")||"",s=$$.getCookie("cid_eff_ts")||"",a=$$.getCookie("imei")||"";e=$$.getCookie("vivo_fe_vftcookid")||$$.getCookie("cookieId"),!e&&(e=a?a:n+Date.now()),$$.getQueryString("cid")&&(s=Date.now(),$.ajax({url:"//www.vivo.com.cn/portal/open/api/set/cookie",data:{key:"cid_eff_ts",value:s},type:"get",dataType:"jsonp",jsonp:"jsoncallback"})),o=["url="+encodeURIComponent(location.href),"domain="+encodeURIComponent(location.href.replace(/^https?:\/\/([^\/\?#]*)[\s\S]*$/,"$1")),"cookid="+encodeURIComponent(e),"sessionid="+encodeURIComponent(n),"ref_url="+encodeURIComponent(document.referrer),"visittype="+encodeURIComponent(function(){var t=navigator.userAgent.toLowerCase(),e=/android/i.test(t),i=/ipad|iphone|ipod/i.test(t)&&!window.MSStream,o=/micromessenger/i.test(t),n=/AlipayClient|AliApp\(AP/i.test(t),r=/VivoSpace/i.test(t),s=/vHome/i.test(t),a=/Bankabc/i.test(t);return o?"weichat":n?"alipay":r?"vivoapp":s?"vhomeapp":a?"bankABC":e||i?"wap":"pc"}()),"imei="+encodeURIComponent(a)];var c=new IntersectionObserver(function(t){for(var e=0;e<t.length;e++)if(t[e].intersectionRatio>0){var i=$(t[e].target),o=new Function("return "+i.attr("data-track"))();!(o instanceof Array)&&(o=[o]),o.filter(function(t){return"viewstate"===t.type}).forEach(function(){i.trigger("viewstate.track")})}}),h=new IntersectionObserver(function(t){for(var e=0;e<t.length;e++)if(t[e].intersectionRatio>0){var i=$(t[e].target),o=new Function("return "+i.attr("data-uimix-track"))();!(o instanceof Array)&&(o=[o]),o.filter(function(t){return"viewstate"===t.type}).forEach(function(){i.trigger("viewstate.track")})}});$.ajax({url:"/portal/open/api/cookie",type:"post",data:{cookieName:"vivo_account_cookie_iqoo_openid"}}).done(function(t,e){"success"===e&&(i=t)}).always(function(){var e=$("body");i&&o.push("openid="+encodeURIComponent(i)),["pageload","click","mouseenter","viewstate"].forEach(function(i){e.on(i+".track","[data-track]",function(){var e=$(this),n=new Function("return "+e.attr("data-track"))();!(n instanceof Array)&&(n=[n]),n.filter(function(t){return t.type===i}).forEach(function(e){var i=o.concat();Object.keys(e.params).forEach(function(t){i.push(encodeURIComponent(t)+"="+encodeURIComponent(e.params[t]))}),t(i.concat("pageload"===e.type?["is_done=1","cid="+encodeURIComponent(r),"cid_eff_ts="+encodeURIComponent(s)]:[]))})})}),$("[data-track]").each(function(){var t=$(this),e=new Function("return "+t.attr("data-track"))();c.observe($(this)[0]),!(e instanceof Array)&&(e=[e]),e.filter(function(t){return"pageload"===t.type}).forEach(function(){t.trigger("pageload.track")})}),["click","viewstate"].forEach(function(i){e.on(i+".track","[data-uimix-track]",function(){var e=$(this),n=new Function("return "+e.attr("data-uimix-track"))();!(n instanceof Array)&&(n=[n]),n.filter(function(t){return t.type===i}).forEach(function(i){var n=o.concat(),r=e.parents(".js-uimix-point"),s=r&&r.attr("data-position")||0;Object.keys(i.params).forEach(function(t){n.push(encodeURIComponent(t)+"="+encodeURIComponent(i.params[t]))}),t(n.concat(["position="+encodeURIComponent(s)]))})})}),$("[data-uimix-track]").each(function(){var t=$(this),e=new Function("return "+t.attr("data-uimix-track"))();h.observe($(this)[0]),!(e instanceof Array)&&(e=[e])})})}(),function(){var t,e,i,o,n=$(document),r=$("body");window.preventPageScroll=function(){t=n.scrollTop(),e=r[0].style.marginTop,i=r[0].style.height,o=r[0].style.overflow,r.css({marginTop:-t,height:innerHeight+t,overflow:"hidden"})},window.restorePageScroll=function(){r[0].style.marginTop=e,r[0].style.height=i,r[0].style.overflow=o,n.scrollTop(t)}}(),function(){window.supportsPassiveOption=!1;try{var t=Object.defineProperty({},"passive",{get:function(){window.supportsPassiveOption=!0}});window.addEventListener("test",null,t)}catch(e){}}();