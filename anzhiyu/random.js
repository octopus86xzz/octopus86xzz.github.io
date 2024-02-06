var posts=["2024/02/06/2024年2月6日婚礼快剪/","2024/02/07/完了，这饭我是吃还是不吃/","2024/02/02/自我介绍/","2024/02/06/谈第一次工作的感受/","2024/02/05/赶大集/","2024/02/05/青春回归歌曲/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };