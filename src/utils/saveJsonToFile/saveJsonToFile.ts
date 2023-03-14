const saveJsonToFile = (json: object, filename: string) => {
  const jsonData = JSON.stringify(json)
  const blob = new Blob([jsonData], { type: 'application/json' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()

  URL.revokeObjectURL(url)
}

export default saveJsonToFile
