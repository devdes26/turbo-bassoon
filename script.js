const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");

const toggle = document.querySelector(".toggle");

let selected = card2;

console.log(card2 === selected);

card1.addEventListener("click", () => {
    selected.classList.toggle("selected");

    card1.classList.toggle("selected");
    selected = card1;
});

card2.addEventListener("click", () => {
    selected.classList.toggle("selected");
    card2.classList.toggle("selected");
    selected = card2;
});

card3.addEventListener("click", () => {
    selected.classList.toggle("selected");
    card3.classList.toggle("selected");
    selected = card3;
});

toggle.addEventListener("click", () => {
    toggle.classList.toggle("serious");

    if (toggle.classList.contains("serious")) {
        card1.innerHTML = `
            <h3>Serious Facts About Me </h3>
                <p>
                    I love making little things. My favorite materials are...
                </p>
                <ul>
                    <li>Clay</li>
                    <li>Wires</li>
                    <li>
                        Wood
                    </li>
                </ul>
        `;
        card2.innerHTML = `
            <h3>Serious Facts About Me </h3>
                <p>
                    I love math competitions. My favorite are...
                </p>
                <ul>
                    <li>AMC 8</li>
                    <li>AMC 10</li>
                    <li>
                        AMC 11
                    </li>
                </ul>
        `;

        card3.innerHTML = `
        <h3>Serious Facts About Me </h3>
            <p>
                I love basketball, My favorite players are...
            </p>
            <ul>
                    <li>Luka Doncic</li>
                    <li>Lebron</li>
                    <li>
                        Dearron Fox
                    </li>
                </ul>
    `;
    }

    if (!toggle.classList.contains("serious")) {
        card1.innerHTML = `
            <h3>Silly Facts About Me</h3>
            <p>
                I love video games...
            </p>
            <ul>
                <li>Siege</li>
                <li>Fortnite</li>
                <li>
                    PubG
                </li>
            </ul>
        `;
        card2.innerHTML = `
            <h3>Silly Facts About Me</h3>
            <p>
                I love Lebron James, my favorite versions of him are...
            </p>
            <ul>
                <li>2016 Lebron</li>
                <li>LeFather</li>
                <li>
                    LeRoleModel
                </li>
            </ul>
        `;

        card3.innerHTML = `
        
            <h3>Silly Facts About Me</h3>
            <p>
                I love baking. My favorite recipes are...
            </p>
            <ul>
                <li>Banana Bread</li>
                <li>Cake</li>
                <li>
                    Brookies
                </li>
            </ul>
    `;
    }
});
