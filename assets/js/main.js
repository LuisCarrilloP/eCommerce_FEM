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
    productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>'
  }else{
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

//Cambiar imagenes cuando se presione los botones flecha
const imageContainer = document.querySelector(".gallery__image-container")
const prevGalleryBtn = document.querySelector(".gallery__previous")
const nextGalleryBtn = document.querySelector(".gallery__next")
let imgIndex = 1

nextGalleryBtn.addEventListener('click', () => {
  changeNextImage(imageContainer)
})

prevGalleryBtn.addEventListener('click', () => {
  changePrevImage(imageContainer)
})

//Mostrar el modal de imagenes al hacer click en la imagen
const imagesModal = document.querySelector(".modal-gallery__background")
const closeModalBtn = document.querySelector(".modal-gallery__close")

imageContainer.addEventListener('click', () => {
  if(window.innerWidth >= 1115){ //solo en pantallas grandes
    imagesModal.style.display = 'grid'
  }
})

closeModalBtn.addEventListener('click', () => {
  imagesModal.style.display = "none"
})

//Cambiar las imagenes principales desde los thumbnails
let galleryThumbnails = document.querySelectorAll(".gallery__thumbnail")
galleryThumbnails = [...galleryThumbnails]

galleryThumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', (event) => {
    imageContainer.style.backgroundImage = `url('../../assets/images/image-product-${event.target.id}.jpg')`
  })
})

//Cambiar las imagenes principales desde los thumbnails en el MODAL
let modalThumbnails = document.querySelectorAll(".modal-gallery__thumbnail")
let modalImageContainer = document.querySelector(".modal-gallery__image-container")
modalThumbnails = [...modalThumbnails]

modalThumbnails.forEach(modalThumbnail => {
  modalThumbnail.addEventListener('click', (event) => {
    modalImageContainer.style.backgroundImage = `url('../../assets/images/image-product-${event.target.id.slice(-1)}.jpg')`
  })
})

//cambiar imagen de modal con flechas
const nextModalBtn = document.querySelector(".modal-gallery__next")
const prevModalBtn = document.querySelector(".modal-gallery__previous")

nextModalBtn.addEventListener('click', () => {
  changeNextImage(modalImageContainer)
})

prevModalBtn.addEventListener('click', () => {
  changeNextImage(modalImageContainer)
})

//mostrar el navbar cuadno presiono menu hamburguesa
const hamburguerMenu = document.querySelector(".header__menu")
const modalNavBar = document.querySelector(".modal-navbar__background")
const closeModalNavbar = document.querySelector(".modal-navbar__close")

hamburguerMenu.addEventListener('click', () => {
  modalNavBar.style.display = "block"
})

closeModalNavbar.addEventListener('click', () => {
  modalNavBar.style.display = "none"
})




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

function changeNextImage(imgContainer){
  if(imgIndex==4){
    imgIndex=1
  }else{
    imgIndex++
  }
  imgContainer.style.backgroundImage = `url('../../assets/images/image-product-${imgIndex}.jpg')`
}

function changePrevImage(imgContainer){
  if(imgIndex == 1){
    imgIndex = 4
  }else{
    imgIndex--
  }
  imgContainer.style.backgroundImage = `url('../../assets/images/image-product-${imgIndex}.jpg')`
}