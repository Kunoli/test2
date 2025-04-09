// Tableaux des images de fond et des citations
const backgrounds = [
  'images/bg1.jpg',
  'images/bg2.jpg',
  'images/bg3.jpg'
];

const quotes = [
  "“Ce n'est pas la douleur qui me fait peur, c’est d’oublier qui je suis.”",
  "“Je suis une goule. Je ne suis pas humain.”",
  "“C’est parce que je suis faible que je veux devenir plus fort.”",
  "“Mourir, c’est facile. Vivre demande du courage.”",
  "“Même si je suis brisé, je continuerai d’avancer.”",
  "“Il n'y a pas de place pour les faibles dans ce monde.”",
  "“Si tu ne peux pas battre la peur, fais-en une arme.”"
];

// Références aux éléments HTML
const bgContainer = document.getElementById('bg-container');
const quoteText = document.getElementById('quote-text');
const progressBar = document.getElementById('progress');
const loadingText = document.getElementById('loading-text');
const muteBtn = document.getElementById('mute-btn');
const music = document.getElementById('bg-music');

// Fonction pour changer le fond d'image avec effet de fondu
function changeBackground() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * backgrounds.length);
  } while (bgContainer.style.backgroundImage.indexOf(backgrounds[newIndex]) !== -1);
  
  // Fade out
  bgContainer.style.opacity = 0;
  setTimeout(() => {
    bgContainer.style.backgroundImage = `url('${backgrounds[newIndex]}')`;
    bgContainer.style.opacity = 1;
  }, 1000);
}

// Initialisation du background
bgContainer.style.backgroundImage = `url('${backgrounds[0]}')`;
// Changement toutes les 10 secondes
setInterval(changeBackground, 10000);

// Fonction pour changer de citation
function changeQuote() {
  const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = newQuote;
}
setInterval(changeQuote, 5000);

// Fonction de mise à jour du progress bar, qui pourra être appelée par votre addon Lua
function updateProgress(value) {
  const progress = Math.min(Math.max(value, 0), 100);
  progressBar.style.width = progress + '%';
  loadingText.textContent = `Chargement ... ${progress}%`;
  if (progress >= 100) {
    loadingText.textContent = "Chargement terminé.";
  }
}
// Rendre la fonction accessible globalement (pour l'intégration réelle via Lua)
window.updateProgress = updateProgress;

// Simulation de chargement (à remplacer par des appels réels)
let simulatedProgress = 0;
const simInterval = setInterval(() => {
  simulatedProgress += Math.floor(Math.random() * 10) + 3;
  if (simulatedProgress > 100) simulatedProgress = 100;
  updateProgress(simulatedProgress);
  if (simulatedProgress >= 100) {
    clearInterval(simInterval);
  }
}, 700);

// Gestion du bouton mute/unmute
muteBtn.addEventListener('click', () => {
  music.muted = !music.muted;
  muteBtn.textContent = music.muted ? '🔇' : '🔊';
});
