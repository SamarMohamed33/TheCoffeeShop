let images = document.querySelectorAll(".images img");
let paragraphs = document.querySelectorAll(".images p");

let imagesSrc = [
  "New Coffee/espresso_prev_ui - Copy.png",
  "New Coffee/sbx20190607-32092-icedcaffemocha-onwhite-corelib-srgb.png",
  "New Coffee/gcb_2-_1__prev_ui.png",
  "New Coffee/pexels-samer-daboul-1627931_prev_ui.png",
  "New Coffee/png-transparent-iced-coffee-frappe-coffee-latte-coffee-milk-coffee-iced-coffee-frappe-coffee-latte_prev_ui.png",
  "New Coffee/First_prev_ui - Copy.png",
  "New Coffee/third - Copy.png",
];
let imagesParagraphs = [
  `Espresso<br />
    5$`,
  `Iced Mocha<br />
 3.5$`,
  `Green Coffee<br />
  5$`,
  `Black Coffee<br />
 3$`,
  `Iced Latte<br />
4$`,
  `Latte<br />
 7$`,
  `Iced Coffee<br />
 4$`,
];
let centerImage = document.getElementsByClassName("center-img")[0];
setInterval(() => {
  for (let i = 0; i < images.length; i++) {
    if (i === 0) {
      centerImage.src = imagesSrc[i];
    }
    images[i].src = imagesSrc[i];
    paragraphs[i].innerHTML = imagesParagraphs[i];
  }
  const popedElement = imagesSrc.pop();
  imagesSrc.unshift(popedElement);

  const popedP = imagesParagraphs.pop();
  imagesParagraphs.unshift(popedP);
}, 3000);
