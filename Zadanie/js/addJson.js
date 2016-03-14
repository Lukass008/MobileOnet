var LoadJson = function(filename){
    this.filename = filename ? filename : "data.json";
};

//FUNKCJA POBIERAJĄCA DANE Z PLIKU JSON
LoadJson.prototype.xhrReq = function (callback) {
    //Nowy obiekt XHR
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', this.filename, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // wywołanie funkcji callback po dodaniu pliku z danymi
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
};

//Funkcja wywołująca xhrReq
LoadJson.prototype.init = function () {
    this.xhrReq(function(response) {
        reqJson = JSON.parse(response);
        //console.log(reqJson);
        showArticles.callFour();
    });
};

//NOWY OBIEKT KLASY LOAD
var load = new LoadJson();

//Wywołanie funkcji pobierającej dane z pliku JSON
load.init();