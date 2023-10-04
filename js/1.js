function musicas(){
    var qtdM = parseInt(document.getElementById('qtdM').value);
    var vezesM = parseInt(document.getElementById('vezesM').value);
    const texto = document.querySelector("h3");

    while(vezesM >= vezesM){
        texto.innerHTML = vezesM;
    }
}