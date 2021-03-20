let mot, entréeUser, lettreTrouvée, lettreNonTrouvée, essai;

function pendu() {
    mot = "bonjour";
    mot = mot.toUpperCase();
    lettreTrouvée = [];
    lettreNonTrouvée = [];
    essai = 0;

    //met un "-" pour chaque lettre de la variable "mot"
    for( i = 0; i<= (mot.length -1); i++){
        lettreTrouvée.push('-');
    }

    do{
        // entréeUser = toUpperCase(prompt(`entrez une lettre`)); 
        entréeUser = prompt(`Voici le mot à trouver : \n
        ${lettreTrouvée.join(" ")}\n
        Lettres déjà données et non valables: ${lettreNonTrouvée}\n
        Essais restants : ${10 - essai};
        Entrez une lettre:`);

        entréeUser = entréeUser.toUpperCase();
        if (mot.includes(entréeUser)){
            alert(`la lettre ${entréeUser} est dans le mot`);
            for( i = 0; i<= (mot.length -1); i++){
        
                //vérifie si entréeUser == mot[i];
                //A chaque itération de ma boucle, je vais vérifer si la lettre entrée par le joueur
                //est == à la lettre incluse dans mon mot
                if(entréeUser == mot[i]){
        
                    //si c'est le cas, j'envoie la lettre trouvée dans mon tableau ou se trouve ma boucle
                    lettreTrouvée[i] = entréeUser;
                } 
            }
            console.log(lettreTrouvée);
        } else {
            //Si lettre non trouvée, incremente le nb d'essai, renvoie la lettre dans le tableau "lettreNonTrouvée"
            essai++;
            lettreNonTrouvée.push(entréeUser);
            alert(`la lettre ${entréeUser} n'est pas dans le mot\n
                il vous reste ${10 - essai} essai`);
            }

    } while (essai < 10 && lettreTrouvée.includes('-') )

    if (lettreTrouvée.includes('-')) {
        alert (`Vous avez perdu, le mot était ${mot}`);
    } else {
        alert (`Vous avez GAGNE`);
    }

} /* fin de function "pendu" */


function pendu2 (){
    try {
        pendu()
    }
    catch(e){
        alert(e);
        pendu;
    }
    finally{
        if(confirm(`Voulez-vous rejouer une partie ?`)){
            pendu();
        } else {
            alert("Au revoir");
        }
    }
}

pendu2()