function getDayForLoop(day) {
    const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    for (let i = 0; i < days.length; i++) {
        if (day === i + + 1) {
            return days[i];
        }
    }
    return "Numéro de jour invalide";
}

console.log(getDayForLoop(3));  // "Mercredi"