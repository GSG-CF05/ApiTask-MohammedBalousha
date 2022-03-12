let app = document.querySelector("#root");
let container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);

fetch("https://anime-facts-rest-api.herokuapp.com/api/v1")
  .then((res) => {
    return res.json(); // Resolve
  })
  .then((data) => {
    console.log(data) ;  // for Tracking
    let array = data.data ;  // Access to data in the object 
    array.forEach((anim) => {  
      let card = document.createElement("div"); // create div
      card.setAttribute("class", "card"); // add class to div
      container.appendChild(card);
      let h1 = document.createElement("h1");
      h1.textContent = anim.anime_name;
      card.appendChild(h1);

      // let desc = document.createElement("p");
      let img = document.createElement("img");
      img.src = anim.anime_img;
      card.appendChild(img);
    });
  });
