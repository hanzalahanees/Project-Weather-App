function header() {
    const header = document.createElement("div");
    header.classList.add('header');

    const imgHolder = document.createElement('div');
    imgHolder.appendChild(createImg("images/rain-cloud-sun.png", "rain-cloud-sun"))

    header.appendChild(imgHolder);

    const mainHeading = document.createElement("h1");
    mainHeading.textContent = "Weather App";
    header.appendChild(mainHeading);

    return header;
}

export function createImg(src, alt) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;

    return img;
}

function loadHeader() {
    const content = document.querySelector('#content');

    content.appendChild(header());
}
export default loadHeader;