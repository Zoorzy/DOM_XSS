this.onmessage = e => {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      self.postMessage(this.responseText)
    }
  }

  xhttp.open("GET", 'http://localhost:8080/proxyServer/' + e.data)
  xhttp.send()

}