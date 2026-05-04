const prompt = require("prompt-sync")({ sigint: true })
let panjang = Number(prompt('Masukan panjang: '))
let lebar = Number(prompt('Masukan lebar: '))
let luas = panjang * lebar
let keliling = 2 * (panjang + lebar)

console.log("========================")
console.log("         HASIL          ")
console.log("========================")

console.log(`Luas persegi panjang\t: ${luas.toFixed(2)} cm2`)
console.log(`Keliling persegi panjang\t: ${keliling.toFixed(2)} cm`)