function main(secs1, secs2, secs3) {

/*--find total seconds--*/
let totalSeconds = secs1 + secs2 + secs3;
let remainderSeconds;

/*--setup if-else statements for conditions--*/
if (totalSeconds < 10) {
    console.log(`:0${totalSeconds}`);
} else if (totalSeconds > 0 && totalSeconds <= 59) {
    console.log(`0:${totalSeconds}`);
} else if (totalSeconds > 59 && totalSeconds <= 119) {
    remainderSeconds = totalSeconds - 60;
        if (remainderSeconds > 0 && remainderSeconds <= 9) {
            console.log(`1:0${remainderSeconds}`);
        } else {
            console.log(`1:${remainderSeconds}`);
        }
} else if (totalSeconds > 119 && totalSeconds <= 179) {
    remainderSeconds = totalSeconds - 120;
        if (remainderSeconds > 0 && remainderSeconds <= 9) {
        console.log(`2:0${remainderSeconds}`);
        } else {
        console.log(`2:${remainderSeconds}`);
        }
}
}
main(14, 12, 10);