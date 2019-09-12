var faker = require("faker");

var items = []


for(var i = 1; i <= 10; i++){
    items.push({
        codigo: faker.random.uuid(),
        nombre: faker.commerce.productName(),
        categoria: faker.commerce.product(),
        precio: faker.commerce.price(),
        disponibilidad: faker.commerce.price()
    })
}

console.log(items)