!function(){function k(a){switch(parseInt(a)){case 2:case 5:a="left";break;case 3:case 6:a="right";break;default:a="center"}if(a=e('<div id="fc2_footer" style="text-align: '+a+'; width: 100%; line-height: 14px; display: none;"><span style="font-size:12px;"><br><a target="_blank" href="//web.fc2.com/">Powered by FC2ホームページ</a></span></div>'))for(var b=0;b<a.length;b++)document.body.appendChild(a[b]);try{document.getElementById("fc2_footer").style.display=""}catch(c){}}function n(){var a=document.location.hostname+document.location.pathname;try{var b=e('<div style="background: #fff; border: #ddd solid 1px; border-radius: 6px; display: table; text-align: center; bottom: 130px; right: 12px; padding: 12px 6px; position: fixed; z-index: 9999;"><div style="margin-bottom: 12px;"><a href="http://twitter.com/share" class="twitter-share-button" data-url="http://'+a+'" data-count="vertical" data-lang="ja">ツイート</a></div><div style="margin-bottom: 12px;" class="fb-like" data-href="http://'+a+'" data-send="false" data-layout="box_count" data-show-faces="false" data-font="verdana"></div><div><a href="http://b.hatena.ne.jp/entry/'+a+'" class="hatena-bookmark-button" data-hatena-bookmark-layout="vertical-balloon" data-hatena-bookmark-lang="ja"><img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a></div></div><div id="fb-root"></div><style type="text/css">.fb_iframe_widget_lift {right:0;bottom:0;}</style>');if(b)for(a=0;a<b.length;a++)document.body.appendChild(b[a]);var c=document.createElement("script");c.text="!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.async = true;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id; js.async = true;js.src = '//connect.facebook.net/ja_JP/all.js#xfbml=1';fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));",document.body.appendChild(c),(c=document.createElement("script")).type="text/javascript",c.src="https://b.st-hatena.com/js/bookmark_button.js",c.charset="utf-8",c.async="async",document.body.appendChild(c)}catch(d){}}function p(){try{var a=document.body.style.cssText;document.body.style.cssText=a?document.body.style.cssText+"; padding-top: 420px !important":"padding-top: 420px !important",document.getElementById("fc2_web_header_ad_close").onclick=function(){var b=document.getElementById("fc2_ad_box");b.parentNode.removeChild(b),document.body.style.cssText=a}}catch(b){}}function q(a){if(a=e('<div id="fc2_affili-footer" style="z-index:999; margin:0; padding:0; border:none; display: none; height:80px; width:100%; overflow:hidden; bottom:0; left:0;position:relative;"><ul id="fc2_affili-footer-body" style="border:none; height:60px; position:fixed; bottom:0; left:0; overflow:hidden; width:100%; margin:0px; text-align:center; list-style:none; padding:10px;"><li style="position:relative; list-style:none; border:none; padding:0; margin:0;"><span id="fc2_affili-bottone" style="position:absolute; right:1%; top:0px;"><img id="fc2_affili-footer-close" width="11" height="10" alt="close" src="//static.fc2.com/fc2web/image/bar_close.gif" style="cursor: pointer"></span></li><li id="fc2_affili-footer-tag" style="border:none;"><iframe src="//static.fc2.com/fc2web/ad/fc2affiliate.html?u='+a+'" frameborder="0" scrolling="no" allowtransparency="true" width="100%" height="60"></iframe></li></ul></div>'))for(var b=0;b<a.length;b++)document.body.appendChild(a[b]);r()}function t(a,b){var c=a.currentStyle||document.defaultView.getComputedStyle(a,"");return c?c[b]:null}function r(){try{var a=function(){if(window.pageYOffset+document.body.clientHeight>f){var a=c;if(a){for(var b=a.className.split(" "),d=!1,e=0;e<b.length;e++)if("static"==b[e]){d=!0;break}d||(b.push("static"),a.className=b.join(" "))}}else if(a=c){for(b=a.className.split(" "),d=!1,e=0;e<b.length;e++)"static"==b[e]&&(b.splice(e,1),d=!0);d&&(a.className=b.join(" "))}},b=t(document.body,"background-color"),c=document.getElementById("fc2_affili-footer-body");if(b){var d=u(b);c.style.backgroundColor=d}else c.style.backgroundColor="rgb(255,255,255)";document.getElementById("fc2_affili-footer-close").onclick=function(){var a=document.getElementById("fc2_affili-footer-body"),b=document.getElementById("fc2_affili-footer-tag"),c=document.getElementById("fc2_affili-footer-close");"none"!=b.style.display?(a.style.height="",b.style.display="none",c.src="//static.fc2.com/fc2web/image/bar_open.gif"):(a.style.height="60px",b.style.display="",c.src="//static.fc2.com/fc2web/image/bar_close.gif")};var b=function(){f=g.offsetTop+h(c),a()},d=function(){f=g.offsetTop+h(c),a()},e=function(){a()};window.addEventListener?(window.addEventListener("load",b,!1),window.addEventListener("resize",d,!1),window.addEventListener("scroll",e,!1)):window.attachEvent?(window.attachEvent("onload",b),window.attachEvent("onresize",d),window.attachEvent("onscroll",e)):(window.onload=b,window.onresize=d,window.onscroll=e);var g=document.getElementById("fc2_affili-footer"),f=0;document.getElementById("fc2_affili-footer").style.display=""}catch(v){}}function h(a){var b=a.currentStyle||window.getComputedStyle(a);return outerHeight=a.offsetHeight,outerHeight+=parseInt(b.marginTop),outerHeight+=parseInt(b.marginBottom)}function u(a){if(a.match(/\((.*)\)/)){3==(a=RegExp.$1.split(",")).length&&a.push(255);for(var b=!0,c=0;c<a.length;c++)if(0!=a[c]){b=!1;break}return b?"rgb(255, 255, 255)":"rgb("+a[0]+","+a[1]+","+a[2]+")"}return a.match(/^#\w*$/)?a:"rgb(255,255,255)"}function e(a){var b,b;return(b=(b=document).createDocumentFragment().appendChild(b.createElement("div"))).innerHTML=a,b.childNodes}function appendAsyncScript(src,parentElement,isMobileAd){var script=document.createElement("script");script.src=src,script.async=!0,isMobileAd&&(script.charset="UTF-8",script.dataset.kiy6a=""),parentElement.appendChild(script)}function appendScriptCode(code){var script=document.createElement("script");script.text=code,script.async=!0,document.getElementsByTagName("body")[0].appendChild(script)}function insertAdContent(htmlContent,scriptSrc,targetId,styleContent,isMobileAd){var container=document.createElement("span");if(targetId&&container.setAttribute("id",targetId),container.innerHTML=htmlContent,document.getElementsByTagName("body")[0].appendChild(container),styleContent){var style=document.createElement("style");style.innerText=styleContent,document.getElementsByTagName("head")[0].appendChild(style)}scriptSrc&&appendAsyncScript(scriptSrc,container.lastElementChild,isMobileAd)}if(_userPageInfo){var mobileAdscript="//static.fc2.com/fc2web/js/u/126564/39svLZh824cnO7HLbXbS-s.js",inactive_header_ad_html='<div id="fc2_ad_box" style="text-align: center; width: 100%; position: absolute; top: 8px; z-index: 9998;"><div id="fc2_ad_container" style="border: 1px solid gray; text-align: left; margin: 0px auto; width: 320px; background-color: white; color: black;"><div title="close ads" style="text-align: right; margin: 4px; position: relative; z-index: 9999;"><img id="fc2_web_header_ad_close" style="cursor:pointer;" src="//static.fc2.com/fc2web/image/fc2_header_bnr_close.gif"></div><div id="adContainer" style="margin: 1em 1em 0.5em 1em; text-align: left; text-indent: 0px; font-style: normal; font-variant: normal; font-weight: normal; font-size: 10px; line-height: normal; font-family: sans-serif;"><div id="ad_script_box">\n'+_userPageInfo.inactive_header_ad+'\n</div></div><div style="margin: 0px 0px 1em 1em; font-style: normal; font-variant: normal; font-weight: normal; text-indent: 0; letter-spacing: 0; word-spacing: normal; font-size: 10px; line-height: normal; font-family: sans-serif;"><span style="font-size: 10px;">この広告は3ヶ月以上更新がない場合に表示されます。<br>ホームページの更新/WordPressユーザ管理画面経由での更新後、<br>24時間以内に表示されなくなります。</span></div></div></div>\n</div></div>',inactive_footer_ad_html='<div id="fc2_bottom_bnr" style="box-sizing:initial;position:fixed;z-index:10000;left:0;bottom:0;width:100%;display:block;background:rgba(0,0,0,0.7);"><div id="fc2_bottom_bnr_img" style="position:relative;display:block;width:728px;height:94px;margin:0px auto;padding-top:10px;">\n'+_userPageInfo.inactive_footer_ad+'\n</div><span id="fc2_bottom_bnr_close" style="box-sizing:initial;cursor:pointer;display:block;position:absolute;padding:5px;top:0;right:0;width:20px;height:20px;opacity:0.8;max-width:100%;max-height:100%;"><img src="//static.fc2.com/fc2web/image/fc2_bottom_bnr_close.png" width="20" height="20" style="box-sizing:initial;cursor:pointer;display:block;position:absolute;padding:5px;top:0;right:0;width:20px;height:20px;opacity:0.8;max-width:100%;max-height:100%;"></span></div>',inactive_footer_ad_style='#fc2_bottom_bnr::after {content:"この広告は3ヶ月以上更新がない場合に表示されます。ホームページの更新/WordPressユーザ管理画面経由での更新後、24時間以内に表示されなくなります。";display:block;color:#C0C0C0;text-align:center;font-size:9px;margin:0px auto;padding:0px;} div#sys1 {background-color:#F0F0F0;　border:#F0F0F0 1px solid; position:relative; display: inline-block;}',inactive_footer_ad_script="(function(w, d) {var area = d.getElementById('fc2_bottom_bnr'),areaStyle = area.style;var getScrollMax = function() { return d.documentElement.getBoundingClientRect().height - w.innerHeight - 1; };var getScrollCurrent = function() { return d.documentElement.scrollTop || d.body.scrollTop; };var overlayPosition = function() {if (getScrollMax() > getScrollCurrent()) {areaStyle.bottom = 0;areaStyle.top = 'auto';} else {areaStyle.bottom = 'auto';areaStyle.top = 0;}};var closeBtn = d.getElementById('fc2_bottom_bnr_close'),close = function() { area.style.display = 'none'; };if (w.addEventListener) {w.addEventListener('resize', overlayPosition, false);w.addEventListener('scroll', overlayPosition, false);closeBtn.addEventListener('click', close, false);} else {w.attachEvent('onresize', overlayPosition);w.attachEvent('onscroll', overlayPosition);closeBtn.attachEvent('onclick', close);}})(window, document);";try{"fc2_footer_pos"in _userPageInfo&&k(_userPageInfo.fc2_footer_pos),"fc2_affiliate_footer_uid"in _userPageInfo&&_userPageInfo.fc2_affiliate_footer_uid&&q(_userPageInfo.fc2_affiliate_footer_uid),"inactive_header_ad"in _userPageInfo&&(insertAdContent(inactive_header_ad_html,_userPageInfo.text_ad,null,null,!1),setTimeout(p,1500)),"inactive_footer_ad"in _userPageInfo&&(insertAdContent(inactive_footer_ad_html,null,null,inactive_footer_ad_style,!1),appendScriptCode(inactive_footer_ad_script)),"ios_ad"in _userPageInfo&&insertAdContent(_userPageInfo.ios_ad,mobileAdscript,"footer_ad",null,!0),"android_ad"in _userPageInfo&&insertAdContent(_userPageInfo.android_ad,mobileAdscript,"footer_ad_android",null,!0),"sns_button_flag"in _userPageInfo&&n()}catch(a){}}}();