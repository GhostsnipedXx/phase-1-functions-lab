// Code your solution in this file!
const scuber = 42
let distanceFromHqInBlocks = function (location) {
    if (scuber > location) { return scuber - location } else { return location - scuber }
}
const block = 264
let distanceFromHqInFeet = function (location) {
    return distanceFromHqInBlocks(location) * block
}
let distanceTravelledInFeet = function (start, destination) {
    if (start > destination) { return (start - destination) * block } else { return (destination - start) * block }
}
let calculatesFarePrice = function (start, destination) {
    switch (true) {
        case distanceTravelledInFeet(start, destination) <= 400 :
         return 0;
        case distanceTravelledInFeet(start, destination) <= 2000 :
            return ((distanceTravelledInFeet(start, destination) * 2) - 800) / 100
        case distanceTravelledInFeet(start, destination) <= 2500 :
            return 25
        case distanceTravelledInFeet(start, destination) > 2500 :
            return 'cannot travel that far'
    }


}