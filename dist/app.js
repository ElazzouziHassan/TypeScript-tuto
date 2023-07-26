var conpteur = document.querySelector("#compteur");
var i = 0;
var increment = function (e) {
    i++;
    conpteur.querySelector('span').innerText = i.toString();
};
conpteur.addEventListener('click', increment);
