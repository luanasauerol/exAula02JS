let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]

products.forEach((product, i) => {
    product.id = i + 1;
    console.log(product.name);
});

const productFound = products.find((product) => product.id === 3);
console.log("Produto com id 3: ", productFound);

const blackProducts = products.filter((product) => product.colors.includes('black'));
console.log("Produtos com a cor black", blackProducts);

const noColors = products.filter((product) => !product.colors.length);
console.log("Produtos que não possuem cor:", noColors);