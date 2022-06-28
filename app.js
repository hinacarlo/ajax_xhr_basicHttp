const http = new basicHTTP();

// GET POSTS
// http.get("https://jsonplaceholder.typicode.com/posts", (err, posts) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get Single POSTS
// http.get("https://jsonplaceholder.typicode.com/posts/1", (err, post) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

const data = {
  title: "Custom Post",
  body: "This is a custom post. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
};

// CREATE POSTS
http.post("https://jsonplaceholder.typicode.com/posts", data, (err, post) => {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// UPDATE POST
http.put("https://jsonplaceholder.typicode.com/posts/1", data, (err, post) => {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// DELETE POST
http.delete("https://jsonplaceholder.typicode.com/posts/1", (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
