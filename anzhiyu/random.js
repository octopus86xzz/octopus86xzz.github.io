var posts=["2024/02/05/青春回归歌曲/","2024/02/02/自我介绍/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };