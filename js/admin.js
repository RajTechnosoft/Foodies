fetch("../../data/products.json")
  .then((response) => {
    // console.log("Response URL:", response.url);
    if (!response.ok) throw new Error("HTTP error " + response.status);
    return response.json();
  })
  .then((data) => {
    // console.log("Loaded Data:", data);

    let productDataContainer = document.getElementById(
      "product-data-container"
    );
    // console.log(productDataContainer);
    displayProductsData(productDataContainer, data);
  })
  .catch((error) => console.error("Error loading JSON:", error));

function displayProductsData(container, data) {
  console.log(container, data);
  container.innerHTML = data
    .map((item) => {
      return `
         <tr>
                  <th scope="row">${item.id}</th>
                  <td>${item.name}</td>
                  <td>${item.price}</td>
                  <td>${item.category}</td>
                  <td>${item.discount}</td>
                  <td>${item.in_stock}</td>
                  <td><img
                      src="${item.image}"
                      alt=""
                      width="100px"
                      max-height ="150px"
                      class="img-fluid rounded"
                    /></td>
                  <td>345 pieces</td>
                  <th scope="col"><a href="#" class ="text-success"><i class="fas fa-edit text-success"></i>
                    </a></th>
                  <th scope="col"><a href="#" class="text-danger"><i class="fas fa-trash text-danger"></i>
                </a></th>
                </tr>
        `;
    })
    .join("");
}
