import vesuvioImage from "./vesuvio.jpg";
import mapImage from "./map.png";

const contentDiv = document.querySelector("#content");

function resetContent() {
    contentDiv.innerHTML = "";
}

function appendToContent(child) {
    contentDiv.appendChild(child);
}

export function drawHome() {
    resetContent();
    const heroDiv = document.createElement("div");
    const heroImage = document.createElement("img");
    heroImage.src = vesuvioImage;
    heroImage.id = "heroImage";
    heroImage.alt = "An interior shot of the restaurant Nuovo Vesuvio from The Sopranos.";
    const heroCopy = document.createElement("div");
    heroCopy.id = "heroCopy";
    heroCopy.textContent = "From Avellino, Italy to Newark, New Jersey: for three generations the Bucco family has been crafting inspired Italian cuisine. Indulge in the rich flavors of the Mediterranean with handcrafted pasta, prime meats, and our imported wines, all served in an elegant, sophisticated setting."
    heroDiv.appendChild(heroImage);
    heroDiv.appendChild(heroCopy);
    appendToContent(heroDiv);
}

export function drawReservations() {
    resetContent();
    const resDiv = document.createElement("div");
    const resForm = document.createElement("form");
    resForm.action = "#";
    resForm.method = "post";
    const formElements = [
        {id: "name", label: "Name", type: "text"},
        {id: "phone", label: "Phone Number", type: "tel"},
        {id: "email", label: "Email Address", type: "email"},
        {id: "date", label: "Requested Date", type: "date"}
    ];
    for (var i=0; i<formElements.length; i++) {
        const formElement = formElements[i];
        const newInput = document.createElement("input");
        const newLabel = document.createElement("label");
        const newWrapper = document.createElement("div");
        newLabel.for = newInput.id = formElement.id;
        newInput.type = formElement.type;
        newLabel.textContent = formElement.label;
        newWrapper.classList.add("formRow");
        newWrapper.appendChild(newLabel);
        newWrapper.appendChild(newInput);
        resForm.appendChild(newWrapper);
    }
    const newButton = document.createElement("button");
    newButton.textContent = "Request Reservation";
    resForm.appendChild(newButton);
    resDiv.appendChild(resForm);
    appendToContent(resDiv);
}

export function drawLocation() {
    resetContent();
    const locationDiv = document.createElement("div");
    locationDiv.id = "location";
    
    const newImg = document.createElement("img");
    newImg.src = mapImage;
    newImg.alt = "The location of Nuovo Vesuvio";
    locationDiv.appendChild(newImg);
    
    const newAddress = document.createElement("address");
    newAddress.innerHTML = "5555 Fake St </br> Newark, NJ </br> 12345"
    locationDiv.appendChild(newAddress);

    const newTel = document.createElement("a");
    newTel.href="tel:+15555555555";
    newTel.textContent = "(555) 555-5555";
    locationDiv.appendChild(newTel);

    appendToContent(locationDiv);
}

export function drawAbout() {
    resetContent();
    const aboutDiv = document.createElement("div");
    aboutDiv.textContent = "Angelo Bucco and Concetta Palagonia Bucco, emigrated from Baiano, Avellino, Italy in 1913 and opened the family's first restaurant in 1926. This was Bucco's Vesuvio in the Italian First Ward of Newark, New Jersey. The second Bucco's Vesuvio opened in Bloomfield, New Jersey in the early 1950s.";
    aboutDiv.id = "about";
    appendToContent(aboutDiv);
}