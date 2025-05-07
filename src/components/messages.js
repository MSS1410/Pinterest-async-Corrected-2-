export function clearErrorMessage() {
  const errorDiv = document.getElementById('error-message')
  if (errorDiv) errorDiv.textContent = ''
}

export function showErrorMessage(msg) {
  const errorDiv = document.getElementById('error-message')
  if (errorDiv) errorDiv.textContent = msg
}
