
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

/* Item Details */

$(".details").on("click", showDetails);

function showDetails () {

/* looking for specific tag within the parent div, giving it a name and telling jquery to plug it in the modal here */
  var prodName = $(this.parentElement).find("h3").text();
  console.log(prodName);

  var title = $(".modal-title");
  title.text(prodName);

  var prodDescription = $(this.parentElement).find(".prodDescription").text();
  console.log(prodDescription);

  var description = $(".modal-description");
  description.text(prodDescription);

  var prodPrice = $(this.parentElement).find(".price").text();
  console.log(prodPrice);

  var price = $(".modal-price");
  price.text(prodPrice);

  var prodId = $(this.parentElement).find("prodId").text();
  console.log(prodId);

  var id = $(".modal-id");
  id.text(prodId);

  var prodImg = $(this.parentElement).find("img").attr('src');
  console.log(prodImg);

  var img = $(".modal-image");
  img.attr('src', prodImg);

  var detailDialog = ("#myModal");
  // detailDialog.modal('show');
  console.log(detailDialog);
};


// product load

var cart = [
  {
    "id": 1,
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg",
    "imageAlt": "reversible plaid scarf",
  },
  {
    "id": 2,
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaidw-280.jpg",
    "imageAlt": "fringed plaid scarf",
  },
  {
    "id": 3,
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-colorw-280.jpg",
    "imageAlt": "multi color scarf",
  },
  {
    "id": 4,
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lightsw-280.jpg",
    "imageAlt": "northern lights scarf",
  },
  {
    "id": 5,
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinityw-280.jpg",
    "imageAlt": "ombre infinity scarf",
  },
  {
    "id": 6,
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twillw-328.jpg",
    "imageAlt": "ashby twill scarf",
  },
  {
    "id": 7,
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg",
    "imageAlt": "wool cable knit scarf",
  },
  {
    "id": 8,
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etrow-280.png",
    "imageAlt": "etro paisley print silk scarf",
  }
]


// cart
function addToCart(itemName) {
    // go through items in cart
  for (var i in cart) {
    // match on name (change this if you are using id)
    if (cart[i].name == itemName) {
        // remove the item from array
      cart.push(i, 1);
        // bail out of the loop.  only remove one item with matching name
        break;
    }
  }

// Item Name //
var itemName = $(this.parentElement).find("h3").text();
var itemTitle = $(".prod-title");
//
// // Item Price //
var cartPrice = $(this.parentElement).find(".price").text();
var price = $(".modal-price");
//
// //Item Image //
// var cartImg = $(this.parentElement).find("img").attr('src');
var cartImg = document.getElementsByTagName("img").attr('src');
console.log(cartImg);
var img = $(".prod-image");

itemTitle.text(itemName);
price.text(cartPrice);
img.attr('src', cartImg);

}

var taxRate = 0.10;
var shippingRate = 5.00;

$(".prod-quantity input").change(function() {
  updateQuantity(this);
});

$(".prod-removal button").click(function() {
  removeItem(this);
});

function recalculateCart() {

  var subtotal = 0;

  $(".product").each(function() {
    subtotal += parseFloat($(this).children(".prod-line-price").text());
  });

var tax = subtotal * taxRate;
var shipping = (subtotal > 0 ? shippingRate : 0);
var total = subtotal + tax + shipping;

  $(".totals-value").html(function() {
  $("#cart-subtotal").html(subtotal.toFixed(2));
  $("#cart-tax").html(tax.toFixed(2));
  $("#cart-shipping").html(shipping.toFixed(2));
  $("#cart-total").html(total.toFixed(2));
});
}

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

function removeItem(removeButton) {
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(function() {
    productRow.remove();
  });
}


//cart badge //

$cart = $('.badge');
$cartIcon = $('.fa fa-shopping-cart fa-lg');
$cartQty = $cart.html();

flag = false;
$('#cartModal').click(function(e){

  if (flag) {
    return;
  }
  flag = true;

  //ajax code here
  $cartQty++;
  $cart.html($cartQty);

  setTimeout (function(){
  $cartIcon.removeClass('.badge');

    flag = false;
  });
});
