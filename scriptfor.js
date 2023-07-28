function media(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var n4 = parseFloat(document.getElementById("n4").value);

    var media = (n1 + n2 + n3 + n4)/4;

    if (media >= 6)
    alert 
    ("Voce foi aprovado com a media " + media);
    else
    alert ("Voce reprovou com a media " + media);
}