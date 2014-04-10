window.onload = function() {
    //het element om de browserinfo weer te geven
    var eBrowserInfo = document.createElement('div');
    eBrowserInfo.innerHTML = "browserAppCodeNaam: " + window.navigator.appCodeName + "<br>browserAppNaam: " + navigator.appName + "<br>browserversie: " + window.navigator.appVersion;
    var eBody = document.getElementsByTagName('body')[0];
    eBody.appendChild(eBrowserInfo)
    //de unordered list voor de tests
    eUl = document.createElement('ul');
    eUl.style.listStyle = "none";
    // array for feature sensing
    var a = {
        "document.images": document.images,
        "document.layers": document.layers,
        "document.all": document.all,
        "document.getElementById": document.getElementById,
        "document.querySelector": document.querySelector,
        "document.styleSheets": document.styleSheets,
        "document.createElement": document.createElement,
        "document.createNodeIterator": document.createNodeIterator,
        "document.implementation.createDocument": document.implementation.createDocument,
        "window.walkthedog": window.walkthedog,
        "window.focus": window.focus,
        "window.ActiveXObject": window.ActiveXObject,
        // "window.ActiveXObject.prototype":window.ActiveXObject.prototype,
        "window.XMLHttpRequest": window.XMLHttpRequest,
        "window.localStorage": window.localStorage,
        "[].push": [].push,
        "[].filter": [].filter,
        "Object.prototype": Object.prototype,
        "navigator.geolocation": navigator.geolocation,
        "document.documentElement.classList": document.documentElement.classList,
        "localStorage":localStorage
    }


    for (var i in a) {
        //aanmaken van tabel

        var feature = a[i];
        var eLi = document.createElement('li');
        var eTable = document.createElement('table');
        eTable.border='1';
        eTable.style.borderCollapse='collapse';
        
        var eTr = document.createElement('tr');
        var eTdFeatureName = document.createElement('td');
        eTdFeatureName.innerHTML = i
        eTdFeatureName.innerHTML = i;
        eTdFeatureName.style.clear = "both";
        eTdFeatureName.style.float = "left";
        eTdFeatureName.style.width = '20em';
        eTr.appendChild(eTdFeatureName);
        var eTdControle = document.createElement('td');
        eTdControle = document.createElement('div');
        eTdControle.style.float = 'left';
        eTdControle.style.color = 'white';
        eTdControle.style.width = '5em';
        eTdControle.style.height = '100%';
        eTdControle.style.textAlign = 'center';

        if (!feature) {
            eTdControle.innerHTML = "nee"
            eTdControle.style.background = "red";
        }
        else {
            eTdControle.innerHTML = "ja"
            eTdControle.style.background = "green"
        }
        eTr.appendChild(eTdControle);
        eTable.appendChild(eTr);
        eLi.appendChild(eTable);
        eUl.appendChild(eLi);
    }
    //toevoegen van de ul
    var eUlHolder = document.getElementById('unorderedlistholder');
    eBody.appendChild(eUl);

};


