let mot, mots_5, nbaleatoire, entréeUser, lettreTrouvée, lettreNonTrouvée, essai;

function motAleatoire (){
    mots_5 = ["abime","acide","acier","aider","aieul","aigle","aimer","album","alger","algue","aller","amour","angle","annee","appel","apres","arabe","arbre","arche","arete","arret","assez","assis","astre","atoll","atome","autre","avant","avion","avoir","avril","bague","balai","balle","bande","barbe","barre","baton","baver","bebes","belle","betes","biere","bijou","bille","bisou","blanc","blond","boire","boite","bosse","botte","bouee","boule","bourg","bruit","buche","cache","cadre","calin","calme","canal","canne","canon","carre","carte","casse","champ","chaud","chene","chien","chier","chose","chute","clair","clown","colle","conte","corde","corps","coude","court","crabe","craie","creux","crier","croix","cruel","cuire","cygne","dames","danse","debut","degre","diner","doigt","douze","droit","drole","duree","echec","ecole","ecran","eleve","engin","envie","epais","epoux","etain","etang","etude","evier","faire","faner","farce","faute","femme","ferme","fesse","filet","fille","finir","fleur","foire","fonce","force","foret","forme","frein","frere","frite","froid","front","fruit","fumee","fumer","fusee","fusil","futur","garer","geant","geler","gener","genie","genou","glace","golfe","gomme","gorge","grain","grand","grele","guepe","gueri","habit","hache","herbe","heure","hibou","hindi","hiver","homme","hotel","huile","image","islam","jambe","jaune","jeter","jeudi","jeune","jouer","jouet","jours","lacer","lacet","laine","lampe","lapin","large","larme","laser","latin","laver","leger","lepre","lever","ligne","linge","lisse","liste","litre","livre","loupe","lourd","lundi","lutin","macon","magie","mains","maman","mardi","marie","marin","masse","matin","melon","merde","metal","metre","micro","mieux","mille","mince","mixer","moins","monde","moule","moyen","nager","nappe","navet","neige","neveu","niece","noyau","nuage","obeir","objet","ocean","odeur","œuvre","ombre","oncle","ongle","orage","ordre","outil","paire","panda","panne","passe","pates","patte","payer","peche","pelle","penis","pente","perle","peser","petit","photo","pieds","place","plage","plein","plier","pluie","plume","poche","poele","poids","poing","point","poire","pomme","pompe","poney","porte","poser","poste","pouce","poule","preau","prune","punir","puree","quand","queue","radio","radis","ramer","rampe","raper","raser","rater","rayon","reine","repas","rever","riche","roche","rouge","route","ruban","rugby","russe","sable","salir","salle","sante","sapin","savon","seize","serre","siege","signe","silex","singe","soupe","sourd","sport","stylo","sucer","sucre","suite","tabac","table","tache","taire","talon","tante","taper","tapis","tarte","tasse","tater","taupe","temps","tenir","tente","terre","teter","tigre","tirer","tissu","titre","tonne","tordu","train","trait","trier","trois","troll","trous","tuyau","unite","usine","utile","vache","vagin","vague","venir","verre","veste","veuve","vider","vieux","ville","vingt","vitre","vivre","voile","voler","volet","vulve","wagon","zebre"];
    nbaleatoire = parseInt(Math.random() * (mots_5.length - 0) + 0);
    mot = mots_5[nbaleatoire];
    mot = mot.toUpperCase();
}


function pendu() {
    // mots_5 = ["abime","acide","acier","aider","aieul","aigle","aimer","album","alger","algue","aller","amour","angle","annee","appel","apres","arabe","arbre","arche","arete","arret","assez","assis","astre","atoll","atome","autre","avant","avion","avoir","avril","bague","balai","balle","bande","barbe","barre","baton","baver","bebes","belle","betes","biere","bijou","bille","bisou","blanc","blond","boire","boite","bosse","botte","bouee","boule","bourg","bruit","buche","cache","cadre","calin","calme","canal","canne","canon","carre","carte","casse","champ","chaud","chene","chien","chier","chose","chute","clair","clown","colle","conte","corde","corps","coude","court","crabe","craie","creux","crier","croix","cruel","cuire","cygne","dames","danse","debut","degre","diner","doigt","douze","droit","drole","duree","echec","ecole","ecran","eleve","engin","envie","epais","epoux","etain","etang","etude","evier","faire","faner","farce","faute","femme","ferme","fesse","filet","fille","finir","fleur","foire","fonce","force","foret","forme","frein","frere","frite","froid","front","fruit","fumee","fumer","fusee","fusil","futur","garer","geant","geler","gener","genie","genou","glace","golfe","gomme","gorge","grain","grand","grele","guepe","gueri","habit","hache","herbe","heure","hibou","hindi","hiver","homme","hotel","huile","image","islam","jambe","jaune","jeter","jeudi","jeune","jouer","jouet","jours","lacer","lacet","laine","lampe","lapin","large","larme","laser","latin","laver","leger","lepre","lever","ligne","linge","lisse","liste","litre","livre","loupe","lourd","lundi","lutin","macon","magie","mains","maman","mardi","marie","marin","masse","matin","melon","merde","metal","metre","micro","mieux","mille","mince","mixer","moins","monde","moule","moyen","nager","nappe","navet","neige","neveu","niece","noyau","nuage","obeir","objet","ocean","odeur","œuvre","ombre","oncle","ongle","orage","ordre","outil","paire","panda","panne","passe","pates","patte","payer","peche","pelle","penis","pente","perle","peser","petit","photo","pieds","place","plage","plein","plier","pluie","plume","poche","poele","poids","poing","point","poire","pomme","pompe","poney","porte","poser","poste","pouce","poule","preau","prune","punir","puree","quand","queue","radio","radis","ramer","rampe","raper","raser","rater","rayon","reine","repas","rever","riche","roche","rouge","route","ruban","rugby","russe","sable","salir","salle","sante","sapin","savon","seize","serre","siege","signe","silex","singe","soupe","sourd","sport","stylo","sucer","sucre","suite","tabac","table","tache","taire","talon","tante","taper","tapis","tarte","tasse","tater","taupe","temps","tenir","tente","terre","teter","tigre","tirer","tissu","titre","tonne","tordu","train","trait","trier","trois","troll","trous","tuyau","unite","usine","utile","vache","vagin","vague","venir","verre","veste","veuve","vider","vieux","ville","vingt","vitre","vivre","voile","voler","volet","vulve","wagon","zebre"];
    //mot = mot.toUpperCase();
    motAleatoire();
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