//Image_gallery_versie1.js
// een javascript_PF object
var versie = " versie 3.0";
window.onload = function() {
    //noscrpt verbergen
    var eNoScript = document.getElementById('noscript');
    eNoScript.style.display = "none";
    //array geladen?
    if (typeof aModernArt == 'undefined') {
        throw new Error("array aModernArt is niet gevonden");
    } else {
        //console.log(aModernArt[0][0]);   //is aModernArt aanwezig?
        //versie info
        var eKop = document.querySelector('h1');
        eKop.innerHTML += versie;
        var eImg = document.getElementById('plaatshouder');
        //dynamische keuzelijst
        var eKeuzelijst = maakKeuzelijst(aModernArt);
        var eSidebar = document.querySelector('aside')
        eSidebar.appendChild(eKeuzelijst);
        eKeuzelijst.addEventListener("change",function(){
            var waarde= this.value;
            console.log(waarde);
            if(waarde!="" &&waarde!=null){
                toonFoto(waarde,eImg);
            }
        });
        //nieuwe event handler voor de hyperlinks 
        var eLinks = document.querySelectorAll('aside a');
        // console.log('sidebarLinks %s', eLinks.length);
        for (var i = 0; i < eLinks.length; i++) {
            eLinks[i].addEventListener('click', function(e) {
                e.preventDefault();
                toonFoto(this, eImg);
            });
            eLinks[i].addEventListener('mouseover', function() {
                toonFoto(this, eImg);
            });
        }
    }
};//einde window.onload
function toonFoto(nIndex, eImg) {
    /*wisselt de bron van het src attribuut van de img#beeld
     * @nIndex, getal om de juist link aan te duiden van de array 
     * @eImg, plaatshouder img
     * @aModernArt array, global
     */
    //console.log(eLink.href);
  aArt= aModernArt[nIndex];// subarray
    sPad=aArt[0];//source
    sInfo=aArt[1];//info
    sNaam=aArt[2]//naam
    eImg.src="art/"+sPad;
    var eInfo = document.getElementById('info');
    if (eInfo) {
        //eInfo bestaat reeds
        eInfo.innerHTML = sInfo;
    }
    else {
        //maak nieuwe p#info aan
        var eInfo = document.createElement('p');
        eInfo.id = "info";
        eInfo.innerHTML = sInfo;
        eImg.parentNode.insertBefore(eInfo, eImg.parentNode.firstChild);
    }
}

    function maakKeuzelijst(a) {
        /*
         * return SELECT element
         * @a array van images
         */
        var nArt = a.length;
        var eSelect = document.createElement('select');
        eSelect.id = "keuzelijst";
        // standaard option element
        var eOption = document.createElement('option');
        eOption.innerHTML = "maak een keuze";
        eOption.setAttribute("value", "");
        eSelect.appendChild(eOption);
        //andere option elementen met artiesten
        for (var i = 0; i < nArt; i++) {
            var eOption = document.createElement('option');
            eOption.innerHTML = a[i][2];
            eOption.value = i;
            eSelect.appendChild(eOption);
        }
        return eSelect;
    }



