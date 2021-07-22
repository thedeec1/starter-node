function getLaserSetting(magicWord) {
    let setting = 'ON';

    if ( magicWord === 'please' ) {
        setting = 'OFF';
    }

    return setting;
}

let currentSetting = getLaserSetting('help');
console.log('The crrent laser setting is: ' + currentSetting);

currentSetting = getLaserSetting('please');
console.log('The crrent laser setting is: ' + currentSetting);