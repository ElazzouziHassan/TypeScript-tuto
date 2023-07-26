const conpteur = document.querySelector("#compteur");
let i = 0;

const increment = (e: Event) => {
  e.preventDefault();
  i++;
  const span = conpteur?.querySelector('span');
  if (span) {
    span.innerText = i.toString();
  }
};

function printId(id: string | number)
{
  if (typeof id === "number") {
    console.log((id * 3).toString())
  } else {
    console.log(id.toUpperCase())
  }  
}


conpteur.addEventListener('click',increment)