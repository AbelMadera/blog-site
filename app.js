const DarkBtn = document.getElementById('dark')

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

DarkBtn.addEventListener('click', toggleDarkMode)

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
let currentImgIndex = 0 // <--- This is the current index of the img that should be visible in the carousel
let previousImgIndex = 0 // <----- The previous image index that we were at
const images = document.querySelectorAll('.image')

next.addEventListener('click', (evt) => {
    previousImgIndex = currentImgIndex
    if (currentImgIndex < images.length - 1) {
        currentImgIndex += 1
    } else {
        currentImgIndex = 0
    }
    images[previousImgIndex].style.display = 'none'
    images[currentImgIndex].style.display = 'block'
})

prev.addEventListener('click', (evt) => {
    previousImgIndex = currentImgIndex
    if (currentImgIndex > 0) {
        currentImgIndex -= 1
    } else {
        currentImgIndex = images.length - 1
    }
    images[previousImgIndex].style.display = 'none'
    images[currentImgIndex].style.display = 'block'
})
