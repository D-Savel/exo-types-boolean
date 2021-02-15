let sell = false
let buy = false
let stay = false
let bitCoinValue = 39419
let bitCoinValuePurchase = 35000
if (bitCoinValue < 1.1 * bitCoinValuePurchase && bitCoinValue > 0.9 * bitCoinValuePurchase) {
  stay = true
} else if (bitCoinValue * 0.9 < bitCoinValuePurchase) {
  buy = true
} else {
  sell = true
}
console.log(`sell : ${sell} - buy : ${buy} - stay : ${stay} - BitCoinValue: ${bitCoinValuePurchase * 1.1}`)
