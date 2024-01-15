function Affichern1(partie) //Ca devrait marcher
{
    var etat = document.getElementByClassName(partie).getElementById("fleche"); //proclème avec ClassName
    var fleche = document.getElementByClassName(partie).getElementByTagName(button).getElementByTagName(img);
    console.assert(etat.class)
    if (etat.className == "droite")
    {
        etat.className == "bas";
        fleche.style.transform = rotate("-90deg");
    }
    else
    {
        etat.className == "droite";
        fleche.style.transform = rotate("90deg");
    }
}