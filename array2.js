const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman" ]

marvel_heros.push(dc);
// console.log(marvel_heros);
//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// it is treated as 1element 2element 3element and the dc as the 4element.

//console.log(marvel_heros[3][1]); //flash

const allHeros = marvel_heros.concat(dc);
console.log(allHeros);