function main(points) {
    let bonusPoints = 0;
    let totalPoints = 0;
    if (points <= 100) {
        bonusPoints += 5;
    } else if (points > 100 && points <= 1000) {
        bonusPoints = points * (0.2);
    } else if (points > 1000) {
        bonusPoints = points * (0.1);
    }

    /*--additional bonus points (added after above is calculated--*/
    if (points % 2 === 0) {
        bonusPoints += 1;
    } else if (points % 10 === 5) {
        bonusPoints += 2;
    }

    totalPoints = points + bonusPoints;

    /*--output--*/
    console.log(bonusPoints);
    console.log(totalPoints);

}
main(20);