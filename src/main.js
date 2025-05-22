import Header from './components/header.js'
import Footer from './components/footer.js'
import { Gallery, renderImages } from './components/Gallery.js'
import { fetchImages } from './components/fetchImages.js'
import { clearErrorMessage, showErrorMessage } from './components/messages.js'

// en app inserto comp
const app = document.getElementById('app')

const header = Header({
  initialTerm: initialTerm,
  onSearch: searchImages,
  onReset: resetSearch
})
//montar h
app.appendChild(header)

const main = document.createElement("main")
main.classList.add("container")
app.appendChild(main)


main.appendChild(Gallery())
main.appendChild(createErrorContainer())

app.appendChild(Footer())


const storageSave = 'initialSearch'
let initialTerm = sessionStorage.getItem(storageSave)
if (!initialTerm) {
  initialTerm = 'calisthenics'
  sessionStorage.setItem(storageSave, initialTerm)
}

searchImages(initialTearm)


async function searchImages(query) {
  clearErrorMessage()
  try {
    const data = await fetchImages(query)
    let resultado = data.results || []

    if (resultado.length === 0) {
      showErrorMessage(`Canot find images for"${query}", showing nature images`)
      const standard = await fetchImages('nature')

      resultado = standard.results || []
    }
    renderImages(resultado)
  } catch (error) {
    showErrorMessage('error while fetching images')
    console.error(error)
  }
}

// teinicio gallery con primera busqueda

function resetSearch() {
  const savedTerm = sessionStorage.getItem(storageSave)
  searchImages(savedTerm)
}







const footer = Footer()
app.appendChild(footer)



