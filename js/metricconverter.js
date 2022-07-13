function main(convNum, measurement1, measurement2) {
    let mm = 1000;
    let cm = 100;
    let mi = 0.000621371192;
    let inch = 39.3700787;
    let km = 0.001;
    let ft = 3.2808399;
    let yd = 1.0936133;
    let conversion = 0;

    if (measurement1 === "km" && measurement2 === "ft") {
        conversion += convNum * ft / km;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "km" && measurement2 === "mm") {
        conversion += convNum * mm / km;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "km" && measurement2 === "cm") {
        conversion += convNum * cm / km;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "km" && measurement2 === "mi") {
        conversion += convNum * mi / km;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "km" && measurement2 === "in") {
        conversion += convNum * inch / km;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "km" && measurement2 === "yd") {
        conversion += convNum * yd / km;
        console.log(conversion.toFixed(10));
    }

    if (measurement1 === "mm" && measurement2 === "ft") {
        conversion += convNum * ft / mm;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "mm" && measurement2 === "km") {
        conversion += convNum * km / mm;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "mm" && measurement2 === "cm") {
        conversion += convNum * cm / mm;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "mm" && measurement2 === "mi") {
        conversion += convNum * mi / mm;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "mm" && measurement2 === "in") {
        conversion += convNum * inch / mm;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "mm" && measurement2 === "yd") {
        conversion += convNum * yd / mm;
        console.log(conversion.toFixed(10));
    }

    if (measurement1 === "cm" && measurement2 === "ft") {
        conversion += convNum * ft / cm;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "cm" && measurement2 === "km") {
        conversion += convNum * km / cm;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "cm" && measurement2 === "mm") {
        conversion += convNum * mm / cm;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "cm" && measurement2 === "mi") {
        conversion += convNum * mi / cm;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "cm" && measurement2 === "in") {
        conversion += convNum * inch / cm;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "cm" && measurement2 === "yd") {
        conversion += convNum * yd / cm;
        console.log(conversion.toFixed(10));
    }

    if (measurement1 === "mi" && measurement2 === "ft") {
        conversion += convNum * ft / mi;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "mi" && measurement2 === "km") {
        conversion += convNum * km / mi;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "mi" && measurement2 === "mm") {
        conversion += convNum * mm / mi;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "mi" && measurement2 === "cm") {
        conversion += convNum * cm / mi;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "mi" && measurement2 === "in") {
        conversion += convNum * inch / mi;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "mi" && measurement2 === "yd") {
        conversion += convNum * yd / mi;
        console.log(conversion.toFixed(10));
    }

    if (measurement1 === "in" && measurement2 === "ft") {
        conversion += convNum * ft / inch;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "in" && measurement2 === "km") {
        conversion += convNum * km / inch;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "in" && measurement2 === "mm") {
        conversion += convNum * mm / inch;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "in" && measurement2 === "cm") {
        conversion += convNum * cm / inch;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "in" && measurement2 === "mi") {
        conversion += convNum * mi / inch;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "in" && measurement2 === "yd") {
        conversion += convNum * yd / inch;
        console.log(conversion.toFixed(10));
    }

    if (measurement1 === "ft" && measurement2 === "in") {
        conversion += convNum * inch / ft;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "ft" && measurement2 === "km") {
        conversion += convNum * km / ft;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "ft" && measurement2 === "mm") {
        conversion += convNum * mm / ft;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "ft" && measurement2 === "cm") {
        conversion += convNum * cm / ft;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "ft" && measurement2 === "mi") {
        conversion += convNum * mi / ft;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "ft" && measurement2 === "yd") {
        conversion += convNum * yd / ft;
        console.log(conversion.toFixed(10));
    }

    if (measurement1 === "yd" && measurement2 === "in") {
        conversion += convNum * inch / yd;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "yd" && measurement2 === "km") {
        conversion += convNum * km / yd;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "yd" && measurement2 === "mm") {
        conversion += convNum * mm / yd;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "yd" && measurement2 === "cm") {
        conversion += convNum * cm / yd;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "yd" && measurement2 === "mi") {
        conversion += convNum * mi / yd;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "yd" && measurement2 === "ft") {
        conversion += convNum * ft / yd;
        console.log(conversion.toFixed(10));
    } else if (measurement1 === "yd" && measurement2 === "yd") {
        conversion += convNum * yd / yd;
        console.log(conversion.toFixed(10));
    }


}
main(12423, "yd", "yd");