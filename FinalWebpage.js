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
                   I like food, some of my favorite dishes are…
               </p>
               <ul>
                   <li>Pasta</li>
                   <li>Chicken Tikka Masala</li>
                   <li>
                       Enchiladas
                   </li>
               </ul>
       `;
       card2.innerHTML = `
           <h3>Serious Facts About Me </h3>
               <p>
                   I love playing basketball. Some of my favorite players are…
               </p>
               <ul>
                   <li>Lebron James (lakers)</li>
                   <li>2016 Lebron James</li>
                   <li>
                      Game 7 Lebron
                   </li>
               </ul>
       `;


       card3.innerHTML = `
       <h3>Serious Facts About Me </h3>
           <p>
               I love making little things. Some of my favorite materials to use are…
           </p>
           <ul>
                   <li>Clay</li>
                   <li>Wire</li>
                   <li>
                       Wood
                   </li>
               </ul>
   `;
   }


   if (!toggle.classList.contains("serious")) {
       card1.innerHTML = `
           <h3>Silly Facts About Me </h3>
               <p>
                  I love video games. My favorite are
               </p>
               <ul>
                   <li>Seige</li>
                   <li>Fortnite</li>
                   <li>
                       Madden
                   </li>
               </ul>
       `;
       card2.innerHTML = `
           <h3>Silly Facts About Me</h3>
               <p>
                   I love dogs, my favorite breeds are…
               </p>
               <ul>
                   <li>Labrador</li>
                   <li>Staffy</li>
                   <li>
                       German Shepard
                   </li>
               </ul>
       `;


       card3.innerHTML = `
       <h3>Silly Facts About Me  </h3>
           <p>
                                   I love baking. Some of my favorite recipes include…


           </p>
           <ul>
                   <li>Brookies</li>
                   <li>Banana Bread</li>
                   <li>
                       Cake
                   </li>
               </ul>
   `;
   }
});
