


// Manejo del DOM
const form = document.querySelector('form');
const inputSearch = document.querySelector('input[type="search"]');
const resultsContainer = document.querySelector('#results-container');
const buyButton = document.querySelector('#buy-button');
const homeLink = document.querySelector('nav ul li:nth-child(1) a');
const productsLink = document.querySelector('nav ul li:nth-child(2) a');
const cartLink = document.querySelector('nav ul li:nth-child(3) a');

homeLink.addEventListener('click', () => {
  alert('PROTITO DE PRUEBA');
});

productsLink.addEventListener('click', () => {
  alert('PROTITO DE PRUEBA');
});

cartLink.addEventListener('click', () => {
  alert('PROTITO DE PRUEBA');
});

// Datos del usuario
let currentUser = null;

// Función para buscar productos
// function searchProducts(query) {
//   // Aquí iría el código para realizar la búsqueda en una API externa
//   // Por ejemplo, podríamos utilizar la API de Amazon para obtener los resultados de búsqueda
//   // Luego, podríamos procesar los resultados para adaptarlos a las necesidades de los usuarios invidentes

//   // En este ejemplo, simulamos que obtenemos algunos resultados de búsqueda
//   const results = [
//     {
//       name: 'Producto 1',
//       description: 'Descripción del producto 1',
//       price: 10.99,
//       imageUrl: 'https://via.placeholder.com/150',
//     },
//     {
//       name: 'Producto 2',
//       description: 'Descripción del producto 2',
//       price: 20.99,
//       imageUrl: 'https://via.placeholder.com/150',
//     },
//   ];

//   // Limpiamos los resultados anteriores
//   resultsContainer.innerHTML = '';

//   // Creamos un contenedor para cada resultado y lo agregamos al contenedor principal
//   results.forEach((result) => {
//     const productContainer = document.createElement('div');
//     productContainer.classList.add('product-container');
//     productContainer.innerHTML = `
//       <div class="product-image">
//         <img src="${result.imageUrl}" alt="${result.name}">
//       </div>
//       <div class="product-info">
//         <h3 class="product-name">${result.name}</h3>
//         <p class="product-description">${result.description}</p>
//         <p class="product-price">$${result.price}</p>
//       </div>
//     `;
//     resultsContainer.appendChild(productContainer);
//   });

//   // Mostramos los resultados
//   resultsContainer.classList.remove('hidden');
// }

// // Función para realizar una compra
// function buyProduct(product) {
//   // En este ejemplo, simulamos que se realiza la compra con éxito
//   alert(`La compra del producto "${product.name}" se ha realizado con éxito.`);
// }

// // Evento para realizar una búsqueda de productos
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const query = inputSearch.value;
//   searchProducts(query);
// });

// // Evento para seleccionar un producto y realizar una compra
// resultsContainer.addEventListener('click', (event) => {
//   const productContainer = event.target.closest('.product-container');
//   if (productContainer) {
//     const productName = productContainer.querySelector('.product-name').textContent;
//     const productPrice = productContainer.querySelector('.product-price').textContent;
//     const product = { name: productName, price: productPrice };
//     buyButton.textContent = `Comprar "${product.name}" por ${product.price}`;
//     buyButton.disabled = false;
//   }
// });

// // Evento para realizar la compra del producto seleccionado
// buyButton.addEventListener('click', () => {
//   buyProduct(currentUser.selectedProduct);
//   buyButton.disabled = true;
// });
