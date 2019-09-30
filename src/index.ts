const fetchDataUrl = ((file: File) => new Promise<string>((resolve, reject) => {
  const fr = new FileReader()
  fr.onload = () => resolve(typeof fr.result === 'string' ? fr.result : '')
  fr.onerror = err => reject(err)

  fr.readAsDataURL(file)
}))

const appendNewImage = (dataUrl: string) => {
  const e = document.createElement('img')
  e.src = dataUrl
  document.body.appendChild(e)
}

const input = document.querySelector('input[type="file"]') as HTMLInputElement

input.addEventListener('change', async () => {
  if (!input.files) {
    console.error('no files')
    return
  }

  const files = Array.from(input.files)
  const dataUrls = await Promise.all(files.map(fetchDataUrl))

  dataUrls.forEach(appendNewImage)
})
