var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name: "MI TV",
      category: "tv",
      description: "best tv available",
      image:"https://images-na.ssl-images-amazon.com/images/I/71sBGR6LZhL._SX355_.jpg"
    },
    {
      name: "sony TV",
      category: "tv",
      description: "best smart tv available",
      image:"https://www.sony.com/image/53d7c185420c8f2a09c5b73efaf8fcd5?fmt=png-alpha&wid=720"
    },
    {
      name: "android TV",
      category: "tv",
      description: "best tv available",
    image:"https://images-na.ssl-images-amazon.com/images/I/81g4HVkElqL._SL1500_.jpg"
    },
    {
      name: "e-Airtech TV",
      category: "tv",
      description: "eAirtec 81 cm (32 inches) HD Ready Smart LED TV 32DJSM (Black) (2020 Model)",
      image:"https://images-na.ssl-images-amazon.com/images/I/61IJHKmAiyL._SL1500_.jpg"
    }
  ]
  res.render('index', {products, admin: false});
});

module.exports = router;
