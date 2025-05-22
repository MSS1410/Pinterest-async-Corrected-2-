export default function Header({ initialTerm, onSearch, onReset }) {
  // content
  const header = document.createElement('header')
  header.classList.add("header")
  

  // izq
  const logo = document.createElement('div')
  logo.className = 'headerLogo'
  const logoImg = document.createElement('img')
  logoImg.src = '/assets/pint.png'
  logoImg.alt = 'Logo Pinterest Async'
  logo.appendChild(logoImg)
  logo.addEventListener('click', onReset)

  // center
  const center = document.createElement('div')
  center.className = 'headerCenter'

  const title = document.createElement('h1')
  title.textContent = 'Pinterest Async'

  const form = document.createElement('form')
  form.id = 'search-form'
  form.className = 'headerSearch'

  const input = document.createElement('input')
  input.type = 'text'
  input.id = 'search-input'
  input.placeholder = 'Type for searching…'
  input.value = initialTerm || ''

  const enterBtn = document.createElement('button')
  enterBtn.type = 'submit'
  enterBtn.textContent = 'Search'

  form.append(input, enterBtn)

  form.addEventListener('submit', function (event) {
    event.preventDefault()
    const term = input.value.trim()
    if (!term) return
    onSearch(term)
    input.value = ''
  })

  center.append(title, form)

  // PERFIL Y oscuro
  const right = document.createElement('div')
  right.className = 'headerRight'

  const profileIcon = document.createElement('img')
  profileIcon.src = '/assets/perfil.png'
  profileIcon.alt = 'Perfil'
  profileIcon.id = 'profile-icon'

  const darkBtn = document.createElement('button')
  darkBtn.id = 'dark-mode'
  const darkIcon = document.createElement('img')
  darkIcon.src = '/assets/oscuro.png'
  darkIcon.alt = 'Modo Oscro'
  darkBtn.appendChild(darkIcon)
  darkBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode')
  })

  right.append(profileIcon, darkBtn)

  // añadir al header
  header.append(logo, center, right)
  return header
}
