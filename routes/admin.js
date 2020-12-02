var express = require('express');
const { render } = require('../app');
var router = express.Router();
const productHelpers = require('../helpers/product-helper')

/* GET users listing. */
router.get('/', function (req, res, next) {
  productHelpers.getAllProduct().then((products) => {
    console.log(products)
    res.render('admin/viewproduct', { admin: true, products });
  });
  router.get('/addproduct', function (req, res) {
    res.render('admin/addproduct')
  })
  router.post('/addproduct', (req, res) => {
    console.log(req.body)
    console.log(req.files.image)

    productHelpers.addProduct(req.body, (id) => {
      let img = req.files.img
      console.log(id)
      img.mv('./public/product-image/' + id + '.jpg', (err, done) => {
        if (!err) {
          res.render('admin/addproduct')
        }
        else {
          console.log(err)
        }
      })

    })
  })
})
module.exports = router;
