let res1 = (true && false) || (false && true)
let myAnswer_res1 = 'false'
let res2 = 10 > 11 && 11 > 10
let myAnswer_res2 = 'false'
let res3 = (true || false) && true
let myAnswer_res3 = 'true'
let res4 = (!true && !false) || (!false && !false)
let myAnswer_res4 = 'true'
let res5 = 'Hello' === 'Hello' && 'World' == 'Word'
let myAnswer_res5 = 'false'
let res6 = (!(20 >= 20) && 7 === 7) || true
let myAnswer_res6 = 'true'
let res7 = '1' === 1 && '2' == 2 && '3' === 3
let myAnswer_res7 = 'false'
let res8 = !res7
let myAnswer_res8 = 'true'
let res9 = !res8
let myAnswer_res9 = 'false'
let res10 = (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9)
let myAnswer_res10 = 'true'
console.log(`Expression res1 : Ma réponse est ${myAnswer_res1} et le résultat de l'expression est ${res1}`)
console.log(`Expression res2 : Ma réponse est ${myAnswer_res2} et le résultat de l'expression est ${res2}`)
console.log(`Expression res3 : Ma réponse est ${myAnswer_res3} et le résultat de l'expression est ${res3}`)
console.log(`Expression res4 : Ma réponse est ${myAnswer_res4} et le résultat de l'expression est ${res4}`)
console.log(`Expression res5 : Ma réponse est ${myAnswer_res5} et le résultat de l'expression est ${res5}`)
console.log(`Expression res6 : Ma réponse est ${myAnswer_res6} et le résultat de l'expression est ${res6}`)
console.log(`Expression res7 : Ma réponse est ${myAnswer_res7} et le résultat de l'expression est ${res7}`)
console.log(`Expression res8 : Ma réponse est ${myAnswer_res8} et le résultat de l'expression est ${res8}`)
console.log(`Expression res9 : Ma réponse est ${myAnswer_res9} et le résultat de l'expression est ${res9}`)
console.log(`Expression res10 : Ma réponse est ${myAnswer_res10} et le résultat de l'expression est ${res10}`)