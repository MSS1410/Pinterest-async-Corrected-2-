import ImageCard from './imageCard'

export function Gallery() {
  const galleryContainer = document.createElement('section')
  galleryContainer.id = 'gallery'
  galleryContainer.setAttribute("aria-label", "galeria de imagenes")
  return galleryContainer
}

export function renderImages(images) {
  const gallery = document.getElementById('gallery')
  gallery.innerHTML = ''

  images.forEach((image) => {
    const card = ImageCard(image)
    gallery.appendChild(card)
  })
}
