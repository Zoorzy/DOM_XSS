const editor = document.getElementById("editor")
const pre = document.getElementById("pre")

const gethtml = new Worker('./workers/GETHtml.js')
gethtml.postMessage(URL)
gethtml.onmessage = e => {
  const lines = e.data.split(/\r?\n/).filter(element => element);
  pre.innerText = ''
  pre.classList.add('load')
  //var i = 1
  lines.forEach(line => {

    var code = document.createElement('code');
    code.setAttribute('spellcheck', 'false')

    //parse html line of code to find sinks
    if (line.indexOf('<input') != -1|| line.indexOf('<select') != -1) {
      code.classList.add('vulnerable')
    }

    //if(i == 25 || i == 39){
    //code.classList.add('vulnerable')
    //}
    code.innerText = line
    pre.appendChild(code)
    //i++
  });
}