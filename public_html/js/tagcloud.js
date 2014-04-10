window.onload = function() {
    //het array met de tags
//elk item is zelf een Array met de naam, het huidig aantal stemmen en het vorig aantal stemmen die het kreeg
    var arrTags = [
        ["Javascript", 1634, 987],
        ["jQuery", 1111, 34],
        ["PHP", 1024, 1122],
        ["Asp.Net", 977, 1005],
        ["Photoshop", 594, 789],
        ["XML", 40, 666],
        ["Access", 55, 77],
        ["Java", 278, 277],
        ["MySQL", 155, 122]
    ];
//referentie naar tagContainer
    var eTagContainer = document.getElementById('tagContainer');
    var eDF = document.createDocumentFragment();
    for (i in arrTags) {
        //spa&nwijdte vinden delen dor twee en aftrekken van iXPos
        var eSpan = document.createElement('span');
        eSpan.style.display="block";
        eSpan.style.position = "absolute";
        var eTextNode = document.createTextNode(arrTags[i][0]);
        eSpan.appendChild(eTextNode);
        eSpan.width="50 px";
        eSpan.height="50 px";
        var iXPos = parseInt(Math.random() * (eTagContainer.offsetWidth ));
        var iYPos = parseInt(Math.random() * (eTagContainer.offsetHeight));
        eSpan.style.left = iXPos + 'px';
        eSpan.style.top = iYPos + 'px';
        eSpan.style.fontSize = berekenLetterGrootte(arrTags[i][1]);
        eSpan.style.color = berekenKleur(arrTags[i][1], arrTags[i][2])
        eDF.appendChild(eSpan);
    }
    eTagContainer.appendChild(eDF);
};
function berekenLetterGrootte(iAantalStemmen) {
    //iFontGrootte = iAantalStemmen *0.10;
    iFontGrootte = Math.sqrt(iAantalStemmen) ;
    return iFontGrootte + "px";
}
function berekenKleur(huidigeStemmen, vorigeStemmen) {
    if (huidigeStemmen < vorigeStemmen) {
        return "red";
    }
    else {
        return "green";
    }
}

