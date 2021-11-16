
const userAge = Number(prompt("What's your age?"))

const startingPoint = prompt(`Type your starting point:
Germany
Italy`)

const destinationPoint = prompt(`Type your destination:
Norway
Kosovo`)

const distanceGermanyToNorway = 1000
const distanceGermanyToKosovo = 1500
const distanceItalyToNorway = 1300
const distanceItalyToKosovo = 1800

const priceForKilometer = 0.21

let totalPrice = 0

let juniorPassagerDiscount = 0
let juniorFinalDiscountPrice = 0


let seniorPassagerDiscount = 0
let seniorFinalDiscountPrice = 0

if(startingPoint.toUpperCase() === 'GERMANY' && destinationPoint.toUpperCase() === 'NORWAY'){
    totalPrice = distanceGermanyToNorway * priceForKilometer
    if(userAge < 18){
        juniorPassagerDiscount = (totalPrice * 20) / 100
        juniorFinalDiscountPrice = totalPrice - juniorPassagerDiscount
        alert(`Price with 20% disscount from Germany to Norway is ${juniorFinalDiscountPrice} $`)
    }
    else if(userAge >= 65){
        seniorPassagerDiscount = (totalPrice * 40) / 100
        seniorFinalDiscountPrice = totalPrice - seniorPassagerDiscount
        alert(`Price with 40% disscount from Germany to Norway is ${seniorFinalDiscountPrice} $`)
    }
    else{
        alert(`Price from Germany to Norway is ${totalPrice} $`)
    }
}

if(startingPoint.toUpperCase() === 'GERMANY' && destinationPoint.toUpperCase() === 'KOSOVO'){
    totalPrice = distanceGermanyToKosovo * priceForKilometer
    if(userAge < 18){
        juniorPassagerDiscount = (totalPrice * 20) / 100
        juniorFinalDiscountPrice = totalPrice - juniorPassagerDiscount
        alert(`Price with 20% disscount from Germany to Kosovo is ${juniorFinalDiscountPrice} $`)
    }
    else if(userAge >= 65){
        seniorPassagerDiscount = (totalPrice * 40) / 100
        seniorFinalDiscountPrice = totalPrice - seniorPassagerDiscount
        alert(`Price with 40% disscount from Germany to Kosovo is ${seniorFinalDiscountPrice} $`)
    }
    else{
        alert(`Price from Germany to Kosovo is ${totalPrice} $`)
    }
}

if(startingPoint.toUpperCase() === 'ITALY' && destinationPoint.toUpperCase() === 'NORWAY'){
    totalPrice = distanceItalyToNorway * priceForKilometer
    if(userAge < 18){
        juniorPassagerDiscount = (totalPrice * 20) / 100
        juniorFinalDiscountPrice = totalPrice - juniorPassagerDiscount
        alert(`Price with 20% disscount from Italy to Norway is ${juniorFinalDiscountPrice} $`)
    }
    else if(userAge >= 65){
        seniorPassagerDiscount = (totalPrice * 40) / 100
        seniorFinalDiscountPrice = totalPrice - seniorPassagerDiscount
        alert(`Price with 40% disscount from Italy to Norway is ${seniorFinalDiscountPrice} $`)
    }
    else{
        alert(`Price from Italy to Norway is ${totalPrice} $`)
    }
}

if(startingPoint.toUpperCase() === 'ITALY' && destinationPoint.toUpperCase() === 'KOSOVO'){
    totalPrice = distanceItalyToKosovo * priceForKilometer
    if(userAge < 18){
        juniorPassagerDiscount = (totalPrice * 20) / 100
        juniorFinalDiscountPrice = totalPrice - juniorPassagerDiscount
        alert(`Price with 20% disscount from Italy to Kosovo is ${juniorFinalDiscountPrice} $`)
    }
    else if(userAge >= 65){
        seniorPassagerDiscount = (totalPrice * 40) / 100
        seniorFinalDiscountPrice = totalPrice - seniorPassagerDiscount
        alert(`Price with 40% disscount from Italy to Kosovo is ${seniorFinalDiscountPrice} $`)
    }
    else{
        alert(`Price from Italy to Kosovo is ${totalPrice} $`)
    }
}
