var CallThreads = function(){
    this.counter = 0;   //licznik aktualnie wyświetlonych artykułów
    this.amount = 3;    //liczba wyświetlanych artykułów pomniejszona o 1
};



//FUNKCJA WSTRZYKUJE 4 ARTYKUŁY
CallThreads.prototype.callFour = function(){
    generator.showFromJson(this.counter, this.counter+this.amount)
    this.counter+=4;
    console.log("Aktualnie wczytano "+this.counter+" artykułów");
};

//NOWY OBIEKT KLASY CallThreads
var showArticles = new CallThreads();