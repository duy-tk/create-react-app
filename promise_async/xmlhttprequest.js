var XMLHttpRequest = require("xhr2");
function handleClick() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://64ef0a8b219b3e2873c3d8c2.mockapi.io/user");
    xhr.onload = () => {
      resolve(JSON.parse(xhr.responseText));
      reject("error");
    };
    xhr.send();
  });
}

handleClick()
  .then((res) => console.log("res", res))
  .catch((err) => console.log(err));
