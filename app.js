let downloadBtn = document.getElementById("download-btn");
downloadBtn.addEventListener("click", function() {
  // API endpoint to download the file
  let url = "https://drive.google.com/file/d/1gQ5Vue6OsUaebNxdFcGG-kjJxPfBQo6u/view?usp=sharing";
  // create a new XHR object
  let xhr = new XMLHttpRequest();
  // open the XHR object using the GET method
  xhr.open("GET", url, true);
  // set the response type to "blob"
  xhr.responseType = "blob";
  // send the XHR request
  xhr.send();
  // listen to the load event
  xhr.addEventListener("load", function() {
    // get the blob object
    let blob = xhr.response;
    // create an object URL
    let objectUrl = URL.createObjectURL(blob);
    // create a new link element
    let link = document.createElement("a");
    // set the link's href to the object URL
    link.href = objectUrl;
    // set the link's download attribute
    link.download = "getricher.pdf";
    // append the link to the body
    document.body.appendChild(link);
    // click the link
    link.click();
    // revoke the object URL
    URL.revokeObjectURL(objectUrl);
  });
});
