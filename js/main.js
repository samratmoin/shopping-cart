// Product Update and Calculation Functional Way:
// ==================================================
// Step-1: get product input
function updateProductInput(inputId, totalId, price, isIncreasing) {
  const productInput = document.getElementById(inputId);
  let productNumber = productInput.value;
  if (isIncreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else {
    if (productNumber > 0) {
      productNumber = parseInt(productNumber) - 1;
    }
  }
  productInput.value = productNumber;
  //update product total
  const productTotal = document.getElementById(totalId);
  productTotal.innerText = productNumber * price;
  //update total
  calculateTotal();
}

// Step-2: Update Product Value:
function updateProductValue(productId) {
  const productInput = document.getElementById(productId);
  const productNumber = parseInt(productInput.value);
  return productNumber;
}

// Step-3: Calculate Total Amount
function calculateTotal() {
  const phoneTotal = updateProductValue("phone-number") * 1219;
  const caseTotal = updateProductValue("case-number") * 59;
  const subTotal = phoneTotal + caseTotal;
  const taxAmount = subTotal / 10;
  const totalAmount = subTotal + taxAmount;
  //update on html
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = taxAmount;
  document.getElementById("total-price").innerText = totalAmount;
}
// ================================================================
// Product Input Event Handler Functional Way:
// Step-1: phone
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductInput("phone-number", "phone-total", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductInput("phone-number", "phone-total", 1219, false);
});

// case:
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductInput("case-number", "case-total", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductInput("case-number", "case-total", 59, false);
});

// ======================================================================
// Product Input Event Handler Using Normal DOM way:
// Step-1:
// document.getElementById("phone-plus").addEventListener("click", function () {
//   const phoneInput = document.getElementById("phone-number");
//   const phoneNumber = phoneInput.value;
//   phoneInput.value = parseInt(phoneNumber) + 1;
//   console.log(phoneNumber);
// });

// document.getElementById("phone-minus").addEventListener("click", function () {
//   const phoneInput = document.getElementById("phone-number");
//   const phoneNumber = phoneInput.value;
//   phoneInput.value = parseInt(phoneNumber) - 1;
//   console.log(phoneNumber);
// });
