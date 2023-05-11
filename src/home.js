import { createImg } from "./header";

function home() {
    const home = document.createElement('div');
    home.classList.add('home');

    //form
    const form = document.createElement('form');
    home.appendChild(form);

    //search bar
    const searchLocation = document.createElement('input');
    searchLocation.classList.add('search-input');
    searchLocation.setAttribute("type", "search");
    searchLocation.setAttribute("placeholder", "Search Location Here");
    form.appendChild(searchLocation);

    //button
    const searchBtn = document.createElement("button");
    searchBtn.classList.add("search-submit");
    const searchImg = createImg("images/magnify-custom.png", "magnify-custom");
    searchImg.classList.add('magnify-icon');
    searchImg.setAttribute("title", " Search ")
    searchBtn.appendChild(searchImg);
    form.appendChild(searchBtn);

    //Error Msg
    const errorMsg = document.createElement("span");
    errorMsg.classList.add("error-msg");
    errorMsg.textContent = "Sorry! Location not found. Try again."
    home.appendChild(errorMsg);

    //Search Result
    const searchResult = document.createElement("div");
    searchResult.classList.add('search-result');
    // searchResult.textContent="fazal";
    home.appendChild(searchResult);

    //location
    const location = document.createElement('h1');
    location.classList.add('location');
    location.textContent = "sargodha , pakistan";
    searchResult.appendChild(location);

    const condition = document.createElement("p");
    condition.classList.add("condition");
    condition.textContent = "Mostly Sunny";
    searchResult.appendChild(condition);

    //weather Detail
    const weatherDetail = document.createElement("div");
    weatherDetail.classList.add("weather-detail");
    searchResult.appendChild(weatherDetail);

    //degrees
    const degreesHolder = document.createElement("div");
    degreesHolder.classList.add("degreesHolder");
    weatherDetail.appendChild(degreesHolder);

    const degrees = document.createElement('span');
    degrees.classList.add('degrees');
    degrees.textContent = "64";
    degreesHolder.appendChild(degrees);

    //detail
    const detail = document.createElement("div");
    detail.classList.add("detail");
    detail.innerHTML = `
          <p class="feels-like">Feels Like: 65</p>
          <p class="humidity">Humidity: 64</p>
          <p class="wind-mph">Wind: 5 MPH</p>
`
    weatherDetail.appendChild(detail);
    return home;
}

function loadHome() {
    const content = document.querySelector('#content');

    content.appendChild(home());
}

export default loadHome;