const http = new basicHTTP();

// Get POSTS
http.get("https://jsonplaceholder.typicode.com/posts", (err, posts) => {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});
