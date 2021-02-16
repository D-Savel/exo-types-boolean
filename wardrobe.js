let isRainy = false
let temperature = 25
let isSunny = true
let clothes = ''
if (isRainy) {
  clothes += 'umbrella, ' // concatenation de string
}
if (temperature < 15) {
  clothes += 'coat, '
} else if (temperature >= 15 && temperature <= 20) {
  clothes += 'sweater, '
} else {
  clothes += 't-shirt, '
}
if (isSunny) {
  clothes += 'sunglasses, '
}
console.log(`Je vous recommande de porter: ${clothes}`)