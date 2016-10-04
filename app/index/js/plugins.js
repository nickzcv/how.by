/*
 * PLUGINS THAT WE USE !!!
 * 1.  Magnific popup - http://dimsemenov.com/plugins/magnific-popup/
 * 2.  Bootstrap date picker - http://www.eyecon.ro/bootstrap-datepicker
 * 3.  Bootstrap portfilter - https://github.com/geedmo/portfilter
 * 4.  Owl carousel - http://www.owlcarousel.owlgraphic.com/
 * 5.  SelectFx.js - plugin for dropdown select list
 * 6.  clasie.js - https://github.com/ded/bonzo
 * 7.  infobox.js(for maps) - https://code.google.com/p/google-maps-utility-library-v3/source/browse/trunk/infobox/src/infobox.js?r=49
 * 8.  markerwithlabel.js(for maps) - https://code.google.com/p/google-maps-utility-library-v3/source/browse/trunk/markerwithlabel/src/markerwithlabel.js?r=131
 */ 



/*------- 1. Magnific Popup -------*/ 

	/*! Magnific Popup - v1.0.1 - 2015-12-30
	* Copyright (c) 2015 Dmitry Semenov; */
	!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isIE7=-1!==c.indexOf("MSIE 7."),b.isIE8=-1!==c.indexOf("MSIE 8."),b.isLowIE=b.isIE7||b.isIE8,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(a,c){if(void 0===c||c===!1)return!0;if(e=a.split("_"),e.length>1){var d=b.find(p+"-"+e[0]);if(d.length>0){var f=e[1];"replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c):"img"===f?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(p+"-"+a).html(c)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery",g=Boolean(a.fn.mfpFastClick);return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s),h=g?"mfpFastClick":"click";e[h](function(){b.prev()}),f[h](function(){b.next()}),b.isIE7&&(x("b",e[0],!1,!0),x("a",e[0],!1,!0),x("b",f[0],!1,!0),x("a",f[0],!1,!0)),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowLeft&&g&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){v.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g,h=a(this);if(c){var i,j,k,l,m,n;h.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,v.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0],(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)&&(l=!0,d())}).on("touchend"+f,function(a){d(),l||n>1||(g=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){g=!1},b),e())})})}h.on("click"+f,function(){g||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&v.off("touchmove"+f+" touchend"+f)}}(),A()});

/*------- end Magnific Popup -------*/ 

/*------- 2. Bootsrap date picker -------*/ 
 
	!function( $ ) {
		
		// Picker object
		
		var Datepicker = function(element, options){
			this.element = $(element);
			this.format = DPGlobal.parseFormat(options.format||this.element.data('date-format')||'mm/dd/yyyy');
			this.picker = $(DPGlobal.template)
								.appendTo('body')
								.on({
									click: $.proxy(this.click, this)//,
									//mousedown: $.proxy(this.mousedown, this)
								});
			this.isInput = this.element.is('input');
			this.component = this.element.is('.date') ? this.element.find('.add-on') : false;
			
			if (this.isInput) {
				this.element.on({
					focus: $.proxy(this.show, this),
					//blur: $.proxy(this.hide, this),
					keyup: $.proxy(this.update, this)
				});
			} else {
				if (this.component){
					this.component.on('click', $.proxy(this.show, this));
				} else {
					this.element.on('click', $.proxy(this.show, this));
				}
			}
		
			this.minViewMode = options.minViewMode||this.element.data('date-minviewmode')||0;
			if (typeof this.minViewMode === 'string') {
				switch (this.minViewMode) {
					case 'months':
						this.minViewMode = 1;
						break;
					case 'years':
						this.minViewMode = 2;
						break;
					default:
						this.minViewMode = 0;
						break;
				}
			}
			this.viewMode = options.viewMode||this.element.data('date-viewmode')||0;
			if (typeof this.viewMode === 'string') {
				switch (this.viewMode) {
					case 'months':
						this.viewMode = 1;
						break;
					case 'years':
						this.viewMode = 2;
						break;
					default:
						this.viewMode = 0;
						break;
				}
			}
			this.startViewMode = this.viewMode;
			this.weekStart = options.weekStart||this.element.data('date-weekstart')||0;
			this.weekEnd = this.weekStart === 0 ? 6 : this.weekStart - 1;
			this.onRender = options.onRender;
			this.fillDow();
			this.fillMonths();
			this.update();
			this.showMode();
		};
		
		Datepicker.prototype = {
			constructor: Datepicker,
			
			show: function(e) {
				this.picker.show();
				this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
				this.place();
				$(window).on('resize', $.proxy(this.place, this));
				if (e ) {
					e.stopPropagation();
					e.preventDefault();
				}
				if (!this.isInput) {
				}
				var that = this;
				$(document).on('mousedown', function(ev){
					if ($(ev.target).closest('.datepicker').length == 0) {
						that.hide();
					}
				});
				this.element.trigger({
					type: 'show',
					date: this.date
				});
			},
			
			hide: function(){
				this.picker.hide();
				$(window).off('resize', this.place);
				this.viewMode = this.startViewMode;
				this.showMode();
				if (!this.isInput) {
					$(document).off('mousedown', this.hide);
				}
				//this.set();
				this.element.trigger({
					type: 'hide',
					date: this.date
				});
			},
			
			set: function() {
				var formated = DPGlobal.formatDate(this.date, this.format);
				if (!this.isInput) {
					if (this.component){
						this.element.find('input').prop('value', formated);
					}
					this.element.data('date', formated);
				} else {
					this.element.prop('value', formated);
				}
			},
			
			setValue: function(newDate) {
				if (typeof newDate === 'string') {
					this.date = DPGlobal.parseDate(newDate, this.format);
				} else {
					this.date = new Date(newDate);
				}
				this.set();
				this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
				this.fill();
			},
			
			place: function(){
				var offset = this.component ? this.component.offset() : this.element.offset();
				this.picker.css({
					top: offset.top + this.height,
					left: offset.left
				});
			},
			
			update: function(newDate){
				this.date = DPGlobal.parseDate(
					typeof newDate === 'string' ? newDate : (this.isInput ? this.element.prop('value') : this.element.data('date')),
					this.format
				);
				this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
				this.fill();
			},
			
			fillDow: function(){
				var dowCnt = this.weekStart;
				var html = '<tr>';
				while (dowCnt < this.weekStart + 7) {
					html += '<th class="dow">'+DPGlobal.dates.daysMin[(dowCnt++)%7]+'</th>';
				}
				html += '</tr>';
				this.picker.find('.datepicker-days thead').append(html);
			},
			
			fillMonths: function(){
				var html = '';
				var i = 0
				while (i < 12) {
					html += '<span class="month">'+DPGlobal.dates.monthsShort[i++]+'</span>';
				}
				this.picker.find('.datepicker-months td').append(html);
			},
			
			fill: function() {
				var d = new Date(this.viewDate),
					year = d.getFullYear(),
					month = d.getMonth(),
					currentDate = this.date.valueOf();
				this.picker.find('.datepicker-days th:eq(1)')
							.text(DPGlobal.dates.months[month]+' '+year);
				var prevMonth = new Date(year, month-1, 28,0,0,0,0),
					day = DPGlobal.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
				prevMonth.setDate(day);
				prevMonth.setDate(day - (prevMonth.getDay() - this.weekStart + 7)%7);
				var nextMonth = new Date(prevMonth);
				nextMonth.setDate(nextMonth.getDate() + 42);
				nextMonth = nextMonth.valueOf();
				var html = [];
				var clsName,
					prevY,
					prevM;
				while(prevMonth.valueOf() < nextMonth) {
					if (prevMonth.getDay() === this.weekStart) {
						html.push('<tr>');
					}
					clsName = this.onRender(prevMonth);
					prevY = prevMonth.getFullYear();
					prevM = prevMonth.getMonth();
					if ((prevM < month &&  prevY === year) ||  prevY < year) {
						clsName += ' old';
					} else if ((prevM > month && prevY === year) || prevY > year) {
						clsName += ' new';
					}
					if (prevMonth.valueOf() === currentDate) {
						clsName += ' active';
					}
					html.push('<td class="day '+clsName+'">'+prevMonth.getDate() + '</td>');
					if (prevMonth.getDay() === this.weekEnd) {
						html.push('</tr>');
					}
					prevMonth.setDate(prevMonth.getDate()+1);
				}
				this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
				var currentYear = this.date.getFullYear();
				
				var months = this.picker.find('.datepicker-months')
							.find('th:eq(1)')
								.text(year)
								.end()
							.find('span').removeClass('active');
				if (currentYear === year) {
					months.eq(this.date.getMonth()).addClass('active');
				}
				
				html = '';
				year = parseInt(year/10, 10) * 10;
				var yearCont = this.picker.find('.datepicker-years')
									.find('th:eq(1)')
										.text(year + '-' + (year + 9))
										.end()
									.find('td');
				year -= 1;
				for (var i = -1; i < 11; i++) {
					html += '<span class="year'+(i === -1 || i === 10 ? ' old' : '')+(currentYear === year ? ' active' : '')+'">'+year+'</span>';
					year += 1;
				}
				yearCont.html(html);
			},
			
			click: function(e) {
				e.stopPropagation();
				e.preventDefault();
				var target = $(e.target).closest('span, td, th');
				if (target.length === 1) {
					switch(target[0].nodeName.toLowerCase()) {
						case 'th':
							switch(target[0].className) {
								case 'switch':
									this.showMode(1);
									break;
								case 'prev':
								case 'next':
									this.viewDate['set'+DPGlobal.modes[this.viewMode].navFnc].call(
										this.viewDate,
										this.viewDate['get'+DPGlobal.modes[this.viewMode].navFnc].call(this.viewDate) + 
										DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1)
									);
									this.fill();
									this.set();
									break;
							}
							break;
						case 'span':
							if (target.is('.month')) {
								var month = target.parent().find('span').index(target);
								this.viewDate.setMonth(month);
							} else {
								var year = parseInt(target.text(), 10)||0;
								this.viewDate.setFullYear(year);
							}
							if (this.viewMode !== 0) {
								this.date = new Date(this.viewDate);
								this.element.trigger({
									type: 'changeDate',
									date: this.date,
									viewMode: DPGlobal.modes[this.viewMode].clsName
								});
							}
							this.showMode(-1);
							this.fill();
							this.set();
							break;
						case 'td':
							if (target.is('.day') && !target.is('.disabled')){
								var day = parseInt(target.text(), 10)||1;
								var month = this.viewDate.getMonth();
								if (target.is('.old')) {
									month -= 1;
								} else if (target.is('.new')) {
									month += 1;
								}
								var year = this.viewDate.getFullYear();
								this.date = new Date(year, month, day,0,0,0,0);
								this.viewDate = new Date(year, month, Math.min(28, day),0,0,0,0);
								this.fill();
								this.set();
								this.element.trigger({
									type: 'changeDate',
									date: this.date,
									viewMode: DPGlobal.modes[this.viewMode].clsName
								});
							}
							break;
					}
				}
			},
			
			mousedown: function(e){
				e.stopPropagation();
				e.preventDefault();
			},
			
			showMode: function(dir) {
				if (dir) {
					this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + dir));
				}
				this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
			}
		};
		
		$.fn.datepicker = function ( option, val ) {
			return this.each(function () {
				var $this = $(this),
					data = $this.data('datepicker'),
					options = typeof option === 'object' && option;
				if (!data) {
					$this.data('datepicker', (data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults,options))));
				}
				if (typeof option === 'string') data[option](val);
			});
		};

		$.fn.datepicker.defaults = {
			onRender: function(date) {
				return '';
			}
		};
		$.fn.datepicker.Constructor = Datepicker;
		
		var DPGlobal = {
			modes: [
				{
					clsName: 'days',
					navFnc: 'Month',
					navStep: 1
				},
				{
					clsName: 'months',
					navFnc: 'FullYear',
					navStep: 1
				},
				{
					clsName: 'years',
					navFnc: 'FullYear',
					navStep: 10
			}],
			dates:{
				days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
				daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
				daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
				months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
			},
			isLeapYear: function (year) {
				return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
			},
			getDaysInMonth: function (year, month) {
				return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
			},
			parseFormat: function(format){
				var separator = format.match(/[.\/\-\s].*?/),
					parts = format.split(/\W+/);
				if (!separator || !parts || parts.length === 0){
					throw new Error("Invalid date format.");
				}
				return {separator: separator, parts: parts};
			},
			parseDate: function(date, format) {
				var parts = date.split(format.separator),
					date = new Date(),
					val;
				date.setHours(0);
				date.setMinutes(0);
				date.setSeconds(0);
				date.setMilliseconds(0);
				if (parts.length === format.parts.length) {
					var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
					for (var i=0, cnt = format.parts.length; i < cnt; i++) {
						val = parseInt(parts[i], 10)||1;
						switch(format.parts[i]) {
							case 'dd':
							case 'd':
								day = val;
								date.setDate(val);
								break;
							case 'mm':
							case 'm':
								month = val - 1;
								date.setMonth(val - 1);
								break;
							case 'yy':
								year = 2000 + val;
								date.setFullYear(2000 + val);
								break;
							case 'yyyy':
								year = val;
								date.setFullYear(val);
								break;
						}
					}
					date = new Date(year, month, day, 0 ,0 ,0);
				}
				return date;
			},
			formatDate: function(date, format){
				var val = {
					d: date.getDate(),
					m: date.getMonth() + 1,
					yy: date.getFullYear().toString().substring(2),
					yyyy: date.getFullYear()
				};
				val.dd = (val.d < 10 ? '0' : '') + val.d;
				val.mm = (val.m < 10 ? '0' : '') + val.m;
				var date = [];
				for (var i=0, cnt = format.parts.length; i < cnt; i++) {
					date.push(val[format.parts[i]]);
				}
				return date.join(format.separator);
			},
			headTemplate: '<thead>'+
								'<tr>'+
									'<th class="prev">&lsaquo;</th>'+
									'<th colspan="5" class="switch"></th>'+
									'<th class="next">&rsaquo;</th>'+
								'</tr>'+
							'</thead>',
			contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
		};
		DPGlobal.template = '<div class="datepicker dropdown-menu">'+
								'<div class="datepicker-days">'+
									'<table class=" table-condensed">'+
										DPGlobal.headTemplate+
										'<tbody></tbody>'+
									'</table>'+
								'</div>'+
								'<div class="datepicker-months">'+
									'<table class="table-condensed">'+
										DPGlobal.headTemplate+
										DPGlobal.contTemplate+
									'</table>'+
								'</div>'+
								'<div class="datepicker-years">'+
									'<table class="table-condensed">'+
										DPGlobal.headTemplate+
										DPGlobal.contTemplate+
									'</table>'+
								'</div>'+
							'</div>';

	}( window.jQuery );	

/*------- end Bootsrap date picker -------*/

/*------- 3. Bootsrap portfilter -------*/
	
	!function ($) {

	  "use strict"; // jshint ;_;
		
	  var pluginName = 'portfilter';

	 /* PUBLIC CLASS DEFINITION
	  * ============================== */

	  var PortFilter = function (element) {
	    
	    this.$element = $(element)
	    this.stuff 	  = $('[data-tag]');
	    this.target   = this.$element.data('target') || '';

	  }

	  PortFilter.prototype.filter = function (params) {
	    var items = [],
	    	target = this.target;
	    this.stuff
	        .fadeOut('fast').promise().done(function(){
	            $(this).each(function(){
	                if($(this).data('tag') == target || target == 'all') 
	                    items.push(this);
	            });
	            $(items).show()
	        });  
	  }


	 /* PLUGIN DEFINITION
	  * ======================== */

	  var old = $.fn[pluginName]

	  $.fn[pluginName] = function (option) {
	    return this.each(function () {
	      var $this = $(this)
	        , data = $this.data(pluginName);
	      
	      if(!data) $this.data(pluginName, (data = new PortFilter(this)))
	      
	      if (option == 'filter') data.filter()
	    })
	  }
	  
	  // DEFAULTS
	  $.fn[pluginName].defaults = {}
	  
	  // CONSTRUCTOR CONVENTION 
	  $.fn[pluginName].Constructor = PortFilter;


	 /* PORTFILTER NO CONFLICT
	  * ================== */

	  $.fn[pluginName].noConflict = function () {
	    $.fn[pluginName] = old
	    return this
	  }

	 /* PORTFILTER DATA-API
	  * =============== */

	  $(document).on('click.portfilter.data-api', '[data-toggle^=portfilter]', function (e) {
			$(this).portfilter('filter');
	  })

	}(window.jQuery);

/*------- end Bootsrap portfilter -------*/ 

/*------- 4. Owl Carousel -------*/ 
	
	!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this.drag=a.extend({},m),this.state=a.extend({},n),this.e=a.extend({},o),this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._invalidated={},this._pipe=[],a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a[0].toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Pipe,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}function f(a){if(a.touches!==d)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(a.touches===d){if(a.pageX!==d)return{x:a.pageX,y:a.pageY};if(a.pageX===d)return{x:a.clientX,y:a.clientY}}}function g(a){var b,d,e=c.createElement("div"),f=a;for(b in f)if(d=f[b],"undefined"!=typeof e.style[d])return e=null,[d,b];return[!1]}function h(){return g(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function i(){return g(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function j(){return g(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function k(){return"ontouchstart"in b||!!navigator.msMaxTouchPoints}function l(){return b.navigator.msPointerEnabled}var m,n,o;m={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},n={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},o={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},e.Defaults={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,responsiveClass:!1,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Plugins={},e.Pipe=[{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){var a=this._clones,b=this.$stage.children(".cloned");(b.length!==a.length||!this.settings.loop&&a.length>0)&&(this.$stage.children(".cloned").remove(),this._clones=[])}},{filter:["items","settings"],run:function(){var a,b,c=this._clones,d=this._items,e=this.settings.loop?c.length-Math.max(2*this.settings.items,4):0;for(a=0,b=Math.abs(e/2);b>a;a++)e>0?(this.$stage.children().eq(d.length+c.length-1).remove(),c.pop(),this.$stage.children().eq(0).remove(),c.pop()):(c.push(c.length/2),this.$stage.append(d[c[c.length-1]].clone().addClass("cloned")),c.push(d.length-1-(c.length-1)/2),this.$stage.prepend(d[c[c.length-1]].clone().addClass("cloned")))}},{filter:["width","items","settings"],run:function(){var a,b,c,d=this.settings.rtl?1:-1,e=(this.width()/this.settings.items).toFixed(3),f=0;for(this._coordinates=[],b=0,c=this._clones.length+this._items.length;c>b;b++)a=this._mergers[this.relative(b)],a=this.settings.mergeFit&&Math.min(a,this.settings.items)||a,f+=(this.settings.autoWidth?this._items[this.relative(b)].width()+this.settings.margin:e*a)*d,this._coordinates.push(f)}},{filter:["width","items","settings"],run:function(){var b,c,d=(this.width()/this.settings.items).toFixed(3),e={width:Math.abs(this._coordinates[this._coordinates.length-1])+2*this.settings.stagePadding,"padding-left":this.settings.stagePadding||"","padding-right":this.settings.stagePadding||""};if(this.$stage.css(e),e={width:this.settings.autoWidth?"auto":d-this.settings.margin},e[this.settings.rtl?"margin-left":"margin-right"]=this.settings.margin,!this.settings.autoWidth&&a.grep(this._mergers,function(a){return a>1}).length>0)for(b=0,c=this._coordinates.length;c>b;b++)e.width=Math.abs(this._coordinates[b])-Math.abs(this._coordinates[b-1]||0)-this.settings.margin,this.$stage.children().eq(b).css(e);else this.$stage.children().css(e)}},{filter:["width","items","settings"],run:function(a){a.current&&this.reset(this.$stage.children().index(a.current))}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children("."+this.settings.activeClass).removeClass(this.settings.activeClass),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass(this.settings.activeClass),this.settings.center&&(this.$stage.children("."+this.settings.centerClass).removeClass(this.settings.centerClass),this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))}}],e.prototype.initialize=function(){if(this.trigger("initialize"),this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl",this.settings.rtl),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var b,c,e;if(b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e)return this.preloadAutoWidthImages(b),!1}this.$element.addClass("owl-loading"),this.$stage=a("<"+this.settings.stageElement+' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this._width=this.$element.width(),this.refresh(),this.$element.removeClass("owl-loading").addClass("owl-loaded"),this.eventsCall(),this.internalEvents(),this.addTriggerableEvents(),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),delete e.responsive,e.responsiveClass&&this.$element.attr("class",function(a,b){return b.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+d)):e=a.extend({},this.options),(null===this.settings||this._breakpoint!==d)&&(this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},e.prototype.optionsLogic=function(){this.$element.toggleClass("owl-center",this.settings.center),this.settings.loop&&this._items.length<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.settings.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={}},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){if(0===this._items.length)return!1;(new Date).getTime();this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$stage.addClass("owl-refresh"),this.update(),this.$stage.removeClass("owl-refresh"),this.state.orientation=b.orientation,this.watchVisibility(),this.trigger("refreshed")},e.prototype.eventsCall=function(){this.e._onDragStart=a.proxy(function(a){this.onDragStart(a)},this),this.e._onDragMove=a.proxy(function(a){this.onDragMove(a)},this),this.e._onDragEnd=a.proxy(function(a){this.onDragEnd(a)},this),this.e._onResize=a.proxy(function(a){this.onResize(a)},this),this.e._transitionEnd=a.proxy(function(a){this.transitionEnd(a)},this),this.e._preventClick=a.proxy(function(a){this.preventClick(a)},this)},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this.e._onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.trigger("resize").isDefaultPrevented()?!1:(this._width=this.$element.width(),this.invalidate("width"),this.refresh(),void this.trigger("resized")):!1},e.prototype.eventsRouter=function(a){var b=a.type;"mousedown"===b||"touchstart"===b?this.onDragStart(a):"mousemove"===b||"touchmove"===b?this.onDragMove(a):"mouseup"===b||"touchend"===b?this.onDragEnd(a):"touchcancel"===b&&this.onDragEnd(a)},e.prototype.internalEvents=function(){var c=(k(),l());this.settings.mouseDrag?(this.$stage.on("mousedown",a.proxy(function(a){this.eventsRouter(a)},this)),this.$stage.on("dragstart",function(){return!1}),this.$stage.get(0).onselectstart=function(){return!1}):this.$element.addClass("owl-text-select-on"),this.settings.touchDrag&&!c&&this.$stage.on("touchstart touchcancel",a.proxy(function(a){this.eventsRouter(a)},this)),this.transitionEndVendor&&this.on(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd,!1),this.settings.responsive!==!1&&this.on(b,"resize",a.proxy(this.onThrottledResize,this))},e.prototype.onDragStart=function(d){var e,g,h,i;if(e=d.originalEvent||d||b.event,3===e.which||this.state.isTouch)return!1;if("mousedown"===e.type&&this.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,g=f(e).x,h=f(e).y,this.drag.offsetX=this.$stage.position().left,this.drag.offsetY=this.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.$stage.position().left+this.$stage.width()-this.width()+this.settings.margin),this.state.inMotion&&this.support3d)i=this.getTransformProperty(),this.drag.offsetX=i,this.animate(i),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=g-this.drag.offsetX,this.drag.startY=h-this.drag.offsetY,this.drag.start=g-this.drag.startX,this.drag.targetEl=e.target||e.srcElement,this.drag.updatedX=this.drag.start,("IMG"===this.drag.targetEl.tagName||"A"===this.drag.targetEl.tagName)&&(this.drag.targetEl.draggable=!1),a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",a.proxy(function(a){this.eventsRouter(a)},this))},e.prototype.onDragMove=function(a){var c,e,g,h,i,j;this.state.isTouch&&(this.state.isScrolling||(c=a.originalEvent||a||b.event,e=f(c).x,g=f(c).y,this.drag.currentX=e-this.drag.startX,this.drag.currentY=g-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)):(h=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),i=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),j=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,h+j),i+j)),(this.drag.distance>8||this.drag.distance<-8)&&(c.preventDefault!==d?c.preventDefault():c.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},e.prototype.onDragEnd=function(b){var d,e,f;if(this.state.isTouch){if("mouseup"===b.type&&this.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),d=this.drag.endTime-this.drag.startTime,e=Math.abs(this.drag.distance),(e>3||d>300)&&this.removeClick(this.drag.targetEl),f=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(f),this.invalidate("position"),this.update(),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(f)||this.transitionEnd(),this.drag.distance=0,a(c).off(".owl.dragEvents")}},e.prototype.removeClick=function(c){this.drag.targetEl=c,a(c).on("click.preventClick",this.e._preventClick),b.setTimeout(function(){a(c).off("click.preventClick")},300)},e.prototype.preventClick=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),a(b.target).off("click.preventClick")},e.prototype.getTransformProperty=function(){var a,c;return a=b.getComputedStyle(this.$stage.get(0),null).getPropertyValue(this.vendorName+"transform"),a=a.replace(/matrix(3d)?\(|\)/g,"").split(","),c=16===a.length,c!==!0?a[4]:a[12]},e.prototype.closest=function(b){var c=-1,d=30,e=this.width(),f=this.coordinates();return this.settings.freeDrag||a.each(f,a.proxy(function(a,g){return b>g-d&&g+d>b?c=a:this.op(b,"<",g)&&this.op(b,">",f[a+1]||g-e)&&(c="left"===this.state.direction?a+1:a),-1===c},this)),this.settings.loop||(this.op(b,">",f[this.minimum()])?c=b=this.minimum():this.op(b,"<",f[this.maximum()])&&(c=b=this.maximum())),c},e.prototype.animate=function(b){this.trigger("translate"),this.state.inMotion=this.speed()>0,this.support3d?this.$stage.css({transform:"translate3d("+b+"px,0px, 0px)",transition:this.speed()/1e3+"s"}):this.state.isTouch?this.$stage.css({left:b+"px"}):this.$stage.animate({left:b},this.speed()/1e3,this.settings.fallbackEasing,a.proxy(function(){this.state.inMotion&&this.transitionEnd()},this))},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(a){this._invalidated[a]=!0},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(b,c){var e=c?this._items.length:this._items.length+this._clones.length;return!a.isNumeric(b)||1>e?d:b=this._clones.length?(b%e+e)%e:Math.max(this.minimum(c),Math.min(this.maximum(c),b))},e.prototype.relative=function(a){return a=this.normalize(a),a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=0,f=this.settings;if(a)return this._items.length-1;if(!f.loop&&f.center)b=this._items.length-1;else if(f.loop||f.center)if(f.loop||f.center)b=this._items.length+f.items;else{if(!f.autoWidth&&!f.merge)throw"Can not detect maximum absolute position.";for(revert=f.rtl?1:-1,c=this.$stage.width()-this.$element.width();(d=this.coordinates(e))&&!(d*revert>=c);)b=++e}else b=this._items.length-f.items;return b},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c=null;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[b-1]||0))/2*(this.settings.rtl?-1:1)):c=this._coordinates[b-1]||0,c)},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(c,d){if(this.settings.loop){var e=c-this.relative(this.current()),f=this.current(),g=this.current(),h=this.current()+e,i=0>g-h?!0:!1,j=this._clones.length+this._items.length;h<this.settings.items&&i===!1?(f=g+this._items.length,this.reset(f)):h>=j-this.settings.items&&i===!0&&(f=g-this._items.length,this.reset(f)),b.clearTimeout(this.e._goToLoop),this.e._goToLoop=b.setTimeout(a.proxy(function(){this.speed(this.duration(this.current(),f+e,d)),this.current(f+e),this.update()},this),30)}else this.speed(this.duration(this.current(),c,d)),this.current(c),this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.transitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.state.inMotion=!1,void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(a.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(a,b){b=b===d?this._items.length:this.normalize(b,!0),this.trigger("add",{content:a,position:b}),0===this._items.length||b===this._items.length?(this.$stage.append(a),this._items.push(a),this._mergers.push(1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[b].before(a),this._items.splice(b,0,a),this._mergers.splice(b,0,1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this.invalidate("items"),this.trigger("added",{content:a,position:b})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.addTriggerableEvents=function(){var b=a.proxy(function(b,c){return a.proxy(function(a){a.relatedTarget!==this&&(this.suppress([c]),b.apply(this,[].slice.call(arguments,1)),this.release([c]))},this)},this);a.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.replace,add:this.add,remove:this.remove},a.proxy(function(a,c){this.$element.on(a+".owl.carousel",b(c,a+".owl.carousel"))},this))},e.prototype.watchVisibility=function(){function c(a){return a.offsetWidth>0&&a.offsetHeight>0}function d(){c(this.$element.get(0))&&(this.$element.removeClass("owl-hidden"),this.refresh(),b.clearInterval(this.e._checkVisibile))}c(this.$element.get(0))||(this.$element.addClass("owl-hidden"),b.clearInterval(this.e._checkVisibile),this.e._checkVisibile=b.setInterval(a.proxy(d,this),500))},e.prototype.preloadAutoWidthImages=function(b){var c,d,e,f;c=0,d=this,b.each(function(g,h){e=a(h),f=new Image,f.onload=function(){c++,e.attr("src",f.src),e.css("opacity",1),c>=b.length&&(d.state.imagesLoaded=!0,d.initialize())},f.src=e.attr("src")||e.attr("data-src")||e.attr("data-src-retina")})},e.prototype.destroy=function(){this.$element.hasClass(this.settings.themeClass)&&this.$element.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&a(b).off("resize.owl.carousel"),this.transitionEndVendor&&this.off(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd);for(var d in this._plugins)this._plugins[d].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.$stage.off("mousedown touchstart touchcancel"),a(c).off(".owl.dragEvents"),this.$stage.get(0).onselectstart=function(){},this.$stage.off("dragstart",function(){return!1})),this.$element.off(".owl"),this.$stage.children(".cloned").remove(),this.e=null,this.$element.removeData("owlCarousel"),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.unwrap()},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d){var e={item:{count:this._items.length,index:this.current()}},f=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),g=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},e,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(g)}),this.$element.trigger(g),this.settings&&"function"==typeof this.settings[f]&&this.settings[f].apply(this,g)),g},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.browserSupport=function(){if(this.support3d=j(),this.support3d){this.transformVendor=i();var a=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=a[h()],this.vendorName=this.transformVendor.replace(/Transform/i,""),this.vendorName=""!==this.vendorName?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=b.orientation},a.fn.owlCarousel=function(b){return this.each(function(){a(this).data("owlCarousel")||a(this).data("owlCarousel",new e(this,b))})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b){var c=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,d=c.center&&Math.ceil(c.items/2)||c.items,e=c.center&&-1*d||0,f=(b.property&&b.property.value||this._core.current())+e,g=this._core.clones().length,h=a.proxy(function(a,b){this.load(b)},this);e++<d;)this.load(g/2+this._core.relative(f)),g&&a.each(this._core.clones(this._core.relative(f++)),h)},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this._core.$element.on(this._handlers)};c.Defaults={lazyLoad:!1},c.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},c.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=c}(window.Zepto||window.jQuery,window,document),function(a){var b=function(c){this._core=c,this._handlers={"initialized.owl.carousel":a.proxy(function(){this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass)===this._core.$stage.children().eq(this._core.current())&&this.update()},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this._core.$element.on(this._handlers)};b.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},b.prototype.update=function(){this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)},b.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=b}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this._core=b,this._videos={},this._playing=null,this._fullscreen=!1,this._handlers={"resize.owl.carousel":a.proxy(function(a){this._core.settings.video&&!this.isInFullScreen()&&a.preventDefault()},this),"refresh.owl.carousel changed.owl.carousel":a.proxy(function(){this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))},this)},this._core.options=a.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};d.Defaults={video:!1,videoHeight:!1,videoWidth:!1},d.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else{if(!(d[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");c="vimeo"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},d.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}))},d.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null},d.prototype.play=function(b){this._core.trigger("play",null,"video"),this._playing&&this.stop();var c,d,e=a(b.target||b.srcElement),f=e.closest("."+this._core.settings.itemClass),g=this._videos[f.attr("data-video")],h=g.width||"100%",i=g.height||this._core.$stage.height();"youtube"===g.type?c='<iframe width="'+h+'" height="'+i+'" src="http://www.youtube.com/embed/'+g.id+"?autoplay=1&v="+g.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===g.type&&(c='<iframe src="http://player.vimeo.com/video/'+g.id+'?autoplay=1" width="'+h+'" height="'+i+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),f.addClass("owl-video-playing"),this._playing=f,d=a('<div style="height:'+i+"px; width:"+h+'px" class="owl-video-frame">'+c+"</div>"),e.after(d)},d.prototype.isInFullScreen=function(){var d=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return d&&a(d).parent().hasClass("owl-video-frame")&&(this._core.speed(0),this._fullscreen=!0),d&&this._fullscreen&&this._playing?!1:this._fullscreen?(this._fullscreen=!1,!1):this._playing&&this._core.state.orientation!==b.orientation?(this._core.state.orientation=b.orientation,!1):!0},d.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=d}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){this.swapping="translated"==a.type},this),"translate.owl.carousel":a.proxy(function(){this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c)),f&&e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.transitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this.core=b,this.core.options=a.extend({},d.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":a.proxy(function(){this.autoplay()
	},this),"play.owl.autoplay":a.proxy(function(a,b,c){this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.autoplay()},this)},this.core.$element.on(this.handlers)};d.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},d.prototype.autoplay=function(){this.core.settings.autoplay&&!this.core.state.videoPlay?(b.clearInterval(this.interval),this.interval=b.setInterval(a.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)):b.clearInterval(this.interval)},d.prototype.play=function(){return c.hidden===!0||this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion?void 0:this.core.settings.autoplay===!1?void b.clearInterval(this.interval):void this.core.next(this.core.settings.autoplaySpeed)},d.prototype.stop=function(){b.clearInterval(this.interval)},d.prototype.pause=function(){b.clearInterval(this.interval)},d.prototype.destroy=function(){var a,c;b.clearInterval(this.interval);for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=d}(window.Zepto||window.jQuery,window,document),function(a){"use strict";var b=function(c){this._core=c,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"add.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.splice(b.position,0,a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"remove.owl.carousel prepared.owl.carousel":a.proxy(function(a){this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"change.owl.carousel":a.proxy(function(a){if("position"==a.property.name&&!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){var b=this._core.current(),c=this._core.maximum(),d=this._core.minimum();a.data=a.property.value>c?b>=c?d:c:a.property.value<d?c:a.property.value}},this),"changed.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.draw()},this),"refreshed.owl.carousel":a.proxy(function(){this._initialized||(this.initialize(),this._initialized=!0),this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation")},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this.$element.on(this._handlers)};b.Defaults={nav:!1,navRewind:!0,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},b.prototype.initialize=function(){var b,c,d=this._core.settings;d.dotsData||(this._templates=[a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),d.navContainer&&d.dotsContainer||(this._controls.$container=a("<div>").addClass(d.controlsClass).appendTo(this.$element)),this._controls.$indicators=d.dotsContainer?a(d.dotsContainer):a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),this._controls.$indicators.on("click","div",a.proxy(function(b){var c=a(b.target).parent().is(this._controls.$indicators)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(c,d.dotsSpeed)},this)),b=d.navContainer?a(d.navContainer):a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),this._controls.$next=a("<"+d.navElement+">"),this._controls.$previous=this._controls.$next.clone(),this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click",a.proxy(function(){this.prev(d.navSpeed)},this)),this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click",a.proxy(function(){this.next(d.navSpeed)},this));for(c in this._overrides)this._core[c]=a.proxy(this[c],this)},b.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},b.prototype.update=function(){var a,b,c,d=this._core.settings,e=this._core.clones().length/2,f=e+this._core.items().length,g=d.center||d.autoWidth||d.dotData?1:d.dotsEach||d.items;if("page"!==d.slideBy&&(d.slideBy=Math.min(d.slideBy,d.items)),d.dots||"page"==d.slideBy)for(this._pages=[],a=e,b=0,c=0;f>a;a++)(b>=g||0===b)&&(this._pages.push({start:a-e,end:a-e+g-1}),b=0,++c),b+=this._core.mergers(this._core.relative(a))},b.prototype.draw=function(){var b,c,d="",e=this._core.settings,f=(this._core.$stage.children(),this._core.relative(this._core.current()));if(!e.nav||e.loop||e.navRewind||(this._controls.$previous.toggleClass("disabled",0>=f),this._controls.$next.toggleClass("disabled",f>=this._core.maximum())),this._controls.$previous.toggle(e.nav),this._controls.$next.toggle(e.nav),e.dots){if(b=this._pages.length-this._controls.$indicators.children().length,e.dotData&&0!==b){for(c=0;c<this._controls.$indicators.children().length;c++)d+=this._templates[this._core.relative(c)];this._controls.$indicators.html(d)}else b>0?(d=new Array(b+1).join(this._templates[0]),this._controls.$indicators.append(d)):0>b&&this._controls.$indicators.children().slice(b).remove();this._controls.$indicators.find(".active").removeClass("active"),this._controls.$indicators.children().eq(a.inArray(this.current(),this._pages)).addClass("active")}this._controls.$indicators.toggle(e.dots)},b.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotData?1:c.dotsEach||c.items)}},b.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,function(a){return a.start<=b&&a.end>=b}).pop()},b.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},b.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},b.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},b.prototype.to=function(b,c,d){var e;d?a.proxy(this._overrides.to,this._core)(b,c):(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=b}(window.Zepto||window.jQuery,window,document),function(a,b){"use strict";var c=function(d){this._core=d,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(){"URLHash"==this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[c]=b.content},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(){var a=b.location.hash.substring(1),c=this._core.$stage.children(),d=this._hashes[a]&&c.index(this._hashes[a])||0;return a?void this._core.to(d,!1,!0):!1},this))};c.Defaults={URLhashListener:!1},c.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=c}(window.Zepto||window.jQuery,window,document);

/*------- end Owl Carousel -------*/ 

/*------- 5. SelectFx.js -------*/ 
	
	;( function( window ) {
		
		'use strict';

		/**
		 * based on from https://github.com/inuyaksa/jquery.nicescroll/blob/master/jquery.nicescroll.js
		 */
		function hasParent( e, p ) {
			if (!e) return false;
			var el = e.target||e.srcElement||e||false;
			while (el && el != p) {
				el = el.parentNode||false;
			}
			return (el!==false);
		};
		
		/**
		 * extend obj function
		 */
		function extend( a, b ) {
			for( var key in b ) { 
				if( b.hasOwnProperty( key ) ) {
					a[key] = b[key];
				}
			}
			return a;
		}

		/**
		 * SelectFx function
		 */
		function SelectFx( el, options ) {	
			this.el = el;
			this.options = extend( {}, this.options );
			extend( this.options, options );
			this._init();
		}

		/**
		 * SelectFx options
		 */
		SelectFx.prototype.options = {
			// if true all the links will open in a new tab.
			// if we want to be redirected when we click an option, we need to define a data-link attr on the option of the native select element
			newTab : true,
			// when opening the select element, the default placeholder (if any) is shown
			stickyPlaceholder : true,
			// callback when changing the value
			onChange : function( val ) { return false; }
		}

		/**
		 * init function
		 * initialize and cache some vars
		 */
		SelectFx.prototype._init = function() {
			// check if we are using a placeholder for the native select box
			// we assume the placeholder is disabled and selected by default
			var selectedOpt = this.el.querySelector( 'option[selected]' );
			this.hasDefaultPlaceholder = selectedOpt && selectedOpt.disabled;

			// get selected option (either the first option with attr selected or just the first option)
			this.selectedOpt = selectedOpt || this.el.querySelector( 'option' );

			// create structure
			this._createSelectEl();

			// all options
			this.selOpts = [].slice.call( this.selEl.querySelectorAll( 'li[data-option]' ) );
			
			// total options
			this.selOptsCount = this.selOpts.length;
			
			// current index
			this.current = this.selOpts.indexOf( this.selEl.querySelector( 'li.cs-selected' ) ) || -1;
			
			// placeholder elem
			this.selPlaceholder = this.selEl.querySelector( 'span.cs-placeholder' );

			// init events
			this._initEvents();
		}

		/**
		 * creates the structure for the select element
		 */
		SelectFx.prototype._createSelectEl = function() {
			var self = this, options = '', createOptionHTML = function(el) {
				var optclass = '', classes = '', link = '';

				if( el.selectedOpt && !this.foundSelected && !this.hasDefaultPlaceholder ) {
					classes += 'cs-selected ';
					this.foundSelected = true;
				}
				// extra classes
				if( el.getAttribute( 'data-class' ) ) {
					classes += el.getAttribute( 'data-class' );
				}
				// link options
				if( el.getAttribute( 'data-link' ) ) {
					link = 'data-link=' + el.getAttribute( 'data-link' );
				}

				if( classes !== '' ) {
					optclass = 'class="' + classes + '" ';
				}

				return '<li ' + optclass + link + ' data-option data-value="' + el.value + '"><span>' + el.textContent + '</span></li>';
			};

			[].slice.call( this.el.children ).forEach( function(el) {
				if( el.disabled ) { return; }

				var tag = el.tagName.toLowerCase();

				if( tag === 'option' ) {
					options += createOptionHTML(el);
				}
				else if( tag === 'optgroup' ) {
					options += '<li class="cs-optgroup"><span>' + el.label + '</span><ul>';
					[].slice.call( el.children ).forEach( function(opt) {
						options += createOptionHTML(opt);
					} );
					options += '</ul></li>';
				}
			} );

			var opts_el = '<div class="cs-options"><ul>' + options + '</ul></div>';
			this.selEl = document.createElement( 'div' );
			this.selEl.className = this.el.className;
			this.selEl.tabIndex = this.el.tabIndex;
			this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + '</span>' + opts_el;
			this.el.parentNode.appendChild( this.selEl );
			this.selEl.appendChild( this.el );
		}

		/**
		 * initialize the events
		 */
		SelectFx.prototype._initEvents = function() {
			var self = this;

			// open/close select
			this.selPlaceholder.addEventListener( 'click', function() {
				self._toggleSelect();
			} );

			// clicking the options
			this.selOpts.forEach( function(opt, idx) {
				opt.addEventListener( 'click', function() {
					self.current = idx;
					self._changeOption();
					// close select elem
					self._toggleSelect();
				} );
			} );

			// close the select element if the target it´s not the select element or one of its descendants..
			document.addEventListener( 'click', function(ev) {
				var target = ev.target;
				if( self._isOpen() && target !== self.selEl && !hasParent( target, self.selEl ) ) {
					self._toggleSelect();
				}
			} );

			// keyboard navigation events
			this.selEl.addEventListener( 'keydown', function( ev ) {
				var keyCode = ev.keyCode || ev.which;

				switch (keyCode) {
					// up key
					case 38:
						ev.preventDefault();
						self._navigateOpts('prev');
						break;
					// down key
					case 40:
						ev.preventDefault();
						self._navigateOpts('next');
						break;
					// space key
					case 32:
						ev.preventDefault();
						if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
							self._changeOption();
						}
						self._toggleSelect();
						break;
					// enter key
					case 13:
						ev.preventDefault();
						if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
							self._changeOption();
							self._toggleSelect();
						}
						break;
					// esc key
					case 27:
						ev.preventDefault();
						if( self._isOpen() ) {
							self._toggleSelect();
						}
						break;
				}
			} );
		}

		/**
		 * navigate with up/dpwn keys
		 */
		SelectFx.prototype._navigateOpts = function(dir) {
			if( !this._isOpen() ) {
				this._toggleSelect();
			}

			var tmpcurrent = typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ? this.preSelCurrent : this.current;
			
			if( dir === 'prev' && tmpcurrent > 0 || dir === 'next' && tmpcurrent < this.selOptsCount - 1 ) {
				// save pre selected current - if we click on option, or press enter, or press space this is going to be the index of the current option
				this.preSelCurrent = dir === 'next' ? tmpcurrent + 1 : tmpcurrent - 1;
				// remove focus class if any..
				this._removeFocus();
				// add class focus - track which option we are navigating
				classie.add( this.selOpts[this.preSelCurrent], 'cs-focus' );
			}
		}

		/**
		 * open/close select
		 * when opened show the default placeholder if any
		 */
		SelectFx.prototype._toggleSelect = function() {
			// remove focus class if any..
			this._removeFocus();
			
			if( this._isOpen() ) {
				if( this.current !== -1 ) {
					// update placeholder text
					this.selPlaceholder.textContent = this.selOpts[ this.current ].textContent;
				}
				classie.remove( this.selEl, 'cs-active' );
			}
			else {
				if( this.hasDefaultPlaceholder && this.options.stickyPlaceholder ) {
					// everytime we open we wanna see the default placeholder text
					this.selPlaceholder.textContent = this.selectedOpt.textContent;
				}
				classie.add( this.selEl, 'cs-active' );
			}
		}

		/**
		 * change option - the new value is set
		 */
		SelectFx.prototype._changeOption = function() {
			// if pre selected current (if we navigate with the keyboard)...
			if( typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ) {
				this.current = this.preSelCurrent;
				this.preSelCurrent = -1;
			}

			// current option
			var opt = this.selOpts[ this.current ];

			// update current selected value
			this.selPlaceholder.textContent = opt.textContent;
			
			// change native select element´s value
			this.el.value = opt.getAttribute( 'data-value' );

			// remove class cs-selected from old selected option and add it to current selected option
			var oldOpt = this.selEl.querySelector( 'li.cs-selected' );
			if( oldOpt ) {
				classie.remove( oldOpt, 'cs-selected' );
			}
			classie.add( opt, 'cs-selected' );

			// if there´s a link defined
			if( opt.getAttribute( 'data-link' ) ) {
				// open in new tab?
				if( this.options.newTab ) {
					window.open( opt.getAttribute( 'data-link' ), '_blank' );
				}
				else {
					window.location = opt.getAttribute( 'data-link' );
				}
			}

			// callback
			this.options.onChange( this.el.value );
		}

		/**
		 * returns true if select element is opened
		 */
		SelectFx.prototype._isOpen = function(opt) {
			return classie.has( this.selEl, 'cs-active' );
		}

		/**
		 * removes the focus class from the option
		 */
		SelectFx.prototype._removeFocus = function(opt) {
			var focusEl = this.selEl.querySelector( 'li.cs-focus' )
			if( focusEl ) {
				classie.remove( focusEl, 'cs-focus' );
			}
		}

		/**
		 * add to global namespace
		 */
		window.SelectFx = SelectFx;

	} )( window );

/*------- end SelectFx.js -------*/ 

/*------- 6. clasie.js  -------*/ 

	( function( window ) {

	'use strict';

	// class helper functions from bonzo https://github.com/ded/bonzo

	function classReg( className ) {
	  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	}

	// classList support for class management
	// altho to be fair, the api sucks because it won't accept multiple classes at once
	var hasClass, addClass, removeClass;

	if ( 'classList' in document.documentElement ) {
	  hasClass = function( elem, c ) {
	    return elem.classList.contains( c );
	  };
	  addClass = function( elem, c ) {
	    elem.classList.add( c );
	  };
	  removeClass = function( elem, c ) {
	    elem.classList.remove( c );
	  };
	}
	else {
	  hasClass = function( elem, c ) {
	    return classReg( c ).test( elem.className );
	  };
	  addClass = function( elem, c ) {
	    if ( !hasClass( elem, c ) ) {
	      elem.className = elem.className + ' ' + c;
	    }
	  };
	  removeClass = function( elem, c ) {
	    elem.className = elem.className.replace( classReg( c ), ' ' );
	  };
	}

	function toggleClass( elem, c ) {
	  var fn = hasClass( elem, c ) ? removeClass : addClass;
	  fn( elem, c );
	}

	var classie = {
	  // full names
	  hasClass: hasClass,
	  addClass: addClass,
	  removeClass: removeClass,
	  toggleClass: toggleClass,
	  // short names
	  has: hasClass,
	  add: addClass,
	  remove: removeClass,
	  toggle: toggleClass
	};

	// transport
	if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( classie );
	} else {
	  // browser global
	  window.classie = classie;
	}

	})( window );

/*------- end clasie.js -------*/ 

/*------- 7. infobox.js -------*/ 
	
	function InfoBox(opt_opts) {

	  opt_opts = opt_opts || {};

	  google.maps.OverlayView.apply(this, arguments);

	  // Standard options (in common with google.maps.InfoWindow):
	  //
	  this.content_ = opt_opts.content || "";
	  this.disableAutoPan_ = opt_opts.disableAutoPan || false;
	  this.maxWidth_ = opt_opts.maxWidth || 0;
	  this.pixelOffset_ = opt_opts.pixelOffset || new google.maps.Size(0, 0);
	  this.position_ = opt_opts.position || new google.maps.LatLng(0, 0);
	  this.zIndex_ = opt_opts.zIndex || null;

	  // Additional options (unique to InfoBox):
	  //
	  this.boxClass_ = opt_opts.boxClass || "infoBox";
	  this.boxStyle_ = opt_opts.boxStyle || {};
	  this.closeBoxMargin_ = opt_opts.closeBoxMargin || "2px";
	  this.closeBoxURL_ = opt_opts.closeBoxURL || "";
	  if (opt_opts.closeBoxURL === "") {
	    this.closeBoxURL_ = "";
	  }
	  this.infoBoxClearance_ = opt_opts.infoBoxClearance || new google.maps.Size(1, 1);

	  if (typeof opt_opts.visible === "undefined") {
	    if (typeof opt_opts.isHidden === "undefined") {
	      opt_opts.visible = true;
	    } else {
	      opt_opts.visible = !opt_opts.isHidden;
	    }
	  }
	  this.isHidden_ = !opt_opts.visible;

	  this.alignBottom_ = opt_opts.alignBottom || false;
	  this.pane_ = opt_opts.pane || "floatPane";
	  this.enableEventPropagation_ = opt_opts.enableEventPropagation || false;

	  this.div_ = null;
	  this.closeListener_ = null;
	  this.moveListener_ = null;
	  this.contextListener_ = null;
	  this.eventListeners_ = null;
	  this.fixedWidthSet_ = null;
	}

	/* InfoBox extends OverlayView in the Google Maps API v3.
	 */
	//InfoBox.prototype = new google.maps.OverlayView();

	/**
	 * Creates the DIV representing the InfoBox.
	 * @private
	 */
	InfoBox.prototype.createInfoBoxDiv_ = function () {

	  var i;
	  var events;
	  var bw;
	  var me = this;

	  // This handler prevents an event in the InfoBox from being passed on to the map.
	  //
	  var cancelHandler = function (e) {
	    e.cancelBubble = true;
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    }
	  };

	  // This handler ignores the current event in the InfoBox and conditionally prevents
	  // the event from being passed on to the map. It is used for the contextmenu event.
	  //
	  var ignoreHandler = function (e) {

	    e.returnValue = false;

	    if (e.preventDefault) {

	      e.preventDefault();
	    }

	    if (!me.enableEventPropagation_) {

	      cancelHandler(e);
	    }
	  };

	  if (!this.div_) {

	    this.div_ = document.createElement("div");

	    this.setBoxStyle_();

	    if (typeof this.content_.nodeType === "undefined") {
	      this.div_.innerHTML = this.getCloseBoxImg_() + this.content_;
	    } else {
	      this.div_.innerHTML = this.getCloseBoxImg_();
	      this.div_.appendChild(this.content_);
	    }

	    // Add the InfoBox DIV to the DOM
	    this.getPanes()[this.pane_].appendChild(this.div_);

	    this.addClickHandler_();

	    if (this.div_.style.width) {

	      this.fixedWidthSet_ = true;

	    } else {

	      if (this.maxWidth_ !== 0 && this.div_.offsetWidth > this.maxWidth_) {

	        this.div_.style.width = this.maxWidth_;
	        this.div_.style.overflow = "auto";
	        this.fixedWidthSet_ = true;

	      } else { // The following code is needed to overcome problems with MSIE

	        bw = this.getBoxWidths_();

	        this.div_.style.width = (this.div_.offsetWidth - bw.left - bw.right) + "px";
	        this.fixedWidthSet_ = false;
	      }
	    }

	    this.panBox_(this.disableAutoPan_);

	    if (!this.enableEventPropagation_) {

	      this.eventListeners_ = [];

	      // Cancel event propagation.
	      //
	      // Note: mousemove not included (to resolve Issue 152)
	      events = ["mousedown", "mouseover", "mouseout", "mouseup",
	      "click", "dblclick", "touchstart", "touchend", "touchmove"];

	      for (i = 0; i < events.length; i++) {

	        this.eventListeners_.push(google.maps.event.addDomListener(this.div_, events[i], cancelHandler));
	      }
	      
	      // Workaround for Google bug that causes the cursor to change to a pointer
	      // when the mouse moves over a marker underneath InfoBox.
	      this.eventListeners_.push(google.maps.event.addDomListener(this.div_, "mouseover", function (e) {
	        this.style.cursor = "default";
	      }));
	    }

	    this.contextListener_ = google.maps.event.addDomListener(this.div_, "contextmenu", ignoreHandler);

	    /**
	     * This event is fired when the DIV containing the InfoBox's content is attached to the DOM.
	     * @name InfoBox#domready
	     * @event
	     */
	    google.maps.event.trigger(this, "domready");
	  }
	};

	/**
	 * Returns the HTML <IMG> tag for the close box.
	 * @private
	 */
	InfoBox.prototype.getCloseBoxImg_ = function () {

	  var img = "";

	  if (this.closeBoxURL_ !== "") {

	    img  = "<img";
	    img += " src='" + this.closeBoxURL_ + "'";
	    img += " align=right"; // Do this because Opera chokes on style='float: right;'
	    img += " style='";
	    img += " position: relative;"; // Required by MSIE
	    img += " cursor: pointer;";
	    img += " margin: " + this.closeBoxMargin_ + ";";
	    img += "'>";
	  }

	  return img;
	};

	/**
	 * Adds the click handler to the InfoBox close box.
	 * @private
	 */
	InfoBox.prototype.addClickHandler_ = function () {

	  var closeBox;

	  if (this.closeBoxURL_ !== "") {

	    closeBox = this.div_.firstChild;
	    this.closeListener_ = google.maps.event.addDomListener(closeBox, "click", this.getCloseClickHandler_());

	  } else {

	    this.closeListener_ = null;
	  }
	};

	/**
	 * Returns the function to call when the user clicks the close box of an InfoBox.
	 * @private
	 */
	InfoBox.prototype.getCloseClickHandler_ = function () {

	  var me = this;

	  return function (e) {

	    // 1.0.3 fix: Always prevent propagation of a close box click to the map:
	    e.cancelBubble = true;

	    if (e.stopPropagation) {

	      e.stopPropagation();
	    }

	    /**
	     * This event is fired when the InfoBox's close box is clicked.
	     * @name InfoBox#closeclick
	     * @event
	     */
	    google.maps.event.trigger(me, "closeclick");

	    me.close();
	  };
	};

	/**
	 * Pans the map so that the InfoBox appears entirely within the map's visible area.
	 * @private
	 */
	InfoBox.prototype.panBox_ = function (disablePan) {

	  var map;
	  var bounds;
	  var xOffset = 0, yOffset = 0;

	  if (!disablePan) {

	    map = this.getMap();

	    if (map instanceof google.maps.Map) { // Only pan if attached to map, not panorama

	      if (!map.getBounds().contains(this.position_)) {
	      // Marker not in visible area of map, so set center
	      // of map to the marker position first.
	        map.setCenter(this.position_);
	      }

	      bounds = map.getBounds();

	      var mapDiv = map.getDiv();
	      var mapWidth = mapDiv.offsetWidth;
	      var mapHeight = mapDiv.offsetHeight;
	      var iwOffsetX = this.pixelOffset_.width;
	      var iwOffsetY = this.pixelOffset_.height;
	      var iwWidth = this.div_.offsetWidth;
	      var iwHeight = this.div_.offsetHeight;
	      var padX = this.infoBoxClearance_.width;
	      var padY = this.infoBoxClearance_.height;
	      var pixPosition = this.getProjection().fromLatLngToContainerPixel(this.position_);

	      if (pixPosition.x < (-iwOffsetX + padX)) {
	        xOffset = pixPosition.x + iwOffsetX - padX;
	      } else if ((pixPosition.x + iwWidth + iwOffsetX + padX) > mapWidth) {
	        xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
	      }
	      if (this.alignBottom_) {
	        if (pixPosition.y < (-iwOffsetY + padY + iwHeight)) {
	          yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
	        } else if ((pixPosition.y + iwOffsetY + padY) > mapHeight) {
	          yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
	        }
	      } else {
	        if (pixPosition.y < (-iwOffsetY + padY)) {
	          yOffset = pixPosition.y + iwOffsetY - padY;
	        } else if ((pixPosition.y + iwHeight + iwOffsetY + padY) > mapHeight) {
	          yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
	        }
	      }

	      if (!(xOffset === 0 && yOffset === 0)) {

	        // Move the map to the shifted center.
	        //
	        var c = map.getCenter();
	        map.panBy(xOffset, yOffset);
	      }
	    }
	  }
	};

	/**
	 * Sets the style of the InfoBox by setting the style sheet and applying
	 * other specific styles requested.
	 * @private
	 */
	InfoBox.prototype.setBoxStyle_ = function () {

	  var i, boxStyle;

	  if (this.div_) {

	    // Apply style values from the style sheet defined in the boxClass parameter:
	    this.div_.className = this.boxClass_;

	    // Clear existing inline style values:
	    this.div_.style.cssText = "";

	    // Apply style values defined in the boxStyle parameter:
	    boxStyle = this.boxStyle_;
	    for (i in boxStyle) {

	      if (boxStyle.hasOwnProperty(i)) {

	        this.div_.style[i] = boxStyle[i];
	      }
	    }

	    // Fix for iOS disappearing InfoBox problem.
	    // See http://stackoverflow.com/questions/9229535/google-maps-markers-disappear-at-certain-zoom-level-only-on-iphone-ipad
	    this.div_.style.WebkitTransform = "translateZ(0)";

	    // Fix up opacity style for benefit of MSIE:
	    //
	    if (typeof this.div_.style.opacity !== "undefined" && this.div_.style.opacity !== "") {
	      // See http://www.quirksmode.org/css/opacity.html
	      this.div_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(Opacity=" + (this.div_.style.opacity * 100) + ")\"";
	      this.div_.style.filter = "alpha(opacity=" + (this.div_.style.opacity * 100) + ")";
	    }

	    // Apply required styles:
	    //
	    this.div_.style.position = "absolute";
	    this.div_.style.visibility = 'hidden';
	    if (this.zIndex_ !== null) {

	      this.div_.style.zIndex = this.zIndex_;
	    }
	  }
	};

	/**
	 * Get the widths of the borders of the InfoBox.
	 * @private
	 * @return {Object} widths object (top, bottom left, right)
	 */
	InfoBox.prototype.getBoxWidths_ = function () {

	  var computedStyle;
	  var bw = {top: 0, bottom: 0, left: 0, right: 0};
	  var box = this.div_;

	  if (document.defaultView && document.defaultView.getComputedStyle) {

	    computedStyle = box.ownerDocument.defaultView.getComputedStyle(box, "");

	    if (computedStyle) {

	      // The computed styles are always in pixel units (good!)
	      bw.top = parseInt(computedStyle.borderTopWidth, 10) || 0;
	      bw.bottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
	      bw.left = parseInt(computedStyle.borderLeftWidth, 10) || 0;
	      bw.right = parseInt(computedStyle.borderRightWidth, 10) || 0;
	    }

	  } else if (document.documentElement.currentStyle) { // MSIE

	    if (box.currentStyle) {

	      // The current styles may not be in pixel units, but assume they are (bad!)
	      bw.top = parseInt(box.currentStyle.borderTopWidth, 10) || 0;
	      bw.bottom = parseInt(box.currentStyle.borderBottomWidth, 10) || 0;
	      bw.left = parseInt(box.currentStyle.borderLeftWidth, 10) || 0;
	      bw.right = parseInt(box.currentStyle.borderRightWidth, 10) || 0;
	    }
	  }

	  return bw;
	};

	/**
	 * Invoked when <tt>close</tt> is called. Do not call it directly.
	 */
	InfoBox.prototype.onRemove = function () {

	  if (this.div_) {

	    this.div_.parentNode.removeChild(this.div_);
	    this.div_ = null;
	  }
	};

	/**
	 * Draws the InfoBox based on the current map projection and zoom level.
	 */
	InfoBox.prototype.draw = function () {

	  this.createInfoBoxDiv_();

	  var pixPosition = this.getProjection().fromLatLngToDivPixel(this.position_);

	  this.div_.style.left = (pixPosition.x + this.pixelOffset_.width) + "px";
	  
	  if (this.alignBottom_) {
	    this.div_.style.bottom = -(pixPosition.y + this.pixelOffset_.height) + "px";
	  } else {
	    this.div_.style.top = (pixPosition.y + this.pixelOffset_.height) + "px";
	  }

	  if (this.isHidden_) {

	    this.div_.style.visibility = "hidden";

	  } else {

	    this.div_.style.visibility = "visible";
	  }
	};

	/**
	 * Sets the options for the InfoBox. Note that changes to the <tt>maxWidth</tt>,
	 *  <tt>closeBoxMargin</tt>, <tt>closeBoxURL</tt>, and <tt>enableEventPropagation</tt>
	 *  properties have no affect until the current InfoBox is <tt>close</tt>d and a new one
	 *  is <tt>open</tt>ed.
	 * @param {InfoBoxOptions} opt_opts
	 */
	InfoBox.prototype.setOptions = function (opt_opts) {
	  if (typeof opt_opts.boxClass !== "undefined") { // Must be first

	    this.boxClass_ = opt_opts.boxClass;
	    this.setBoxStyle_();
	  }
	  if (typeof opt_opts.boxStyle !== "undefined") { // Must be second

	    this.boxStyle_ = opt_opts.boxStyle;
	    this.setBoxStyle_();
	  }
	  if (typeof opt_opts.content !== "undefined") {

	    this.setContent(opt_opts.content);
	  }
	  if (typeof opt_opts.disableAutoPan !== "undefined") {

	    this.disableAutoPan_ = opt_opts.disableAutoPan;
	  }
	  if (typeof opt_opts.maxWidth !== "undefined") {

	    this.maxWidth_ = opt_opts.maxWidth;
	  }
	  if (typeof opt_opts.pixelOffset !== "undefined") {

	    this.pixelOffset_ = opt_opts.pixelOffset;
	  }
	  if (typeof opt_opts.alignBottom !== "undefined") {

	    this.alignBottom_ = opt_opts.alignBottom;
	  }
	  if (typeof opt_opts.position !== "undefined") {

	    this.setPosition(opt_opts.position);
	  }
	  if (typeof opt_opts.zIndex !== "undefined") {

	    this.setZIndex(opt_opts.zIndex);
	  }
	  if (typeof opt_opts.closeBoxMargin !== "undefined") {

	    this.closeBoxMargin_ = opt_opts.closeBoxMargin;
	  }
	  if (typeof opt_opts.closeBoxURL !== "undefined") {

	    this.closeBoxURL_ = opt_opts.closeBoxURL;
	  }
	  if (typeof opt_opts.infoBoxClearance !== "undefined") {

	    this.infoBoxClearance_ = opt_opts.infoBoxClearance;
	  }
	  if (typeof opt_opts.isHidden !== "undefined") {

	    this.isHidden_ = opt_opts.isHidden;
	  }
	  if (typeof opt_opts.visible !== "undefined") {

	    this.isHidden_ = !opt_opts.visible;
	  }
	  if (typeof opt_opts.enableEventPropagation !== "undefined") {

	    this.enableEventPropagation_ = opt_opts.enableEventPropagation;
	  }

	  if (this.div_) {

	    this.draw();
	  }
	};

	/**
	 * Sets the content of the InfoBox.
	 *  The content can be plain text or an HTML DOM node.
	 * @param {string|Node} content
	 */
	InfoBox.prototype.setContent = function (content) {
	  this.content_ = content;

	  if (this.div_) {

	    if (this.closeListener_) {

	      google.maps.event.removeListener(this.closeListener_);
	      this.closeListener_ = null;
	    }

	    // Odd code required to make things work with MSIE.
	    //
	    if (!this.fixedWidthSet_) {

	      this.div_.style.width = "";
	    }

	    if (typeof content.nodeType === "undefined") {
	      this.div_.innerHTML = this.getCloseBoxImg_() + content;
	    } else {
	      this.div_.innerHTML = this.getCloseBoxImg_();
	      this.div_.appendChild(content);
	    }

	    // Perverse code required to make things work with MSIE.
	    // (Ensures the close box does, in fact, float to the right.)
	    //
	    if (!this.fixedWidthSet_) {
	      this.div_.style.width = this.div_.offsetWidth + "px";
	      if (typeof content.nodeType === "undefined") {
	        this.div_.innerHTML = this.getCloseBoxImg_() + content;
	      } else {
	        this.div_.innerHTML = this.getCloseBoxImg_();
	        this.div_.appendChild(content);
	      }
	    }

	    this.addClickHandler_();
	  }

	  /**
	   * This event is fired when the content of the InfoBox changes.
	   * @name InfoBox#content_changed
	   * @event
	   */
	  google.maps.event.trigger(this, "content_changed");
	};

	/**
	 * Sets the geographic location of the InfoBox.
	 * @param {LatLng} latlng
	 */
	InfoBox.prototype.setPosition = function (latlng) {

	  this.position_ = latlng;

	  if (this.div_) {

	    this.draw();
	  }

	  /**
	   * This event is fired when the position of the InfoBox changes.
	   * @name InfoBox#position_changed
	   * @event
	   */
	  google.maps.event.trigger(this, "position_changed");
	};

	/**
	 * Sets the zIndex style for the InfoBox.
	 * @param {number} index
	 */
	InfoBox.prototype.setZIndex = function (index) {

	  this.zIndex_ = index;

	  if (this.div_) {

	    this.div_.style.zIndex = index;
	  }

	  /**
	   * This event is fired when the zIndex of the InfoBox changes.
	   * @name InfoBox#zindex_changed
	   * @event
	   */
	  google.maps.event.trigger(this, "zindex_changed");
	};

	/**
	 * Sets the visibility of the InfoBox.
	 * @param {boolean} isVisible
	 */
	InfoBox.prototype.setVisible = function (isVisible) {

	  this.isHidden_ = !isVisible;
	  if (this.div_) {
	    this.div_.style.visibility = (this.isHidden_ ? "hidden" : "visible");
	  }
	};

	/**
	 * Returns the content of the InfoBox.
	 * @returns {string}
	 */
	InfoBox.prototype.getContent = function () {

	  return this.content_;
	};

	/**
	 * Returns the geographic location of the InfoBox.
	 * @returns {LatLng}
	 */
	InfoBox.prototype.getPosition = function () {

	  return this.position_;
	};

	/**
	 * Returns the zIndex for the InfoBox.
	 * @returns {number}
	 */
	InfoBox.prototype.getZIndex = function () {

	  return this.zIndex_;
	};

	/**
	 * Returns a flag indicating whether the InfoBox is visible.
	 * @returns {boolean}
	 */
	InfoBox.prototype.getVisible = function () {

	  var isVisible;

	  if ((typeof this.getMap() === "undefined") || (this.getMap() === null)) {
	    isVisible = false;
	  } else {
	    isVisible = !this.isHidden_;
	  }
	  return isVisible;
	};

	/**
	 * Shows the InfoBox. [Deprecated; use <tt>setVisible</tt> instead.]
	 */
	InfoBox.prototype.show = function () {

	  this.isHidden_ = false;
	  if (this.div_) {
	    this.div_.style.visibility = "visible";
	  }
	};

	/**
	 * Hides the InfoBox. [Deprecated; use <tt>setVisible</tt> instead.]
	 */
	InfoBox.prototype.hide = function () {

	  this.isHidden_ = true;
	  if (this.div_) {
	    this.div_.style.visibility = "hidden";
	  }
	};

	/**
	 * Adds the InfoBox to the specified map or Street View panorama. If <tt>anchor</tt>
	 *  (usually a <tt>google.maps.Marker</tt>) is specified, the position
	 *  of the InfoBox is set to the position of the <tt>anchor</tt>. If the
	 *  anchor is dragged to a new location, the InfoBox moves as well.
	 * @param {Map|StreetViewPanorama} map
	 * @param {MVCObject} [anchor]
	 */
	InfoBox.prototype.open = function (map, anchor) {

	  var me = this;

	  if (anchor) {

	    this.position_ = anchor.getPosition();
	    this.moveListener_ = google.maps.event.addListener(anchor, "position_changed", function () {
	      me.setPosition(this.getPosition());
	    });
	  }

	  this.setMap(map);

	  if (this.div_) {

	    this.panBox_();
	  }
	};

	/**
	 * Removes the InfoBox from the map.
	 */
	InfoBox.prototype.close = function () {

	  var i;

	  if (this.closeListener_) {

	    google.maps.event.removeListener(this.closeListener_);
	    this.closeListener_ = null;
	  }

	  if (this.eventListeners_) {
	    
	    for (i = 0; i < this.eventListeners_.length; i++) {

	      google.maps.event.removeListener(this.eventListeners_[i]);
	    }
	    this.eventListeners_ = null;
	  }

	  if (this.moveListener_) {

	    google.maps.event.removeListener(this.moveListener_);
	    this.moveListener_ = null;
	  }

	  if (this.contextListener_) {

	    google.maps.event.removeListener(this.contextListener_);
	    this.contextListener_ = null;
	  }

	  this.setMap(null);
	};

/*------- end infobox.js -------*/ 

/*------- 8. markerwithlabel.js -------*/ 
	
	function MarkerLabel_(marker) {
	  var me = this;

	  this.marker_ = marker;

	  this.labelDiv_ = document.createElement("div");
	  // Prevent selection of the text in the label:
	  this.labelDiv_.onselectstart = function () {
	    return false;
	  };

	  this.containerDiv_ = document.createElement("div");
	  this.containerDiv_.appendChild(this.labelDiv_);
	  this.containerDiv_.style.cssText = "position: absolute; display: none;";

	  this.setMap(this.marker_.getMap());
	  google.maps.event.addListener(this.marker_, "map_changed", function () {
	    me.setMap(me.marker_.getMap());
	  });
	}

	// MarkerLabel_ inherits from <code>OverlayView</code>:
	//MarkerLabel_.prototype = new google.maps.OverlayView();

	/**
	 * Adds the DIV representing the label to the DOM. It is called
	 * automatically when the marker's <code>setMap</code> method is called.
	 * @private
	 */
	MarkerLabel_.prototype.onAdd = function () {
	  var me = this;
	  var cMouseIsDown = false;
	  var cDraggingInProgress = false;
	  var cLastPosition;
	  var cLatOffset;
	  var cLngOffset;
	  var cIgnoreClick;

	  this.getPanes().overlayImage.appendChild(this.containerDiv_);

	  this.listeners_ = [
	    google.maps.event.addDomListener(document, "mouseup", function (mEvent) {
	      if (cDraggingInProgress) {
	        mEvent.latLng = cLastPosition;
	        cIgnoreClick = true; // Set flag to ignore the click event reported after a label drag
	        google.maps.event.trigger(me.marker_, "dragend", mEvent);
	      }
	      google.maps.event.trigger(me.marker_, "mouseup", mEvent);
	      cMouseIsDown = false;
	      cDraggingInProgress = false;
	    }),
	    google.maps.event.addListener(me.marker_.getMap(), "mousemove", function (mEvent) {
	      if (cMouseIsDown && me.marker_.getDraggable()) {
	        // Change the reported location from the mouse position to the marker position:
	        mEvent.latLng = new google.maps.LatLng(mEvent.latLng.lat() - cLatOffset, mEvent.latLng.lng() - cLngOffset);
	        cLastPosition = mEvent.latLng;
	        if (cDraggingInProgress) {
	          me.marker_.setPosition(mEvent.latLng);
	          google.maps.event.trigger(me.marker_, "drag", mEvent);
	        } else {
	          // Calculate offsets from the click point to the marker position:
	          cLatOffset = mEvent.latLng.lat() - me.marker_.getPosition().lat();
	          cLngOffset = mEvent.latLng.lng() - me.marker_.getPosition().lng();
	          cDraggingInProgress = true;
	          google.maps.event.trigger(me.marker_, "dragstart", mEvent);
	        }
	      }
	    }),
	    google.maps.event.addDomListener(this.containerDiv_, "mouseover", function (e) {
	      me.containerDiv_.style.cursor = "pointer";
	      google.maps.event.trigger(me.marker_, "mouseover", e);
	    }),
	    google.maps.event.addDomListener(this.containerDiv_, "mouseout", function (e) {
	      me.containerDiv_.style.cursor = me.marker_.getCursor();
	      google.maps.event.trigger(me.marker_, "mouseout", e);
	    }),
	    google.maps.event.addDomListener(this.containerDiv_, "click", function (e) {
	      if (cIgnoreClick) { // Ignore the click reported when a label drag ends
	        cIgnoreClick = false;
	      } else {
	        google.maps.event.trigger(me.marker_, "click", e);
	      }
	    }),
	    google.maps.event.addDomListener(this.containerDiv_, "dblclick", function (e) {
	      google.maps.event.trigger(me.marker_, "dblclick", e);
	      // Prevent map zoom when double-clicking on a label:
	      e.cancelBubble = true;
	      if (e.stopPropagation) {
	        e.stopPropagation();
	      }
	    }),
	    google.maps.event.addDomListener(this.containerDiv_, "mousedown", function (e) {
	      cMouseIsDown = true;
	      cDraggingInProgress = false;
	      cLatOffset = 0;
	      cLngOffset = 0;
	      google.maps.event.trigger(me.marker_, "mousedown", e);
	      // Prevent map pan when starting a drag on a label:
	      e.cancelBubble = true;
	      if (e.stopPropagation) {
	        e.stopPropagation();
	      }
	    }),
	    google.maps.event.addListener(this.marker_, "labeltext_changed", function () {
	      me.labelDiv_.innerHTML = me.marker_.get("labelText");
	    }),
	    google.maps.event.addListener(this.marker_, "labelclass_changed", function () {
	      me.labelDiv_.className = me.marker_.get("labelClass");
	    }),
	    google.maps.event.addListener(this.marker_, "labelstyle_changed", function () {
	      var i, labelStyle;

	      // Apply default style values to the label:
	      me.labelDiv_.className = me.marker_.get("labelClass");
	      // Apply style values defined in the labelStyle parameter:
	      labelStyle = me.marker_.get("labelStyle");
	      for (i in labelStyle) {
	        if (labelStyle.hasOwnProperty(i)) {
	          me.labelDiv_.style[i] = labelStyle[i];
	        }
	      }
	      // Make sure the opacity setting causes the desired effect on MSIE:
	      if (typeof me.labelDiv_.style.opacity !== "undefined") {
	        me.labelDiv_.style.filter = "alpha(opacity=" + (me.labelDiv_.style.opacity * 100) + ")";
	      }
	      // Apply mandatory style value:
	      me.labelDiv_.style.position = "relative";
	    }),
	    google.maps.event.addListener(this.marker_, "labelzindex_changed", function () {
	      me.containerDiv_.style.zIndex = me.marker_.get("labelZIndex");
	    }),
	    google.maps.event.addListener(this.marker_, "labelvisible_changed", function () {
	      if (me.marker_.get("labelVisible")) {
	        me.containerDiv_.style.display = me.marker_.getVisible() ? "block" : "none";
	      } else {
	        me.containerDiv_.style.display = "none";
	      }
	    }),
	    google.maps.event.addListener(this.marker_, "position_changed", function () {
	      var position = me.getProjection().fromLatLngToDivPixel(me.marker_.getPosition());
	      me.containerDiv_.style.left = position.x + "px";
	      me.containerDiv_.style.top = position.y + "px";
	    }),
	    google.maps.event.addListener(this.marker_, "visible_changed", function () {
	      if (me.marker_.get("labelVisible")) {
	        me.containerDiv_.style.display = me.marker_.getVisible() ? "block" : "none";
	      } else {
	        me.containerDiv_.style.display = "none";
	      }
	    }),
	    google.maps.event.addListener(this.marker_, "title_changed", function () {
	      me.containerDiv_.title = me.marker_.getTitle();
	    })
	  ];
	};

	/**
	 * Removes the DIV for the label from the DOM. It also removes all event handlers.
	 * This method is called when <code>setMap(null)</code> is called.
	 * @private
	 */
	MarkerLabel_.prototype.onRemove = function () {
	  var i;
	  this.containerDiv_.parentNode.removeChild(this.containerDiv_);

	  // Remove event listeners:
	  for (i = 0; i < this.listeners_.length; i++) {
	    google.maps.event.removeListener(this.listeners_[i]);
	  }
	};

	/**
	 * Draws the label with the specified style and at the specified location.
	 * @private
	 */
	MarkerLabel_.prototype.draw = function () {
	  var i, labelStyle;
	  
	  // Position the container:
	  var position = this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());
	  this.containerDiv_.style.left = position.x + "px";
	  this.containerDiv_.style.top = position.y + "px";

	  this.containerDiv_.style.zIndex = this.marker_.get("labelZIndex");

	  if (this.marker_.get("labelVisible")) {
	    this.containerDiv_.style.display = this.marker_.getVisible() ? "block" : "none";
	  } else {
	    this.containerDiv_.style.display = "none";
	  }

	  this.containerDiv_.title = this.marker_.getTitle() || "";

	  // Apply default style values to the label:
	  this.labelDiv_.className = this.marker_.get("labelClass");
	  // Apply style values defined in the labelStyle parameter:
	  labelStyle = this.marker_.get("labelStyle");
	  for (i in labelStyle) {
	    if (labelStyle.hasOwnProperty(i)) {
	      this.labelDiv_.style[i] = labelStyle[i];
	    }
	  }
	  // Make sure the opacity setting causes the desired effect on MSIE:
	  if (typeof this.labelDiv_.style.opacity !== "undefined") {
	    this.labelDiv_.style.filter = "alpha(opacity=" + (this.labelDiv_.style.opacity * 100) + ")";
	  }
	  // Apply mandatory style value:
	  this.labelDiv_.style.position = "relative";

	  this.labelDiv_.innerHTML = this.marker_.get("labelText");
	};

	/**
	 * @name MarkerWithLabelOptions
	 * @class This class represents the optional parameter passed into <code>MarkerWithLabel</code>.
	 *  The properties available are the same as for <code>google.maps.Marker</code> with the addition
	 *  of the properties below. To change any of these new properties after the labeled marker has
	 *  been created, call <code>google.maps.Marker.set(propertyName, propertyValue)</code>.
	 *  <p>
	 *  When any of these properties changes, a property changed event is fired. The names of these
	 *  events are derived from the name of the property and are of the form <code>propertyname_changed</code>.
	 *  For example, if the text of the label changes, a <code>labeltext_changed</code> event is fired.
	 *  <p>
	 * @property {string} [labelText] The text of the label. It can include HTML code.
	 * @property {string} [labelClass] The name of the CSS class defining the styles for the label.
	 * @property {Object} [labelStyle] An object literal whose properties define specific CSS
	 *  style values to be applied to the label. Style values defined here override those that may
	 *  be defined in the <code>labelClass</code> style sheet.
	 * @property {number} [labelZIndex] The zIndex value for the label. Setting this value to be
	 *  higher or lower than zIndex for the marker controls whether the label appears on top of
	 *  or underneath the marker, respectively.
	 * @property {boolean} [labelVisible] A flag indicating whether the label is to be visible.
	 *  The default is <code>true</code>. Note that even when <code>labelVisible</code> is
	 *  <code>true</code>, the label will <i>not</i> be visible if the marker itself is not visible
	 *  (i.e., if the marker's <code>visible</code> property is <code>false</code>).
	 */
	/**
	 * This constructor is used to create a marker with an associated label.
	 * @constructor
	 * @param {MarkerWithLabelOptions} [opt_options] The optional parameters.
	 */
	function MarkerWithLabel(opt_options) {
	  opt_options.labelText = opt_options.labelText || "";
	  opt_options.labelClass = opt_options.labelClass || "markerLabels";
	  opt_options.labelStyle = opt_options.labelStyle || {};
	  opt_options.labelZIndex = opt_options.labelZIndex || null;
	  if (typeof opt_options.labelVisible === "undefined") {
	    opt_options.labelVisible = true;
	  }

	  this.setValues(opt_options);
	  this.theLabel_ = new MarkerLabel_(this);
	}

	// MarkerWithLabel inherits from <code>Marker</code>:
	//MarkerWithLabel.prototype = new google.maps.Marker();

/*------- end markerwithlabel.js -------*/ 
