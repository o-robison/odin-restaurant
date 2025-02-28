import "./styles.css";
import { drawHome, drawReservations, drawLocation, drawAbout, drawMenu } from "./content.js";

(function main() {
    const homeButton = document.querySelector("#home");
    homeButton.addEventListener("click", drawHome);

    const resButton = document.querySelector("#reservations");
    resButton.addEventListener("click", drawReservations);

    const locButton = document.querySelector("#location");
    locButton.addEventListener("click", drawLocation);
    
    const aboutButton = document.querySelector("#about");
    aboutButton.addEventListener("click", drawAbout);

    const menuButton = document.querySelector("#menu");
    menuButton.addEventListener("click", drawMenu);

    drawHome();
})();