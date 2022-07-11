this.onmessage = e => {

  var html = ''
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      html = this.responseText;
    }
  };
  xhttp.open("GET", URL, true);

  if (!xhttp.send()) {
    //html = 'HTML source not available due to CORS policy'
  }

  this.postMessage(html)

}
