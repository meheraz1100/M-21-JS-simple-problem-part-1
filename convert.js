// 12 inch -> 1 feey

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

const personHeight = inchToFeet(75);
console.log("Height of person : ", personHeight);