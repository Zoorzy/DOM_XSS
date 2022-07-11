const editor = document.getElementById("editor")
const iframe = document.getElementById('frame')
const URL = 'https://www.example.com'

iframe.setAttribute('src', URL)

const gethtml = new Worker('workers/GETHtml.js')
gethtml.postMessage(URL)
gethtml.onmessage = e => {
  editor.innerText = e.data
}