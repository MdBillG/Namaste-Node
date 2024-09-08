// require('./xyz') // just like import in frontend // also this is common module import


// if we need to require a functions we need to export explicitly just like this
// calculateSum = require('./sum') for importing a single function from the module

// for import multiple functions or varibles from the module,we have exported that as a object in previousm module
//here we import as a obj
//just like this


//common module import 
const { x, calculateSum } = require('./sum') //desctructue on the fly
const calculateMultiply = require('./calculate/multiply')
const { calculateSubstration, calculateDivison } = require('./calculate')

//import json
const data = require('./data.json')


//es modules import 
// import { calculateSum } from './sum.js' // need to explicitly add .js

var name = 'namste node js'

console.log('name: ', name)

// console.log("gloval: ", global)// global global object of node js objectclg
// console.log("this", this)// gives us the empty object 
let a = 10
let c = 9

//if we have exported only one function from the module.
// calculateSum(a, c) // in line 2 by simply reuqire the anotehr module  you can access the variables ,functions and methods

//if we have exported the module as an onject we need to pass obj before accessing the functions or else we can destructie
//just like this

calculateSum(a, c)
const checking = calculateMultiply(a, c)
console.log("checking", checking)
calculateSubstration(a, c)
calculateDivison(a, c)

console.log("datafromjson: ", JSON.stringify(data))
