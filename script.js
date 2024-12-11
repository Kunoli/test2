// Ajout d'astuces dynamiques
const tips = [
    "Astuce : Utilisez !help pour obtenir des informations sur les commandes.",
    "Astuce : Respectez les règles pour une meilleure expérience.",
    "Astuce : Contactez un administrateur si vous avez un problème."
];

const tipsElement = document.getElementById("tips");

// Change l'astuce toutes les 5 secondes
let index = 0;
setInterval(() => {
    index = (index + 1) % tips.length;
    tipsElement.textContent = tips[index];
}, 5000);
