// var moltin = new Moltin({publicId:'oUkApbkvdYTJ84K9ysS3W8ir6DIEEkwi7V6L5s7RrL'})

// 	moltin.Authenticate(function() {
// 	 console.log("authenticated")
// 	});

// var product = moltin.Product.Find({slug: 'social'});

// var item = moltin.Cart.Insert(product.id, 1, null, function(cart) {
//   console.log("hello")
// });

// var cart = moltin.Cart.Contents();

// var order = moltin.Cart.Complete({
//   gateway: 'dummy',
//   customer: {
//     first_name: 'Jon',
//     last_name:  'Doe',
//     email:      'jon.doe@gmail.com'
//   },
//   bill_to: {
//     first_name: 'Jon',
//     last_name:  'Doe',
//     address_1:  '123 Sunny Street',
//     address_2:  'Sunnycreek',
//     city:       'Sunnyvale',
//     county:     'California',
//     country:    'US',
//     postcode:   'CA94040',
//     phone:      '6507123124'
//   },
//   ship_to: 'bill_to',
//   shipping: 'free_shipping'
// });

// var checkout = moltin.Checkout.Payment('purchase', order.id, {
//   data: {
//     number:       '4242424242424242',
//     expiry_month: '02',
//     expiry_year:  '2017',
//     cvv:          '123'
//   }
// });
