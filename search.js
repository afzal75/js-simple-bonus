const products = [
    {name: 'iphone 14', price: 70000},
    {name: 'samsung galaxy 14', price: 60000},
    {name: 'dell laptop', price: 50000},
    {name: 'lenovo yoga laptop', price: 55000},
    {name: 'asus laptop 14', price: 35000},
    {name: 'smart watch samsung', price: 7000},
    {name: 'apple watch', price: 20000},
    {name: 'one plus 4', price: 27000}
];

function searchProducts (products, searchText){
    const result = [];
    for (const product of products){
        if(product.name.includes(searchText)){
            result.push(product);
            // console.log(product.name);
        }
    }
    return result;
}
const matched = searchProducts(products, 'watch');
console.log(matched);


// function searchProducts (products , searchText) {
//     const result = [];
//     for (const product of products){
//         if (product.name.includes(searchText)) {
//             result.push(product)
//             console.log(product.name);
//         }
//     }
//     return result;
// }
// const matched = searchProducts(products, 'watch');
// console.log(matched);