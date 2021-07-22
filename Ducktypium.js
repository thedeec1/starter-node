class Ducktypium {
    color;

    calibrationSequence = [];

    constructor(crystalColor){
        if ( this.isColorOK(crystalColor)){
            this.color = crystalColor;
        } else {
            throw new Error('color must be red blue or yellow');
        }
    }

    refract(color) {
        let refractedColor = '';

        if ( this.isColorOK(color) ) {
            refractedColor = this.refractColor(this.color, color);
            //console.log("works now");
        } else {
            throw new Error('color must be red blue or yellow');
        }

        return refractedColor;
    }

    calibrate(calibrationNumbers) {
        let calibrationString = ``;
        let calibratedNumbers = calibrationNumbers.sort().map( item => item * 3);

        calibrationString = this.formatNumbersToString(calibratedNumbers);

        console.log('cal string: ' + calibrationString);

        this.calibrationSequence = calibratedNumbers;
        //this.calibrationSequence = calibrationString;
    }


    refractColor(color1, color2) {
        let refractedClr = '';

        if (color1 === color2) {
            refractedClr = color1;
        } else if ( ((color1 === 'red') && (color2 === 'blue')) || 
                    ((color1 === 'blue') && (color2 === 'red')) ) {
                refractedClr = 'purple';
        } else if ( ((color1 === 'red') && (color2 === 'yellow')) ||
                    ((color1 === 'yellow') && (color2 === 'red'))) {
                refractedClr = 'orange';
        } else if ( ((color1 === 'blue') && (color2 === 'yellow')) ||
                    ((color1 === 'yellow') && (color2 === 'blue'))) {
                refractedClr = 'green';
        }

        return refractedClr;
    }

    isColorOK(color) {
        let colorOk = false;

        if ( (color === 'red') || (color === 'blue') || (color === 'yellow')){
            colorOk = true;
        } 

        return colorOk;
    }

    formatNumbersToString(calibratedArray){
        let calibrationString = '[';

        console.log('cal string: ' + calibrationString);
        calibratedArray.forEach( function(item, index, array) {
            calibrationString = calibrationString.concat(item);
            console.log('Item: '+item);
            if (index < array.length-1){
                calibrationString = calibrationString.concat(', ');
            }
            console.log('cal string: ' + calibrationString);
        });

        calibrationString = calibrationString.concat(']');

        return calibrationString;
    }

}

//let ducktypium = new Ducktypium("fred");
let ducktypium = new Ducktypium("red");
console.log('ducktypium color is: ' + ducktypium.color);
console.log('refracted color is: ' + ducktypium.refract('blue'));
console.log('refracted color is: ' + ducktypium.refract('yellow'));
console.log('refracted color is: ' + ducktypium.refract('red'));

ducktypium = new Ducktypium("blue");
console.log('ducktypium color is: ' + ducktypium.color);
console.log('refracted color is: ' + ducktypium.refract('blue'));
console.log('refracted color is: ' + ducktypium.refract('yellow'));
console.log('refracted color is: ' + ducktypium.refract('red'));

ducktypium = new Ducktypium("yellow");
console.log('ducktypium color is: ' + ducktypium.color);
console.log('refracted color is: ' + ducktypium.refract('blue'));
console.log('refracted color is: ' + ducktypium.refract('yellow'));
console.log('refracted color is: ' + ducktypium.refract('red'));

ducktypium.calibrate([3, 5, 1]);

console.log('Calibration Sequence is: ' + ducktypium.calibrationSequence);
