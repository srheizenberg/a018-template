const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 100 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 100 },
]



//letra a
function pokefuncao(pokemons) {
  const pokemons100 = {...pokemons,vida:100 }
  return pokemons100
}
//letra b
const pokeFull = pokemons.map(pokefuncao);
console.log(pokeFull)

//letra c 

const pokemonsDeFogo = pokemons.filter((item)=>{return item.tipo === 'fogo'})
console.log("letra C",pokemonsDeFogo)


//função 

let listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function funcaoA(array) {
    const triplo = [];
    for (let valor of array) {
      triplo.push(valor*3);
    }
    return triplo
}
console.log(funcaoA(listaDeNumeros))

function funcaoB(array) {
  const soPar = [];
  for (let valor of array) {
    if(valor%2===0){
      soPar.push(valor);
    }
    
  }
  return soPar
}
console.log(funcaoB(listaDeNumeros))

//isso aqui e uma function de callback
function funcaoC(array,callback) {
  const result = callback(array)

 console.log("C",result)
}

console.log(funcaoC(listaDeNumeros, funcaoA))

//isso aqui e uma arrows function com funcao de array Map
const returnMap = listaDeNumeros.map(item=>item*5)
console.log("Map",returnMap)

//isso aqui e uma arrows function com funcao de array Filter
const returnFilter = listaDeNumeros.filter((item)=> {
  return item%2 ===0
})

console.log("Filter",returnFilter)