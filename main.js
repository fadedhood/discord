// Import CSS for cache busting
import './style.css'

// Import assets for cache busting
import faviconUrl from './assets/img/favicon.png'
import logoUrl from './assets/img/fadseclab.png'
import bannerUrl from './assets/img/banner.png'

// Update favicon
const favicon = document.querySelector('link[rel="icon"]')
if (favicon) {
  favicon.href = faviconUrl
}

// Update logo
const logo = document.querySelector('.footer-img')
if (logo) {
  logo.src = logoUrl
}

// Update OG image meta tags with cache-busted URLs
const ogImage = document.querySelector('meta[property="og:image"]')
const twitterImage = document.querySelector('meta[property="twitter:image"]')

if (ogImage) {
  const baseUrl = window.location.origin
  ogImage.content = `${baseUrl}${bannerUrl}`
}

if (twitterImage) {
  const baseUrl = window.location.origin
  twitterImage.content = `${baseUrl}${bannerUrl}`
}
