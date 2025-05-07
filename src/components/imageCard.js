export default function ImageCard(image) {
  const container = document.createElement('div')
  container.classList.add('image-card')

  // img
  const imgSel = document.createElement('img')
  imgSel.src = image.urls.small
  imgSel.alt = image.alt_description || 'Unsplash Img'
  container.appendChild(imgSel)

  // img btns
  const overImg = document.createElement('div')
  overImg.classList.add('card-overImg')

  const saveBtn = document.createElement('button')
  saveBtn.classList.add('card-save')
  saveBtn.textContent = 'Guardar'
  overImg.appendChild(saveBtn)

  container.appendChild(overImg)

  // hoover en el content de la img
  container.addEventListener('mouseenter', () =>
    overImg.classList.add('visible')
  )
  container.addEventListener('mouseleave', () =>
    overImg.classList.remove('visible')
  )

  return container
}
