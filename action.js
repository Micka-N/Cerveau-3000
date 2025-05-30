document.addEventListener("DOMContentLoaded", () => {
  const bodyx = document.body;

  const boutonJouer = document.querySelector("#btnplay");
  const boutonSon = document.querySelector("#btnson");
  const barreSon = document.querySelector("#husson");
  const boutonRegles = document.querySelector("#btnregles");
  const topScores = document.querySelector(".top-scores");
  const afficheRegles = document.querySelector("#regles")

  const fenetre = document.querySelector("#fenetre");
  const fenetreAccueil = document.querySelector("#accueil");
  const fenetreFin = document.querySelector("#fenetre-fin");
  const chiffreCompteurTotal = document.querySelector("#compteur-total");
  const fenetreMerciFinal = document.querySelector("#fenetre-merci");

  const conteneurAmeliorations = document.querySelector(".contain-ameliorations");
  const conteneurBoutons = document.querySelector(".contain-boutons");
  const conteneurBonhomme = document.querySelector(".contain-bonhomme");

  const boutonMediter = document.querySelector("#btn-mediter");
  const chiffreCompteur = document.querySelector("#compteur");
  const boutonAmeliorer = document.querySelector("#btn-achat");
  const chiffreTimer = document.querySelector("#timer");

  const bonus1 = document.querySelector(".bonus1");
  const boutonAchatBonus1 = document.querySelector("#btn-bonus-manuel");
  const chiffreBouton1 = document.querySelector(".prix-bonus1");

  const bonus2 = document.querySelector(".bonus2");
  const boutonAchatBonus2 = document.querySelector("#btn-bonus-auto");
  const chiffreBouton2 = document.querySelector(".prix-bonus2");

  const bonus3 = document.querySelector(".bonus3");
  const boutonAchatBonus3 = document.querySelector("#btn-bonus-boost");
  const chiffreBouton3 = document.querySelector(".prix-bonus3");

  const chiffreNbreFilets = document.querySelector("#qte-filet");
  const chiffreTimer30 = document.querySelector("#timer30");

  const boutonAccueil = document.querySelector("#btnacc");
  const boutonRejouer = document.querySelector("#btnrej");
  const boutonQuitter = document.querySelector("#btnquit");
  






  let valeurCompteur = 0;
  let valeurBtnBonus1 = parseInt(chiffreBouton1.textContent);
  let valeurBtnBonus2 = parseInt(chiffreBouton2.textContent);
  let valeurBtnBonus3 = parseInt(chiffreBouton3.textContent);
  let sommeBonus1 = 0;
  let valeurTimer = 3;
  let aDejaClique = false;
  let valeurTimer30 = 30;
  let idSetIntervals = [];
  let valeurQteFilets = 0;







  boutonJouer.addEventListener("click", (event) => {
    event.preventDefault();
    fenetreDeJeu();
  });
  boutonSon.addEventListener("click", (event) => {
    event.preventDefault();
    barreSon.classList.toggle("effaceur");
    boutonSon.classList.toggle("actif");
  })
  boutonRegles.addEventListener("click", (event) => {
    event.preventDefault();
    switchRegles();
    boutonRegles.classList.toggle("actif");
    
  })



  boutonMediter.addEventListener("click", (event) => {
    event.preventDefault();
    if (!aDejaClique) {
        chronoPrincipal();
        aDejaClique = true;
    }
    mediterManuellement();

    majEtatBonus(bonus1, boutonAchatBonus1, valeurBtnBonus1);
    majEtatBonus(bonus2, boutonAchatBonus2, valeurBtnBonus2);
    majEtatBonus(bonus3, boutonAchatBonus3, valeurBtnBonus3);
  });
  boutonAmeliorer.addEventListener("click", (event) => {
    event.preventDefault();
    boutonAmeliorer.classList.add("effaceur");
    boutonAmeliorer.disabled = true;
    conteneurAmeliorations.classList.remove("hidden");
    
    majEtatBonus(bonus1, boutonAchatBonus1, valeurBtnBonus1);
    majEtatBonus(bonus2, boutonAchatBonus2, valeurBtnBonus2);
    majEtatBonus(bonus3, boutonAchatBonus3, valeurBtnBonus3);
    
  });
  boutonAchatBonus1.addEventListener("click", (event) => {
    event.preventDefault();
    sommeBonus1++;

    if (valeurCompteur >= valeurBtnBonus1) {

    valeurCompteur -= valeurBtnBonus1;
    chiffreCompteur.textContent = parseInt(valeurCompteur);
    majEtatBonus(bonus1, boutonAchatBonus1, valeurBtnBonus1);
    majEtatBonus(bonus2, boutonAchatBonus2, valeurBtnBonus2);
    majEtatBonus(bonus3, boutonAchatBonus3, valeurBtnBonus3);
    valeurBtnBonus1 += valeurBtnBonus1 * 20 / 100;
    chiffreBouton1.textContent = Math.round(valeurBtnBonus1);
    } else return;
  });
  boutonAchatBonus2.addEventListener("click", (event) => {
    event.preventDefault();

    if (valeurCompteur >= valeurBtnBonus2) {

    valeurCompteur -= valeurBtnBonus2;
    chiffreCompteur.textContent = parseInt(valeurCompteur);
    majEtatBonus(bonus1, boutonAchatBonus1, valeurBtnBonus1);
    majEtatBonus(bonus2, boutonAchatBonus2, valeurBtnBonus2);
    majEtatBonus(bonus3, boutonAchatBonus3, valeurBtnBonus3);
    valeurBtnBonus2 += valeurBtnBonus2 * 20 / 100;
    chiffreBouton2.textContent = Math.round(valeurBtnBonus2);
    ajout1PointPar2s();
    const id = ajout1PointPar2s();
    idSetIntervals.push(id);
    valeurQteFilets = idSetIntervals.length;
    chiffreNbreFilets.textContent = valeurQteFilets;

    }
  });
  boutonAchatBonus3.addEventListener("click", (event) => {
    event.preventDefault();

    if (valeurCompteur >= valeurBtnBonus3) {

    majEtatBonus(bonus1, boutonAchatBonus1, valeurBtnBonus1);
    majEtatBonus(bonus2, boutonAchatBonus2, valeurBtnBonus2);
    majEtatBonus(bonus3, boutonAchatBonus3, valeurBtnBonus3);
    valeurBtnBonus3 += valeurBtnBonus3 * 20 / 100;
    chiffreBouton3.textContent = Math.round(valeurBtnBonus3);
    valeurCompteur += valeurBtnBonus3;
    chiffreCompteur.textContent = parseInt(valeurCompteur);
    chrono30();
    idSetIntervals.push(chrono30)
    }
  });




  boutonAccueil.addEventListener("click", (event) => {
    event.preventDefault();

    fenetreRetourAccueil();
    window.location.reload();
  })
  boutonRejouer.addEventListener("click", (event) => {
    event.preventDefault();
    fenetreRejouer();
    reset();
  })
  boutonQuitter.addEventListener("click", (event) => {
    event.preventDefault();
    fenetreMerci();
  })






  function mediterManuellement() {
    valeurCompteur = valeurCompteur + 111 + sommeBonus1;
    chiffreCompteur.textContent = Math.round(valeurCompteur);
  }
  function apparition(bonus, bouton) {
    bonus.style.opacity = "1";
    bonus.style.filter = "grayscale(0%)";
    bouton.style.backgroundColor = "#0058ab";
  }
  function disparition(bonus, bouton) {
    bonus.style.opacity = "0.25";
    bonus.style.filter = "grayscale(80%)";
    bouton.style.backgroundColor = "grey";
  }
  function verifierDispo(valeur) {
    if (valeur <= valeurCompteur) {
        return true;
    } else {
        return false;
    }
  }
  function ajout1PointPar2s() {
    const filetActif = setInterval(() => {
        valeurCompteur++;
        chiffreCompteur.textContent = parseInt(valeurCompteur);
    }, 2000);
    return filetActif;
  }
  function chronoPrincipal() {
    const time = setInterval(() => {
        valeurTimer--;
        chiffreTimer.textContent = valeurTimer;

        if (valeurTimer <= 0) {
            chiffreCompteurTotal.textContent = Math.round(valeurCompteur);
            clearInterval(time);
            idSetIntervals.forEach(id => clearInterval(id));
            fenetreDeFin();
        }
    }, 1000);
    return time;
  }
  function chrono30() {
        boutonAchatBonus3.disabled = true;
        boutonAchatBonus3.style.backgroundColor = "grey";
        bonus3.style.backgroundColor = "rgb(175, 215, 205)";

    const time30 = setInterval(() => {
        valeurTimer30--;
        chiffreTimer30.textContent = valeurTimer30;
        
        if (valeurTimer30 <= 0) {
            clearInterval(time30);
            valeurTimer30 = 30;
            chiffreTimer30.textContent = valeurTimer30;
            boutonAchatBonus3.style.backgroundColor = "#0058ab";
            boutonAchatBonus3.disabled = false;
            bonus3.style.backgroundColor = "rgb(63, 220, 178)";
        }
    }, 1000);
    return time30;
  }
  function majEtatBonus(bonus, bouton, valeur) {
    if (verifierDispo(valeur)) {
      apparition(bonus, bouton);
      bouton.disabled = false;
      bouton.style.cursor = "pointer";
    } else {
      disparition(bonus, bouton);
      bouton.disabled = true;
      bouton.style.cursor = "default";
    };
    if (valeurTimer30 < 30) {
      boutonAchatBonus3.disabled = true;
      boutonAchatBonus3.style.backgroundColor = "grey";
      bonus3.style.opacity = "0.6";
    }
  }
  function fenetreDeFin() {
    
      fenetre.classList.add("hidden");
      fenetre.classList.remove("active");
      fenetreFin.classList.remove("hidden");
      fenetreFin.classList.add("active");

  }
  function fenetreDeJeu() {
    fenetreAccueil.classList.remove("active");
    fenetreAccueil.classList.add("hidden");
    fenetre.classList.remove("hidden");
    fenetre.classList.add("active");
  }
  function fenetreRetourAccueil() {
    fenetreFin.classList.remove("active");
    fenetreFin.classList.add("hidden");
    fenetreAccueil.classList.remove("hidden");
    fenetreAccueil.classList.add("active");
    reset();
  }
  function fenetreRejouer() {
    fenetreFin.classList.remove("active");
    fenetreFin.classList.add("hidden");
    fenetre.classList.remove("hidden");
    fenetre.classList.add("active");
  }
  function fenetreMerci() {
    fenetreFin.classList.add("hidden");
    fenetreFin.classList.remove("active");
    fenetreMerciFinal.classList.remove("hidden");
    fenetreMerciFinal.classList.add("active");
    bodyx.style.backgroundColor = "black";
  }
  function switchRegles() {
    if (topScores.classList.contains("active")) {
    topScores.classList.remove("active");
    topScores.classList.add("hidden");
    afficheRegles.classList.remove("hidden");
    afficheRegles.classList.add("active");
    } else {
    topScores.classList.remove("hidden");
    topScores.classList.add("active");
    afficheRegles.classList.remove("active");
    afficheRegles.classList.add("hidden");
    }
  }
  function reset() {
    valeurCompteur = 0;
    chiffreCompteur.textContent = valeurCompteur;
    valeurTimer = 3;
    chiffreTimer.textContent = valeurTimer;
    aDejaClique = false;
  }
});