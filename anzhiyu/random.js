var posts=["posts/16107.html","posts/9087.html","posts/3240.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };