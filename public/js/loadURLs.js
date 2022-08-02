//read files and create a worker for each one

const iframe = document.getElementById('frame')
const editor = document.getElementById("editor")
const pre = document.getElementById("pre")
const URL = "https://www.example.com/" //const URL = "http://fischiagram.altervista.org/"
const gethtml = new Worker('./workers/GETHtml.js')

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
*/

}