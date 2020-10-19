var input = 42145

const descendingOrder = (array) => {
    //map through argument n 
    //convert integer to a string == "42145"
    //split string into an array == ["42145"]
    //sort the array
    //join array
    let newArray = []
    //map through argument n
    let solution = array.map(digit => {
        // return newArray.push(digit)
        return digit
    })
    return solution
    // console.log(newArray)
    //push each value of the map into a new array
    //use sort to sort values of new array
    //var xAsNumber = Number(x.join(''))

}

console.log(descendingOrder(input))