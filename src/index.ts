const fetchFileBuffer = ((file: File) => new Promise<Buffer>((resolve, reject) => {
  const createReader = () => {
    const fr = new FileReader()
    fr.onerror = err => reject(err)
    fr.onload = () => resolve(new Buffer(fr.result as string))

    return fr
  }

  createReader().readAsArrayBuffer(file)
}))

const appendNewImage = (buffer: Buffer) => {
  const e = document.createElement('img')
  e.src = `data:image;base64, ${buffer.toString('base64')}`
  document.body.appendChild(e)
}

const input = document.querySelector('input[type="file"]') as HTMLInputElement

input.addEventListener('change', async () => {
  // NOTE: The "files" ensures non-null whenever the input is selected from input[type="file"]
  const files = Array.from(input.files!)
  const buffers = await Promise.all(files.map(fetchFileBuffer))

  buffers.forEach(appendNewImage)
})
