const fullname = document.getElementById("fullname");
const url = "https://randomuser.me/api/";
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");


  function fetchData() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => printUser(data.results[0]));
  }
  fetchData();

  function printUser(user) {
    let profilePic = document.getElementById("profile_picture");
    let email = document.querySelector("#email");
    let street = document.querySelector("#street");
    let city = document.querySelector("#city");
    let state = document.querySelector("#state");
    let postCode = document.querySelector("#postcode");
    let phone = document.querySelector("#phone");
    let cell = document.querySelector("#cell");
    let dob = document.querySelector("#date_of_birth");
    fullname.innerText =
      user["name"]["title"] +
      " " +
      user["name"]["first"] +
      " " +
      user["name"]["last"];
    email.innerText = user["email"];
    street.innerText =
      user["location"]["street"]["number"] +
      " " +
      user["location"]["street"]["name"];
    state.innerText = user.location.state;
    city.innerText = user.location.city;
    phone.innerText = user.phone;
    postCode.innerText = user.location.postcode;
    cell.innerText = user.cell;
    dob.innerText = user.dob.date;
    profilePic.src = user["picture"]["large"];
    // debugger
  }

  const clickBtn = document.querySelector("button");
  clickBtn.addEventListener("click", function () {
    fetchData();

    // console.log("I'm clicked")
  });
});
