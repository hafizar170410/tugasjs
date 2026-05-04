const promt = require('prompt-sync')({sigint: true});
let sisi = Number(promt('Masukkan sisi : '));
let luas = sisi ^ 2
let keliling = 4 * sisi

console.log("================================")
console.log("           HASIL                ")
console.log("--------------------------------")

console.log('Luas Persegi : ' + Luas + ' cm')
console.log("Keliling Persegi : "+ Keliling)
console.log(
`Luas Persegi\t\t: ${ luas.toFixed(2) } cm2
Keliling Persegi\t: ${keliling.toFixed(2)} cm`); 

