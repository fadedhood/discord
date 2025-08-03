import fs from 'fs'
import path from 'path'

export function ogImagePlugin() {
  let bannerFileName = ''
  
  return {
    name: 'og-image-plugin',
    generateBundle(options, bundle) {
      // Find the hashed banner image file
      bannerFileName = Object.keys(bundle).find(fileName => 
        fileName.startsWith('img/banner-') && fileName.endsWith('.png')
      )
    },
    writeBundle(options, bundle) {
      if (!bannerFileName) {
        console.warn('OG Image Plugin: No banner file found for OG image processing')
        return
      }
      
      // Process HTML files in the output directory
      const outputDir = options.dir || 'dist'
      const htmlFiles = ['index.html', 'banner.html']
      
      htmlFiles.forEach(htmlFile => {
        const htmlPath = path.join(outputDir, htmlFile)
        if (fs.existsSync(htmlPath)) {
          let htmlContent = fs.readFileSync(htmlPath, 'utf-8')
          
          // Replace empty og:image and twitter:image content with the hashed banner URL
          const updatedHtml = htmlContent
            .replace(
              /(<meta property="og:image" content=")[^"]*(")/g,
              `$1https://discord.faded.dev/${bannerFileName}$2`
            )
            .replace(
              /(<meta property="twitter:image" content=")[^"]*(")/g,
              `$1https://discord.faded.dev/${bannerFileName}$2`
            )
          
          fs.writeFileSync(htmlPath, updatedHtml)
        }
      })
    }
  }
}
