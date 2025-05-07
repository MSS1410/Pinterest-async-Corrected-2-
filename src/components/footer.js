export default function Footer() {
  const footer = document.createElement('footer')
  footer.className = 'footer'

  const footerTxt = document.createElement('p')
  footerTxt.className = 'footerText'

  footerTxt.innerHTML = `© ${new Date().getFullYear()} Pinterest Copy. All Rigths Reserved`

  footer.appendChild(footerTxt)

  return footer
}
