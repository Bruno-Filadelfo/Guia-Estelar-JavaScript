/* 
 
   Function() constructor 

   *expressão new
   * criar um novo objeto
   * this keyword

*/

/*let name = new String("Bruno")

console.log(name)*/

/*let date = new Date("2023-02-11")

console.log(date)*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const bruno = new Person("Bruno")
const lucas = new Person("Lucas")
console.log(bruno.walk())
console.log(lucas.walk())