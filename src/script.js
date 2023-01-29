// HTML Selector
const details = document.querySelector(".details");
const imgContainer = document.querySelector(".img-container");
const userBtn = document.getElementById("get-user-btn");

// API
const API_FETCH = "https://random-data-api.com/api/v2/users?response_type=json";

// Function Fetch GetUser()
const getUser = () => {
  fetch(API_FETCH)
    .then((res) => res.json())
    .then((data) => {
      // Image Avatar
      imgContainer.innerHTML = `<img src=${data.avatar}/>`;
      // Details
      details.innerHTML = `
        <h2> ${data.first_name} ${data.last_name} </h2>
        <h3> ${data.employment.title} </h3>
        <h4><i class="fa-solid fa-location-dot"></i> ${data.address.city} </h4>
      `;
      
      // Random Color
      let randomColor =
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
      document.documentElement.style.setProperty("--theme-color", randomColor);
    })
    .catch((err) => console.warn(err));
};

userBtn.addEventListener("click", getUser);
