module.exports.selectedColorsCalculate = (users) => {
    const colors = Object.values(users);
    let returningValue = [];
    for (let i = 0; i < colors.length; i++) {
        if (colors[i]) {
            returningValue.push(colors[i]);
        }
    }
    if (!returningValue.length) {
        return 'All colors are stll available to choose!'
    } else if (returningValue.length === 1) {
        return `${returningValue} has been chosen already!`
    } else {
        returningValue = returningValue.join(' and ');
        return `${returningValue} have been chosen already!`
    }
}