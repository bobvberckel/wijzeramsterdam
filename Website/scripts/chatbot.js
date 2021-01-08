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
