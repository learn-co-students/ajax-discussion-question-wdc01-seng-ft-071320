const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

fetchData()

function fetchData(){
    fetch('https://randomuser.me/api/')      //send get request to api
    .then( res => res.json() )                     // waiting for response, once we receive response, we format it in json -> .json()
    .then( json => renderUser(json.results[0]))   // then use json data as argument of function
}

function renderUser(user) {
  let name = document.getElementById('fullname')
  name.innerText = user.name.first + " " + user.name.last
  let email = document.getElementById('email')
  email.innerText = user.email
}

