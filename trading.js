let bitCoinValuePurchase = 35000
let bitCoinValue = 50000//prompt("Please enter the Bitcoin bitCoinValue ?")
if (bitCoinValue < 1.1 * bitCoinValuePurchase && bitCoinValue > 0.9 * bitCoinValuePurchase) {
  console.log(`Today the Bitcoin is equal to ${bitCoinValue}$\nYou purchased Bitcoin for ${bitCoinValuePurchase}$`)
  console.log(`The bitcoin ${(bitCoinValue / bitCoinValuePurchase) < 1 ? 'decrease' : 'increase'} less than 10 %\nYou would keep your Bitcoins!`)
} else {
  console.log(`Today the Bitcoin is equal to ${bitCoinValue}$\nYou purchased Bitcoin for ${bitCoinValuePurchase}$`)
  console.log(`The bitcoin ${(bitCoinValue / bitCoinValuePurchase) <= 0.9 ? 'decrease more than 10 %\nYou would buy Bitcoins!' : 'increase more than 10 %\nYou would sell your Bitcoin!'}`)
}