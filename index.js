
const returnFirstTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(0, 2)
    }

    const returnLastTwoDrivers = function (arrayOfDrivers) {
        return arrayOfDrivers.slice(2, 4)
    }

    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function fareMultiplier(farePrice) {
        return farePrice * multiplier
    }
}

function fareDoubler(farePrice) {
    const fareTimesTwo = createFareMultiplier(2)
    return fareTimesTwo(farePrice)
}

function fareTripler(farePrice) {
    const fareTimesThree = createFareMultiplier(3)
    return fareTimesThree(farePrice)
}

function functionDriver() {return selectingDrivers}

function selectDifferentDrivers(arrayOfDrivers,functionDriver) {
    return functionDriver(arrayOfDrivers)
    }

const arrayOfDrivers = ['Sally', 'Bob', 'Freddy', 'Claudia']