function nota(){
    var note1 = parseInt(document.getElementById('nota1').value);
    var note2 = parseInt(document.getElementById('nota2').value);
    var note3 = parseInt(document.getElementById('nota3').value);
    const texto = document.querySelector("h3");

    if (nota1 > nota2 && (nota1 > nota3)){
        texto.innerHTML = 'João nota:' ;
    }
    else if (nota2 > nota1 && ( nota2 > nota3)){
        texto.innerHTML = 'Maria nota:' ;
    }
    else if (nota3 > nota1 && ( nota3 > nota4)){
        texto.innerHTML = 'Anna nota: '
    }
    else {
        texto.innerHTML = '*'
    }
}
