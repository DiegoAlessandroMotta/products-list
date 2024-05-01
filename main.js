import { products } from './products.js';

const productsCart = []

const addToCartButtons = document.querySelectorAll('.add-to-cart')

addToCartButtons.forEach(addButton => {
  addButton.addEventListener('click', event => {
    if (event.target.matches('button')) {
      const tableRow = event.target.closest('tr')
      const id = tableRow.dataset.id
      
      addToCart(id)
    }
  })
})


const toggleCart = document.getElementById('toggle-cart')

const carrito = document.getElementById('carrito')

export const addToCart = (id) => {
  const isAdded = productsCart.some(product => product.id == id)

  const productToAdd = products.find(product => product.id == id)

  if (isAdded || productToAdd === undefined) {
    console.log(`Product ${id} not added`);
    return
  }

  carrito.innerHTML += `
    <div class="carrito-producto">
      <img src="${productToAdd.imgUrl}" class="image">
      <p>${productToAdd.title}</p>
    </div>
  `

  productsCart.push(productToAdd)
  console.log(productsCart)
}

toggleCart.addEventListener('click', () => {
  carrito.classList.toggle('ocultar')
  carrito.classList.toggle('mostrar')
  console.log('Muestra u oculta carrito');
})