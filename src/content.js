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
    heroImage.src = "./vesuvio.jpg";
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
/* <div id="reservations">
    <form action="#" method="post">
        <label for="name">Name</label>
        <input type="text" id="name">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone">
        <label for="email">Email Address</label>
        <input type="email" id="email">
        <label for="date">Requested Date</label>
        <input type="date" id="date">
        <button>Request Reservation</button>
    </form>
</div> */
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