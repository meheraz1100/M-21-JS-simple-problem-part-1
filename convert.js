// 12 inch -> 1 feey

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

// 75 
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemining = inch % 12;
    const result = feetNumber + ' feet ' + inchRemining + ' inch. '
    return result;
}


const personHeight = inchToFeet(75);
// console.log("Height of person : ", personHeight);

const personHeight2 = inchToFeet2(75);
// console.log("Height of person : ", personHeight2);



function mileTokillometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}


function kiloTomile(kilo){
    const mile = kilo * 0.621371;
    return mile;
}


function gramTomiligram(gram){
    const miligram = gram * 1000;
    return miligram;
}

function miligramToGram(miligram){
    const gram = miligram / 1000;
    return gram;
}

function gramToKilogram(gram){
    const kilogram = gram / 1000;
    return kilogram;
}

function kilogramToGram(kilogram){
    const gram = kilogram * 1000;
    return gram;
}

function gramToOunce(gram){
    const ounce = gram / 28.35;
    return ounce;
}

function ounceToGram(ounce){
    const gram = ounce * 28.35;
    return gram;
}

function gramToPound(gram){
    const pound = gram / 453.592;
    return pound;
}

function poundToGram(pound){
    const gram = pound * 453.592;
    return gram;
}

function gramToTon(gram){
    const ton = gram / 1000000;
    return ton;
}

function tonToGram(ton){
    const gram = ton * 1000000;
    return gram;
}



