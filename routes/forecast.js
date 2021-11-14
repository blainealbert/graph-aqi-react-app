var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',function(req,res,next) {
    let city = req.query.city;
    fetch(`${process.env.REACT_APP_AQI_API_URL}/feed/${e.target.city.value}/?token=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(error => console.log(error));
});

module.exports = router;