
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

  let valeurCompteur = 0;
  let valeurBtnBonus1 = parseInt(chiffreBouton1.textContent);
  let valeurBtnBonus2 = parseInt(chiffreBouton2.textContent);
  let valeurBtnBonus3 = parseInt(chiffreBouton3.textContent);
  let sommeBonus1 = 0;






  boutonMediter.addEventListener("click", (event) => {
    event.preventDefault();
    mediterManuellement();

    if (verifierDispo(valeurBtnBonus1)) {
        apparition(bonus1);
    } else disparition(bonus1);
    if (verifierDispo(valeurBtnBonus2)) {
        apparition(bonus2);
    } else disparition(bonus2);
    if (verifierDispo(valeurBtnBonus3)) {
        apparition(bonus3);
    } else disparition(bonus3);

  });

  boutonAmeliorer.addEventListener("click", (event) => {
    event.preventDefault();
    conteneurAmeliorations.classList.remove("hidden");
    
    if (verifierDispo(valeurBtnBonus1)) {
        apparition(bonus1);
    } else disparition(bonus1);
    if (verifierDispo(valeurBtnBonus2)) {
        apparition(bonus2);
    } else disparition(bonus2);
    if (verifierDispo(valeurBtnBonus3)) {
        apparition(bonus3);
    } else disparition(bonus3);
    
  });

  boutonAchatBonus1.addEventListener("click", (event) => {
    event.preventDefault();
    sommeBonus1++;
    valeurCompteur -= valeurBtnBonus1;
    chiffreCompteur.textContent = valeurCompteur;
    if (verifierDispo(valeurBtnBonus1)) {
        apparition(bonus1);
    } else disparition(bonus1);
  })





  function mediterManuellement() {
    valeurCompteur = valeurCompteur + 1 + sommeBonus1;
    chiffreCompteur.textContent = valeurCompteur;
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
});