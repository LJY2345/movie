/*! Copyright (c) 2006 Klaus Hartl (stilbuero.de) */
;jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1}var expires='';if(options.expires&&(typeof options.expires==='number'||options.expires.toUTCString)){var date;if(typeof options.expires==='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000))}else{date=options.expires}expires='; expires='+date.toUTCString()}var path=options.path?'; path='+options.path:'';var domain=options.domain?'; domain='+options.domain:'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('')}else{var cookieValue=null;if(document.cookie&&document.cookie!==''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)===(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break}}}return cookieValue}};;
/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);
/*! qrcode */
(function(r){r.fn.qrcode=function(h){var s;function u(a){this.mode=s;this.data=a}function o(a,c){this.typeNumber=a;this.errorCorrectLevel=c;this.modules=null;this.moduleCount=0;this.dataCache=null;this.dataList=[]}function q(a,c){if(void 0==a.length)throw Error(a.length+"/"+c);for(var d=0;d<a.length&&0==a[d];)d++;this.num=Array(a.length-d+c);for(var b=0;b<a.length-d;b++)this.num[b]=a[b+d]}function p(a,c){this.totalCount=a;this.dataCount=c}function t(){this.buffer=[];this.length=0}u.prototype={getLength:function(){return this.data.length},
write:function(a){for(var c=0;c<this.data.length;c++)a.put(this.data.charCodeAt(c),8)}};o.prototype={addData:function(a){this.dataList.push(new u(a));this.dataCache=null},isDark:function(a,c){if(0>a||this.moduleCount<=a||0>c||this.moduleCount<=c)throw Error(a+","+c);return this.modules[a][c]},getModuleCount:function(){return this.moduleCount},make:function(){if(1>this.typeNumber){for(var a=1,a=1;40>a;a++){for(var c=p.getRSBlocks(a,this.errorCorrectLevel),d=new t,b=0,e=0;e<c.length;e++)b+=c[e].dataCount;
for(e=0;e<this.dataList.length;e++)c=this.dataList[e],d.put(c.mode,4),d.put(c.getLength(),j.getLengthInBits(c.mode,a)),c.write(d);if(d.getLengthInBits()<=8*b)break}this.typeNumber=a}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17;this.modules=Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=Array(this.moduleCount);for(var b=0;b<this.moduleCount;b++)this.modules[d][b]=null}this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-
7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(a,c);7<=this.typeNumber&&this.setupTypeNumber(a);null==this.dataCache&&(this.dataCache=o.createData(this.typeNumber,this.errorCorrectLevel,this.dataList));this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,c){for(var d=-1;7>=d;d++)if(!(-1>=a+d||this.moduleCount<=a+d))for(var b=-1;7>=b;b++)-1>=c+b||this.moduleCount<=c+b||(this.modules[a+d][c+b]=
0<=d&&6>=d&&(0==b||6==b)||0<=b&&6>=b&&(0==d||6==d)||2<=d&&4>=d&&2<=b&&4>=b?!0:!1)},getBestMaskPattern:function(){for(var a=0,c=0,d=0;8>d;d++){this.makeImpl(!0,d);var b=j.getLostPoint(this);if(0==d||a>b)a=b,c=d}return c},createMovieClip:function(a,c,d){a=a.createEmptyMovieClip(c,d);this.make();for(c=0;c<this.modules.length;c++)for(var d=1*c,b=0;b<this.modules[c].length;b++){var e=1*b;this.modules[c][b]&&(a.beginFill(0,100),a.moveTo(e,d),a.lineTo(e+1,d),a.lineTo(e+1,d+1),a.lineTo(e,d+1),a.endFill())}return a},
setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(a=8;a<this.moduleCount-8;a++)null==this.modules[6][a]&&(this.modules[6][a]=0==a%2)},setupPositionAdjustPattern:function(){for(var a=j.getPatternPosition(this.typeNumber),c=0;c<a.length;c++)for(var d=0;d<a.length;d++){var b=a[c],e=a[d];if(null==this.modules[b][e])for(var f=-2;2>=f;f++)for(var i=-2;2>=i;i++)this.modules[b+f][e+i]=-2==f||2==f||-2==i||2==i||0==f&&0==i?!0:!1}},setupTypeNumber:function(a){for(var c=
j.getBCHTypeNumber(this.typeNumber),d=0;18>d;d++){var b=!a&&1==(c>>d&1);this.modules[Math.floor(d/3)][d%3+this.moduleCount-8-3]=b}for(d=0;18>d;d++)b=!a&&1==(c>>d&1),this.modules[d%3+this.moduleCount-8-3][Math.floor(d/3)]=b},setupTypeInfo:function(a,c){for(var d=j.getBCHTypeInfo(this.errorCorrectLevel<<3|c),b=0;15>b;b++){var e=!a&&1==(d>>b&1);6>b?this.modules[b][8]=e:8>b?this.modules[b+1][8]=e:this.modules[this.moduleCount-15+b][8]=e}for(b=0;15>b;b++)e=!a&&1==(d>>b&1),8>b?this.modules[8][this.moduleCount-
b-1]=e:9>b?this.modules[8][15-b-1+1]=e:this.modules[8][15-b-1]=e;this.modules[this.moduleCount-8][8]=!a},mapData:function(a,c){for(var d=-1,b=this.moduleCount-1,e=7,f=0,i=this.moduleCount-1;0<i;i-=2)for(6==i&&i--;;){for(var g=0;2>g;g++)if(null==this.modules[b][i-g]){var n=!1;f<a.length&&(n=1==(a[f]>>>e&1));j.getMask(c,b,i-g)&&(n=!n);this.modules[b][i-g]=n;e--; -1==e&&(f++,e=7)}b+=d;if(0>b||this.moduleCount<=b){b-=d;d=-d;break}}}};o.PAD0=236;o.PAD1=17;o.createData=function(a,c,d){for(var c=p.getRSBlocks(a,
c),b=new t,e=0;e<d.length;e++){var f=d[e];b.put(f.mode,4);b.put(f.getLength(),j.getLengthInBits(f.mode,a));f.write(b)}for(e=a=0;e<c.length;e++)a+=c[e].dataCount;if(b.getLengthInBits()>8*a)throw Error("code length overflow. ("+b.getLengthInBits()+">"+8*a+")");for(b.getLengthInBits()+4<=8*a&&b.put(0,4);0!=b.getLengthInBits()%8;)b.putBit(!1);for(;!(b.getLengthInBits()>=8*a);){b.put(o.PAD0,8);if(b.getLengthInBits()>=8*a)break;b.put(o.PAD1,8)}return o.createBytes(b,c)};o.createBytes=function(a,c){for(var d=
0,b=0,e=0,f=Array(c.length),i=Array(c.length),g=0;g<c.length;g++){var n=c[g].dataCount,h=c[g].totalCount-n,b=Math.max(b,n),e=Math.max(e,h);f[g]=Array(n);for(var k=0;k<f[g].length;k++)f[g][k]=255&a.buffer[k+d];d+=n;k=j.getErrorCorrectPolynomial(h);n=(new q(f[g],k.getLength()-1)).mod(k);i[g]=Array(k.getLength()-1);for(k=0;k<i[g].length;k++)h=k+n.getLength()-i[g].length,i[g][k]=0<=h?n.get(h):0}for(k=g=0;k<c.length;k++)g+=c[k].totalCount;d=Array(g);for(k=n=0;k<b;k++)for(g=0;g<c.length;g++)k<f[g].length&&
(d[n++]=f[g][k]);for(k=0;k<e;k++)for(g=0;g<c.length;g++)k<i[g].length&&(d[n++]=i[g][k]);return d};s=4;for(var j={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,
78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var c=a<<10;0<=j.getBCHDigit(c)-j.getBCHDigit(j.G15);)c^=j.G15<<j.getBCHDigit(c)-j.getBCHDigit(j.G15);return(a<<10|c)^j.G15_MASK},getBCHTypeNumber:function(a){for(var c=a<<12;0<=j.getBCHDigit(c)-
j.getBCHDigit(j.G18);)c^=j.G18<<j.getBCHDigit(c)-j.getBCHDigit(j.G18);return a<<12|c},getBCHDigit:function(a){for(var c=0;0!=a;)c++,a>>>=1;return c},getPatternPosition:function(a){return j.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,c,d){switch(a){case 0:return 0==(c+d)%2;case 1:return 0==c%2;case 2:return 0==d%3;case 3:return 0==(c+d)%3;case 4:return 0==(Math.floor(c/2)+Math.floor(d/3))%2;case 5:return 0==c*d%2+c*d%3;case 6:return 0==(c*d%2+c*d%3)%2;case 7:return 0==(c*d%3+(c+d)%2)%2;default:throw Error("bad maskPattern:"+
a);}},getErrorCorrectPolynomial:function(a){for(var c=new q([1],0),d=0;d<a;d++)c=c.multiply(new q([1,l.gexp(d)],0));return c},getLengthInBits:function(a,c){if(1<=c&&10>c)switch(a){case 1:return 10;case 2:return 9;case s:return 8;case 8:return 8;default:throw Error("mode:"+a);}else if(27>c)switch(a){case 1:return 12;case 2:return 11;case s:return 16;case 8:return 10;default:throw Error("mode:"+a);}else if(41>c)switch(a){case 1:return 14;case 2:return 13;case s:return 16;case 8:return 12;default:throw Error("mode:"+
a);}else throw Error("type:"+c);},getLostPoint:function(a){for(var c=a.getModuleCount(),d=0,b=0;b<c;b++)for(var e=0;e<c;e++){for(var f=0,i=a.isDark(b,e),g=-1;1>=g;g++)if(!(0>b+g||c<=b+g))for(var h=-1;1>=h;h++)0>e+h||c<=e+h||0==g&&0==h||i==a.isDark(b+g,e+h)&&f++;5<f&&(d+=3+f-5)}for(b=0;b<c-1;b++)for(e=0;e<c-1;e++)if(f=0,a.isDark(b,e)&&f++,a.isDark(b+1,e)&&f++,a.isDark(b,e+1)&&f++,a.isDark(b+1,e+1)&&f++,0==f||4==f)d+=3;for(b=0;b<c;b++)for(e=0;e<c-6;e++)a.isDark(b,e)&&!a.isDark(b,e+1)&&a.isDark(b,e+
2)&&a.isDark(b,e+3)&&a.isDark(b,e+4)&&!a.isDark(b,e+5)&&a.isDark(b,e+6)&&(d+=40);for(e=0;e<c;e++)for(b=0;b<c-6;b++)a.isDark(b,e)&&!a.isDark(b+1,e)&&a.isDark(b+2,e)&&a.isDark(b+3,e)&&a.isDark(b+4,e)&&!a.isDark(b+5,e)&&a.isDark(b+6,e)&&(d+=40);for(e=f=0;e<c;e++)for(b=0;b<c;b++)a.isDark(b,e)&&f++;a=Math.abs(100*f/c/c-50)/5;return d+10*a}},l={glog:function(a){if(1>a)throw Error("glog("+a+")");return l.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;256<=a;)a-=255;return l.EXP_TABLE[a]},EXP_TABLE:Array(256),
LOG_TABLE:Array(256)},m=0;8>m;m++)l.EXP_TABLE[m]=1<<m;for(m=8;256>m;m++)l.EXP_TABLE[m]=l.EXP_TABLE[m-4]^l.EXP_TABLE[m-5]^l.EXP_TABLE[m-6]^l.EXP_TABLE[m-8];for(m=0;255>m;m++)l.LOG_TABLE[l.EXP_TABLE[m]]=m;q.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var c=Array(this.getLength()+a.getLength()-1),d=0;d<this.getLength();d++)for(var b=0;b<a.getLength();b++)c[d+b]^=l.gexp(l.glog(this.get(d))+l.glog(a.get(b)));return new q(c,0)},mod:function(a){if(0>
this.getLength()-a.getLength())return this;for(var c=l.glog(this.get(0))-l.glog(a.get(0)),d=Array(this.getLength()),b=0;b<this.getLength();b++)d[b]=this.get(b);for(b=0;b<a.getLength();b++)d[b]^=l.gexp(l.glog(a.get(b))+c);return(new q(d,0)).mod(a)}};p.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],
[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,
116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,
43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,
3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,
55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,
45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];p.getRSBlocks=function(a,c){var d=p.getRsBlockTable(a,c);if(void 0==d)throw Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+c);for(var b=d.length/3,e=[],f=0;f<b;f++)for(var h=d[3*f+0],g=d[3*f+1],j=d[3*f+2],l=0;l<h;l++)e.push(new p(g,j));return e};p.getRsBlockTable=function(a,c){switch(c){case 1:return p.RS_BLOCK_TABLE[4*(a-1)+0];case 0:return p.RS_BLOCK_TABLE[4*(a-1)+1];case 3:return p.RS_BLOCK_TABLE[4*
(a-1)+2];case 2:return p.RS_BLOCK_TABLE[4*(a-1)+3]}};t.prototype={get:function(a){return 1==(this.buffer[Math.floor(a/8)]>>>7-a%8&1)},put:function(a,c){for(var d=0;d<c;d++)this.putBit(1==(a>>>c-d-1&1))},getLengthInBits:function(){return this.length},putBit:function(a){var c=Math.floor(this.length/8);this.buffer.length<=c&&this.buffer.push(0);a&&(this.buffer[c]|=128>>>this.length%8);this.length++}};"string"===typeof h&&(h={text:h});h=r.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,
correctLevel:2,background:"#ffffff",foreground:"#000000"},h);return this.each(function(){var a;if("canvas"==h.render){a=new o(h.typeNumber,h.correctLevel);a.addData(h.text);a.make();var c=document.createElement("canvas");c.width=h.width;c.height=h.height;for(var d=c.getContext("2d"),b=h.width/a.getModuleCount(),e=h.height/a.getModuleCount(),f=0;f<a.getModuleCount();f++)for(var i=0;i<a.getModuleCount();i++){d.fillStyle=a.isDark(f,i)?h.foreground:h.background;var g=Math.ceil((i+1)*b)-Math.floor(i*b),
j=Math.ceil((f+1)*b)-Math.floor(f*b);d.fillRect(Math.round(i*b),Math.round(f*e),g,j)}}else{a=new o(h.typeNumber,h.correctLevel);a.addData(h.text);a.make();c=r("<table></table>").css("width",h.width+"px").css("height",h.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",h.background);d=h.width/a.getModuleCount();b=h.height/a.getModuleCount();for(e=0;e<a.getModuleCount();e++){f=r("<tr></tr>").css("height",b+"px").appendTo(c);for(i=0;i<a.getModuleCount();i++)r("<td></td>").css("width",
d+"px").css("background-color",a.isDark(e,i)?h.foreground:h.background).appendTo(f)}}a=c;jQuery(a).appendTo(this)})}})(jQuery);
/*! clipboard.js v1.7.1 * https://zenorocha.github.io/clipboard.js*/
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,o){function i(a,c){if(!n[a]){if(!e[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return i(n||t)},u,u.exports,t,e,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,e,n){function o(t,e){for(;t&&t.nodeType!==i;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}e.exports=o},{}],2:[function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}var r=t("./closest");e.exports=o},{"./closest":1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{}],4:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return i(t,e,n);if(c.nodeList(t))return r(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return l(document.body,t,e,n)}var c=t("./is"),l=t("delegate");e.exports=o},{"./is":3,delegate:2}],5:[function(t,e,n){function o(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i),e=o.toString()}return e}e.exports=o},{}],6:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;r<a;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},e.exports=o},{}],7:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if(void 0!==o)r(n,e("select"));else{var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function t(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function t(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function t(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function t(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function t(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function t(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function t(){this.removeFake()}},{key:"action",set:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function t(){return this._target}}]),t}();t.exports=c})},{select:5}],8:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if(void 0!==o)r(n,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=a.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var s=i(e),u=i(n),f=i(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){r(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),h(e,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container)?e.container:document.body}},{key:"listenClick",value:function t(e){var n=this;this.listener=(0,f.default)(e,"click",function(t){return n.onClick(t)})}},{key:"onClick",value:function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),container:this.container,trigger:n,emitter:this})}},{key:"defaultAction",value:function t(e){return l("action",e)}},{key:"defaultTarget",value:function t(e){var n=l("target",e);if(n)return document.querySelector(n)}},{key:"defaultText",value:function t(e){return l("text",e)}},{key:"destroy",value:function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){o=o&&!!document.queryCommandSupported(t)}),o}}]),e}(u.default);t.exports=p})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});
// change color
var $cookie_color=$.cookie("color");
if($cookie_color!=null){
    $("link[name='color']").attr("href","https://cdn.jsdelivr.net/gh/LJY2345/movie@main/asset/css/"+$cookie_color+".min.css?v="+conchtpl.ver+"");
}
// 防止 jQuery.getScript 添加 ?_=timestamp
$.ajaxSetup({ cache: true });
// conch.vip.js
var Conch = {
	'Browser': {
		url: document.URL,
		domain: document.domain,
		title: document.title,
		urlpath: document.location.pathname,
		language: (navigator.browserLanguage || navigator.language).toLowerCase(),
        Swidth: $(window).width(),
		canvas: function() {
			return !!document.createElement("canvas").getContext
		}(),
		useragent: function() {
			var a = navigator.userAgent;
			return {
				mobile: !! a.match(/AppleWebKit.*Mobile.*/),
				ios: !! a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
				android: -1 < a.indexOf("Android") || -1 < a.indexOf("Linux"),
				iPhone: -1 < a.indexOf("iPhone") || -1 < a.indexOf("Mac"),
				iPad: -1 < a.indexOf("iPad"),
				trident: -1 < a.indexOf("Trident"),
				presto: -1 < a.indexOf("Presto"),
				webKit: -1 < a.indexOf("AppleWebKit"),
				gecko: -1 < a.indexOf("Gecko") && -1 === a.indexOf("KHTML"),
				weixin: -1 < a.indexOf("MicroMessenger")
			}
		}()
	},
    'Cookie': {
		'Set':function(name,value,days){
	        var expires;
	        if (days) {
	            expires = days;
	        } else{
	            expires = "";
	        }
	        $.cookie(name,value,{expires:expires,path:'/'});
		},
		'Get':function(name){
			var styles = $.cookie(name);
		    return styles;
		},
		'Del':function(name){
	        $.cookie(name,null,{expires:-1,path: '/'});
		}
	},
    'Host': function(){
 
    },
    'Resize': function(){
        window.addEventListener('resize', function() {
            Conch.Search.Form();
            Conch.Other.Navs();
            Conch.Other.Set();
        });
    },
    'Images': {
        'Init': function(){
            Conch.Images.Lazyload();
            Conch.Images.Qrcode();
        },
		'Lazyload': function() {		
            $(".hl-lazy").lazyload({
                effect: "fadeIn",
                threshold: 200,
                failurelimit: 20,
            });
		},
		'Qrcode': function() {
            $('.hl-cans').each(function(){
                if ($(this).length) {
                    $(this).qrcode({
                        width:120,
                        height:120,
                        text:encodeURI(Conch.Browser.url)
                    });  
                    function convertCanvasToImage(canvas) {  
                        var image = new Image();  
                        image.src = canvas.toDataURL("image/png");  
                        return image;  
                    }   
                    var mycans=$('canvas')[0];   
                    var img=convertCanvasToImage(mycans);  
                    $(this).next('.hl-qrcode').append(img);
                }
            });
		}
	},
	'Swiper': {
        'Init': function() {
            $.getScript("https://cdn.jsdelivr.net/gh/LJY2345/movie@main/asset/js/set/swiper.min.js", function() {
                Conch.Swiper.Scrolls();
                Conch.Swiper.Navs();
                Conch.Swiper.Banners();
                Conch.Swiper.Lists();
                Conch.Swiper.Tabs();
            });
        },
        'Scrolls':function() {
            var scrollswiper = new Swiper('.conch-scrollbar', {
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                    hide: true,
                },
                mousewheel: true,
            });
            if (Conch.Browser.Swidth>992){
            var scrollswiper2 = new Swiper('.hl-play-scrollbar', {
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                observer:true,
                observeSlideChildren:true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                    hide: true,
                },
                mousewheel: true,
            });
            }
        },
        'Navs': function() {
            if (Conch.Browser.Swidth<768){
            var navswiper = new Swiper('.hl-navswiper', {
                freeMode: true,
                slidesPerView: 'auto',
                slideClass: 'hl-slide-swiper',
                on: {
                    init: function() {
                        if (this.$el.find(".active").length>0){
                            $activewidth = this.$el.find(".active").parent().outerWidth(true);
                            $activeleft = this.$el.find(".active").parent()[0].offsetLeft;
                            $wrapwidth = this.$wrapperEl.parent().outerWidth(true);
                            $navwidth = 0;
                            this.slides.each(function() {
                                $navwidth+=parseInt($(this).outerWidth(true));
                            });
                            this.$wrapperEl.transition(300);
                            if ($activeleft < ($wrapwidth - parseInt($activewidth)) / 2) {
                                this.$wrapperEl.transform('translate3d(0px,0px,0px)')
                            } else if ($activeleft > $navwidth - (parseInt($activewidth) + $wrapwidth) / 2) {
                                this.$wrapperEl.transform('translate3d(' + ($wrapwidth - $navwidth) + 'px,0px,0px)')
                            } else {
                                this.$wrapperEl.transform('translate3d(' + (($wrapwidth - parseInt($activewidth)) / 2 - $activeleft) + 'px,0px,0px)')
                            }
                        }
                    },
                },
            });
            }
        },
        'Banners': function() {
            var vbswiper = new Swiper('.conch-br-swiper', {
                speed: 1000,
                slidesPerView: 1,
                spaceBetween: 10,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                loop: true,
                loopAdditionalSlides : 1,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                lazy: {
                    loadPrevNext: true,
                    loadOnTransitionStart: true,
                },
                on: {
                    init: function(){
                        this.$el.parents('.conch-br-box').removeClass('hl-hidden');
                    },
                    slideChangeTransitionEnd: function(){
                        $('.hl-lazy').lazyload({threshold: 130});
                        this.slides.find('.hl-br-thumb').css('opacity','1');
                    },
                },
                breakpoints: {
                   768: {
                      spaceBetween: 20,
                   },
                }
            });
        },
        'Lists':function(){
            var listswiper = new Swiper('.hl-list-swiper', {
                slidesPerView: 6,
                slidesPerGroup: 6,
                slideClass: 'hl-slide-swiper',
                observer: true,
                observeParents: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
                on: {
                    slideChangeTransitionEnd: function(){
                        $('.hl-lazy').lazyload({threshold: 130});
                    },
                    touchEnd: function(){
                        $('.hl-lazy').lazyload({threshold: 130});
                    },
                }, 
                breakpoints: {
                   1199: {
                      slidesPerView: 5,
                      slidesPerGroup : 5,
                   },
                   991: {
                      slidesPerView: 4,
                      slidesPerGroup : 4,
                   },
                   767: {
                      freeMode: true,
                      slidesPerView: 'auto', 
                      slidesPerGroup : 1,
                   },
                }
            });
            var listswiper2 = new Swiper('.hl-list-swiper2', {
                slidesPerView: 5,
                slidesPerGroup: 5,
                slideClass: 'hl-slide-swiper',
                observer: true,
                observeParents: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
                on: {
                    slideChangeTransitionEnd: function(){
                        $('.hl-lazy').lazyload({threshold: 130});
                    },
                    touchEnd: function(){
                        $('.hl-lazy').lazyload({threshold: 130});
                    },
                }, 
                breakpoints: {
                   1199: {
                      slidesPerView: 4,
                      slidesPerGroup : 4,
                   },
                   767: {
                      freeMode: true,
                      slidesPerView: 'auto', 
                      slidesPerGroup : 1,
                   },
                }
            });

        },
        'Tabs': function(){
            var tabsswiper = new Swiper('.hl-tabs-swiper', {
                freeMode: true,
                slidesPerView: 'auto',
                slideClass: 'hl-slide-swiper',
                on: {
                    touchEnd: function(){
                        $('.hl-lazy').lazyload({threshold: 130});
                    },
                },
            });   
        },
		
	},
    'Scroll': {
        'Init':function(){
            Conch.Scroll.Fixed();
            Conch.Scroll.Top();
        },
        'Fixed':function(){
            $(window).scroll(function(){
                var $this = $(this);
                var targetTop = $this.scrollTop();
                if (targetTop >= 100){
                    $("body").addClass("conch-adjust-fix");
                    $(".conch-headwrap").addClass("fixed").addClass("hl-tran5");
                }else{
                    $(".conch-headwrap").removeClass("fixed").removeClass("hl-tran5");
                    $("body").removeClass("conch-adjust-fix");
                };
                if (targetTop >= 200){
                    $(".conch-headwrap").addClass("active");
                }else{
                    $(".conch-headwrap").removeClass("active");
                };
                if (targetTop >= 900 && Conch.Browser.Swidth>991){
                    $(".hl-rb-side").addClass('hl-fadeIn').addClass("fixed");
                }else{
                    $(".hl-rb-side").removeClass("fixed").removeClass('hl-fadeIn');
                };
                if($('.hl-article-content').length>0){
                    var boxTop = $('.hl-article-content').offset().top,
                        boxHigh = $('.hl-article-content').height(),
                        boxStart = boxTop - targetTop,
                        boxEnd = (boxTop + boxHigh) - targetTop;
                    if (boxEnd > 279 && boxStart <= 90 && Conch.Browser.Swidth>768){
                        $(".hl-article-main .hl-tool-icon").addClass("fixed");
                    }else{
                        $(".hl-article-main .hl-tool-icon").removeClass("fixed");
                    };
                    if (boxEnd <= 279 && Conch.Browser.Swidth>768){
                        $(".hl-article-main .hl-tool-icon").addClass("bottom");
                    }else{
                        $(".hl-article-main .hl-tool-icon").removeClass("bottom");
                    };
                }
            });
        },
        'Top': function() {
            var a = $(window);
            $scrollTopLink = $(".hl-back-top");
            a.scroll(function() {
                500 < $(this).scrollTop() ? $scrollTopLink.css("display", "block") : $scrollTopLink.css("display", "none")
            });
            $scrollTopLink.on("click", function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 400);
                return !1
            });
        },
    },
    'Search': {
        'Init':function(){
            Conch.Search.Select();
            Conch.Search.Submit();
            Conch.Search.Form();
            Conch.Search.History();
        },
        'Select':function(){
            var $Ssele = $(".hl-search-select");
            var $Sform = $Ssele.parent();
            var $Ssbox = $(".hl-ss-box");
            if($(".hl-ss-text").data("mid")!==1){
                $("body").addClass("conch-adjust-ss");
            };
            $Ssele.on('click', function(e){
                var $display = $Ssbox.css("display");
                if ($display =='block'){
                    $Ssbox.hide();
                    $Sform.removeClass("hl-select-op");
                }else{
                    $Ssbox.show();
                    $Sform.addClass("hl-select-op");
                    e.stopPropagation();
                    $("body").on('click', function(){
                        $Ssbox.hide();
                        $Sform.removeClass("hl-select-op");
                    });     
                };
            });
            $(".hl-ss-item span").on("click",function(){
                var $href = $(this).data("action");
                var $mid = $(this).data("mid");
                var $text = $(this).text();
                $(".hl-search").attr("action",$href);
                $(".hl-ss-text").attr("data-mid",$mid);
                $(".hl-ss-text").text($text);
                if($mid === 1){
                    $("body").removeClass("conch-adjust-ss");
                }else{
                    $("body").addClass("conch-adjust-ss");
                }
            });
        },
        'Submit':function(){
            var $Stext = $('.hl-search-text');
            var $Ssubm = $('.hl-search-submit');
            if ($Stext.val() == ""){
                $Ssubm.attr("disabled","true");
            }
            $Stext.on("input propertychange", function(){
                if($.trim($(this).val()) !== ""){
                    $Ssubm.removeAttr("disabled");
                }else {
                    $Ssubm.attr("disabled","true"); 
                }
            });
        },
        'Form':function(){
            var $Search = $('.conch-search');
            var $Right = $('.conch-list').innerWidth();
            var $Stext = $('.hl-search-text');
            var $Ssubm = $('.hl-search-submit');
            var $Ssele = $(".hl-search-select");
            var $Shbox = $(".hl-sh-box");
            if (Conch.Browser.Swidth<768){
                $('.conch-search').css('right',$Right);
                $('.hl-search-focus').click(function(){
                    $('body').addClass('conch-adjust-res');
                    $('.hl-sh-search > form > input').focus();
                })
            }
            $Stext.focus(function(){
                $Shbox.show();
                $Ssele.on('click', function(){
                    $Shbox.hide();
                });
                $("body").on("click",function(e){
                    if (!$(e.target).closest(".hl-search-text,#hl-search-empty,.hl-alert-box").length) {
                    $Shbox.hide();
                    }
                });
            });
            $Stext.bind('input propertychange', function() {
                $Shbox.hide();
            });
        },
        'History':function(){
            $(function(){
                update_history();
                $(document).keydown(function(event){
                    if(event.keyCode==13){ 
                        $('#hl-search-submit').click(); 
                    } 
                }); 
                if($('#hl-search-text').val() !== ""){
                    var mid = $(".hl-ss-text").data("mid");
                    var keywords = $('#hl-search-text').val();
                    if (mid===1){
                        history(keywords);
                    }
                };
                $('#hl-search-submit').on("click",function(){
                    update_history();
                })
                $("#hl-search-empty").on("click",function(){
                    mystorage.remove('keywords');
                    $(".hl-sh-item2").remove();
                })
            });
            function update_history(){
                var history = mystorage.get("keywords");
                if (history) {
                    $(".hl-sh-wrap").prepend('<div class="hl-sh-item hl-sh-item2"><div class="hl-sh-title">历史搜索<a href="javascript:;" id="hl-search-empty"><i class="iconfont hl-icon-lajitong"></i></a></div><ul id="hl-search-history" class="hl-sh-list clearfix"></ul></div>')
                    var html = "";
                    $.each(history,function(i,v){
                        html += "<li><a class='hl-bg-subs' href='"+conchtpl.surl+"?wd="+v+"' role='button'>"+v+"</a></li>"
                    })
                    $("#hl-search-history").html(html);
                };
            };
            function history(value){  
                var data = mystorage.get("keywords");
                if (!data) {
                    var data = [];
                }else if(data.length === 10){
                    data.shift();
                }else{};
                if (value) {
                    if (data.indexOf(value)<0) {
                        data.push(value);
                        mystorage.set("keywords",data);
                    };
                };
            };
            var mystorage = (function mystorage(){
                var ms = "mystorage";
                var storage=window.localStorage;
                if(!window.localStorage){
                    alert("浏览器不支持localstorage");
                    return false;
                }
                var set = function(key,value){
                    var mydata = storage.getItem(ms);
                    if(!mydata){
                        this.init();
                        mydata = storage.getItem(ms);
                    }
                    mydata = JSON.parse(mydata);
                    mydata.data[key] = value;
                    storage.setItem(ms,JSON.stringify(mydata));
                    return mydata.data;
                };
                var get = function(key){
                    var mydata = storage.getItem(ms);
                    if(!mydata){
                        return false;
                    }
                    mydata = JSON.parse(mydata);
                    return mydata.data[key];
                };
                var remove = function(key){
                    var mydata = storage.getItem(ms);
                    if(!mydata){
                        return false;
                    }
                    mydata = JSON.parse(mydata);
                    delete mydata.data[key];
                    storage.setItem(ms,JSON.stringify(mydata));
                    return mydata.data;
                };
                var clear = function(){
                    storage.removeItem(ms);
                };
                var init = function(){
                  storage.setItem(ms,'{"data":{}}');
                };
                return {set : set,get : get,remove : remove,init : init,clear : clear};
            })();
        },
        'Suggest':function($obj,$mid){
            $.getScript("https://cdn.jsdelivr.net/gh/LJY2345/movie@main/asset/js/set/autocomplete.min.js",function(){
            var SearchWidth = $('.hl-search-text').innerWidth();
            try {
                $($obj).autocomplete(maccms.path + '/index.php/ajax/suggest?mid=' + $mid, {
                    inputClass: "hl-search-input",
                    resultsClass: "conch-results hl-alert-box hl-bg-site hl-fadeIn",
                    width: SearchWidth, scrollHeight: 400, minChars: 1, matchSubset: 0,
                    cacheLength: 10, multiple: false, selectFirst: false, matchContains: true, autoFill: false,
                    dataType: "json",
                    parse: function (r) {
                        if (r.code == 1) {
                            var parsed = [];
                            $.each(r['list'], function (index, row) {
                                row.url = r.url;
                                parsed[index] = {
                                    data: row
                                };
                            });
                            return parsed;
                        } else {
                            return {data: ''};
                        }
                    },
                    formatItem: function (row, i, max) {
                        return row.name;
                    },
                    formatResult: function (row, i, max) {
                        return row.text;
                    }
                }).result(function (event, data, formatted) {
                    $(this).val(data.name);
                    location.href = data.url.replace('mac_wd', encodeURIComponent(data.name));
                });
            }
            catch(e){}
            });
        },
    },
    'History': {
		'Limit':12,
        'Days':7,
		'Json':'',
		'Init':function(){
			var get_history = Conch.Cookie.Get("history");
			if(get_history){
				var json=eval("("+get_history+")");
				var list="";
				for(i=0;i<json.length;i++){
					list = list + '<li class="hl-public-item"><a title="'+json[i].name+'" href="'+json[i].link+'"><div class="hl-item-pic hl-col-xs-4"><div class="hl-item-thumb hl-lazy" data-original="'+json[i].pic+'" style="background-image:url('+json[i].pic+');"><span class="hl-pic-icon hl-hidden-xs"><i class="iconfont hl-icon-bofang-fill"></i></span></div></div><div class="hl-item-content hl-col-xs-8"><div class="hl-item-title hl-text-site hl-lc-2">'+json[i].name+'</div><div class="hl-item-blurb hl-text-muted hl-lc-1"><span>继续观看'+json[i].part+'</span></div></div></a></li>';
				}
				$("#hl-history").append(list);
				$(".hl-hy-title").append('<a class="hl-hy-clear hl-text-muted hl-pull-right" target="_self" href="javascript:void(0)" onclick="Conch.History.Clear();"><i class="iconfont hl-icon-lajitong">清空</a>');
			}else{
				$("#hl-history").append('<li class="hl-empty-wrap hl-text-center hl-col-xs-12"><i class="iconfont hl-icon-wushuju"></i><p>暂无记录</p><p class="hl-user-tips"><a class="hl-bg-conch mac_user" href="javascript:void(0)">登录查看更多</a></p></li>');
			}
			if($(".hl-vod-history").length){
	            var $that = $(".hl-vod-history");
	            Conch.History.Set($that.attr('data-name'),$that.attr('data-link'),$that.attr('data-pic'),$that.attr('data-part'));
	        }
		},
		'Set':function(name,link,pic,part){
			if(!link){ link = document.URL;}
			var history = Conch.Cookie.Get("history");
			var len=0;
			var canadd=true;
			if(history){
			   history = eval("("+history+")"); 
			   len=history.length;
			   $(history).each(function(){
			      if(name===this.name){
			         canadd=false;
			         var json="[";
			         $(history).each(function(i){
			            var temp_name,temp_pic,temp_url,temp_part;
			            if(this.name===name){
			                 temp_name=name;temp_pic=pic;temp_url=link;temp_part=part;
			            }else{
			                 temp_name=this.name;temp_pic=this.pic;temp_url=this.link;temp_part=this.part;
			            }
			            json+="{\"name\":\""+temp_name+"\",\"pic\":\""+temp_pic+"\",\"link\":\""+temp_url+"\",\"part\":\""+temp_part+"\"}";
			            if(i!==len-1){
							json+=",";
						} 
			          });
			          json+="]";
			          Conch.Cookie.Set('history',json,this.Days);
			          return false;
			        }
			    });
			}
			if(canadd){
			    var json="[";
			    var isfirst="]";
			    isfirst=!len?"]":",";
			    json+="{\"name\":\""+name+"\",\"pic\":\""+pic+"\",\"link\":\""+link+"\",\"part\":\""+part+"\"}"+isfirst;
			     if(len>this.Limit-1){
					len-=1;
				 }   	
		        for(i=0;i<len-1;i++){
		            json+="{\"name\":\""+history[i].name+"\",\"pic\":\""+history[i].pic+"\",\"link\":\""+history[i].link+"\",\"part\":\""+history[i].part+"\"},";
		       	}
		        if(len>0){
		            json+="{\"name\":\""+history[len-1].name+"\",\"pic\":\""+history[len-1].pic+"\",\"link\":\""+history[len-1].link+"\",\"part\":\""+history[len-1].part+"\"}]";
		        }
			    Conch.Cookie.Set('history',json,this.Days);
			}  
		},
		'Clear': function(){
            Conch.Cookie.Del('history');
            $("#hl-history").empty();
			$(".hl-hy-list").html('<div class="hl-hy-clear-tips">已清空观看记录</div>');
        },
	},
    'User':{
        'IsLogin':0,
        'Init':function(){
            if($('.conch-user').length >0){
                $('body').on('click', '.conch-user', function(e){
                    MAC.User.Login();
                });
            }
            if(MAC.Cookie.Get('user_id') !=undefined && MAC.Cookie.Get('user_id')!=''){
                var $User = maccms.path + '/index.php/user',
                    $Favs = maccms.path + '/index.php/user/favs',
                    $Plays = maccms.path + '/index.php/user/plays',
                    $UserId = MAC.Cookie.Get('user_id'),
                    $UserName = MAC.Cookie.Get('user_name'),
                    $UserNickName = MAC.Cookie.Get('user_nick_name'),
                    $GroupId = MAC.Cookie.Get('group_id'),
                    $GroupName = MAC.Cookie.Get('group_name'),
                    $Portrait = MAC.Cookie.Get('user_portrait'),
                    $VIP = '<i class="iconfont hl-icon-zuanshi"></i>';
                    MAC.User.IsLogin = 1;
                if($UserNickName != null){
                    var $Name = $UserNickName;
                }else{
                    var $Name = $UserName;
                }
                if($('.conch-user').length >0) {
                    if ($('.conch-user').prop("outerHTML").substr(0, 2) == '<a') {
                        $('.conch-user').attr('title',$Name);
                        $('.conch-user').text('');
                        $('.conch-user').addClass('hl-user-face');
                        $('.conch-user').append('<img class="face" src="'+$Portrait+'" alt="'+$Name+'">');
                        if (Conch.Browser.Swidth<768){$('.conch-user').attr('href',$User);}
                    }
                    if($GroupId <3){
                        var $Group = $GroupName;
                    }else{
                        var $Group = $VIP + $GroupName;
                    }
                    var html = '<div class="hl-alert-box hl-bg-site hl-fadeIn-sm">';
                    html += '<div class="hl-user-box"><a class="hl-login-out hl-text-muted" href="javascript:;" onclick="MAC.User.Logout();" target="_self">退出</a><div class="hl-user-info hl-text-center"><span class="hl-user-name">'+$Name+'</span><span class="hl-user-point hl-text-muted">'+$Group+'</span></div><div class="hl-user-list hl-bg-subs hl-text-muted"><a href="'+$User+'" target="_blank"><i class="iconfont hl-icon-huiyuan"></i>主页</a><a href="'+$Plays+'" target="_blank"><i class="iconfont hl-icon-shijian"></i>历史</a><a href="'+$Favs+'" target="_blank"><i class="iconfont hl-icon-shoucang"></i>收藏</a></div></div>'
                    $('.conch-user').after(html);
                    $('.conch-user').removeClass('conch-user');
                }

            }
        }
    },
    'Alert':{
        'Init': function() {
            Conch.Alert.Popup();
        },
        'Close': function() {
            $('.hl-close-full').click(function(){
                $("html,body").removeClass("hl-htmlover");
                $('.hl-full-alert').removeClass('hl-full-x0')
            });
            $(".hl-pops-bg-active,.hl-from-list li").click(function(){
                $('.hl-half-alert').removeClass("hl-half-y0");
                $('.hl-from-btn').removeClass("hl-from-op");
                setTimeout(function(){
                    $(".hl-pops-bg-active").removeClass("hl-pops-bg-active");	
                    $(".hl-pops-bg").remove();	
                },200);
            });
        },
        'Popbg': function() {
            if($(".hl-pops-bg").length>0){
                $(".hl-pops-bg").addClass("hl-pops-bg-active");
            }else{
                $("body").append('<div class="hl-pops-bg"></div>');
                $(".hl-pops-bg").addClass("hl-pops-bg-active");
            }
        },
        'Popup': function() {
            $('.hl-alert-items').each(function(){
                if ($(this).length) {
                    $(this).hover(function(){
                        $(this).find(".hl-alert-box").show();
                        $(this).find('.hl-lazy').lazyload({threshold: 100});
                    },function(){
                        $(this).find(".hl-alert-box").hide();
                    })
                }
            });
            $('.hl-full-items').each(function(){
                if ($(this).length) {
                    var $this = $(this);
                    var $wrap = $(this).find('.hl-full-alert');
                    var $btn = $(this).parent().find('.hl-full-op');
                    $btn.click(function(){
                        if(Conch.Browser.Swidth<768){
                            $wrap.addClass('hl-full-x0');
                            $("html,body").addClass("hl-htmlover");
                        }else{
                            if($this.children().css('display')=='block'){
                                $this.parent().removeClass('hl-data-show');
                            }else{
                                $this.parent().addClass('hl-data-show');
                            }
                        }
                        $this.find('.hl-lazy').lazyload({threshold: 100});
                        Conch.Alert.Close();
                    });
                }
            });
            $('.hl-pops-items').each(function(){
                if ($(this).length) {
                    $(this).click(function(){
                        if(Conch.Browser.Swidth<768){
                            Conch.Alert.Popbg();
                        }
                        Conch.Alert.Close();
                    });
                }
            });
            $('.hl-half-items').each(function(){
                if ($(this).length) {
                    var $box = $(this).find('.hl-half-y100');
                    $(this).click(function(){
                        if(Conch.Browser.Swidth<768){
                            Conch.Alert.Popbg();
                        }
                        $box.addClass('hl-half-y0');
                        Conch.Alert.Close();
                    });
                }
            });
            $('.hl-from-buttons').each(function(){
                if ($(this).length) {
                    var $_this = $(this),
                        $btn = $_this.find('.hl-from-btn'),
                        $wrap = $_this.find('.hl-from-wrap');
                    $btn.click(function(){
                        var $__this = $(this);
                        $btn.addClass('hl-from-op');
                        $wrap.addClass('hl-half-y0');
                        if(Conch.Browser.Swidth<768){
                            Conch.Alert.Popbg();
                        }
                        Conch.Alert.Close();
                    });
                    $(".hl-from-list li").bind("click", function(){
                        var e = $(this).index(),
                            $from = $(".hl-from-btn"),
                            $href = $(this).data("href");
                        $(this).removeClass().addClass("active").siblings().removeClass();
                        $from.hide();
                        $from.eq(e).show();
                        $(".hl-play-btn").attr("href",$href);
                    });
                }
            });
        },
        'Notice':function(){
            if(Conch.Cookie.Get('tips')===null){
                Conch.Alert.Popbg();
                $("body").append('<div class="hl-poptips-wrap hl-bg-site"><div class="hl-poptips-title"><h2>'+conchtpl.tipt+'</h2></div><div class="hl-poptips-content">'+conchtpl.tipc+'</div><div class="hl-poptips-btn"><a class="hl-bg-conch no" href="javascript:;">我知道了</a><a class="hl-bg-subs" href="javascript:;">取消</a></div></div>');
                $(".hl-poptips-btn a.no").click(function() {
                    Conch.Cookie.Set('tips','ok',1);
                    $('.hl-poptips-wrap').remove();
                    $(".hl-pops-bg").remove();
                });
                $(".hl-poptips-btn a").click(function() {
                    $('.hl-poptips-wrap').remove();
                    $(".hl-pops-bg").remove();
                });
            }
        },
    },
    'Shows':{
        'Init': function() {
            Conch.Shows.Text();
            Conch.Shows.List();
            Conch.Shows.Sort();
            Conch.Shows.Tabs();
            Conch.Shows.Change();
            // Conch.Shows.Copyright();
        },
        'Text': function() {
             $(".hl-show-text").each(function(){
                var $wrap=$(this).parent(),
                    $text=$wrap.find('.hl-content-text').children(),
                    $t=$(this).find('em');
                if($text.height() > 48){
                    $(this).show(); 
                }else{
                    $(this).hide();
                }
                $(this).on("click",function(){
                    if($wrap.hasClass("hl-content-hide")){
                        $wrap.removeClass('hl-content-hide');
                        $wrap.addClass('hl-content-show');
                        $t.text('收起')
                    }else{
                        $wrap.removeClass('hl-content-show');
                        $wrap.addClass('hl-content-hide');
                        $t.text('展开')
                    }
                });
            });
        },
        'List': function() {
            $('.hl-show-list').each(function(){
                var $wrap=$(this).parent().parent(),
                    $t=$(this).find('em');
                $(this).on('click',function(){
                    if($wrap.hasClass('hl-list-hide-xs')){
                        $(this).attr('href','javascript:void(0)');
                        $wrap.removeClass('hl-list-hide-xs');
                        $t.text('收起全部')
                    }else{
                        $(this).attr('href','#playlist');
                        $wrap.addClass('hl-list-hide-xs');
                        $t.text('展开全部')
                    }
                    Conch.Swiper.Scrolls();
                });
            });
        },
        'Sort': function() {
            $(".hl-sort-btn").each(function(){
                var $i=$(this).find('i');
                var $t=$(this).find('span');
                $(this).on("click",function(e){
                    if($i.hasClass("hl-icon-daoxu")){
                        $i.removeClass('hl-icon-daoxu');
                        $i.addClass('hl-icon-zhengxu');
                        $t.text('正序')
                    }else{
                        $i.removeClass('hl-icon-zhengxu');
                        $i.addClass('hl-icon-daoxu');
                        $t.text('倒序')
                    }
                    e.preventDefault();
                    $(this).parent().parent().find(".hl-sort-list").each(function(){
                        var $pl=$(this).find("li");
                        for(let i=0,j=$pl.length-1;i<j;){
                            var l=$pl.eq(i).clone(true);
                            var r=$pl.eq(j).replaceWith(l);
                            $pl.eq(i).replaceWith(r);
                            ++i;
                            --j;
                        }
                    });
                });
            });
        },
        'Tabs': function() {
            $('.hl-tabs-item').each(function(){
                if ($(this).length) {
                    var $_this = $(this);
                    var $tab = $_this.find('.hl-tabs .hl-tabs-btn');
                    var $box = $_this.find('.hl-tabs-box');
                    var $box2 = $_this.find('.hl-tabs-box2');
                    $tab.click(function(){
                        var $this = $(this);
                        var $t = $this.index();
                        $tab.removeClass('active');
                        $this.addClass('active');
                        $box.hide();
                        $box2.hide();
                        $box.eq($t).show();
                        $box2.eq($t).show();
                        $_this.find('.hl-tabs-box .hl-lazy').lazyload({threshold: 100});
                    })
                }       
            });
        },
        'Change': function(){
            if ($('.hl-more-change').length) {
                var divs=[];
                var divCnt = 3;
                for (var i=0;i<divCnt;i++) {
                   divs[i] = $(".hl-change-box"+(i+1));
                }
                var selectedDiv = 0;
                $('.hl-more-change').on('click', function(){
                    selectedDiv++;
                    selectedDiv = selectedDiv % divCnt;
                    for (var i=0;i< divCnt;i++) {
                       $(this).closest('.hl-row-box', '.hl-change-list').find(divs[i]).removeClass('hl-show').addClass('hl-hide'); 
                    }
                    $(this).closest('.hl-row-box', '.hl-change-list').find(divs[selectedDiv]).removeClass('hl-hide').addClass('hl-show'); 
                    $('.hl-lazy').lazyload({
                        threshold: 130
                    });
                });
            }
        },
        // 'Copyright':function(){
        //     var $nam = '海螺模版Conch_M005',
        //         $web = 'https://movie.ljy2345.com/',
        //         $qqh = '52225119/',
        //         $qun = '638211',
        //         $ver = conchtpl.ver;
        //     console.log("%c 模版名称 %c "+$nam+" "+$ver+" (苹果CMSv10)", "background: #030307;color:#fadfa3;padding:5px;font-size:16px;font-weight:bold", "color:#030307;padding:5px;font-size:16px;");
        //     console.log("%c 模版官网 %c "+$web+"", "background: #030307;color:#fadfa3;padding:5px;font-size:16px;font-weight:bold", "color:#030307;padding:5px;font-size:16px;");
        //     console.log("%c使用模版请联系%c QQ："+$qqh+"  交流群："+$qun+"", "color:#030307;font-size:14px;line-height:32px;", "color:#ff1500;font-size:14px");
        // },
    },
    'Other':{
        'Init': function() {
            Conch.Other.Color();
            Conch.Other.Navs();
            Conch.Other.Url();
            Conch.Other.Copy();
            Conch.Other.Set();
        },
        'Color': function() {
            var $cookie_color=$.cookie("color");
            var $btn = $(".hl-color-item a");
            if($cookie_color!=null){
                if($cookie_color=='black'){
                    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#151515");
                    $btn.attr("id","white");$btn.html('<i class="iconfont hl-icon-taiyang"></i><span>浅色模式</span>');
                }else{
                    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#fafafa");
                    $btn.attr("id","black");$btn.html('<i class="iconfont hl-icon-yueliang"></i><span>深色模式</span>');
                }
            }
			$(".hl-color-item a").click(function(){
                var $Color = $(this).attr("id");
                $("link[name='color']").attr("href","https://cdn.jsdelivr.net/gh/LJY2345/movie@main/asset/css/"+$Color+".min.css?v="+conchtpl.ver+"");  
                $.cookie("color",$Color,{expires:365, path: '/'});
                if($Color=='black'){
                    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#151515");
                    $(this).attr("id","white");
                    $(this).html('<i class="iconfont hl-icon-taiyang"></i><span>浅色模式</span>');
                }else{
                    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#fafafa");
                    $(this).attr("id","black");
                    $(this).html('<i class="iconfont hl-icon-yueliang"></i><span>深色模式</span>');
                }
            });
		},
        'Navs': function() {
            $('.hl-nav-item').each(function(){
                var $Active = $('.hl-nav-item a.active'),
                    $Display = $Active.parent().css('display'),
                    $text = $Active.text();
                if ($Active.length>0 && $Display=='none') {
                    $('.hl-nav-more a>span').addClass('hl-text-conch').addClass('active');
                    $('.hl-nav-more a>span').text($text);
                }else{
                    $('.hl-nav-more a>span').removeClass('hl-text-conch').removeClass('active');
                    $('.hl-nav-more a>span').text('全部');
                }
            });
            $(".hl-open-menu").on('click', function(){
                $(".conch-menus").addClass("active");
                $(".conch-ms-close,.conch-ms-overlay").on('click', function(){
                    $(".conch-menus").removeClass("active");
                });
            });
        },
        'Url': function(){
            var short = $(".hl-short-url");
            if (conchtpl.slink=="") {
                var url = encodeURI(Conch.Browser.url);
            }else{
                var url = conchtpl.slink + encodeURI(Conch.Browser.urlpath);
            };
            if (conchtpl.short=='1'){
                if (conchtpl.api=='1'){
                    $.ajax({
                    url: conchtpl.aurl + url,
                    type: "GET",
                    dataType: "jsonp", 
                    cache: false,
                    success: function (data, status) {
                        for(x in data.data.urls[0]) ;
                        short.prepend( data.data.urls[0].url_short);
                    },
                    error: function(obj,info,errObj){
                        short.prepend(url);
                    },
                    });
                }else{
                    var ajax = new XMLHttpRequest();
                    var token = conchtpl.tok;
                    var longUrl = url;
                    var termOfValidity = conchtpl.term;
                    ajax.open('post','https://dwz.cn/admin/v2/create', 'true');
                    ajax.setRequestHeader("Content-Type", "application/json");
                    ajax.setRequestHeader("Token", token);
                    ajax.send(JSON.stringify({
                        Url: longUrl,
                        TermOfValidity: termOfValidity
                    }));
                    ajax.onreadystatechange = function () {
                        if (ajax.readyState === 4 && ajax.status === 200) {
                            var obj =JSON.parse(ajax.responseText)
                            console.log(ajax.responseText);
                            if (obj.Code===0){short.prepend(obj.ShortUrl);}else{short.prepend(url);}
                        }
                    }
                };
            }else{
                short.prepend(url);
            }
        },
        'Target':function(){
            $('a').each(function(){
                var str = $(this).attr("href");
                if($(this).length && str.indexOf("java") == -1){
                    $(this).attr("target","_blank");
                }
            });
        },
        'Copy': function() {
            var btn=document.getElementsByClassName('conch-copy');
            var clipboard=new Clipboard(btn);
            clipboard.on('success', function(e){
                $('body').append('<div class="hl-pop-msg"><div class="hl-pop-tip">复制成功</div></div>');
                setTimeout(function(){$('.hl-pop-msg').remove();},1000);
            });
            clipboard.on('error', function(e){
                $('body').append('<div class="hl-pop-msg"><div class="hl-pop-tip">复制失败！请手动复制</div></div>');
                setTimeout(function(){$('.hl-pop-msg').remove();},1000);
            });
        },
        'Set': function() {
            $('.hl-more-list').each(function(){
                if ($(this).length) {
                    var $wrap = $(this).parent().parent();
                    $(this).click(function(){
                        $wrap.removeClass('hl-list-hide');
                        $(this).parent().remove();
                    });
                }
            });
            $('.hl-vod-big').each(function(){
                if ($(this).length && Conch.Browser.Swidth>767) {
                    var $ul = $(this).find('.hl-vod-list');
                    var $one = $ul.find('li:nth-child(1) a');
                    var $two = $ul.find('li:nth-child(2) a'),
                        $high= $two.innerHeight();
                    $one.css('height',''+$high+'px');
                }
            });
            $('.hl-vod-widebig.hl-list-v12').each(function(){
                if ($(this).length && Conch.Browser.Swidth>767) {
                    var $ul = $(this).find('.hl-vod-list');
                    var $one = $ul.find('li:nth-child(1) a');
                    var $two = $ul.find('li:nth-child(2) a'),
                        $high= $two.innerHeight()*2+80;
                    $one.css('height',''+$high+'px');
                }
            });
            $('.hl-setups-op a').click(function(){
                var $setup=$(this).parent().parent();
                if($setup.css('right')=='0px'){
                    $setup.removeClass('active');
                }else{
                    $setup.addClass('active');                   
                }
            });
            $('.hl-head-slide').each(function(){
                if ($(this).length) {
                    var Title = $(this).find('h2').innerWidth();
                    var Swrap = Title+10;
                    $(this).find('.hl-rb-type-child').css('width','calc(100% - '+Swrap+'px)');
                }
            });
            $('.hl-this-box').each(function(){
                var $this = $(this),
                    $btn = $this.find(".hl-close-this");
                $btn.click(function(){
                    $this.remove();
                });
            });
        },
    },
};
$(document).ready(function() {
    Conch.Host();
    Conch.Resize();
    Conch.Images.Init();
    Conch.Swiper.Init();
    Conch.Scroll.Init();
    Conch.Search.Init();
    Conch.History.Init();
    Conch.User.Init();
    Conch.Alert.Init();
    Conch.Shows.Init();
    Conch.Other.Init();
});

// home.js
String.prototype.replaceAll  = function(s1,s2){ return this.replace(new RegExp(s1,"gm"),s2); }
String.prototype.trim=function(){ return this.replace(/(^\s*)|(\s*$)/g, ""); }
var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function base64encode(str){var out,i,len;var c1,c2,c3;len=str.length;i=0;out="";while(i<len){c1=str.charCodeAt(i++)&0xff;if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt((c1&0x3)<<4);out+="==";break}c2=str.charCodeAt(i++);if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt((c2&0xF)<<2);out+="=";break}c3=str.charCodeAt(i++);out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt(((c2&0xF)<<2)|((c3&0xC0)>>6));out+=base64EncodeChars.charAt(c3&0x3F)}return out}function base64decode(str){var c1,c2,c3,c4;var i,len,out;len=str.length;i=0;out="";while(i<len){do{c1=base64DecodeChars[str.charCodeAt(i++)&0xff]}while(i<len&&c1==-1);if(c1==-1)break;do{c2=base64DecodeChars[str.charCodeAt(i++)&0xff]}while(i<len&&c2==-1);if(c2==-1)break;out+=String.fromCharCode((c1<<2)|((c2&0x30)>>4));do{c3=str.charCodeAt(i++)&0xff;if(c3==61)return out;c3=base64DecodeChars[c3]}while(i<len&&c3==-1);if(c3==-1)break;out+=String.fromCharCode(((c2&0XF)<<4)|((c3&0x3C)>>2));do{c4=str.charCodeAt(i++)&0xff;if(c4==61)return out;c4=base64DecodeChars[c4]}while(i<len&&c4==-1);if(c4==-1)break;out+=String.fromCharCode(((c3&0x03)<<6)|c4)}return out}function utf16to8(str){var out,i,len,c;out="";len=str.length;for(i=0;i<len;i++){c=str.charCodeAt(i);if((c>=0x0001)&&(c<=0x007F)){out+=str.charAt(i)}else if(c>0x07FF){out+=String.fromCharCode(0xE0|((c>>12)&0x0F));out+=String.fromCharCode(0x80|((c>>6)&0x3F));out+=String.fromCharCode(0x80|((c>>0)&0x3F))}else{out+=String.fromCharCode(0xC0|((c>>6)&0x1F));out+=String.fromCharCode(0x80|((c>>0)&0x3F))}}return out}function utf8to16(str){var out,i,len,c;var char2,char3;out="";len=str.length;i=0;while(i<len){c=str.charCodeAt(i++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:out+=str.charAt(i-1);break;case 12:case 13:char2=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x1F)<<6)|(char2&0x3F));break;case 14:char2=str.charCodeAt(i++);char3=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x0F)<<12)|((char2&0x3F)<<6)|((char3&0x3F)<<0));break}}return out}

var MAC={
    'Url': document.URL,
    'Title': document.title,
    'UserAgent' : function(){
        var ua = navigator.userAgent;//navigator.appVersion
        return {
            'mobile': !!ua.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            'ios': !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            'android': ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1, //android终端或者uc浏览器
            'iPhone': ua.indexOf('iPhone') > -1 || ua.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
            'iPad': ua.indexOf('iPad') > -1, //是否iPad
            'trident': ua.indexOf('Trident') > -1, //IE内核
            'presto': ua.indexOf('Presto') > -1, //opera内核
            'webKit': ua.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            'gecko': ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1, //火狐内核
            'weixin': ua.indexOf('MicroMessenger') > -1 //是否微信 ua.match(/MicroMessenger/i) == "micromessenger",
        };
    }(),
    'Copy': function(s){
        if (window.clipboardData){ window.clipboardData.setData("Text",s); }
        else{
            if( $("#mac_flash_copy").get(0) ==undefined ){ $('<div id="mac_flash_copy"></div>'); } else {$('#mac_flash_copy').html(''); }
            $('#mac_flash_copy').html('<embed src='+maccms.path+'"images/_clipboard.swf" FlashVars="clipboard='+escape(s)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>');
        }
        MAC.Pop.Msg(100,20,'复制成功',1000);
    },
    'Home': function(o,u){
        try{
            o.style.behavior='url(#default#homepage)'; o.setHomePage(u);
        }
        catch(e){
            if(window.netscape){
                try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");}
                catch(e){ MAC.Pop.Msg(150,40,'此操作被浏览器拒绝！请手动设置',1000); }
                var moz = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                moz.setCharPref('browser.startup.homepage',u);
            }
        }
    },
    'Fav': function(u,s){
        try{ window.external.addFavorite(u, s);}
        catch (e){
            try{window.sidebar.addPanel(s, u, "");}catch (e){ MAC.Pop.Msg(150,40,'加入收藏出错，请使用键盘Ctrl+D进行添加',1000); }
        }
    },
    'Open': function(u,w,h){
        window.open(u,'macopen1','toolbars=0, scrollbars=0, location=0, statusbars=0,menubars=0,resizable=yes,width='+w+',height='+h+'');
    },
    'Cookie': {
        'Set': function(name,value,days){
            var exp = new Date();
            exp.setTime(exp.getTime() + days*24*60*60*1000);
            var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
            document.cookie=name+"="+encodeURIComponent(value)+";path=/;expires="+exp.toUTCString();
        },
        'Get': function(name){
            var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
            if(arr != null){ return decodeURIComponent(arr[2]); return null; }
        },
        'Del': function(name){
            var exp = new Date();
            exp.setTime(exp.getTime()-1);
            var cval = this.Get(name);
            if(cval != null){ document.cookie = name+"="+encodeURIComponent(cval)+";path=/;expires="+exp.toUTCString(); }
        }
    },
    'GoBack':function(){
        var ldghost=document.domain;
        if(document.referrer.indexOf(ldghost)>0) {
            history.back();
        }
        else{
            window.location ="//"+ldghost;
        }
    },
    'Adaptive':function(){
        if(maccms.mob_status=='1' && maccms.url != maccms.wapurl){
            if(document.domain ==maccms.url && MAC.UserAgent.mobile){
                    location.href = location.href.replace(maccms.url,maccms.wapurl);
            }
            else if(document.domain ==maccms.wapurl && !MAC.UserAgent.mobile){
                location.href = location.href.replace(maccms.wapurl,maccms.url);
            }
        }
    },
    'CheckBox':{
        'All':function(n){
            $("input[name='"+n+"']").each(function() {
                this.checked = true;
            });
        },
        'Other':function(n){
            $("input[name='"+n+"']").each(function() {
                this.checked = !this.checked;
            });
        },
        'Count':function(n){
            var res=0;
            $("input[name='"+n+"']").each(function() {
                if(this.checked){ res++; }
            });
            return res;
        },
        'Ids':function(n){
            var res=[];
            $("input[name='"+n+"']").each(function() {
                if(this.checked){ res.push(this.value); }
            });
            return res.join(",");
        }
    },
    'Ajax':function(url,type,dataType,data,sfun,efun,cfun){
        type=type||'get';
        dataType=dataType||'json';
        data=data||'';
        efun=efun||'';
        cfun=cfun||'';

        $.ajax({
            url:url,
            type:type,
            dataType:dataType,
            data:data,
            timeout: 5000,
            beforeSend:function(XHR){

            },
            error:function(XHR,textStatus,errorThrown){
                if(efun) efun(XHR,textStatus,errorThrown);
            },
            success:function(data){
                sfun(data);
            },
            complete:function(XHR, TS){
                if(cfun) cfun(XHR, TS);
            }
        })
    },
    'Qrcode':{
        'Init':function(){
            $('.mac_qrcode').attr('src', maccms.path +'/index.php/qrcode/index.html?url='+ MAC.Url);
        }
    },
    'Shorten': {
        'Init':function(){
            if($('.mac_shorten').length==0){
                return;
            }
            MAC.Shorten.Get();
        },
        'Get':function(url,call){
            url=url||location.href;
            MAC.Ajax('//api.maccms.la/shorten/index/url/'+ encodeURIComponent(url),'get','jsonp','',function(r){
                if (r.code == 1) {
                    if($('.mac_shorten').length>0) {
                        $('.mac_shorten').val(r.data.url_short);
                        $('.mac_shorten').html(r.data.url_short);
                    }
                    if(call){
                        call(r);
                    }

                }
            });
        }
    },
    'Image':{
        'Lazyload':{
            'Show': function(){
                try { $("img.lazy").lazyload(); }catch(e){};
            },
            'Box': function($id){
                $("img.lazy").lazyload({
                    container: $("#"+$id)
                });
            }
        }
    },
    'Verify': {
        'Init': function(){
            MAC.Verify.Focus();
            MAC.Verify.Click();
        },
        'Focus': function(){//验证码框焦点
            $('body').on("focus", ".mac_verify", function(){
                $(this).removeClass('mac_verify').after(MAC.Verify.Show());
                $(this).unbind();
            });
        },
        'Click': function(){//点击刷新
            $('body').on('click', 'img.mac_verify_img', function(){
                $(this).attr('src', maccms.path +'/index.php/verify/index.html?r='+Math.random());
            });
        },
        'Refresh':function(){
            $('.mac_verify_img').attr('src', maccms.path +'/index.php/verify/index.html?r='+Math.random());
        },
        'Show':function(){
            return '<img class="mac_verify_img" src="'+ maccms.path +'/index.php/verify/index.html?"  title="看不清楚? 换一张！">';
        }
    },
    'PageGo':{
        'Init':function() {
            $('.mac_page_go').click(function () {
                var that =$(this);
                var url = that.attr('data-url');
                var total = parseInt(that.attr('data-total'));
                var sp = that.attr('data-sp');
                var page= parseInt($('#page').val());

                if(page>0&&(page<=total)){
                    url=url.replace(sp + 'PAGELINK',sp + page).replace('PAGELINK',page);
                    location.href=url;
                }
                return false;
            });
        }
    },
    'Hits': {
        'Init':function() {
            if($('.mac_hits').length==0){
                return;
            }
            var $that = $(".mac_hits");

            MAC.Ajax(maccms.path + '/index.php/ajax/hits?mid='+$that.attr("data-mid")+'&id='+$that.attr("data-id")+'&type=update','get','json','',function(r){
                if (r.code == 1) {
                    $(".mac_hits").each(function(i){
                        $type = $(".mac_hits").eq(i).attr('data-type');
                        if($type != 'insert'){
                            $('.'+$type).html(eval('(r.data.' + $type + ')'));
                        }
                    });
                }
            });

        }
    },
    'Score': {
        'Init':function(){
            if($('.mac_score').length==0){
                return;
            }
            $('body').on('click', '.score_btn', function(e){
                MAC.Score.Submit();
            });

            MAC.Ajax(maccms.path+'/index.php/ajax/score?mid='+ $('.mac_score').attr('data-mid') +'&id=' +$('.mac_score').attr('data-id'),'post','json','',function(r){
                MAC.Score.View(r);
            },function(){
                $(".mac_score").html('评分加载失败');
            });

        },
        'Submit':function(){
            var $s = $('.mac_score').find("input[name='score']").val();
            MAC.Ajax(maccms.path+'/index.php/ajax/score?mid='+$('.mac_score').attr('data-mid')+'&id='+$('.mac_score').attr('data-id') + '&score='+ $s,'get','json','',function(r){
                MAC.Pop.Msg(100,20,r.msg,1000);
                if(r.code==1){
                    MAC.Score.View(r);
                }
            });
        },
        'View':function(r){
            $(".rating"+Math.floor(r.data.score)).attr('checked',true);
            $(".score_num").text(r.data.score_num);
            $(".score_all").text(r.data.score_all);
            $(".score_pjf").text(r.data.score);
        }
    },
    'Star': {
        'Init':function(){
            if($('.mac_star').length==0){
                return;
            }

            $('.mac_star').raty({
                starType: 'i',
                number: 5,
                numberMax : 5,
                half: true,
                score : function(){
                    return $(this).attr('data-score');
                },
                click: function(score, evt) {

                    MAC.Ajax(maccms.path+'/index.php/ajax/score?mid='+$('.mac_star').attr('data-mid')+'&id='+$('.mac_star').attr('data-id')+'&score='+(score*2),'get','json','',function(r){
                        if(json.status == 1){
                            $('.star_tips').html(r.data.score);
                        }else{
                            $('.star_box').attr('title', r.msg);
                        }
                    },function(){
                        $('.star_box').attr('title', '网络异常！');
                    });

                }
            });
        }
    },
    'Digg': {
        'Init':function(){
            $('body').on('click', '.digg_link', function(e){
                var $that = $(this);
                if($that.attr("data-id")){

                    MAC.Ajax(maccms.path + '/index.php/ajax/digg.html?mid='+$that.attr("data-mid")+'&id='+$that.attr("data-id")+'&type='+$that.attr("data-type"),'get','json','',function(r){
                        $that.addClass('disabled');
                        if(r.code == 1){
                            if($that.attr("data-type")=='up'){
                                $that.find('.digg_num').html(r.data.up);
                            }
                            else{
                                $that.find('.digg_num').html(r.data.down);
                            }
                        }
                        else{
                            $that.attr('title', r.msg);
                        }
                    });

                }
            });
        }
    },
    'Gbook':{
        'Login':0,
        'Verify':0,
        'Init':function(){
            $('body').on('keyup', '.gbook_content', function(e){
                MAC.Remaining($(this),200,'.gbook_remaining')
            });
            $('body').on('focus', '.gbook_content', function(e){
                if(MAC.Gbook.Login==1 && MAC.User.IsLogin!=1){
                    MAC.User.Login();
                }
            });
            $('body').on('click', '.gbook_submit', function(e){
                MAC.Gbook.Submit();
            });
        },
        'Show':function($page){
            MAC.Ajax(maccms.path+'/index.php/gbook/index?page='+$page,'post','json','',function(r){
                $(".mac_gbook_box").html(r);
            },function(){
                $(".mac_gbook_box").html('留言加载失败，请刷新...');
            });
        },
        'Submit':function(){
            if($(".gbook_content").val() == ''){
                MAC.Pop.Msg(100,20,'请输入您的留言!',1000);
                return false;
            }
            MAC.Ajax(maccms.path + '/index.php/gbook/saveData','post','json',$('.gbook_form').serialize(),function(r){
                MAC.Pop.Msg(100,20,r.msg,1000);
                if(r.code == 1){
                    location.reload();
                }
                else{
                    if(MAC.Gbook.Verify==1){
                        MAC.Verify.Refresh();
                    }
                }
            });
        },
        'Report':function(name,id){
            MAC.Pop.Show(400,300,'数据报错',maccms.path+'/index.php/gbook/report.html?id='+id+'&name='+ encodeURIComponent(name),function(r){

            });
        }
    },
    'Search':{
        'Init':function(){
            $('.mac_search').click(function(){
                var that=$(this);
                var url = that.attr('data-href') ? that.attr('data-href') : maccms.path + '/index.php/vod/search.html';
                location.href = url + '?wd='+ encodeURIComponent($("#wd").val());
            });
        },
        'Submit':function(){

            return false;
        }
    },
    'Suggest':{
        'Init':function($obj,$mid,$jumpurl){
            try {
                $($obj).autocomplete(maccms.path + '/index.php/ajax/suggest?mid=' + $mid, {
                    inputClass: "mac_input",
                    resultsClass: "mac_results",
                    loadingClass: "mac_loading",
                    width: 175, scrollHeight: 300, minChars: 1, matchSubset: 0,
                    cacheLength: 10, multiple: false, matchContains: true, autoFill: false,
                    dataType: "json",
                    parse: function (r) {
                        if (r.code == 1) {
                            var parsed = [];
                            $.each(r['list'], function (index, row) {
                                row.url = r.url;
                                parsed[index] = {
                                    data: row
                                };
                            });
                            return parsed;
                        } else {
                            return {data: ''};
                        }
                    },
                    formatItem: function (row, i, max) {
                        return row.name;
                    },
                    formatResult: function (row, i, max) {
                        return row.text;
                    }
                }).result(function (event, data, formatted) {
                    $($obj).val(data.name);
                    location.href = data.url.replace('mac_wd', encodeURIComponent(data.name));
                });
            }
            catch(e){}
        }
    },
    'History': {
        'BoxShow':0,
        'Limit':10,
        'Days':7,
        'Json':'',
        'Init':function(){
            if($('.mac_history').length ==0){
                return;
            }

            $('.mac_history').hover(function(e){
                $('.mac_history_box').show();
            }, function(){
                $('.mac_history_box').hover(function(){
                    MAC.History.BoxShow=1;
                }, function(){
                    MAC.History.BoxShow=0;
                    $('.mac_history_box').hide();
                });
            });

            var jsondata = [];
            if(this.Json){
                jsondata = this.Json;
            }else{
                var jsonstr = MAC.Cookie.Get('mac_history');
                if(jsonstr != undefined){
                    jsondata = eval(jsonstr);
                }
            }

            html = '<dl class="mac_drop_box mac_history_box" style="display:none;">';
            html +='<dt><a target="_self" href="javascript:void(0)" onclick="MAC.History.Clear();">清空</a></dt>';

            if(jsondata.length > 0){
                for($i=0; $i<jsondata.length; $i++){
                    if($i%2==1){
                        html +='<dd class="odd">';
                    }else{
                        html +='<dd class="even">';
                    }
                    html +='<a href="'+jsondata[$i].link+'" class="hx_title">'+jsondata[$i].name+'</a></dd>';
                }
            }else{
                html +='<dd class="hide">暂无浏览记录</dd>';
            }
            html += '</dl>';

            $('.mac_history').after(html);
            var h = $('.mac_history').height();
            var position = $('.mac_history').position();
            $('.mac_history_box').css({'left':position.left,'top':(position.top+h)});


            if($(".mac_history_set").attr('data-name')){
                var $that = $(".mac_history_set");
                MAC.History.Set($that.attr('data-name'),$that.attr('data-link'),$that.attr('data-pic'));
            }
        },
        'Set':function(name,link,pic){
            if(!link){ link = document.URL; }
            var jsondata = MAC.Cookie.Get('mac_history');

            if(jsondata != undefined){
                this.Json = eval(jsondata);

                for($i=0;$i<this.Json.length;$i++){
                    if(this.Json[$i].link == link){
                        return false;
                    }
                }

                jsonstr = '{log:[{"name":"'+name+'","link":"'+link+'","pic":"'+pic+'"},';
                for($i=0; $i<this.Json.length; $i++){
                    if($i<= this.Limit && this.Json[$i]){
                        jsonstr += '{"name":"'+this.Json[$i].name+'","link":"'+this.Json[$i].link+'","pic":"'+this.Json[$i].pic+'"},';
                    }else{
                        break;
                    }
                }
                jsonstr = jsonstr.substring(0,jsonstr.lastIndexOf(','));
                jsonstr += "]}";
            }else{
                jsonstr = '{log:[{"name":"'+name+'","link":"'+link+'","pic":"'+pic+'"}]}';
            }
            this.Json = eval(jsonstr);
            MAC.Cookie.Set('mac_history',jsonstr,this.Days);
        },
        'Clear': function(){
            MAC.Cookie.Del('mac_history');
            $('.mac_history_box').html('<li class="hx_clear">已清空观看记录。</li>');
        },
    },
    'Ulog':{
        'Init':function(){
            MAC.Ulog.Set();
            MAC.Ulog.Click();

        },
        'Get':function(mid,id,type,page,limit,call){
            MAC.Ajax(maccms.path+'/index.php/user/ajax_ulog/?ac=list&mid='+mid+'&id='+id+'&type='+type+'&page='+page+'&limit='+limit,'get','json','',call);
        },
        'Set':function(){
            if($(".mac_ulog_set").attr('data-mid')){
                var $that = $(".mac_ulog_set");
                $.get(maccms.path+'/index.php/user/ajax_ulog/?ac=set&mid='+$that.attr("data-mid")+'&id='+$that.attr("data-id")+'&sid='+$that.attr("data-sid")+'&nid='+$that.attr("data-nid")+'&type='+$that.attr("data-type"));
            }
        },
        'Click':function(){
            $('body').on('click', 'a.mac_ulog', function(e){

                //是否需要验证登录
                if(MAC.User.IsLogin == 0){
                    MAC.User.Login();
                    return;
                }

                var $that = $(this);
                if($that.attr("data-id")){
                    MAC.Ajax(maccms.path+'/index.php/user/ajax_ulog/?ac=set&mid='+$that.attr("data-mid")+'&id='+$that.attr("data-id")+'&type='+$that.attr("data-type"),'get','json','',function(r){
                        MAC.Pop.Msg(100,20,r.msg,1000);
                        if(r.code == 1){
                            $that.addClass('disabled');
                        }else{
                            $that.attr('title', r.msg);
                        }
                    });
                }
            });
        }
    },
    'Website':{
        'Referer':function() {
            if($('.mac_referer').length==0){
                return;
            }

            var url = document.referrer
                ,domain=''
                ,host = window.location.host
                ,reg = /^http(s)?:\/\/(.*?)\//i
                ,mc = url.match(reg);

            if(url=='' || url.indexOf(host)!=-1 || mc ==null){
                return;
            }
            domain = mc[2];
            MAC.Ajax(maccms.path + '/index.php/ajax/referer?domain='+encodeURIComponent(domain)+'&url='+encodeURIComponent(url)+'&type=update','get','json','',function(r){
                if (r.code == 1) {
                }
                console.log(r);
            });
        }
    },
    'User':{
        'BoxShow':0,
        'IsLogin':0,
        'UserId':'',
        'UserName':'',
        'GroupId':'',
        'GroupName':'',
        'Portrait':'',
        'Init':function(){
            if($('.mac_user').length >0){
                $('body').on('click', '.mac_user', function(e){
                    MAC.User.Login();
                });

                $('.mac_user').hover(function(e){
                    $('.mac_user_box').show();
                }, function(){
                    $('.mac_user_box').hover(function(){
                        MAC.User.BoxShow = 1;
                    }, function(){
                        MAC.User.BoxShow = 0;
                        $('.mac_user_box').hide();
                    });
                });
            }

            if(MAC.Cookie.Get('user_id') !=undefined && MAC.Cookie.Get('user_id')!=''){
                var url = maccms.path + '/index.php/user';
                MAC.User.UserId = MAC.Cookie.Get('user_id');
                MAC.User.UserName = MAC.Cookie.Get('user_name');
                MAC.User.GroupId = MAC.Cookie.Get('group_id');
                MAC.User.GroupName = MAC.Cookie.Get('group_name');
                MAC.User.Portrait = MAC.Cookie.Get('user_portrait');
                MAC.User.IsLogin = 1;

                if($('.mac_user').length >0) {
                    if ($('.mac_user').prop("outerHTML").substr(0, 2) == '<a') {
                        $('.mac_user').attr('href', url);
                        $('.mac_user').text(MAC.User.UserName);
                    }
                    else {
                        //$('.mac_user').html('<a class="mac_text" href="'+ url +'">'+ name +'</a>');
                    }

                    var html = '<div class="mac_drop_box mac_user_box" style="display: none;">';
                    html += '<ul class="logged"><li><a target="_blank" href="' + url + '">用户中心</a></li><li class="logout"><a class="logoutbt" href="javascript:;" onclick="MAC.User.Logout();" target="_self"><i class="user-logout"></i>退出</a></li></ul>'

                    $('.mac_user').after(html);
                    var h = $('.mac_user').height();
                    var position = $('.mac_user').position();
                    $('.mac_user_box').css({'left': position.left, 'top': (position.top + h)});
                }

            }
            else{

            }

        },
        'CheckLogin':function(){
            if(MAC.User.IsLogin == 0){
                MAC.User.Login();
            }
        },
        'Login':function(){
            var ac='ajax_login';
            if(MAC.Cookie.Get('user_id') !=undefined && MAC.Cookie.Get('user_id')!=''){
                ac= 'ajax_info';
            }
            MAC.Pop.Show(400,380,'用户登录',maccms.path+'/index.php/user/'+ac,function(r){
                $('body').off('click', '.login_form_submit');
                $('body').on('click', '.login_form_submit', function(e){
                    $(this).unbind('click');

                    MAC.Ajax(maccms.path + '/index.php/user/login','post','json',$('.mac_login_form').serialize(),function(r){
                        alert(r.msg);
                        if(r.code == 1){
                            location.reload();
                        }
                    });
                });
            });
        },
        'Logout':function(){
            MAC.Ajax(maccms.path + '/index.php/user/logout','post','json','',function(r){
                MAC.Pop.Msg(100,20,r.msg,1000);
                if(r.code == 1){
                    location.reload();
                }
            });
        },
        'PopedomCallBack':function(trysee,h) {
            window.setTimeout(function(){
                $(window.frames["player_if"].document).find(".MacPlayer").html(h);
            },1000*10*trysee);
        },
        'BuyPopedom':function(o){
            var $that = $(o);
            if($that.attr("data-id")){
                if (confirm('您确认购买此条数据访问权限吗？')) {
                    MAC.Ajax(maccms.path + '/index.php/user/ajax_buy_popedom.html?id=' + $that.attr("data-id") + '&mid=' + $that.attr("data-mid") + '&sid=' + $that.attr("data-sid") + '&nid=' + $that.attr("data-nid") + '&type=' + $that.attr("data-type"),'get','json','',function(r){
                        $that.addClass('disabled');
                        MAC.Pop.Msg(300, 50, r.msg, 2000);
                        if (r.code == 1) {
                            top.location.reload();
                        }
                        $that.removeClass('disabled');
                    });
                }
            }
        }
    },
    'Pop':{
        'Remove':function(){
            $('.mac_pop_bg').remove();
            $('.mac_pop').remove();
        },
        'RemoveMsg':function(){
            $('.mac_pop_msg_bg').remove();
            $('.mac_pop_msg').remove();
        },
        'Msg':function($w,$h,$msg,$timeout){
            if($('.mac_pop_bg').length !=1) {
                MAC.Pop.Remove();
            }
            $('body').append('<div class="mac_pop_msg_bg"></div><div class="mac_pop_msg"><div class="pop-msg"></div></div>');
            $('.mac_pop_msg .pop_close').click(function(){
                $('.mac_pop_msg').remove();
            });

            $('.mac_pop_msg').width($w);
            $('.mac_pop_msg').height($h);
            $('.mac_pop_msg .pop-msg').html($msg);
            $('.mac_pop_msg_bg,.mac_pop_msg').show();
            setTimeout(MAC.Pop.RemoveMsg,$timeout);
        },
        'Show':function($w,$h,$title,$url,$callback) {
            if($('.mac_pop_bg').length !=1) {
                MAC.Pop.Remove();
            }

            $('body').append('<div class="mac_pop_bg"></div><div class="mac_pop"><div class="pop_top"><h2></h2><span class="pop_close">Ｘ</span></div><div class="pop_content"></div></div>');
            $('.mac_pop .pop_close').click(function(){
                $('.mac_pop_bg,.mac_pop').remove();
            });

            $('.mac_pop').width($w);
            $('.mac_pop').height($h);
            $('.pop_content').html('');
            $('.pop_top').find('h2').html($title);

            MAC.Ajax($url,'post','json','',function(r){
                $(".pop_content").html(r);
                $callback(r);
            },function(){
                $(".pop_content").html('加载失败，请刷新...');
            });

            $('.mac_pop_bg,.mac_pop').show();
        }
    },
    'Pwd':{
        'Check':function(o){
            var $that = $(o);
            if($that.attr("data-id")){
                    MAC.Ajax(maccms.path + '/index.php/ajax/pwd.html?id=' + $that.attr("data-id") + '&mid=' + $that.attr("data-mid") + '&type=' + $that.attr("data-type") + '&pwd='+ $that.parents('form').find('input[name="pwd"]').val() ,'get','json','',function(r){
                        $that.addClass('disabled');
                        MAC.Pop.Msg(300, 50, r.msg, 2000);
                        if (r.code == 1) {
                            location.reload();
                        }
                        $that.removeClass('disabled');
                    });

            }
        }
    },
    'AdsWrap':function(w,h,n){
        document.writeln('<img width="'+w+'" height="'+h+'" alt="'+n+'" style="background-color: #CCCCCC" />');
    },
    'Css':function($url){
        $("<link>").attr({ rel: "stylesheet",type: "text/css",href: $url}).appendTo("head");
    },
    'Js':function($url){
        $.getScript($url, function(response, status) {

        });
    },
    'Desktop':function(s){
        location.href= maccms.path + '/index.php/ajax/desktop?name='+encodeURI(s)+'&url=' + encodeURI(location.href);
    },
    'Timming':function(){
        if($('.mac_timming').length==0){
            return;
        }
        var infile = $('.mac_timming').attr("data-file");
        if(infile==undefined || infile == ''){
            infile = 'api.php';
        }
        var t=(new Image());t.src=maccms.path + '/'+infile+'/timming/index?t='+Math.random();
    },
    'Error':function(tab,id,name){

    },
    'AddEm':function(obj,i){
        var oldtext = $(obj).val();
        $(obj).val( oldtext + '[em:' + i +']' );
    },
    'Remaining':function(obj,len,show){
        var count = len - $(obj).val().length;
        if(count < 0){
            count = 0;
            $(obj).val($(obj).val().substr(0,200));
        }
        $(show).text(count);
    },
    'Comment':{
        'Login':0,
        'Verify':0,
        'Init':function(){

            $('body').on('click', '.comment_face_box img', function(e){
                var obj = $(this).parent().parent().parent().find('.comment_content');
                MAC.AddEm(obj,$(this).attr('data-id'));
            });
            $('body').on('click', '.comment_face_panel', function(e){
                // $('.comment_face_box').toggle();
                $(this).parent().find('.comment_face_box').toggle();
            });
            $('body').on('keyup', '.comment_content', function(e){
                var obj = $(this).parent().parent().parent().parent().find('.comment_remaining');
                MAC.Remaining($(this),200,obj)
            });
            $('body').on('focus', '.comment_content', function(e){
                if(MAC.Comment.Login==1 && MAC.User.IsLogin!=1){
                    MAC.User.Login();
                }
            });

            $('body').on('click', '.comment_report', function(e){
                var $that = $(this);
                if($(this).attr("data-id")){
                    MAC.Ajax(maccms.path + '/index.php/comment/report.html?id='+$that.attr("data-id"),'get','json','',function(r){
                        $that.addClass('disabled');
                        MAC.Pop.Msg(100,20,r.msg,1000);
                        if(r.code == 1){
                        }
                    });
                }
            });

            $('body').on('click', '.comment_reply', function(e){
                var $that = $(this);
                if($that.attr("data-id")){
                    var str = $that.html();
                    $('.comment_reply_form').remove();
                    if (str == '取消回复') {
                        $that.html('回复');
                        return false;
                    }
                    if (str == '回复') {
                        $('.comment_reply').html('回复');
                    }
                    var html = $('.comment_form').prop("outerHTML");

                    var oo = $(html);
                    oo.addClass('comment_reply_form');
                    oo.find('input[name="comment_pid"]').val( $that.attr("data-id") );

                    $that.parent().after(oo);
                    $that.html('取消回复');
                }
            });

            $('body').on('click', '.comment_submit', function(e){
                var $that = $(this);
                MAC.Comment.Submit($that);
            });

        },
        'Show':function($page){
            if($(".mac_comment").length>0){
                MAC.Ajax(maccms.path + '/index.php/comment/ajax.html?rid='+$('.mac_comment').attr('data-id')+'&mid='+ $('.mac_comment').attr('data-mid') +'&page='+$page,'get','json','',function(r){
                    $(".mac_comment").html(r);
                },function(){
                    $(".mac_comment").html('<a href="javascript:void(0)" onclick="MAC.Comment.Show('+$page+')">评论加载失败，点击我刷新...</a>');
                });
            }
        },
        'Reply':function($o){

        },
        'Submit':function($o){
            var form = $o.parents('form');
            if($(form).find(".comment_content").val() == ''){
                MAC.Pop.Msg(100,20,'请输入您的评论！',1000);
                return false;
            }
            if($('.mac_comment').attr('data-mid') == ''){
                MAC.Pop.Msg(100,20,'模块mid错误！',1000);
                return false;
            }
            if($('.mac_comment').attr('data-id') == ''){
                MAC.Pop.Msg(100,20,'关联id错误！',1000);
                return false;
            }
            MAC.Ajax(maccms.path + '/index.php/comment/saveData','post','json',$(form).serialize() + '&comment_mid='+ $('.mac_comment').attr('data-mid') + '&comment_rid=' + $('.mac_comment').attr('data-id'),function(r){
                MAC.Pop.Msg(100,20,r.msg,1000);
                if(r.code == 1){
                    MAC.Comment.Show(1);
                }
                else{
                    if(MAC.Comment.Verify==1){
                        MAC.Verify.Refresh();
                    }
                }
            });
        }
    }
}

$(function(){
    //异步加载图片初始化
    MAC.Image.Lazyload.Show();
    //自动跳转手机和pc网页地址
    MAC.Adaptive();
    //验证码初始化
    MAC.Verify.Init();
    //分页跳转初始化
    MAC.PageGo.Init();
    //用户部分初始化
    MAC.User.Init();
    //二维码初始化
    MAC.Qrcode.Init();
    //顶和踩初始化
    MAC.Digg.Init();
    //评分初始化
    MAC.Score.Init();
    //星星评分初始化
    MAC.Star.Init();
    //点击数量
    MAC.Hits.Init();
    //短网址
    MAC.Shorten.Init();
    //历史记录初始化
    MAC.History.Init();
    //用户访问记录初始化
    MAC.Ulog.Init();
    //联想搜索初始化
    MAC.Suggest.Init('.mac_wd',1,'');
    //网址导航来路统计
    MAC.Website.Referer();
    //定时任务初始化
    MAC.Timming();
});
