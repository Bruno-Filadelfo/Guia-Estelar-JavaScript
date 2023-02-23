// for in 

let person = {
    name: 'John',
    Age: 26,
    weigth: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}