fetch('http://localhost:5000/products')
.then(function(response) {
    return response.json();
})
.then(function(info) {
 console.log(info);

let myProducts = document.getElementById('products')
info.forEach(i => {
    let productsList = document.createElement('li')
    productsList.innerText = `${i.name}`
    myProducts.appendChild(productsList)
})
})
.catch(function(error){
 console.log('error',error);
});

fetch('http://localhost:5000/products/fruits')
.then(function(response) {
    return response.json();
})
.then(function(info) {
 console.log(info);

let myFruits = document.getElementById('fruList')
info.forEach(i => {
    let fruitsList = document.createElement('li')
    fruitsList.innerText = `${i.name}`
    myFruits.appendChild(fruitsList)
})
})
.catch(function(error){
 console.log('error',error);
});

fetch('http://localhost:5000/products/vegetables')
.then(function(response) {
    return response.json();
})
.then(function(info) {
    console.log(info);

let myVegies = document.getElementById('vegList')
info.forEach(i => {
    let vegiesList = document.createElement('li')
    vegiesList.innerText = `${i.name}`
    myVegies.appendChild(vegiesList)
})
})
.catch(function(error){
 console.log('error',error);
});