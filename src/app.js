var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count) {
    if (count < 1) {
        return `Number cannot be zero/negative`;
    }
    for (let i = 0; i < count; i++)
        chocolates.unshift(color);
    return chocolates;
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
    let remove = [];
    if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser"
    }
    if (number > 0) {
        for (i = 0; i < number; i++) {
            remove[i] = chocolates.shift();
        }
        return remove
    } else {
        return 'Number cannot be zero/negative'
    }

}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, number) {
    let dis = [];
    if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser"
    }
    if (number > 0) {
        for (i = 0; i < number; i++) {
            dis[i] = chocolates.pop(i);
        }
        return dis
    } else {
        return 'Number cannot be zero/negative'
    }

}


//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, number, color) {
    let discolor = [],
        count = 0;
    if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser"
    }

    if (number > 0) {
        for (i = chocolates.length; i >= 0; i--) {
            if (chocolates[i] == color) {
                if (count != number)
                    discolor[count++] = chocolates.pop(i);

            }

        }
        return discolor
    } else {
        return 'Number cannot be zero/negative'
    }
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
    var numberchoclate = [];
    var choice = ["green", "silver", "blue", "crimson", "purple", "red", "pink"]

    for (let i = 0; i < choice.length; i++) {
        let count = 0;
        for (let j = 0; j < chocolates.length; j++) {
            if (choice[i] == chocolates[j])
                count++;
        }
        numberchoclate[i] = count;

    }
    return numberchoclate.filter(Number)
}



//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
    var numberchoclate = [];
    var choice = ["green", "silver", "blue", "crimson", "purple", "red", "pink"]
    if (chocolates > 0) {
        for (let i = 0; i < choice.length; i++) {
            let count = 0;
            for (let j = 0; j < chocolates.length; j++) {
                if (choice[i] == chocolates[j])
                    count++;
            }
            numberchoclate[i] = count;

        }
        let array1 = [
            [numberchoclate[0], choice[0]],
            [numberchoclate[1], choice[1]],
            [numberchoclate[2], choice[2]],
            [numberchoclate[3], choice[3]],
            [numberchoclate[4], choice[4]],
            [numberchoclate[5], choice[5]],
            [numberchoclate[6], choice[6]],
        ];
        array1.sort();
        array1.reverse();
        return array1;
    } else {
        return `no more chocolate`
    }
}



//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor) {
    if (number.length == chocolates.length) {
        for (i = 0; i < chocolates.length; i++) {
            if (chocolates[i] == color) {
                chocolates.splice(i, 1, finalColor)
            }
        }
    }
    return chocolates
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed