let age: number = 24;
let firstName: string = "Kaniel"
let isTall: Boolean = true
let childrensNames: string[] = ["Cars","Juan"]

console.log(`${firstName} is ${age} years old.`)

if(isTall) {
    console.log("And is so tall.")
}else {
    console.log("And is so pretty.")
}

for (let i: number = 0; i<childrensNames.length; i++) {
    console.log(childrensNames[i])
}





enum taxForm {
    standardTaxForm = "1040",
    childTaxForm = "641",
    cryptoTaxfrom = "420Z"
}

console.log("the cryto one is: ", taxForm.cryptoTaxfrom)
console.log("the cryto one is: ", taxForm.cryptoTaxfrom)
console.log("the cryto one is: ", taxForm.cryptoTaxfrom)
console.log("the child one is: ", taxForm.childTaxForm)


let zipCode: string | number = "12345"// good
zipCode = "ABCDE" //good
// zipCode = true //bad

console.log(zipCode)


function sum(x: number,y: number): number {
    return x+y
}
// console.log(sum(4,5))
let total: number = sum(4,6)
console.log(total)