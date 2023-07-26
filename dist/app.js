var conpteur = document.querySelector("#compteur");
var i = 0;
var increment = function (e) {
    e.preventDefault();
    i++;
    var span = conpteur === null || conpteur === void 0 ? void 0 : conpteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
function printId(id) {
    if (typeof id === "number") {
        console.log((id * 3).toString());
    }
    else {
        console.log(id.toUpperCase());
    }
}
conpteur.addEventListener('click', increment);
