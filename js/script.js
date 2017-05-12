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

// Produt Modal

// $("modal").on("click", function() {
//   $("#modal-image").attr('src');
//   $('#myModal').modal('show');
// });


function showDetails(){

  var prodName = $(this).find("h3").text();
  var prodPrice = $(this).find(".price").text();
  var prodDescription = $(this).find(".prodDescription").text();
  var prodURL = $(this).find("img").attr('src');

  var modalImg = $("modal-image");
  modalImg.attr("src", prodURL);

  var modalId = $("modal-id");
  modalId.text(prodId);

  var title = $("modal-title");
  title.text(prodName);

  var modalDescription = $("modal-description");
  modalDescription.text(prodDescription);

  var modalPrice = $("modal-price");
  modalPrice.text(prodPrice);

  $("#myModal").modal('show');

}

// cart

function checkOut(){
/* Set rates + misc */
var taxRate = 0.10;
var shippingRate = 5.00;
var fadeTime = 300;


/* Assign actions */
$('.quantity input').change( function() {
  updateQuantity(this);
});

$('.removal button').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;

  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });

  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;

  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}
}

/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;

  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}

// product load

var products = [
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
