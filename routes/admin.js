var express = require('express');
const { render } = require('../app');
var router = express.Router();
const productHelpers = require('../helpers/product-helper')

/* GET users listing. */
router.get('/', function (req, res, next) {
  let products = [
    {
      name: "MI TV",
      category: "tv",
      description: "best tv available",
      image: "https://images-na.ssl-images-amazon.com/images/I/71sBGR6LZhL._SX355_.jpg"
    },
    {
      name: "sony TV",
      category: "tv",
      description: "best smart tv available",
      image: "https://www.sony.com/image/53d7c185420c8f2a09c5b73efaf8fcd5?fmt=png-alpha&wid=720"
    },
    {
      name: "android TV",
      category: "tv",
      description: "best tv available",
      image: "https://images-na.ssl-images-amazon.com/images/I/81g4HVkElqL._SL1500_.jpg"
    },
    {
      name: "e-Airtech TV",
      category: "tv",
      description: "eAirtec 81 cm (32 inches) HD Ready Smart LED TV 32DJSM (Black) (2020 Model)",
      image: "https://images-na.ssl-images-amazon.com/images/I/61IJHKmAiyL._SL1500_.jpg"
    }
  ]
  res.render('admin/viewproduct', { admin: true, products });
});
router.get('/addproduct', function (req, res) {
  res.render('admin/addproduct')
})
router.post('/addproduct', (req, res) => {
  console.log(req.body)
  console.log(req.files.image)

  productHelpers.addProduct(req.body, (id) => {
    let image = req.files.image
    console.log(id)
    image.mv('./public/product-image/' + id + '.jpg', (err, done) => {
      if (!err) {
        res.render('admin/addproduct')
      }
      else {
        console.log(err)
      }
    })

  })
})
module.exports = router;
