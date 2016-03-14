var Articles = function(divName){
    this.divname = divName ? divName : "content";
};

var reqJson;

//FUNKCJA TWORZĄCA GOTOWĄ STRUKTURĘ ARTYKUŁU I WSTRZYKUJĄCA POWSTAŁY ARTYKUŁ DO DIVA CONTENT
Articles.prototype.addArticle = function(title, imgUrl, url, type, location){
    location = location ? location : 'Kraków';  //parametr location jest opcjonalny, jeśli nie został podany przyjmuje wartość "Kraków"

    //Stworzenie wszystkich niezbędnych elementów drzewa DOM
    var container = document.getElementById(this.divname),
        div = document.createElement('div'),
        akapit = document.createElement('p'),
        miniature = document.createElement('div'),
        sprite = document.createElement('div'),
        photo = document.createElement('img'),
        locationP = document.createElement('p'),
        redirect = document.createElement('a');

    //Nadanie poszczegulnym elementów odpowiednich klas, atrybutów
    photo.setAttribute('src', imgUrl);
    sprite.className=type;
    miniature.appendChild(photo);
    miniature.appendChild(sprite);
    miniature.className = 'miniature';
    div.className = 'article';
    akapit.innerHTML = title;
    locationP.innerHTML = location;
    locationP.className = 'location';
    redirect.setAttribute('href', url);
    div.appendChild(miniature);
    div.appendChild(akapit);
    div.appendChild(locationP);
    redirect.appendChild(div);
    container.appendChild(redirect);
    //console.log(json);
};

// FUNKCJA TWORZĄCA ARTYKUŁ DLA KAŻDEJ POZYCJI TABLICY ELEMENTS
Articles.prototype.showFromJson = function(from, to){
    var elements = reqJson.elements,
        title,
        url,
        imgUrl,
        type,
        flag=false;

    //Pętla tablicy elements zawierającej artykuły
    for(i=from; i<=to; i++){
        if(i<elements.length){
            title = elements[i].title;
            url = elements[i].url;
            imgUrl = elements[i].image;
            type = elements[i].type;
            this.addArticle(title, imgUrl, url, type);
            if(flag){
                clearDiv = document.createElement('div');
                clearDiv.className = 'clear';
                document.getElementById('content').appendChild(clearDiv);
            }
            flag=(!flag);
        }else{
            var button = document.getElementById('showMore');
            button.setAttribute('style', 'display: none;');
        }
    }
};

//STWORZENIE NOWEGO OBIEKTU KLASY ARTICLES
var generator = new Articles();