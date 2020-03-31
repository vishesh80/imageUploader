const input = document.querySelector("input");
const img = document.querySelector("img");
img.onload = checkwidth;

input.addEventListener("change", event => {
  img.style.display = "none"; //to reset the img tag
  img.src = "";

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    img.src = String(reader.result);
  });
  reader.readAsDataURL(input.files[0]);
});

function checkwidth() {
  const width = img.naturalWidth;
  if (width < 600 || width > 600) {
    alert(
      `The image width is ${
        width < 600
          ? `less than 600px.\nUpload another`
          : `more than 600px\nCROP it`
      }`
    );
    input.type = ""; // TO clear the files
    input.type = "file";
  } else {
    alert("Upload Successful !");
    img.style.display = "inline-block";
  }
}
