// Desconto em Compras 

// Se valor compra >= 100 = 10% de desconto 
// Se valor compra < 100 = Sem desconto 

let valorCompra = 190

function desconto() {
    if (valorCompra >= 100) {
        valorCompra *= 0.9
    } else {
        valorCompra
    }

console.log(`O valor final da compra é: R$ ${valorCompra}`)
}

desconto(valorCompra)


