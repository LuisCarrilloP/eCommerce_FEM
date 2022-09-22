// Cambio de cantidad de artículos seleccionados por el usuario
let minusBtn = document.querySelector(".input__minus")
let plusBtn = document.querySelector(".input__plus")
let userInput = document.querySelector(".input__number")

let userInputNumber =  0

plusBtn.addEventListener('click', () => {
  userInputNumber++
  userInput.value = userInputNumber
})

minusBtn.addEventListener('click', () => {
  userInputNumber--
  if(userInputNumber<=0){
    userInputNumber = 0
  }
  userInput.value = userInputNumber
})

// Agregar total de artículos al carrito al dar click al boton
let addToCartBtn = document.querySelector(".details__button")
let cartNotification = document.querySelector(".header__cart--notification")
let lastValue = parseInt(cartNotification.innerText)

addToCartBtn.addEventListener('click', () => {
  lastValue = lastValue + userInputNumber

  cartNotification.innerText = lastValue
  cartNotification.style.display = "block"
  drawProductInModal()
  //priceModal.innerHTML = `$125 x${lastValue} <span>$${125*lastValue}.00</span>`
}) 

//Mostrar modal del carrito
let cartIconBtn = document.querySelector(".header__cart")
let cartModal = document.querySelector(".cart-modal")
//let priceModal = document.querySelector(".cart-modal__price")
let productContainer = document.querySelector(".cart-modal__checkout-container")


cartIconBtn.addEventListener('click', () => {
  cartModal.classList.toggle("show")
  //priceModal.innerHTML = `$125 x${lastValue} <span>$${125*lastValue}.00</span>`

  if(lastValue == 0){
    drawProductInModal()
  }
  
})

//Borrar el contenido del carrito
function deleteProduct(){
  let deleteProductBtn = document.querySelector(".cart-modal__delete")
  
  deleteProductBtn.addEventListener('click', () => {
    productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>'
    lastValue = 0
    cartNotification.innerText = lastValue
  }) 
}

//Modificar



// FUNCIONES
function drawProductInModal(){
  productContainer.innerHTML = 
  `
    <div class="cart-modal__details-container">
      <img src="./assets/images/image-product-1-thumbnail.jpg" alt="product image" class="cart-modal__image">
      <div>
        <p class="cart-modal__product">Autumn Limited Edition...</p>
        <p class="cart-modal__price">$125 x 3 <span>$375.00</span></p>
      </div>
      <img src="./assets/images/icon-delete.svg" alt="Delete product from cart" class="cart-modal__delete">
    </div>
    <button class="cart-modal__checkout">Checkout</button>
  `
  deleteProduct()
  let priceModal = document.querySelector(".cart-modal__price")
  priceModal.innerHTML = `$125 x${lastValue} <span>$${125*lastValue}.00</span>`
}
