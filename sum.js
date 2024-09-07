//Module protects their variables and functions from leaking



//common module

function calculateSum(a, b) {
    const sum = a + b
    console.log("sum", sum)
}

let y = 20;


// //es module
// export function calculateSum(a, b) {
//     const sum = a + b
//     console.log(sum)
// }
// module.exports = calculateSum  // for single export

//what if we want to export multiple functions  are varibles
//we need to create a object for that jusy like below


//common module

module.exports = {
    y,
    calculateSum
}
