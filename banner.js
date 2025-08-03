// Import CSS for cache busting
import './banner.css'

// Import assets for cache busting in banner
import logoUrl from './assets/img/fadseclab.png'

// Update logo
const logo = document.querySelector('.fadsec-logo')
if (logo) {
  logo.src = logoUrl
}
