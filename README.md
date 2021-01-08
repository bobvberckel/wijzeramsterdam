# wijzeramsterdam
Wij van WeQreate hebben in samenwerking met Gemeente Amsterdam en OBA Amsterdam een website gemaakt voor een specifieke doelgroep. 

# Uitleg van de website.
wijzeramsterdam was een al bestaande website waar ouderen hulp kunnen zoeken voor de techniek van vandaag. Samen met WeQreate hebben wij 1 maand lang hard lopen werken om een website te ontwikkelen.
Er zijn in de website meerdere aspecten waarmee ouderen makkelijk overweg kunnen, zo is er namelijk een (super simpele) chatbot en een overzichtelijke interface.

# Taak van Firas (Mede Developer)
Firas nam de taak van het maken van de basis van de website, en het uitwerken van de interface.

# Taak van Mij (Bob)
Ik nam de chatbot op mij, en daarnaast meerdere functies die in de website beschikbaar zijn. Denk hierbij aan dat het vrouwtje éérst zwaait (GIF Bestand), en daarna een PNG Bestand wordt.
Deze functies zijn werkend en al terug te vinden op de website, voor de code hiervan kunt u de GitHub raadplegen.

# Hoe heb ik het aangepakt in dit project?
Laten we beginnen met de functie waar het overschakeld van een GIF bestand naar een PNG bestand, ik heb hier een mix mee gemaakt van Javascript en jQuery.
```js
// We maken een functie die we uiteindelijk (als nodig) meerdere keren kunnen gebruiken.
function changeImageOnLoad() {
    $(".karin").fadeOut(200, () => { // We laten de foto weg faden.
        $(".karin").attr('src', `./images/wijzer1.png`); // We veranderen de foto zelf.
    }).fadeIn(200); // We laten de foto weer infaden.
}

function pasTekstaan(categorie) {
    $(".karin").fadeOut(200, () => { // We laten de foto weg faden.
        $(".karin").attr('src', `./images/${categorie}.png`); // Als de gebruiker zijn muis over de navigatie bar hovert past de foto óók aan.
    }).fadeIn(200); // We laten de foto weer infaden.
}

// Op het moment dat de pagina inlaadt, wachten we éérst 2 seconden en pas dan roepen we de functie aan.
window.onload = () => {
    setTimeout(() => {
        changeImageOnLoad(); // We roepen de algemene functie aan.
    }, 2000);
}

document.getElementById(`gezondheidButton`).addEventListener(`mouseover`, () => {
    pasTekstaan(`gezondheid`);
});

document.getElementById(`gezondheidButton`).addEventListener(`mouseout`, () => {
    changeImageOnLoad();
});
}
```

Bij de chatbot wordt het iets complexer, uiteindelijk hebben wij gekozen om ongeacht het antwoord de persoon door te verwijzen naar de telefoon. De OBA kon dit uiteindelijk later
oppakken om wél een goede chatbot te implementeren.
```js
  
document.getElementById(`inputsubmit`).addEventListener(`click`, () => {
    let vraag = document.getElementById(`klantvraag`).value;
    
    if(vraag.length <= 10){
        alert("U moet een bericht langer dan 10 tekens typen.");
    }else{
        let node = document.createElement(`p`);
        node.classList.add("chatbotuser");
        let nodetext = document.createTextNode(vraag);
        node.appendChild(nodetext);
    
        document.getElementById(`chatoutput`).prepend(node);

        setTimeout(() => {
            let node = document.createElement(`p`);
            node.classList.add("chatbotprebottext");
            let nodetext = document.createTextNode(`Er is een medewerker aan het typen...`);
            node.appendChild(nodetext);
        
            document.getElementById(`chatoutput`).prepend(node);
        }, 1000);

        setTimeout(() => {
            let node = document.createElement(`p`);
            node.classList.add("chatbotbottext");
            let nodetext = document.createTextNode(`Er is momenteel geen medewerker beschikbaar, probeer het later opnieuw of probeer opnieuw door te bellen naar 020 693 4582.`);
            node.appendChild(nodetext);
        
            document.getElementById(`chatoutput`).prepend(node);
        }, 3000);
    }
});
```




