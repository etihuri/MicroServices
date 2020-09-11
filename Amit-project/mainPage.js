// CONST http = require('http');
// CONST = require('request');
function getDataFromServiceA() {
  getDataByUrl("http://127.0.0.1:3001/getData");
}
function getDataFromServiceB() {
  getDataByUrl("http://127.0.0.1:3000/getData");
}

function getDataByUrl(url) {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("data").innerHTML = JSON.stringify(data);

      console.log("Success:", data);
    })
    .catch((error) => {
      return error;
    });
}
