const contactUs = document.getElementsByClassName('contact')

// The "Contact us" button is clicked and #lightbox is active
for (let i = 0; i < contactUs.length; i++) {
    contactUs[i].addEventListener('click', e => {
        lightbox.classList.add('active')
    })
}

// Lightbox-form Cancel button
const closeButton = document.getElementById('cancel-button')

closeButton.addEventListener('click', () => {
  lightbox.classList.remove('active')
})

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove('active')
  }
})