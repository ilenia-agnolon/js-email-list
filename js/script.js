//selezione
const myResult = document.querySelector(".resultList");


//salvo in una variabile l'idirizzo API di Boolean
const endPointMail = "https://flynn.boolean.careers/exercises/api/random/mail";

//faccio una chiamata all'API con axios
axios.get(endPointMail)
.then((response) => {

    //quando la risposta arriva, apro il pacchetto JSON
    //    e prendo solo la proprietà "response" = l’email
    const email = response.data.response;


//creo nuovo <li>
const newLi = document.createElement("li");

//scrivo l'email dentro al <li>
newLi.innerText = email;

//appendo il <li> alla lista <ul>
myResult.appendChild(newLi);

})

.catch((error) => {
    console.error("errore", error);
    
});


