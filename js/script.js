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

function refreshBadge() {

    var badge = $('header').find('.badge');
    if (cart) {
      badge.text(cart.length);
    }
  }

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

  var title = $(".modal-description");
  title.text(prodDescription);


  var prodPrice = $(this.parentElement).find(".price").text();
  console.log(prodPrice);

  var title = $(".modal-price");
  title.text(prodPrice);


  var prodImg = $(this.parentElement).find("img").attr('src');
  console.log(prodImg);

  var title = $(".modal-image");
  title.attr('src', prodImg);


  var detailDialog = ("#myModal");
  // detailDialog.modal('show');
  console.log(detailDialog);
}


// cart

// $(".cart-add").on("click", addToCart);
//
// function addToCart () {
//
// /* looking for specific tag within the parent div, giving it a name and telling jquery to plug it in the modal here */
//   var prodName = $(this.parentElement).find("h3").text();
//   console.log(prodName);
//
//   var title = $(".prod-title");
//   title.text(prodName);
//
//
//   var prodPrice = $(this.parentElement).find(".price").text();
//   console.log(prodPrice);
//
//   var title = $(".modal-price");
//   title.text(prodPrice);
//
//
//   var prodImg = $(this.parentElement).find("img").attr('src');
//   console.log(prodImg);
//
//   var title = $(".prod-image");
//   title.attr('src', prodImg);
//
//
//   var cartDialog = ("#cartModal");
//   // cartDialog.modal('show');
//   console.log(cartDialog);
//
// }

var cart = [];

function addToCart () {
  event.preventDefault();
  cart.push("item");
  console.log("You have " + cart.length + " items in your cart.");
}

function removeFromCart () {
  event.preventDefault ();
  if (cart.length > 0) {
    cart.pop("item");
    console.log("You now have " + cart.length + " items in your cart.");

  }
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
