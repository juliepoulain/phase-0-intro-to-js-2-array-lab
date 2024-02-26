// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}
destructivelyAppendCat("Ralph")

function destructivelyPrependCat(name){
    cats.unshift(name)
}
destructivelyPrependCat("Bob")

function destructivelyRemoveLastCat(){
    cats.pop()
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
    cats.shift()
}
destructivelyRemoveFirstCat()

const copyOfCatsAppendCat = [...cats, "Broom"]
function appendCat(name){
    return copyOfCatsAppendCat
}

const copyOfCatsPrependCat = ["Arnold", ...cats]
function prependCat(name){
    return copyOfCatsPrependCat
}

function removeLastCat(){
    return cats.slice(0,2)
}
removeLastCat()

function removeFirstCat(){
    return cats.slice(1,3)
}
removeFirstCat()
