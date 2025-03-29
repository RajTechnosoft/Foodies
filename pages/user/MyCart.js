console.log("these responses are from mycart file ");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);
cartContainer = document.querySelector(".my-card-container");
const displayCartProduct = function (cart) {
  cartContainer.innerHTML = cart
    .map((item) => {
      return `<div class="card cart-product-card col-12 col-md-5 col-lg-3 p-0">
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
                      <i class="fa-solid fa-tags text-primary-color ms-2"></i> Bestseller
                    </p>
           <p class="product-cat text-dark fw-bold p-0 m-0">
                      <i class="fa-solid fa-warehouse me-1 text-primary-color"></i>${
                        item.in_stock == "in_stock" ? "instock" : "outstock"
                      }
                    </p>
            <div
              class="btn-group py-2"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                class="btn btn-outline-danger fs-sm py-0 rounded-start"
              >
                +
              </button>
              <button
                type="button"
                class="btn btn-outline-danger py-0 rounded-0"
              >
                1
              </button>
              <button
                type="button"
                class="btn btn-outline-danger py-0 rounded-end"
              >
                -
              </button>
            </div>
           <p class="product-price-details">
                      <span><i class="fa-solid fa-indian-rupee-sign text-warning"></i> Price :</span>
                      <span class=""> &#8377; ${Math.floor(
                        (item.price * (100 - item.discount)) / 100
                      )}/- </span>
                      <span class="text-decoration-line-through opacity-75 ms-2"> &#8377; ${
                        item.price
                      }</span>
                      <span class="text-success"> ${item.discount}% off</span>
                    </p>
            <p class="product-price-details">
              <span> Total Price : </span>
              <span class=""> &#8377; 165 </span>
              <span class="opacity-75 ms-2"> You saved &#8377; </span>
              <span class="text-success"> 789</span>
            </p>
          </div>
          <div class="btns row d-flex justify-content-evenly py-2 gap-2 gap-md-0 p-2">
          <button class="RemoveBtn  col-12 col-md-6">
           <i class="fa-solid fa-trash mx-2"></i></i>Remove Item
          </button>
           <button class="OrderBtn bg-success col-12  col-md-5">
            <i class="fa-solid fa-cart-plus mx-2"></i>Order Now
          </button>
          
          </div>
          
        </div>`;
    })
    .join("");
};
document.addEventListener("DOMContentLoaded", function () {
  displayCartProduct(cart);
});
