//read files and create a worker for each one

const iframe = document.getElementById('frame')
const editor = document.getElementById("editor")
const pre = document.getElementById("pre")
const URL = "https://www.example.com/"
const gethtml = new Worker('./workers/GETHtml.js')

/**
 * Se non sono stati selezionati url arrivando alla pagina, mando un url di default
 *  */ 
if (!URLS[0]) URLS[0] = URL

iframe.setAttribute('src', URLS[0])
document.getElementsByClassName("urlTitle")[0].innerText = URLS[0]

gethtml.postMessage(URLS[0])
gethtml.onmessage = e => {
  const lines = e.data.split(/\r?\n/).filter(element => element);
  pre.innerText = ''
  pre.classList.add('load')

  lines.forEach(line => {

    var code = document.createElement('code');
    code.setAttribute('spellcheck', 'false')

    //parse html line of code to find sinks
    if (line.indexOf('<input') != -1 || line.indexOf('<select') != -1) {
      code.classList.add('sinks')
    }

    code.innerText = line
    pre.appendChild(code)

  });
}


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