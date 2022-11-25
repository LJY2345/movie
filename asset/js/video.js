// register sw for hls
window.disableP2pEngineIOSAutoInit = true;
var engine = new P2PEngineIOS({
    swFile: './pwabuilder-sw.js', // please set the correct path of sw.js
    // logLevel: 'debug',
    // Other p2pConfig options provided by P2PEngineIOS
})
engine.registerServiceWorker().then(function (registration) {
    console.info('ServiceWorker registration successful with scope: ', registration.scope);
}).catch((err) => {
    console.info('ServiceWorker registration failed ', err)
})
// macplayer
var MacPlayerConfig={};
//参数开始
MacPlayerConfig={"width":"100%","height":"100%","widthmob":"100%","heightmob":"100%","widthpop":"0","heightpop":"600","second":"5","prestrain":"","buffer":"","parse":"","autofull":"0","showtop":"1","showlist":"1","flag":"0","colors":"000000,F6F6F6,F6F6F6,333333,666666,FFFFF,FF0000,2c2c2c,ffffff,a3a3a3,2c2c2c,adadad,adadad,48486c,fcfcfc"};
//参数结束
//缓存开始
MacPlayerConfig.player_list={"xg_app_player":{"show":"app\u5168\u5c40\u89e3\u6790","des":"","ps":"0","parse":"https:\/\/www.x-n.cc\/api.php?url="},"haiwaikan":{"show":"\u6d77\u5916\u8d44\u6e90","des":"\u6d77\u5916\u4e13\u7528\u7ebf\u8def","ps":"0","parse":""},"if101":{"show":"IF101\u8d44\u6e90","des":"\u6d77\u5916\u4e13\u7528\u7ebf\u8def","ps":"0","parse":""},"ikm3u8":{"show":"ik\u64ad\u653e\u5668","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"ukm3u8":{"show":"U\u9177\u8d44\u6e90","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"ltm3u8":{"show":"\u84dd\u5929\u8d44\u6e90\u2461","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"fsm3u8":{"show":"\u98de\u901f\u8d44\u6e90","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"sgm3u8":{"show":"\u901f\u66f4\u64ad\u653e\u5668","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"xhm3u8":{"show":"\u661f\u6d77\u8d44\u6e90","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"xhzy":{"show":"\u661f\u6d77\u8d44\u6e90","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"xiuse":{"show":"\u79c0\u8272\u64ad\u653e","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"swm3u8":{"show":"\u4e1d\u889c\u64ad\u653e\u5668","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"smzy":{"show":"\u795e\u9a6c\u4e91\u64ad","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"jlm3u8":{"show":"\u4f73\u4e3d\u8d44\u6e90","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"kkyun":{"show":"\u9177\u9177\u4e91\u64ad","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"kkm3u8":{"show":"KK\u5728\u7ebf","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"mgtv":{"show":"\u8292\u679c\u89c6\u9891","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"pptv":{"show":"PPTV\u89c6\u9891","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"letv":{"show":"\u4e50\u89c6\u89c6\u9891","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"sohu":{"show":"\u641c\u72d0\u89c6\u9891","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"qiyi":{"show":"\u5947\u827a\u89c6\u9891","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"youku":{"show":"\u4f18\u9177\u89c6\u9891","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"qq":{"show":"\u817e\u8baf\u89c6\u9891","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"xigua":{"show":"\u897f\u74dc\u89c6\u9891","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"bilibili":{"show":"\u54d4\u54e9\u54d4\u54e9","des":"\u652f\u6301\u624b\u673a\u7535\u8111\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"iframe":{"show":"iframe\u5916\u94fe\u6570\u636e","des":"iframe\u5916\u94fe\u6570\u636e","ps":"0","parse":""},"link":{"show":"\u5916\u94fe\u6570\u636e","des":"\u5916\u90e8\u7f51\u7ad9\u64ad\u653e\u94fe\u63a5","ps":"0","parse":""},"swf":{"show":"Flash\u6587\u4ef6","des":"swf","ps":"0","parse":""},"dbyun":{"show":"dbyun","des":"","ps":"0","parse":""},"foxyun":{"show":"fox\u4e91","des":"foxyun","ps":"0","parse":""},"gsyun":{"show":"\u5149\u901f\u4e91","des":"","ps":"0","parse":""},"hnyun":{"show":"hnyun","des":"","ps":"0","parse":""},"kdyun":{"show":"\u9177\u70b9","des":"kudianziyuan.com","ps":"0","parse":""},"sdyun":{"show":"\u95ea\u7535\u4e91\u64ad","des":"\u95ea\u7535\u4e91\u64ad","ps":"0","parse":""},"tkyun":{"show":"\u5929\u7a7a\u4e91","des":"\u5728\u7ebf\u64ad\u653e","ps":"0","parse":""},"tpiframe":{"show":"\u6dd8\u7247\u8d44\u6e902","des":"","ps":"0","parse":""},"wjyun":{"show":"\u65e0\u5c3d\u4e91","des":"","ps":"0","parse":""},"xlyun":{"show":"\u65b0\u6d6a\u4e91\u64ad","des":"","ps":"0","parse":""},"zykyun":{"show":"\u9ad8\u6e05\u8d44\u6e90\u4e91","des":"http:\/\/1080zyku.com\/","ps":"0","parse":""},"1080zyk":{"show":"\u9ad8\u6e05\u8d44\u6e90","des":"http:\/\/1080zyku.com\/","ps":"0","parse":"https:\/\/vip.zykbf.com\/?url="},"605m3u8":{"show":"605","des":"","ps":"0","parse":""},"88zym3u8":{"show":"88\u5f71\u89c6","des":"","ps":"0","parse":""},"bjm3u8":{"show":"\u516b\u6212","des":"","ps":"0","parse":""},"dbm3u8":{"show":"\u767e\u5ea6\u8d44\u6e90","des":"","ps":"0","parse":"https:\/\/jx.jxbdzyw.com\/m3u8\/?url="},"ddzy":{"show":"\u591a\u591a\u8d44\u6e90","des":"\u5168\u7f51\u66f4\u65b0\u6700\u5feb \u5e7f\u544a\u6700\u5c11","ps":"0","parse":""},"dpbt":{"show":"DPlayer\u64ad\u653e\u56682","des":"","ps":"0","parse":""},"dplayer":{"show":"DPlayer\u64ad\u653e\u5668","des":"dplayer.js.org","ps":"0","parse":""},"fanqie":{"show":"\u756a\u8304\u8d44\u6e90","des":"","ps":"0","parse":""},"flv":{"show":"Flv\u6587\u4ef6","des":"flv","ps":"0","parse":""},"foxm3u8":{"show":"Fox\u8d44\u6e90","des":"foxm3u8","ps":"0","parse":"https:\/\/www.foxbfq.com\/dplayer\/?url="},"gsm3u8":{"show":"\u5149\u901f\u8d44\u6e90","des":"","ps":"0","parse":"https:\/\/www.guangsujx.com\/m3u8\/?url="},"hnm3u8":{"show":"\u7ea2\u725b\u8d44\u6e90","des":"","ps":"0","parse":""},"iva":{"show":"iva-H5\u64ad\u653e\u5668","des":"videojj.com","ps":"0","parse":""},"jinyingm3u8":{"show":"\u91d1\u9e70\u8d44\u6e90","des":"","ps":"0","parse":"https:\/\/hd.njeere.com\/play?url="},"kbm3u8":{"show":"\u5feb\u64ad","des":"","ps":"0","parse":""},"kcm3u8":{"show":"\u5feb\u8f66\u8d44\u6e90","des":"","ps":"0","parse":""},"kdm3u8":{"show":"\u9177\u70b9\u8d44\u6e90","des":"kudianzy.com","ps":"0","parse":""},"liangzi":{"show":"\u91cf\u5b50\u4e91","des":"","ps":"0","parse":""},"lzm3u8":{"show":"\u91cf\u5b50\u8d44\u6e90","des":"","ps":"0","parse":"https:\/\/movie.ljy2345.com\/addons\/bilibilimaster\/player\/jx.php?key=0&url="},"sdm3u8":{"show":"\u95ea\u7535\u5728\u7ebf","des":"\u95ea\u7535\u5728\u7ebf","ps":"0","parse":"https:\/\/www.shankubf.com\/m3u8\/?url="},"tkm3u8":{"show":"\u5929\u7a7a\u8d44\u6e90","des":"","ps":"0","parse":"https:\/\/jx.huishij.com\/yun\/?url="},"tom":{"show":"tom","des":"","ps":"0","parse":""},"tomm3u8":{"show":"Tom\u8d44\u6e90","des":"tomm3u8","ps":"0","parse":""},"tpm3u8":{"show":"\u6dd8\u7247\u8d44\u6e90","des":"","ps":"0","parse":""},"videojs":{"show":"videojs\u64ad\u653e\u5668","des":"videojs.com","ps":"0","parse":""},"wjm3u8":{"show":"\u65e0\u5c3d\u8d44\u6e90","des":"","ps":"0","parse":"https:\/\/jx.wujinkk.com\/dplayer\/?url="},"wolong":{"show":"\u5367\u9f99\u8d44\u6e90","des":"","ps":"0","parse":""},"xlm3u8":{"show":"\u65b0\u6d6a\u8d44\u6e90","des":"","ps":"0","parse":"https:\/\/www.xinlangjiexi.com\/m3u8\/?url="}},MacPlayerConfig.downer_list={"http":{"show":"http\u4e0b\u8f7d","des":"des\u63d0\u793a\u4fe1\u606f","ps":"0","parse":""},"xunlei":{"show":"xunlei\u4e0b\u8f7d","des":"des\u63d0\u793a\u4fe1\u606f","ps":"0","parse":""}},MacPlayerConfig.server_list={"server1":{"show":"\u6d4b\u8bd5\u670d\u52a1\u56681","des":"des\u63d0\u793a\u4fe1\u606f1"}};
//缓存结束
// player.js
var killErrors=function(value){return true};window.onerror=null;window.onerror=killErrors;
var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function base64encode(str){var out,i,len;var c1,c2,c3;len=str.length;i=0;out="";while(i<len){c1=str.charCodeAt(i++)&0xff;if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt((c1&0x3)<<4);out+="==";break}c2=str.charCodeAt(i++);if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt((c2&0xF)<<2);out+="=";break}c3=str.charCodeAt(i++);out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt(((c2&0xF)<<2)|((c3&0xC0)>>6));out+=base64EncodeChars.charAt(c3&0x3F)}return out}function base64decode(str){var c1,c2,c3,c4;var i,len,out;len=str.length;i=0;out="";while(i<len){do{c1=base64DecodeChars[str.charCodeAt(i++)&0xff]}while(i<len&&c1==-1);if(c1==-1)break;do{c2=base64DecodeChars[str.charCodeAt(i++)&0xff]}while(i<len&&c2==-1);if(c2==-1)break;out+=String.fromCharCode((c1<<2)|((c2&0x30)>>4));do{c3=str.charCodeAt(i++)&0xff;if(c3==61)return out;c3=base64DecodeChars[c3]}while(i<len&&c3==-1);if(c3==-1)break;out+=String.fromCharCode(((c2&0XF)<<4)|((c3&0x3C)>>2));do{c4=str.charCodeAt(i++)&0xff;if(c4==61)return out;c4=base64DecodeChars[c4]}while(i<len&&c4==-1);if(c4==-1)break;out+=String.fromCharCode(((c3&0x03)<<6)|c4)}return out}function utf16to8(str){var out,i,len,c;out="";len=str.length;for(i=0;i<len;i++){c=str.charCodeAt(i);if((c>=0x0001)&&(c<=0x007F)){out+=str.charAt(i)}else if(c>0x07FF){out+=String.fromCharCode(0xE0|((c>>12)&0x0F));out+=String.fromCharCode(0x80|((c>>6)&0x3F));out+=String.fromCharCode(0x80|((c>>0)&0x3F))}else{out+=String.fromCharCode(0xC0|((c>>6)&0x1F));out+=String.fromCharCode(0x80|((c>>0)&0x3F))}}return out}function utf8to16(str){var out,i,len,c;var char2,char3;out="";len=str.length;i=0;while(i<len){c=str.charCodeAt(i++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:out+=str.charAt(i-1);break;case 12:case 13:char2=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x1F)<<6)|(char2&0x3F));break;case 14:char2=str.charCodeAt(i++);char3=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x0F)<<12)|((char2&0x3F)<<6)|((char3&0x3F)<<0));break}}return out}

var MacPlayer = {
'GetDate':function(f,t){
    if(!t){
        t = new Date();
    }
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    f = f.replace(/yyyy|YYYY/, t.getFullYear());
    f = f.replace(/yy|YY/, (t.getYear() % 100) > 9 ? (t.getYear() % 100).toString() : '0' + (t.getYear() % 100));
    f = f.replace(/MM/, t.getMonth() > 9 ? t.getMonth().toString() : '0' + t.getMonth());
    f = f.replace(/M/g, t.getMonth());
    f = f.replace(/w|W/g, Week[t.getDay()]);
    f = f.replace(/dd|DD/, t.getDate() > 9 ? t.getDate().toString() : '0' + t.getDate());
    f = f.replace(/d|D/g, t.getDate());
    f = f.replace(/hh|HH/, t.getHours() > 9 ? t.getHours().toString() : '0' + t.getHours());
    f = f.replace(/h|H/g, t.getHours());
    f = f.replace(/mm/, t.getMinutes() > 9 ? t.getMinutes().toString() : '0' + t.getMinutes());
    f = f.replace(/m/g, t.getMinutes());
    f = f.replace(/ss|SS/, t.getSeconds() > 9 ? t.getSeconds().toString() : '0' + t.getSeconds());
    f = f.replace(/s|S/g, t.getSeconds());
    return f;
},
'GetUrl': function(s, n) {
    return this.Link.replace('{sid}', s).replace('{sid}', s).replace('{nid}', n).replace('{nid}', n)
},
'Go': function(s, n) {
    location.href = this.GetUrl(s, n)
},
'Show': function() {
    $('#buffer').attr('src', this.Prestrain);
    setTimeout(function() {
        MacPlayer.AdsEnd()
    }, this.Second * 1000);
    $("#playleft").get(0).innerHTML = this.Html + '';
},
'AdsStart': function() {
    if ($("#buffer").attr('src') != this.Buffer) {
        $("#buffer").attr('src', this.Buffer)
    }
    $("#buffer").show()
},
'AdsEnd': function() {
    $('#buffer').hide()
},
'Install': function() {
    this.Status = false;
    $('#install').show()
},
'Play': function() {
    // document.write('<style>.MacPlayer{background: #000000;font-size:14px;color:#F6F6F6;margin:0px;padding:0px;position:relative;overflow:hidden;width:' + this.Width + ';height:' + this.Height + ';min-height:100px;}.MacPlayer table{width:100%;height:100%;}.MacPlayer #playleft{position:inherit;!important;width:100%;height:100%;}</style><div class="MacPlayer">' + '' + '<table border="0" cellpadding="0" cellspacing="0"><tr><td id="playleft" valign="top" style="">&nbsp;</td></table></div>');
    this.offsetHeight = $('.MacPlayer').get(0).offsetHeight;
    this.offsetWidth = $('.MacPlayer').get(0).offsetWidth;
    // document.write('<scr' + 'ipt src="' + this.Path + this.PlayFrom + '.js"></scr' + 'ipt>')
},
'Down': function() {},
'Init': function() {
    this.Status = true;
    this.Parse = '';
    var player_data = video_info;
    if (player_data.encrypt == '1') {
        player_data.url = unescape(player_data.url);
        player_data.url_next = unescape(player_data.url_next)
    } else if (player_data.encrypt == '2') {
        player_data.url = unescape(base64decode(player_data.url));
        player_data.url_next = unescape(base64decode(player_data.url_next))
    }
    this.Agent = navigator.userAgent.toLowerCase();
    this.Width = MacPlayerConfig.width;
    this.Height = MacPlayerConfig.height;
    if (this.Agent.indexOf("android") > 0 || this.Agent.indexOf("mobile") > 0 || this.Agent.indexOf("ipod") > 0 || this.Agent.indexOf("ios") > 0 || this.Agent.indexOf("iphone") > 0 || this.Agent.indexOf("ipad") > 0) {
        this.Width = MacPlayerConfig.widthmob;
        this.Height = MacPlayerConfig.heightmob
    }
    if (this.Width.indexOf("px") == -1 && this.Width.indexOf("%") == -1) {
        this.Width = '100%'
    }
    if (this.Height.indexOf("px") == -1 && this.Height.indexOf("%") == -1) {
        this.Height = '100%'
    }
    this.Prestrain = MacPlayerConfig.prestrain;
    this.Buffer = MacPlayerConfig.buffer;
    this.Second = MacPlayerConfig.second;
    this.Flag = player_data.flag;
    this.Trysee = player_data.trysee;
    this.Points = player_data.points;
    this.Link = decodeURIComponent(player_data.link);
    this.PlayFrom = player_data.from;
    this.PlayNote = player_data.note;
    this.PlayServer = player_data.server == 'no' ? '' : player_data.server;
    this.PlayUrl = player_data.url;
    this.PlayUrlNext = player_data.url_next;
    this.PlayLinkNext = player_data.link_next;
    this.PlayLinkPre = player_data.link_pre;
    this.Id = player_data.id;
    this.Sid = player_data.sid;
    this.Nid = player_data.nid;
    if (MacPlayerConfig.server_list[this.PlayServer] != undefined) {
        this.PlayServer = MacPlayerConfig.server_list[this.PlayServer].des
    }
    if (MacPlayerConfig.player_list[this.PlayFrom] != undefined) {
        if (MacPlayerConfig.player_list[this.PlayFrom].ps == "1") {
            this.Parse = MacPlayerConfig.player_list[this.PlayFrom].parse == '' ? MacPlayerConfig.parse : MacPlayerConfig.player_list[this.PlayFrom].parse;
            this.PlayFrom = 'parse'
        }
    }
    this.Path = maccms.path + '/static/player/';
    if (this.Flag == "down") {
        MacPlayer.Down()
    } else {
        MacPlayer.Play()
    }
}
};

MacPlayer.Init();

MacPlayer.Html = "<link rel='stylesheet' href='https://cdn.staticfile.org/plyr/3.7.3/plyr.css?ver=3.7.3'><style type=\"text/css\">.player {--plyr-color-main: #e9bd6c;}.plyr {border-radius: 8px;box-shadow: 0 2px 15px rgba(0, 0, 0, .1);}:root {--plyr-color-main: #e9bd6c;}.plyr__poster {background-size: cover;}</style>";
MacPlayer.Show();
// setting player
var bgimg = new Array(
	'https://cdn.jsdelivr.net/gh/enchong2021/ceshi@latest/player/img/b78c301a5bff4b7eadb469d56d78c1f7.jpg',
	'https://img12.360buyimg.com/ddimg/jfs/t1/182401/17/4703/4854529/60a3647bE3375ea49/b32c3d59ca9a423f.jpg',
	'https://img13.360buyimg.com/ddimg/jfs/t1/177834/6/12137/3453175/60dd4555E1f3b1403/888a4c534b3f33c3.png',
	'https://img10.360buyimg.com/ddimg/jfs/t1/176474/31/19746/942637/60eed45aE03300970/23d94a4c83938c4d.jpg',
	'https://img14.360buyimg.com/ddimg/jfs/t1/181110/30/19198/2923323/61176f29E22e86311/acb1cb3f6d723921.jpg',
	'https://img14.360buyimg.com/ddimg/jfs/t1/205965/31/1237/1607358/61176f26Ef7f9ca4e/c33946976eec6647.jpg',
	'https://img11.360buyimg.com/ddimg/jfs/t1/190695/30/18526/2507506/61176f22E363a6445/1b943c119e1cd9fc.jpg',
	'https://img10.360buyimg.com/ddimg/jfs/t1/177751/1/19249/3614688/61176f15E63f57d4e/2c5fdd79cda9d0df.png',
	'https://img14.360buyimg.com/ddimg/jfs/t1/202113/4/1315/3782506/61176f10Eddc511e7/227335f769a4adb7.png',
	'https://img13.360buyimg.com/ddimg/jfs/t1/180199/13/19043/1350088/61176f0cE727190df/56d7af9aed0d039c.jpg',
	'https://img10.360buyimg.com/ddimg/jfs/t1/205718/2/1194/1332361/61176f0bE681ff840/0b0052da1f1885a4.jpg',
	'https://img14.360buyimg.com/ddimg/jfs/t1/180101/4/19073/1940360/61176f09E5fed1a44/dac52bee849ed503.jpg',
	'https://img14.360buyimg.com/ddimg/jfs/t1/192172/6/18189/3936617/61176f49Eafd68808/e09fa4f3bacfac5c.jpg'
	);
var randomNum = Math.floor((Math.random() * bgimg.length));
var webdata = {
	set: function (key, val) {
		window.sessionStorage.setItem(key, val);
	}
	, get: function (key) {
		return window.sessionStorage.getItem(key);
	}
	, del: function (key) {
		window.sessionStorage.removeItem(key);
	}
	, clear: function (key) {
		window.sessionStorage.console.clear();
	}
};
var udl = window.location.protocol + "//" + window.location.host + "/index.php/index/users";
var type = 'normal';
var live = true;
var adsable = true;
// if (parent.MacPlayer.PlayUrl.indexOf('.m3u8') > -1) {
// 	type = 'hls';
// 	live = true;
// } else if (parent.MacPlayer.PlayUrl.indexOf('.flv') > -1) {
// 	type = 'flv';
// 	live = true;
// }
if(parent.MacPlayer.PlayUrl.indexOf('.m3u8')>-1){
	type='hls';
	live=true;
}
else if(parent.MacPlayer.PlayUrl.indexOf('magnet:')>-1){
	type='webtorrent';
}
else if(parent.MacPlayer.PlayUrl.indexOf('.flv')>-1){
	type='flv';
}
else if(parent.MacPlayer.PlayUrl.indexOf('.mpd')>-1){
	type='dash';
}
var videoContainer = document.getElementById("playleft");
var video = document.createElement("video");
video.id = "videoe";
videoContainer.appendChild(video);
let adResult = {
	url: ""
	, enabled: false
}
// 如果不是ipad,开启广告
// var check = navigator.userAgent.match(/(iPad).*OS\s([\d_]+)/i);
// if (!check){
//     $.ajax({
//         url: udl,
//         async: false,
//         success: function (result) {
//             adResult.url = result.url
//             adResult.enabled = result.enabled
//         }
//     });
// }
// console.log(adResult)
const player = new Plyr('video', {
	controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen', 'autoplay']
	, ratio: '16:9'
	, debug: false
	, volume: '0.7'
	, autoplay: true
	, type:type
	, title: parent.Conch.Browser.title
	, i18n: {
		speed: '倍速',
		normal: '默认'
	}
	// , ads: {
	// 	tagUrl: ""
	// 	, enabled: adResult.enabled
	// }
	, fullscreen: {
		enabled: true
		, fallback: true
		, iosNative: true
	}
});
player.poster = bgimg[randomNum];
//add player logo
var plyrWrapper = document.querySelector(".plyr__video-wrapper");
var controls = $(".plyr__controls");
controls.hide();
var plyrLogo = document.createElement("div");
plyrLogo.setAttribute("id", "playerlogo");
plyrLogo.style = `background-repeat: no-repeat; background-image: url("/logo.png"); background-size: contain; background-position: center; position: absolute; top: 5%; right: 1%; width: 20%; height: auto; padding-bottom: 4%; z-index: auto; opacity: 0.5;`;
plyrWrapper.appendChild(plyrLogo);

if (!Hls.isSupported() || parent.MacPlayer.PlayUrl.indexOf('m3u8') == -1) {
	video.src = parent.MacPlayer.PlayUrl;
} else {
	var hls = new Hls({
		liveSyncDurationCount: this.liveSyncDurationCount
		, loader: this.isP2PSupported ? this.engine.createLoaderClass() : Hls.DefaultConfig.loader
		, p2pConfig: {
			logLevel: false,
			swFile: '/pwabuilder-sw.js',
			// live: true,        // 如果是直播设为true
			// Other p2pConfig options provided by CDNBye
			getStats: function (totalP2PDownloaded, totalP2PUploaded, totalHTTPDownloaded) {
				// console.warn(`totalP2PDownloaded ${totalP2PDownloaded} totalHTTPDownloaded ${totalHTTPDownloaded}`);
				_totalP2PDownloaded = totalP2PDownloaded;
				_totalP2PUploaded = totalP2PUploaded;
				// updateStats();
			}
			, getPeerId: function (peerId) {
				_peerId = peerId;
			}
			, getPeersInfo: function (peers) {
				_peerNum = peers.length;
				// updateStats();
			}
		, }
	});
	hls.loadSource(parent.MacPlayer.PlayUrl);
	hls.attachMedia(video);
	window.hls = hls;
	// Handle changing captions
	player.on('languagechange', () => {
		setTimeout(() => hls.subtitleTrack = player.currentTrack, 50);
	});
}
// continue play last
var get_during = JSON.parse(webdata.get('play' + Conch.Browser.urlpath));
// console.log('get_during: '+get_during);
// jump to last during
var skip = false;
const zyregex = /(if101|haiwaikan|lzm3u8|1080zyk|http|link|dp|videojs|http|iframe|iva|xunlei|swf)/gm;
const zyPlayFrom = parent.MacPlayer.PlayFrom;
/*
 * Use keyboard shortcuts to handle <audio> tags.
 * - space       : Pauses the player on the site
 * - left arrow  : Reel the audio 10 seconds back in time
 * - right arrow : Reel the audio 10 seconds forth in time
 * - code from: https://gist.github.com/MTDdk/ab068da7021b43de0041d74657884c7a
 */
if (player) {
	window.addEventListener('keydown', function (event) {
		var key = event.which || event.keyCode
		if (key === 32) { // space
			event.preventDefault();
			player.paused ? player.play() : player.pause();document.title = document.title.replace('正在播放', '');
		} else if (key == 37) { // left arrow
			event.preventDefault();
			player.currentTime = player.currentTime - 10;
		} else if (key == 39) { // right arrow
			event.preventDefault();
			player.currentTime = player.currentTime + 10;
		}
	});
}
// when click ads
player.on("adsclick", function () {
	document.getElementsByClassName("plyr__ads")[0].remove()
});
// fullscreen on mobile device
player.on('enterfullscreen', event => {
	if (document.title.indexOf('解说') > -1) {
		// try {screen.orientation.lock('portrait');} catch (e) {}
	} else {
		try {
			screen.orientation.lock('landscape');
		} catch (e) {}
	}
});
// when exit fullscreen
player.on('exitfullscreen', event => {
	try {
		screen.orientation.lock('portrait');
	} catch (e) {}
});
document.querySelector("span.plyr__tooltip").style = `white-space:nowrap;`;
// var winheight=$(window).height();
const currentTime_btn = document.querySelector("#playleft > div > div.plyr__controls > div.plyr__controls__item.plyr__time--current.plyr__time");
player.on('playing', (event) => {
	if (skip == false) {
		setTimeout(function () {
		if (!zyregex.test(zyPlayFrom) && get_during == null){
			if (!zyPlayFrom.indexOf("wjm3u8") || !zyPlayFrom.indexOf("tomm3u8") || !zyPlayFrom.indexOf("sdm3u8")) {
				player.currentTime = 10;
			} else if (!zyPlayFrom.indexOf("jinyingm3u8") || !zyPlayFrom.indexOf("kcm3u8") || !zyPlayFrom.indexOf("gsm3u8") || !zyPlayFrom.indexOf("wolong")) {
				player.currentTime = 20;
			} else {
				player.currentTime = 30;
			}
			if (!Conch.Browser.useragent.mobile){
				$.showfloatdiv({txt: '已经帮你跳过广告(⊙o⊙)'});
				$.hidediv({});
			}
		} else {
			if (document.title.indexOf('直播') > -1) {
				$("#playleft > div > div.plyr__controls > div.plyr__controls__item.plyr__progress__container").remove();
				$("#playleft > div > div.plyr__controls > div.plyr__controls__item.plyr__time--current.plyr__time").remove();
				$("#playleft > div > div.plyr__controls > div.plyr__controls__item.plyr__menu").remove();
			} else {
				player.currentTime = get_during;
			}
		}
		skip = true;
		// console.log("Hello123", /^[a-zA-Z]+$/.test("Hello123"));
		// player.currentTime = get_during;
	  // console.clear();
	}, 1);
	}
	document.title = "正在播放 " + parent.Conch.Browser.title.replace(/"/gm, ``);
	// tracking
	setInterval(function () {
		// record currenttime
		webdata.set('play' + Conch.Browser.urlpath, player.currentTime);
		// clear console
		// console.clear();
	}, 1000);
  // hide logo
	setTimeout(function () {
		$("#playerlogo")
			.remove();
	}, 60000);
  // show controls bar
	controls.show();
	// tooltip
	window.setInterval(function () {
		var winwidth = $(window)
			.width();
		if (winwidth < 640) {
			currentTime_btn.style = `display:none;`;
		} else {
			currentTime_btn.style = `display:block;`;
		}
	}, 1000);
});
// auto play PlayLinkNext
player.on('ended', (event) => {
	if (parent.MacPlayer.PlayLinkNext != '') {
		if (!Conch.Browser.useragent.mobile){
			$.showfloatdiv({txt: '为你播放下一集'});
			$.hidediv({});
		}
		top.location.href = parent.MacPlayer.PlayLinkNext;
	} else {
		if (!Conch.Browser.useragent.mobile){
			$.showfloatdiv({txt: '没有下一集了'});
			$.hidediv({});
		}
	}
  // clear history
  webdata.del('play' + Conch.Browser.urlpath)
});
window.player = player;
