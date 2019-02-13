//On utilise cette variable pour prendre la date dans nos calculs.
var d = new Date();
//On va se servir des heures pour l'aiguille des heures.
var h = d.getHours();
// Cette variable sera pour l'aiguille des minutes.
var m = d.getMinutes();
// Celle-ci pour les secondes.
var s = d.getSeconds();
// Définit la position des aiguilles par rapport à l'heure qu'il est à l'initialisation de la page.

// Les secondes avancent de 6° par secondes pour arriver à 360 degrès chaque minutes.
var ds = s * 6;
// Les minutes doivent avancer de 360° chaque heure.
//  Il faut donc la faire avancer de 6° par minute.
// L'idée est de diviser la minute en secondes. Une minute = 60 secondes. Il faut donc faire avancer 
// l'aiguille de s/60 pour avoir le placement à la seconde T. Par exemple, s'il est 8h40 et 45s, il 
// faudra placer l'aiguille des minutes entre le 40 et le 41, à 45/60 entre 40 et 41 exactement. 

// Le calcul:

// Si on décompose le calcul:
// m*6 signifie qu'on prend le nombre de minutes *6 pour avoir un nombre = au nombre de degrès de la rotation de l'aiguille.
// +6*(s/60) signifie qu'on va ajouter 6° toutes les 60 secondes. s est le nombre de secondes à l'instant t.
// 60 est le nombre de secondes qu'il y a dans une minute.
// s/60 permet de montrer le placement de l'aiguille entre la minute m et la minute m+1 

var dm = m * 6 + 6 * (s / 60);
// L'aiguille des heures avance de 30° chaque heure pour atteindre 360° en 12h.
// Ici, le calcul est le même que celui des secondes, sauf que l'aiguille des heures avance par rapport à celle 
// des minutes. Par exemple, à 8h40, l'aiguille doit être entre 8h et 9h, à 40/60 entre le 8 et le 9, donc aux 2/3.
// ici, le calcul est m/60 uniquement parce que la valeur qui va faire évoluer l'aiguille dans le temps est basée 
// sur le chiffre des minutes et non celui des secondes.

// Le calcul:

// Si on décompose le calcul:
// h*30 signifie qu'on prend le nombre d'heures *30 pour avoir un nombre = au nombre de degrès de la rotation de l'aiguille.
// +30*(m/60) signifie qu'on va ajouter 30° toutes les 60 minutes. m est le nombre de minutes à l'instant t.
// 60 est le nombre de minutes qu'il y a dans une heure.
// m/60 permet de montrer le placement de l'aiguille entre l'heure h  et l'heure h+1.
var dh = h * 30 + 30 * (m / 60);

setInterval(() => {
    // Définit le pas de l'aiguille par rapport à l'évolution de l'heure chaque seconde. Ici, les secondes
    // avances de 6°/secondes pour atteindre 360° en 1 minute.
    ds += 6;
    // Ici, l'aiguille des minutes doit avancer de 6° par minute, soit 60 secondes. L'idée est de diviser par 60
    // pour que l'aiguille ait avancé de 6° dès que le compteur arrive à 60
    dm += 6 / 60;
    // Ici, l'aiguille des heures doit avancer de 30° chaque heure, soit chaque 3600 secondes.L'idée est de diviser par 3600
    // pour que l'aiguille ait avancé de 30° dès que le compteur arrive à 3600
    dh += 30 / 3600;

// Ici, le chiffre calculé au-dessus va servir pour afficher le nombre de degrès de l'aiguille à l'instant t.
// Ce chiffre augmente chaque seconde pour avoir une horloge fonctionnelle.
    document.getElementById("hour").style.transform = "rotate(" + dh + "deg)";
    document.getElementById("minute").style.transform = "rotate(" + dm + "deg)";
    document.getElementById("second").style.transform = "rotate(" + ds + "deg)";
}, 1000);