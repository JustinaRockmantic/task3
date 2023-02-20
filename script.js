/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

// let data;
// let filterArray = [];

const drawCards = document.getElementById("output");

function showUsers() {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((result) => {
      data = result;
      //  drawCards(result);

      drawCards.innerHTML = "";

      data.forEach((data) => {
        let cardWrapper = document.createElement("div");
        cardWrapper.classList.add("card-wrapper");
        let login = document.createElement("div");
        login.textContent = data.login;
        login.style.fontSize = "35px";
        login.style.textAlign = "center";
        login.style.marginBottom = "6px";
        login.style.marginTop = "6px";

        // let imageWrapper = document.createElement("div");
        // imageWrapper.classList.add("image-wrapper");
        let avatar = document.createElement("img");
        avatar.src = data.avatar_url;
        avatar.style.display = "block";
        avatar.style.margin = "auto";
        avatar.style.width = "200px";
        avatar.style.objectFit = "cover";
        avatar.style.borderRadius = "100%";
        avatar.style.border = " 3px solid white";
        // avatar.style.margin = "10px auto 0";
        avatar.style.boxShadow = "0px 2px 10px black";

        cardWrapper.append(login, avatar);
        drawCards.append(cardWrapper);
      });
    })
    .catch((error) => console.error(error));
}

document.querySelector("button").addEventListener("click", showUsers);
