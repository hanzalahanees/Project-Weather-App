import loadHeader from "./header";
import loadHome from "./home";
import weatherApp from "./weather";

function initializeWebsite() {
    loadHeader();
    loadHome();

    weatherApp();
}

export default initializeWebsite;