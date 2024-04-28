const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const priceDiv = document.getElementById("search-price");
const priceButton = priceDiv.querySelector("button");

const changeClass = (filter) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();
  // console.log(products);
  // console.dir(searchValue);
  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    // console.dir(productName);
    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const filterHandler = (event) => {
  // console.log(1);
  const filter = event.target.dataset.filter;
  // console.log(products);
  // console.log(1);
  products.forEach((product) => {
    const category = product.children[0].getAttribute("data-category");
    // console.log(element[0].getAttribute("validacion"));
    console.log(category);
    console.log(product);
    if (filter === "all") {
      product.style.display = "block";
    } else {
      if (filter === category) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
      // filter === category
      //   ? (product.style.display = "block")
      //   : (product.style.display = "none");
    }
    // console.log(category);
    // console.log(2);
  });
};

const searchPriceHandler = (event) => {
  const searchPrice = event.target.parentElement.children[0].value;
  console.log(searchPrice);
};

buttons.forEach((button) => {
  button.addEventListener("click", filterHandler);
});
searchInput.addEventListener("keyup", searchHandler);
priceButton.addEventListener("click", searchPriceHandler);
