const conpteur = document.querySelector("#compteur");
let i = 0;

const increment = (e) => {
  i++;
  conpteur.querySelector('span').innerText = i.toString();
};

conpteur.addEventListener('click',increment)