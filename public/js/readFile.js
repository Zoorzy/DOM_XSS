let fileInput = document.getElementsByClassName("file-upload-field")[0];

fileInput.onclick = function () {
  this.value = null;
};

fileInput.onchange = function () {

  let file = this.files[0];
  let selectName = document.getElementsByClassName("file-upload-wrapper")[0];
  selectName.dataset.text = file.name;

  var reader = new FileReader();
  reader.readAsText(file, "UTF-8");

  reader.onload = function (evt) {

    if (this.result) {
      document.getElementById("fileContents").textContent = "";

      var lines = this.result.split('\n');
      for (var line = 0; line < lines.length; line++) {

        let input = document.createElement('input')
        input.setAttribute("type", "checkbox")
        input.classList.add("check")
        input.setAttribute("name", "url")
        input.setAttribute("id", "check" + line)
        input.setAttribute("value", lines[line])
        input.setAttribute("checked", true)

        let span = document.createElement("span")
        span.innerText = lines[line]

        document.getElementById("fileContents").appendChild(input)
        document.getElementById("fileContents").appendChild(span)

      }

      let submit = document.createElement("input")
      submit.setAttribute("type", "button")
      submit.setAttribute("value", "SCAN NOW")
      submit.setAttribute("onclick", "submit()")

      document.getElementsByTagName("form")[0].appendChild(submit)

    }
  }

  reader.onerror = function (evt) {
    document.getElementById("fileContents").innerText = "error reading file";
  }

}