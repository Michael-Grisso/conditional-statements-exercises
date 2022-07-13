function main(hours, minutes) {
    let additionalMinutes = 15;
    let totalMinutes = additionalMinutes + minutes;
    if (hours < 24 && totalMinutes <= 59) {
        console.log(`${hours}:${totalMinutes}`);
    }
    if (hours < 23 && totalMinutes > 59) {
        hours++;
        totalMinutes = totalMinutes -60;
        if (totalMinutes > 0 && totalMinutes <= 9) {
            console.log(`${hours}:0${totalMinutes}`);
        } else {
            console.log(`${hours}:${totalMinutes}`);
        }
    }
    if (hours === 23 && totalMinutes > 59) {
        hours = 0;
        totalMinutes = totalMinutes - 60;
        if (totalMinutes > 0 && totalMinutes <= 9) {
            console.log(`${hours}:0${totalMinutes}`);
        } else {
            console.log(`${hours}:${totalMinutes}`);
        }
    }
}
main(12,49);