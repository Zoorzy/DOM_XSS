//read files and create a worker for each one

function setActive(index) {
  Array.prototype.slice.call(document.getElementsByTagName("iframe")).forEach(element => {
    element.classList.remove("active")
  })
  Array.prototype.slice.call(document.getElementsByTagName("pre")).forEach(element => {
    element.classList.remove("active")
  })

  document.getElementsByTagName("iframe")[index].classList.add("active")
  document.getElementsByTagName("pre")[index].classList.add("active")
  document.getElementById("title").innerText = URLS[index]
}

document.addEventListener("DOMContentLoaded", setActive(0))

const iframes = document.getElementsByTagName("iframe")
const pres = document.getElementsByTagName("pre")

Array.prototype.slice.call(iframes).forEach((element, index) =>{
  element.setAttribute('src', URLS[index])
})

/*
const gethtml = new Worker('./workers/GETHtml.js')
gethtml.postMessage(URLS[0])
gethtml.onmessage = e => {
  
  const lines = e.data.split(/\r?\n/).filter(element => element);
  pre.innerText = ''
  pre.classList.add('load')

  lines.forEach(line => {

    var code = document.createElement('code');

    //parse html line of code to find sinks
    // DA RIFA con DOM.element.tagname.lowercase() == "input" o una roba del genere
    if (line.indexOf('<input') != -1 || line.indexOf('<select') != -1) {
      code.classList.add('sinks')
    }

    code.innerText = line
    pre.appendChild(code)

  });
  
}
*/

/*
const iframe = document.getElementById('frame')
const editor = document.getElementById("editor")
const pre = document.getElementById("pre")
const URL = "https://www.example.com/" //const URL = "http://fischiagram.altervista.org/"
const gethtml = new Worker('./workers/GETHtml.js')

// Se non sono stati selezionati url arrivando alla pagina, mando un url di default
if (!URLS[0]) URLS[0] = URL

iframe.setAttribute('src', URL)

// worker handler
gethtml.postMessage(URL)
gethtml.onmessage = e => {





  /*
    /**
     * Check if String to HTML parsing works
     * @returns {Boolean}
     *//*
var support = (function () {
if (!window.DOMParser) return false;
var parser = new DOMParser();
try {
parser.parseFromString('x', 'text/html');
} catch (err) {
return false;
}
return true;
});

/**
* Convert a template string into HTML DOM nodes
* @param  {String} str The template string
* @return {Node}       The template HTML
*//*
 var stringToHTML = function (str) {

   // If DOMParser is supported, use it
   if (support) {
     var parser = new DOMParser();
     var doc = parser.parseFromString(str, 'text/html');
     return doc.body;
   }

   // Otherwise, fallback to old-school method
   var dom = document.createElement('div');
   dom.innerHTML = str;
   return dom;

 };

 //console.log(stringToHTML(e.data));

 const html = stringToHTML(e.data)
 console.log(html)
*

}
*/