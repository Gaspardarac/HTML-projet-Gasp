// script.js
document.addEventListener('DOMContentLoaded', function() {
    const joueurs = [
        { nom: "Novak Djokovic", dateNaissance: "22 mai 1987", nationalité: "Serbe", style: "droitier, revers à deux mains", titres: 98, grandschelem: 24, prizeMoney: "181 599 018", detailsPage: "novak_djokovic_détails.html", img: "images/novak_djokovic.jpg"},
        { nom: "Roger Federer", dateNaissance: "8 août 1981", nationalité: "Suisse", style: "droitier, revers à une main", titres: 103, grandschelem: 20,  prizeMoney: "130 594 339 $", detailsPage: "roger_federer_détails.html", img : "images/roger_federer.jpg"},
        { nom: "Rafael Nadal", dateNaissance: "3 juin 1986", nationalité: "Espagnol", style: "gaucher, revers à deux mains", titres: 92, grandschelem: 22, prizeMoney: "134 329 921 $", detailsPage: "rafael_nadal_détails.html", img: "images/rafael_nadal.jpg"},
        { nom: "Pete Sampras", dateNaissance: "12 août 1971", nationalité: "Américain", style: "droitier, revers à une main", titres: 64, grandschelem: 14, prizeMoney: "43 280 489 $", img: "images/pete_sampras.jpg"},
        { nom: "Bjorn Borg", dateNaissance: "6 juin 1956", nationalité: "Suédois", style: "droitier, revers à deux mains", titres: 64, grandschelem: 11, prizeMoney: "3 655 751 $", img: "images/bjorn_borg.jpg"},
        { nom: "Rod Laver", dateNaissance: "9 août 1938", nationalité: "Australien", style: "gaucher, revers à une main", titres: 200, grandschelem: 11, prizeMoney: "1 565 413 $", img: "images/rod_laver.jpg"}, 
        { nom: "Andre Agassi", dateNaissance: "29 avril 1970", nationalité: "Américain", style: "droitier, revers à deux mains", titres: 60, grandschelem: 8, prizeMoney: "31 152 975 $", img: "images/andre_agassi.jpg"},
        { nom: "Jimmy Connors", dateNaissance: "2 septembre 1952", nationalité: "Américain", style: "gaucher, revers à deux mains", titres: 109, grandschelem: 8, prizeMoney: "8 641 040 $", img: "images/jimmy_connors.jpg"},
        { nom: "John McEnroe", dateNaissance: "16 février 1959", nationalité: "Américain", style: "gaucher, revers à une main", titres: 77, grandschelem: 7,  prizeMoney: "12 552 132 $", img: "images/john_mcenroe.jpg"},
        { nom: "Ivan Lendl", dateNaissance: "7 mars 1960", nationalité: "Tchèque et Américain", style: "droitier, revrs à une main", titres: 94, grandschelem: 8, prizeMoney: "21 262 417 $", img: "images/ivan_lendl.jpg"}

       
    ];

    const liste = document.getElementById('joueurListe');
    const details = document.getElementById('detailsJoueur');

    joueurs.forEach(joueur => {
        const item = document.createElement('li');
        const img = document.createElement('img');
        img.src = joueur.img;
        img.alt = `Photo de ${joueur.nom}`;
        img.style.width = "100px"; // Ajustez la taille comme nécessaire
        
        const link = document.createElement('a');
        link.href = joueur.detailsPage;
        link.textContent = joueur.nom;
        link.target = "_blank";

        item.appendChild(img);
        item.appendChild(link);
        item.textContent = joueur.nom;
        item.onclick = function() {
            details.innerHTML = `<h2>${joueur.nom}</h2>
                                 <img src="${joueur.img}" alt="Photo de ${joueur.nom}" style="width: 200px;">
                                 <p>Date de naissance: ${joueur.dateNaissance}</p>
                                 <p>Nationalité: ${joueur.nationalité}</p>
                                 <p>Style: ${joueur.style}</p>
                                 <p>Titres: ${joueur.titres}</p>
                                 <p>Nombre de Grands Chelems: ${joueur.grandschelem}</p>
                                 <p>Prize Money: ${joueur.prizeMoney}</p>
                                 <p><a href='${joueur.detailsPage}' target='_blank'>Plus de détails</a></p>` ;
                                 
                                 
        };
        liste.appendChild(item);
    });
});