
    // Validation and form submission (you can replace this with your own validation logic)
    document.getElementById('subscribe-form').addEventListener('submit', function(event) {
      var emailInput = document.getElementById('email');
      if (!emailInput.value) {
        alert('Please enter a valid email.');
        event.preventDefault();
      }
    });
  
    // JavaScript code for adding items to the cart
    var cartCount = 0; // Initialize cart count
    
    // Function to update cart count and display in navbar
    function updateCartCount() {
      var cartCountElement = document.getElementById('cart-count');
      if (cartCountElement) {
        cartCountElement.textContent = cartCount;
      }
    }

    // Event listener for "Add to Cart" button click
    var addToCartButtons = document.querySelectorAll('.Cart_hover1');
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        cartCount++; // Increment cart count
        updateCartCount(); // Update cart count in navbar
      });
    });

    // Call updateCartCount on page load
    updateCartCount();




    // Add event listener to all "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll('.addToCart');
addToCartButtons.forEach(function (button) {
button.addEventListener('click', function () {
  cartCount++;
  updateCartCount();

  // Get the product details from the clicked button
  var product = {
    name: button.getAttribute('data-name'),
    price: parseFloat(button.getAttribute('data-price'))
  };

  // Get the existing cart items from local storage
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Add the new product to the cart items
  cartItems.push(product);

  // Store the updated cart items back in local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
});
});

// Function to update the cart count in the navbar
function updateCartCount() {
var cartCountElement = document.getElementById('cart-count');
if (cartCountElement) {
  cartCountElement.textContent = cartCount;
}
}

// Load cart count from local storage and update cart count in the navbar
var cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
updateCartCount();

