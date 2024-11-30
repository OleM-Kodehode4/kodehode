// Array of product objects
const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" }
];

console.log("--Task 1:")
const cheapProducts = products.filter(product => product.price < 200);
console.log("Products costing less than 200:", cheapProducts);

console.log("--Task s:")
const productNames = products.map(product => product.name);
console.log("Product names:", productNames);

console.log("--Task 3:")
const electronicsNames = products.filter(product => product.category === 'electronics').map(product => product.name);
console.log("Electronics product names:", electronicsNames);

console.log("--Task 4:")
const hasExpensiveProduct = products.some(product => product.price > 1000);
console.log("Are there any products that cost more than 1000?", hasExpensiveProduct);

console.log("--Task 5:")
const totalCost = products.reduce((acc, product) => acc + product.price, 0);
console.log("Total cost of all products:", totalCost);