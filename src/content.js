export function drawHome() {
    /*<div id="hero">
        <img id="heroImage" src="img/hero.jpg" alt="An interior shot of the restaurant Nuovo Vesuvio from The Sopranos">
        <div id="heroCopy">c</div>
    </div>*/
    const contentDiv = document.querySelector("#content");
    const heroDiv = document.createElement("div");
    const heroImage = document.createElement("img");
    heroImage.src = "./vesuvio.jpg";
    heroImage.id = "heroImage";
    heroImage.alt = "An interior shot of the restaurant Nuovo Vesuvio from The Sopranos.";
    const heroCopy = document.createElement("div");
    heroCopy.id = "heroCopy";
    heroCopy.textContent = "From Avellino, Italy to Newark, New Jersey: for three generations the Bucco family has been crafting inspired Italian cuisine. Indulge in the rich flavors of the Mediterranean with handcrafted pasta, prime meats, and our imported wines, all served in an elegant, sophisticated setting."
    contentDiv.innerHTML = "";
    heroDiv.appendChild(heroImage);
    heroDiv.appendChild(heroCopy);
    contentDiv.appendChild(heroDiv);
}