console.log("123");

axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
    setPosts(response.data);
    .catch((error) => {
    console.error(error);
    });


