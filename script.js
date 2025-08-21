let scoreJoueur = 0;
let scoreOrdi = 0;

function jouer(choixJoueur) {
  const options = ['pierre', 'feuille', 'ciseaux'];
  const choixOrdi = options[Math.floor(Math.random() * options.length)];

  let resultat = "";

  if (choixJoueur === choixOrdi) {
    resultat = "Égalité ! ";
  } else if (
    (choixJoueur === 'pierre' && choixOrdi === 'ciseaux') ||
    (choixJoueur === 'feuille' && choixOrdi === 'pierre') ||
    (choixJoueur === 'ciseaux' && choixOrdi === 'feuille')
  ) {
    resultat = `Tu gagnes !  (${choixJoueur} bat ${choixOrdi})`;
    scoreJoueur++;
  } else {
    resultat = `Tu perds !  (${choixOrdi} bat ${choixJoueur})`;
    scoreOrdi++;
  }

  document.getElementById('resultat').textContent = resultat;
  document.getElementById('score-joueur').textContent = scoreJoueur;
  document.getElementById('score-ordi').textContent = scoreOrdi;
}
