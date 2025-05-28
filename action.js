document.addEventListener("DOMContentLoaded", () => {
  const chiffreCompteur = document.querySelector("#compteur");
  const boutonMediter = document.querySelector("#btn-mediter");

  const conteneurAmeliorations = document.querySelector(".contain-ameliorations");
  const boutonAmeliorer = document.querySelector("#btn-achat");

  const bonus1 = document.querySelector(".bonus1");
  const boutonAchatBonus1 = document.querySelector("#btn-bonus-manuel");
  const chiffreBouton1 = document.querySelector(".prix-bonus1");

  const bonus2 = document.querySelector(".bonus2");
  const boutonAchatBonus2 = document.querySelector("#btn-bonus-auto");
  const chiffreBouton2 = document.querySelector(".prix-bonus2");

  const bonus3 = document.querySelector(".bonus3");
  const boutonAchatBonus3 = document.querySelector("#btn-bonus-boost");
  const chiffreBouton3 = document.querySelector(".prix-bonus3");

  const chiffreTimer = document.querySelector("#timer");
  const chiffreTimer30 = document.querySelector("#timer30");

  let valeurCompteur = 0;
  let valeurBtnBonus1 = parseInt(chiffreBouton1.textContent);
  let valeurBtnBonus2 = parseInt(chiffreBouton2.textContent);
  let valeurBtnBonus3 = parseInt(chiffreBouton3.textContent);
  let sommeBonus1 = 0;
  let valeurTimer = 110;
  let aDejaClique = false;
  let valeurTimer30 = 30;





  boutonMediter.addEventListener("click", (event) => {
    event.preventDefault();
    if (!aDejaClique) {
        chronoPrincipal();
        aDejaClique = true;
    }
    mediterManuellement();

if (verifierDispo(valeurBtnBonus1)) {
        apparition(bonus1);
        boutonAchatBonus1.disabled = false;
    } else {
      disparition(bonus1);
      boutonAchatBonus1.disabled = true;
    }
    if (verifierDispo(valeurBtnBonus2)) {
        apparition(bonus2);
        boutonAchatBonus2.disabled = false;
    } else {
      disparition(bonus2);
      boutonAchatBonus2.disabled = true;
    }
    if (verifierDispo(valeurBtnBonus3)) {
        apparition(bonus3);
        boutonAchatBonus3.disabled = false;
    } else {
      disparition(bonus3);
      boutonAchatBonus3.disabled = true;
    }
  });

  boutonAmeliorer.addEventListener("click", (event) => {
    event.preventDefault();
    boutonAmeliorer.classList.add("hidden");
    conteneurAmeliorations.classList.remove("hidden");
    
  if (verifierDispo(valeurBtnBonus1)) {
        apparition(bonus1);
        boutonAchatBonus1.disabled = false;
    } else {
      disparition(bonus1);
      boutonAchatBonus1.disabled = true;
    }
    if (verifierDispo(valeurBtnBonus2)) {
        apparition(bonus2);
        boutonAchatBonus2.disabled = false;
    } else {
      disparition(bonus2);
      boutonAchatBonus2.disabled = true;
    }
    if (verifierDispo(valeurBtnBonus3)) {
        apparition(bonus3);
        boutonAchatBonus3.disabled = false;
    } else {
      disparition(bonus3);
      boutonAchatBonus3.disabled = true;
    }
    
  });

  boutonAchatBonus1.addEventListener("click", (event) => {
    event.preventDefault();
    feedBackColorBonus(bonus1);
    sommeBonus1++;
    valeurCompteur -= valeurBtnBonus1;
    chiffreCompteur.textContent = parseInt(valeurCompteur);
  if (verifierDispo(valeurBtnBonus1)) {
        apparition(bonus1);
        boutonAchatBonus1.disabled = false;
    } else {
      disparition(bonus1);
      boutonAchatBonus1.disabled = true;
    }
    if (verifierDispo(valeurBtnBonus2)) {
        apparition(bonus2);
        boutonAchatBonus2.disabled = false;
    } else {
      disparition(bonus2);
      boutonAchatBonus2.disabled = true;
    }
    if (verifierDispo(valeurBtnBonus3)) {
        apparition(bonus3);
        boutonAchatBonus3.disabled = false;
    } else {
      disparition(bonus3);
      boutonAchatBonus3.disabled = true;
    }
    valeurBtnBonus1 += valeurBtnBonus1 * 20 / 100;
    chiffreBouton1.textContent = Math.round(valeurBtnBonus1);
  });
   boutonAchatBonus2.addEventListener("click", (event) => {
    event.preventDefault();
    feedBackColorBonus(bonus2);
    valeurCompteur -= valeurBtnBonus2;
    chiffreCompteur.textContent = parseInt(valeurCompteur);
   if (verifierDispo(valeurBtnBonus1)) {
        apparition(bonus1);
        boutonAchatBonus1.disabled = false;
    } else {
      disparition(bonus1);
      boutonAchatBonus1.disabled = true;
    }
    if (verifierDispo(valeurBtnBonus2)) {
        apparition(bonus2);
        boutonAchatBonus2.disabled = false;
    } else {
      disparition(bonus2);
      boutonAchatBonus2.disabled = true;
    }
    if (verifierDispo(valeurBtnBonus3)) {
        apparition(bonus3);
        boutonAchatBonus3.disabled = false;
    } else {
      disparition(bonus3);
      boutonAchatBonus3.disabled = true;
    }
    valeurBtnBonus2 += valeurBtnBonus2 * 20 / 100;
    chiffreBouton2.textContent = Math.round(valeurBtnBonus2);
    ajout1PointPar2s();
  });
  boutonAchatBonus3.addEventListener("click", (event) => {
        event.preventDefault();
        chrono30();
        feedBackColorBonus(bonus3);
        valeurCompteur -= valeurBtnBonus3;
        chiffreCompteur.textContent = parseInt(valeurCompteur);
   if (verifierDispo(valeurBtnBonus1)) {
        apparition(bonus1);
        boutonAchatBonus1.disabled = false;
    } else {
      disparition(bonus1);
      boutonAchatBonus1.disabled = true;
    }
    if (verifierDispo(valeurBtnBonus2)) {
        apparition(bonus2);
        boutonAchatBonus2.disabled = false;
    } else {
      disparition(bonus2);
      boutonAchatBonus2.disabled = true;
    }
    if (verifierDispo(valeurBtnBonus3)) {
        apparition(bonus3);
        boutonAchatBonus3.disabled = false;
    } else {
      disparition(bonus3);
      boutonAchatBonus3.disabled = true;
    }
    valeurBtnBonus3 += valeurBtnBonus3 * 20 / 100;
    chiffreBouton3.textContent = Math.round(valeurBtnBonus3);
  });





  function mediterManuellement() {
    valeurCompteur = valeurCompteur + 1 + sommeBonus1;
    chiffreCompteur.textContent = Math.round(valeurCompteur);
  }
  function apparition(bonus) {
    bonus.classList.remove("hidden");
  }
  function disparition(bonus) {
    bonus.classList.add("hidden");
  }
  function verifierDispo(bonus) {
    if (bonus <= valeurCompteur) {
        return true;
    } else {
        return false;
    }
  }
  function ajout1PointPar2s() {
    return setInterval(() => {
        valeurCompteur++;
        chiffreCompteur.textContent = parseInt(valeurCompteur);
    }, 2000)
  }
  function feedBackColorBonus(bonus) {
    bonus.style.backgroundColor = "#F9D5BE"
    setTimeout(() => {
        bonus.style.backgroundColor = "";
    }, 250);
  }
   function chronoPrincipal() {
    const time = setInterval(() => {
        valeurTimer--;
        chiffreTimer.textContent = valeurTimer;

        if (valeurTimer <= 0) {
            clearInterval(time);
        }
    }, 1000);
    return time;
  }
  function chrono30() {
    const time30 = setInterval(() => {
        boutonAchatBonus3.style.backgroundColor = "grey";
        boutonAchatBonus3.disabled = true;
        valeurTimer30--;
        chiffreTimer30.textContent = valeurTimer30;
      
        if (valeurTimer30 <= 0) {
            clearInterval(time30);
            boutonAchatBonus3.disabled = false;
        }
    }, 1000);
    return time30;
  }
  
});