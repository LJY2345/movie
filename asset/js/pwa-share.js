// Index.js

initializeApp();

async function onShare() {
  const s_title = Conch.Browser.title;
  const url = Conch.Browser.url;
  const text = "LJY2345影院，海量高清视频在线观看"+"\n"+Conch.Browser.title;

  if (navigator.share) {
    try {
      setTimeout(() => {
        $(".hl-pops-bg.hl-pops-bg-active").hide();
      }, 50);
      $(".hl-links-wrap").hide();
      await navigator
      .share({
        s_title,
        url,
        text
      })
        /*
          Show a message if the user share something
        */
        // alert(`Thanks for Sharing!`);
        // if (!Conch.Browser.useragent.mobile){
          $.showfloatdiv({txt: '感谢你的分享o(*￣▽￣*)ブ'});
          $.hidediv({});
        // }
    } catch (err) {
       /*
          This error will appear if the user cancel the action of sharing.
        */
    //   alert(`Couldn't share ${err}`);
    $.showfloatdiv({txt: '分享失败/(ㄒoㄒ)/~~'});
    $.hidediv({});
    }
  } else {
    // alert(`Not supported !!`);
  }
}

function initializeApp() {
  if ("serviceWorker" in navigator) {
    /*
      If you are testing this app, and you want to deploy it and put the deploy code in a folder, 
      you are going to have to change the location of the service worker in the .register(). Service Workers
      by practice, they go in the root of your project. 
    */
    // navigator.serviceWorker.register("sw.js").then(() => {
      /*
        Since this is a PWA, I want to make sure that if the SW is registered then I keep 
        initializing things for the app, but having a service worker nor a PWA is needed
        to make use of the Web Share API. 
      */
      document.querySelector("#pwa-share-btn").addEventListener("click", onShare);
    // });
  }
  if ('virtualKeyboard' in navigator) {
      navigator.virtualKeyboard.overlaysContent = true;
  }
}
