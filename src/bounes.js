let removeElement = function(numbs, val) {
    let deletedNumbers = 0;

    for (let i = 0; i < numbs.length; i++) {
        if (val !== numbs[i]) {
            numbs[deletedNumbers] = numbs[i];
            deletedNumbers++;
        }
    }

    return deletedNumbers;
};