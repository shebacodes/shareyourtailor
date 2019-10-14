var express = require("express");
var router = express.Router();
const axios = require("axios");

const apikey =
  "AmPocDu8RioL3HNygV5q-xya_YhfFcxEo1lZ8NdGOCxWioCugQGwwDAAABBuRjg-lyMgwE0AAAAA";

/* GET home page. */
router.get("/", function(req, res, next) {
  axios(
    `https://api.pinterest.com/v1/boards/bestystyles1/aso-ebi-styles/pins?access_token=${apikey}&fields=image`
    // {
    //   mode: "cors"
    //   // headers: {
    //   //   "Content-Type": "application/json",
    //   //   "Access-Control-Allow-Origin": "*"
    //   // }
    // }
  )
    // .then(response => response.json())
    .then(response => {
      // console.log(response.data);
      res.send(response.data);
    })
    .catch(error => {
      res.send(error);
    });
  // res.send("yes");
});

module.exports = router;
