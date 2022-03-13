const router = require('express').Router()

router.get("/", (req, res) => {
    let places = [
      {
        name: "H-Thai-ML",
        city: "Seattle",
        state: "WA",
        cuisines: "Thai, Pan-Asian",
        pic: "images/vicky-ng-NT5oqzp-050-unsplash.jpg",
      },
      {
        name: "Coding Cat Cafe",
        city: "Phoenix",
        state: "AZ",
        cuisines: "Coffee, Bakery",
        pic: "images/jeremy-yap-jn-HaGWe4yw-unsplash.jpg",
      },
    ];
    res.render("places/index", { places });
  });
  

module.exports = router;