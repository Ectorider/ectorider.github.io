const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const imgArray = document.querySelectorAll(".small-image");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

imgArray.forEach((img) => {
  console.log(img);
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = () => (modal.style.display = "none");
modal.onclick = () => (modal.style.display = "none");
