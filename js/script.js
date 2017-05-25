var items = [{
  id: 1,
  name: "Reversible Plaid",
  price: 26.99,
  description: "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
  image: "images/reversible-plaid.jpg",
  alt: "reversible plaid scarf",
}, {
  id: 2,
  name: "Fringed Plaid",
  price: 18.99,
  description: "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
  image: "images/fringed-plaidw-280.jpg",
  alt: "fringed plaid scarf",
}, {
  id: 3,
  name: "Multi Color",
  price: 22.99,
  description: "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
  image: "images/multi-colorw-280.jpg",
  alt: "multi color scarf",
}, {
  id: 4,
  name: "Northern Lights",
  price: 29.99,
  "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
  image: "images/northern-lightsw-280.jpg",
  alt: "northern lights scarf",
}, {
  id: 5,
  name: "Ombre Infinity",
  price: 11.99,
  "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
  image: "images/ombre-infinityw-280.jpg",
  alt: "ombre infinity scarf",
}, {
  id: 6,
  name: "Ashby Twill",
  price: 70.99,
  description: "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
  image: "images/twillw-328.jpg",
  alt: "ashby twill scarf",
}, {
  id: 7,
  name: "Wool Cable Knit",
  price: 49.99,
  description: "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
  image: "images/wool-cable.jpeg",
  alt: "wool cable knit scarf",
}, {
  id: 8,
  name: "Etro Paisley-Print Silk",
  price: 249.99,
  description: "Luxurious silk scarf with subtle paisley pattern. 100% silk",
  image: "images/etrow-280.png",
  alt: "etro paisley print silk scarf",
}];

var cart = [];
var taxRate = 0.10;
var shippingRate = 5.00;

$(document).ready(function() {
  // find the container div that holds all the item containers
  var itemsContainer = $('#items-container');
  for (var i = 0; i < items.length; i++) {
    // for each item, create its own little div
    var itemElement = createItemElement(items[i]);

    // and append that new item element into the itemsContainer div.
    itemsContainer.append(itemElement);
  }
});

function createItemElement(item) {
  // We have a "template" html element that we can lay out however we want. We just want to add the
  // item "data" into the "template" element. "clone()" takes the element and creates a copy of it that
  // we can manipulate by setting html/text/attributes.
  var itemTemplate = $('#item-template').clone();
  // remove the "item-template" id attribute so we don't create a copy of the "template" itself.
  itemTemplate.removeAttr("id")
  // Now we find the data elements to replace with "real" item data
  itemTemplate.find('.item-title').text(item.name);
  itemTemplate.find('.item-image').attr("src", item.image);
  itemTemplate.find('.prodDescription').html(item.description);
  itemTemplate.find('.price').text(item.price);
  // And attach some click event handlers to the buttons
  $(itemTemplate.find('.details')).click(function(e) {
    // What's nice about this approach is that we have the "item" data object in scope right here with us.
    // We can call showDetails and pass in the pure data object. No need to go looking through sibling
    // or parent elements to find the "data" like price and image.
    showDetails(item);
  });
  // And the add to cart button.
  $(itemTemplate.find('.cart-add')).click(function(e) {
    addToCart(item);
  });
  return itemTemplate;
}

function showDetails(item) {
  // Grab the single #detailModal element
  var modal = $('#detailModal');
  // And update its child attributes with data from the item object.
  modal.find(".modal-title").text(item.name);
  modal.find(".modal-description").text(item.description);
  modal.find(".modal-price").text(item.price);
  // Update a couple of attributes for images
  var img = modal.find(".modal-image");
  img.attr("alt", item.alt);
  img.attr('src', item.image);
};

function addToCart(item) {
  if (isAlreadyInCart(item)) {
    // If the item is already in the cart, update it's quantity and price
    updateItemInCart(item);
  } else {
    // otherwise, add it to the cart and add it to the cart modal
    addItemToCart(item);
  }
}

function updateItemInCart(item) {
  // the cart array contains all the "cartItems"
  var cartItem = cart[findIndexOfItemInCart(item)]
    // a "cartItem" has the "item" and a "quantity" of that item.
  cartItem.quantity += 1;
  refreshBadge()
  // Now that we've updated the cart data, update the cart modal to reflect the new cart
  // information
  var modal = $('#cartModal');
  var existingCartItemElement = modal.find("[data-item-name='" + item.name + "']")
  // Now that we have the existing element, update it's values based on what's in the cartItem.
  updateItemElement(cartItem, existingCartItemElement);
}

function addItemToCart(item) {
  // Create a new cartItem by specifying the item data object and the quantity of 1
  var cartItem = {
    item: item,
    quantity: 1
  };
  // append the cartItem to the end of the array of cart items.
  cart[cart.length] = cartItem;
  refreshBadge()
  // Create a copy of the "cart-item-template" element, just like we did with the items in the
  // main category view.
  var cartItemElement = $("#cart-item-template").clone();
  // remove the id attribute so we don't create a clone of the template itself
  cartItemElement.removeAttr("id")
  // Here's how we set up that custom attribute that we'll use to find which element
  // corresponds to the cart item name when we want to update the cart item quantity
  // or remove the item from the cart.
  cartItemElement.attr("data-item-name", item.name);
  // Attach the remove click handler
  cartItemElement.find(".remove-product").click(function() {
    removeItem(item);
  });

  // Now that we have the item created, update it based on the cartItem data (quantity of 1)
  updateItemElement(cartItem, cartItemElement);
  refreshBadge();
  // And append the cart item element to the cart items modal so it's visible
  var cartItems = $("#cart-items");
  cartItems.append(cartItemElement);
}
/**
 * Given a cartItem (an item and a quantity) and the given element, update the element
 * to show the item's information, price, quantity, and line price.
 **/
function updateItemElement(cartItem, cartItemElement) {
  // A cartItem contains the raw item "data" and the quantity in the cart.
  var item = cartItem.item;
  var quantity = cartItem.quantity;
  // Update the corresponding data in the cartItemElement: image, alt, title, price, etc.
  // Just like we did with the main category view.
  var img = cartItemElement.find(".prod-image");
  img.attr("src", item.image);
  img.attr("alt", item.alt);

  cartItemElement.find(".prod-title").html(item.name);
  cartItemElement.find(".modal-price").html(item.price);

  // For the quantity input element, find the <input> element
  var quantityInputElement = $(cartItemElement.find(".prod-quantity input"))
    // Now set it's value to the current cartItem's quantity value. We've already updated
    // the quantity in the cartItem "data" object in the cart array, so we don't have to
    // ask the <input> element for it's current value.
  quantityInputElement.val(quantity);
  // And update the line price by multiplying the item's price with the cartItem's quantity
  cartItemElement.find(".prod-line-price").html(item.price * quantity);
}

/**
 * Remove an item out of the cart
 **/
function removeItem(item) {
  alert("remove item " + item.name);
     item.splice();
     recalculateCart();
     refreshBadge();
}

/**
 * Returns true if the given item is already in the array of cart items
 **/
function isAlreadyInCart(item) {
  return findIndexOfItemInCart(item) > -1;
}
/**
 * Find the index of the given item in the cart array of cartItems. Returns
 * -1 if the item isn't found in the cart array.
 **/
function findIndexOfItemInCart(item) {
  for (var i = 0; i < cart.length; i++) {
    // Note that the cart is NOT an array of items, but an array of "cartItems" - an object
    // containing the "item" and a "quantity" for that item. So when we ask for the name,
    // we're asking cart[i].item.name.
    if (cart[i].item.name == item.name) {
      return i;
    }
  }
  return -1;
}

/*
addButton.addEventListener('click', function (e) {
  addToCart(itemImg, itemName, itemPrice)
  {

    for (var i in cart) {
      if (cart[i].name === itemName) {
        return;
      }
      this.image = itemImg
      this.name = itemName
      this.price = itemPrice
    };

    var itemImg = $(this.parentElement).find("img").attr('src');
    var itemName = $(this.parentElement).find("h3").text();
    var itemPrice = $(this.parentElement).find(".price").text();
    // var item = new Item(itemImg, itemName, itemPrice);
    cart.push({
      itemImg,
      itemName,
      itemPrice,
    });
    saveCartToLocalStorage();
    refreshBadge();
  }
});
*/
var subtotal = 0;
function recalculateCart() {

  $("#cart-items").each(function() {
    subtotal += parseFloat($(this).children(".prod-line-price").text());
  });
};

function subTotal() {
  var totalCount = 0;
  for (var i in cart) {
    totalCount += cart[i].count;
  }
  return totalCount;
};

function totalCart() {
  var totalCost = 0;
  for (var i in cart) {
    totalCost += cart[i].price;
  }
  return totalCost;
};

var tax = subtotal * taxRate;
var shipping = (subtotal > 0 ? shippingRate : 0);
var total = subtotal + tax + shipping;

    $(".totals-value").html(function() {
    $("#cart-subtotal").html(subtotal.toFixed(2));
    $("#cart-tax").html(tax.toFixed(2));
    $("#cart-shipping").html(shipping.toFixed(2));
    $("#cart-total").html(total.toFixed(2));
  });


function updateQuantity(quantityInput) {
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children(".modal-price").text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;

  productRow.children(".prod-line-price").each(function () {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
  });
}


function refreshBadge() {
  var badge = $('header').find('.badge');
  if (cart) {
    badge.text(cart.length);
  };
};

// Mailing List

function subscribeToEmail(event) {

  var email = $("#email").val();
  console.log(email);
  if (email) {
    alert("Thank you for signing up to our mailing list, " + email);
  } else {
    alert("Please enter a valid email address!");
  }
  event.preventDefault;
};
