// fetch the data from the folder of data
let AllProductsData;
fetch("../../data/products.json")
  .then((response) => response.json())
  .then((data) => {
    AllProductsData = data;
    displayProducts(data);
  })
  .catch((error) => console.error("Error loading JSON:", error));
// selections

let productCardContainer = document.querySelector(".product-card-container");
productCardContainer.innerHTML = "";
// console.log("it is all the data" + AllProductsData);
//   functions
const displayProducts = function (data, Filterprice, FilterCat, FilterType) {
  productCardContainer.innerHTML = data
    .map((item) => {
      return `<div class="card product-card col-12 col-md-5 col-lg-3 p-0">
                  
                  <img
                    class="card-img-top"
                    src="${item.image}"
                    alt="Card image cap"
                  />

                  <div class="card-body pb-0">
                    <h5 class="Product-title">${item.name}</h5>
                    <p class="product-desc p-0 m-0">
                      ${item.description}
                    </p>
                    <p class="product-cat p-0 m-0">
                      ${
                        item.category == "Veg"
                          ? `<i class="fa-solid fa-seedling me-1 text-success"></i>veg`
                          : `<i class="fa-solid fa-seedling me-1 text-danger"></i>nonveg`
                      }
                      <i class="fa-solid fa-tags text-primary-color ms-2"></i>
                      Bestseller
                    </p>
                    <p class="product-cat text-dark fw-bold p-0 m-0">
                      <i
                        class="fa-solid fa-warehouse me-1 text-primary-color"
                      ></i
                      >${item.in_stock ? "instock" : "outstock"}
                    </p>
                    <p class="product-price-details">
                      <span
                        ><i
                          class="fa-solid fa-indian-rupee-sign text-warning"
                        ></i>
                        Price :
                      </span>
                      <span class=""> &#8377; ${Math.floor(
                        (item.price * (100 - item.discount)) / 100
                      )}/- </span>
                      <span
                        class="text-decoration-line-through opacity-75 ms-2"
                      >
                        &#8377; ${item.price}
                      </span>
                      <span class="text-success"> ${item.discount}% off</span>
                    </p>
                  </div>
                  <button class="add2cartbtn">
                    <i class="fa-solid fa-cart-plus mx-2"></i>add to cart
                  </button>
                </div>`;
    })
    .join("");
};

let Price, Category, sellType, In_stock;
let filterForm = document.getElementById("filterForm");
filterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(filterForm);
  Price = parseInt(formData.get("price"));
  Category = formData.get("category");
  sellType = formData.get("sellType");
  In_stock = formData.get("in_stock") == "true" ? true : false;
  console.log(In_stock);
  // console.log(price);
  setTimeout(() => {
    console.log(AllProductsData);
    let filteredData = AllProductsData.filter((item) => {
      return item.price >= Price && item.category === Category;
    });
    console.log(filteredData);
    displayProducts(filteredData);
  }, 1000);
});
