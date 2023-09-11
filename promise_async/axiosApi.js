import axios from "axios";
axios
  .get("https://64ef0a8b219b3e2873c3d8c2.mockapi.io/user")
  .then((response) => {
    console.log(response.data);
  });
// const data = response.data; // Extract the response data
    // data.forEach((e) => {
    //   console.log(e.name);
    // });
//   })
//   .catch((error) => {
//     console.error(error);
//   });
