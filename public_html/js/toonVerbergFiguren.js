window.onload = function() {
    //check if array geladen wordt
    if (typeof aTalen === 'undefined') {
        throw new Error;
    }
    taal = aTalen[0];
    //aanmaken van taalselectie
    var eTaalLijst = maakTaalLijst();
    //teoveogen van select
    var eArticle = document.getElementsByTagName('article')[0];
    eArticle.insertBefore(eTaalLijst, eArticle.getElementsByTagName('h2')[0]);
    eTaalLijst.addEventListener('change', function() {
        var index = this.value;
        veranderTaal(index);
    })
    //referentie naar de hoofdknop die alle schermen kan sluiten/tonen
    var eHoofdKnop = document.getElementById('hoofdknop');
    //eventlistener voor mouseup om click te registreren
    eHoofdKnop.addEventListener('mouseup', toonVerbergAlleSchermen);
    eHoofdKnop.addEventListener('mouseup', veranderTekstAndereKnoppen);
    //aanmaken van knop om de taal te veranderen
    //referentie naar de collectie van .toggle images 
    var eImgs = document.querySelectorAll(".toggle img");
    for (var i = 0; i < eImgs.length; i++) {
        //toevoegen van knop en eventlistener om de schermen apart te sluiten/tonen
        var eKnopEnkelScherm = document.createElement("button");
        eKnopEnkelScherm.innerHTML = "Dit scherm verbergen";
        eKnopEnkelScherm.style.display="block";
        eKnopEnkelScherm.addEventListener('mouseup', toonOfVerberg);
        eImgs[i].parentNode.insertBefore(eKnopEnkelScherm, eImgs[i].parentNode.lastChild);
    }
}
/**toont of verbergt alle schermen en past de knoptekst aan
 * 
 * @returns {toonVerbergAlleSchermen}
 */
function toonVerbergAlleSchermen() {
    console.log(this.innerHTML);
    //ophalen van alle images in .toggle divs 
    var eImgs = document.querySelectorAll(".toggle img");
    //klaarzetten vaan initiële waarden
    var sDisplay = "";
    //veranderen van initiële waarden op basis van de property waarden van het eerste img element
    if (this.innerHTML === taal[0]) {
        var sButtonText = taal[2];
        sDisplay = "none";
    }
    else if (this.innerHTML === taal[2]) {
        sButtonText = taal[0];
        sDisplay = "block";
    }
    ;
    //verbergen van de images en het veranderen van de knop text
    for (var i = 0; i < eImgs.length; i++) {
        eImgs[i].style.display = sDisplay;
    }
    this.innerHTML = sButtonText;
}
/**toont of verbergt een enkel scherm en past de knoptekst aan
 * 
 * @returns {toonOfVerberg}
 */
function toonOfVerberg() {
    //opzetten van initiële waarden
    var sDisplay = '';
    //ophalen van de bijbehorende img tag
    var eImg = this.previousSibling;
    if (eImg.style.display === 'none') {
        sDisplay = 'block';
        sButtonText = taal[1]
    }
    else if (eImg.style.display !== 'none') {
        sDisplay = 'none';
        sButtonText = taal[3];
    }
    //aanpassen van de properties van img en knop 
    eImg.style.display = sDisplay;
    this.innerHTML = sButtonText;
}
function veranderTekstAndereKnoppen() {
    //alle knoppen ophalen
    var eKnoppen = document.getElementsByTagName('button');
    //veranderen van de knoppen waar nodig
    for (var i = 1; i < eKnoppen.length; i++) {
        var eImg = eKnoppen[i].previousSibling;
        if (eKnoppen[i].innerHTML === taal[3] && eImg.style.display !== 'none') {
            eKnoppen[i].innerHTML = taal[1];
        }
        else if (eKnoppen[i].innerHTML === taal[1] && eImg.style.display === 'none') {
            eKnoppen[i].innerHTML = taal[3];
        }
    }
}

/**maakt de keuzelijst om de taal te kiezen
 * 
 * @returns {maakTaalLijst.eSelect|Element}
 */
function maakTaalLijst() {
    var eSelect = document.createElement('select');
    eSelect.id='taallijst';
       for (var i=0;i<aTalen.length;i++) {
        var eOption = document.createElement('option');
        eOption.id = i;
        eOption.value = i;
        eOption.innerHTML = aTalen[i][4];;
        eSelect.appendChild(eOption);
    }
    return eSelect;
}

/**
 * 
 * @param {string} index : de index van de taal in het Talenobject
 * @returns {undefined}
 */
function veranderTaal(index) {
    console.log(index);
    //instellen van de gekozen taal
    taal = aTalen[index];
    //referentie naar de hoofdknop
    var eHoofdKnop = document.getElementById('hoofdknop');
     //referentie naar collectie van knoppen
    var eKnoppen = document.getElementsByTagName('button');
    // taal veranderen van hoofdknop
    for (var i=0;i<aTalen.length;i++){
        if (eHoofdKnop.innerHTML===aTalen[i][0]){eHoofdKnop.innerHTML=taal[0];}
        if (eHoofdKnop.innerHTML===aTalen[i][2]){eHoofdKnop.innerHTML=taal[2];}
        for (var j=0;j<eKnoppen.length;j++){
             if (eKnoppen[j].innerHTML === aTalen[i][1] ) {
            eKnoppen[j].innerHTML = taal[1];
        }
            else if (eKnoppen[j].innerHTML === aTalen[i][3] ) {
            eKnoppen[j].innerHTML = taal[3];
        }
        }
    }
}