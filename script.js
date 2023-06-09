const chooseImage = document.querySelector("#chooseImage"),
  chooseImageBtn = document.querySelector(".choose");
const saveBtn = document.querySelector(".save");
const filterText = document.querySelector(".filter-text");
const textContainer = document.querySelector(".text-container");
const selectImage = document.querySelector(".selected-img");
const noEdit = document.querySelector(".noEdit");
const slider = document.getElementById("slider");

chooseImageBtn.addEventListener("click", () => chooseImage.click());
saveBtn.disabled = true;

chooseImage.addEventListener("change", () => {
  const imgLogo = document.querySelector(".img-logo");
  if (!chooseImage.files[0]) {
    imgLogo.classList.remove("hide");
    noEdit.classList.remove("show");
    slider.classList.remove("show");
    selectImage.classList.remove("show");
    saveBtn.disabled = true;
  } else {
    saveBtn.disabled = false;
    noEdit.classList.add("show");
    slider.classList.add("show");
    imgLogo.classList.add("hide");
    selectImage.classList.add("show");
    let file = chooseImage.files[0];
    selectImage.src = URL.createObjectURL(file);
    noEdit.src = URL.createObjectURL(file);
  }
});

// ----------------------------------------
// --------  All Input Select   ----------
// ----------------------------------------

const inputEls = document.querySelectorAll("input[type='range']");
let blur = `blur(${0})`,
  brightness = `brightness(${1})`,
  contrast = `contrast(${1})`,
  grayscale = `grayscale(${0})`,
  hueRotate = `hue-rotate(${0})`,
  invert = `invert(${0})`,
  opacity = `opacity(${1})`,
  saturate = `saturate(${1})`,
  sepia = `sepia(${0})`;
const img = document.querySelector(".selected-img");
const blurValue = document.querySelector(".blur-value");
const brightnessValue = document.querySelector(".brightness-value");
const contrastValue = document.querySelector(".contrast-value");
const grayscaleValue = document.querySelector(".grayscale-value");
const hueRotateValue = document.querySelector(".hue-value");
const invertValue = document.querySelector(".invert-value");
const opacityValue = document.querySelector(".opacity-value");
const saturateValue = document.querySelector(".saturate-value");
const sepiaValue = document.querySelector(".sepia-value");

inputEls.forEach((inputEl) => {
  inputEl.addEventListener("input", () => {
    if (inputEl.name === "blur") {
      blurValue.innerText = `${inputEl.value}px`;
      blur = `blur(${(blur = inputEl.value)}px)`;
    } else if (inputEl.name === "brightness") {
      brightnessValue.innerText = `${inputEl.value}`;
      brightness = `brightness(${(brightness = inputEl.value)})`;
    } else if (inputEl.name === "contrast") {
      contrastValue.innerText = `${inputEl.value}`;
      contrast = `contrast(${(contrast = inputEl.value)})`;
    } else if (inputEl.name === "grayscale") {
      grayscaleValue.innerText = `${inputEl.value}`;
      grayscale = `grayscale(${(grayscale = inputEl.value)})`;
    } else if (inputEl.name === "hue-rotate") {
      hueRotateValue.innerText = `${inputEl.value}deg`;
      hueRotate = `hue-rotate(${(hueRotate = inputEl.value)}deg)`;
    } else if (inputEl.name === "invert") {
      invertValue.innerText = `${inputEl.value}`;
      invert = `invert(${(invert = inputEl.value)})`;
    } else if (inputEl.name === "opacity") {
      opacityValue.innerText = `${inputEl.value}`;
      opacity = `opacity(${(opacity = inputEl.value)})`;
    } else if (inputEl.name === "saturate") {
      saturateValue.innerText = `${inputEl.value}`;
      saturate = `saturate(${(saturate = inputEl.value)})`;
    } else if (inputEl.name === "sepia") {
      sepiaValue.innerText = `${inputEl.value}`;
      sepia = `sepia(${(sepia = inputEl.value)})`;
    }

    // ----------------------------------------
    // --------  Seprate Delete Button  ----------
    // ----------------------------------------

    const deleteBtns = document.querySelectorAll(".delete");
    const resetBtn = document.querySelector(".reset");

    deleteBtns.forEach((deleteBtn, index) => {
      deleteBtn.addEventListener("click", () => {
        if (inputEls[index].name === "blur") {
          blur = `blur(0)`;
          blurValue.innerText = "0px";
          inputEls[index].value = 0;
        } else if (inputEls[index].name === "brightness") {
          brightness = `brightness(1)`;
          brightnessValue.innerText = "1";
          inputEls[index].value = 1;
        } else if (inputEls[index].name === "contrast") {
          contrast = `contrast(1)`;
          contrastValue.innerText = "1";
          inputEls[index].value = 1;
        } else if (inputEls[index].name === "grayscale") {
          grayscale = `grayscale(0)`;
          grayscaleValue.innerText = "0";
          inputEls[index].value = 0;
        } else if (inputEls[index].name === "hue-rotate") {
          hueRotate = `hue-rotate(0)`;
          hueRotateValue.innerText = "0deg";
          inputEls[index].value = 0;
        } else if (inputEls[index].name === "invert") {
          invert = `invert(0)`;
          invertValue.innerText = "0";
          inputEls[index].value = 0;
        } else if (inputEls[index].name === "opacity") {
          opacity = `opacity(1)`;
          opacityValue.innerText = "1";
          inputEls[index].value = 1;
        } else if (inputEls[index].name === "saturate") {
          saturate = `saturate(1)`;
          saturateValue.innerText = "1";
          inputEls[index].value = 1;
        } else if (inputEls[index].name === "sepia") {
          sepia = `sepia(0)`;
          grayscaleValue.innerText = "0";
          inputEls[index].value = 0;
        }
        alert(
          inputEl.name.charAt(0).toUpperCase() + inputEl.name.slice(1),
          "Filter Removed"
        );
        img.style.filter = `${blur} ${brightness} ${contrast} ${grayscale} ${hueRotate} ${invert} ${opacity} ${saturate} ${sepia}`;

        filterProperty();
      });
    });

    resetBtn.addEventListener("click", () => {
      alert("All Filters Reset");
      blur = `blur(0)`;
      blurValue.innerText = "0px";
      inputEls[0].value = 0;

      brightness = `brightness(1)`;
      brightnessValue.innerText = "1";
      inputEls[1].value = 1;

      contrast = `contrast(1)`;
      contrastValue.innerText = "1";
      inputEls[2].value = 1;

      grayscale = `grayscale(0)`;
      grayscaleValue.innerText = "0";
      inputEls[3].value = 0;

      hueRotate = `hue-rotate(0)`;
      hueRotateValue.innerText = "0deg";
      inputEls[4].value = 0;

      invert = `invert(0)`;
      invertValue.innerText = "0";
      inputEls[5].value = 0;

      opacity = `opacity(1)`;
      opacityValue.innerText = "1";
      inputEls[6].value = 1;

      saturate = `saturate(1)`;
      saturateValue.innerText = "1";
      inputEls[7].value = 1;

      sepia = `sepia(0)`;
      grayscaleValue.innerText = "0";
      inputEls[8].value = 0;
      img.style.filter = `${blur} ${brightness} ${contrast} ${grayscale} ${hueRotate} ${invert} ${opacity} ${saturate} ${sepia}`;
      filterProperty();
    });
    img.style.filter = `${blur} ${brightness} ${contrast} ${grayscale} ${hueRotate} ${invert} ${opacity} ${saturate} ${sepia}`;
    filterProperty();
  });
});

function filterProperty() {
  const filterProperty = [];
  blur !== "blur(0)" ? filterProperty.push(blur) : "";
  brightness !== "brightness(1)" ? filterProperty.push(brightness) : "";
  contrast !== "contrast(1)" ? filterProperty.push(contrast) : "";
  grayscale !== "grayscale(0)" ? filterProperty.push(grayscale) : "";
  hueRotate !== "hue-rotate(0)" ? filterProperty.push(hueRotate) : "";
  invert !== "invert(0)" ? filterProperty.push(invert) : "";
  opacity !== "opacity(1)" ? filterProperty.push(opacity) : "";
  saturate !== "saturate(1)" ? filterProperty.push(saturate) : "";
  sepia !== "sepia(0)" ? filterProperty.push(sepia) : "";

  filterText.innerText = filterProperty.join(" ");
}

textContainer.addEventListener("click", (e) => {
  navigator.clipboard.writeText(`filter: ${e.target.innerText}`);
  alert("CSS Style Copied");
});

function alert(msg, property) {
  const copyInfo = document.querySelector(".copy-info");

  copyInfo.classList.add("show");
  setTimeout(() => {
    copyInfo.classList.remove("show");
  }, 1500);
  if (property) {
    copyInfo.innerText = `${msg} ${property}`;
  } else {
    copyInfo.innerText = msg;
  }
}
// ----------------------------------------
// --------  Image Slider   ----------
// ----------------------------------------

function slide() {
  let slideValue = document.getElementById("slider").value;
  document.querySelector(".noEdit").style.clipPath =
    "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
}

// ----------------------------------------
// --------  Save Image to User Phone   ----------
// ----------------------------------------

saveBtn.addEventListener("click", () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = selectImage.naturalWidth;
  canvas.height = selectImage.naturalHeight;

  ctx.filter = `${blur} ${brightness} ${contrast} ${grayscale} ${hueRotate} ${invert} ${opacity} ${saturate} ${sepia}`;
  ctx.drawImage(selectImage, 0, 0, canvas.width, canvas.height);

  const link = document.createElement("a");
  link.download = "image.jpg";
  link.href = canvas.toDataURL();
  link.click();
  alert("Image Saved");
});
