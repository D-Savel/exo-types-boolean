// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse ou venteuse
let isRainy = true
let isWindy = false
let isSunny = true

if (isRainy || isWindy) {
  console.log('Mettez votre manteau')
} else {
  console.log('Nous n avez pas besoin de manteau today')
}
if (isSunny && !isWindy) {
  console.log('Mettez vos lunettes de soleil et sortez en tee-shirt')
} else {
  console.log('Mettez votre manteau et rangez vos lunettes de soleil')
}