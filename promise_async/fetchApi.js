fetch("https://64ef0a8b219b3e2873c3d8c2.mockapi.io/user", {
  method: "GET",
  body: JSON.stringify(),
  headers: { "Content-Type": "application/json" },
})
  .then((response) => {
    if (response.ok) {
      console.log("Success");
      return response.json();
    } else {
      console.log("Not success");
    }
  })
  .then((data) => {
    const listname = data.map((e) => {
      return e.name;
    });
    console.log(listname);
  })
  .catch((error) => console.log(error));
