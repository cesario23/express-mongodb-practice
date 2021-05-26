const express = require("express");
const router = express.Router ();

const productController = require ("./controller/productController");

router.get ('/', function (req, res, next){
    res.json({test: true})
});

router.get ('/get-all-products', function (req, res){
    productController.getAllProduct (function (err, payload){
        if (err){
            res.status(500).json ({message: "Error", error: err})
        }else {
            res.json ({message: "Success", data: payload})
        }
    })
});


router.post ('/create-product', function (req, res){
    productController.createProduct (function (err, paylooad){
        if (err){
            res.status(500).json({message:"Error", error: err})
        }else {
            res.json ({message: "Success", data:payload})
        }
    })
});

router.get ('/get-product-by-id/:id', function(req, res){
    productController.getProductBYId (req.params.id, function (err, payload){
        if (err){
            res.status(500).json ({message: "Error", error: err})
        }else{
            res.json ({message: "Success", data: payload})
        }
    })
});

router.put ('/update-product-by-id/:id', function(req, res){
    productController.updateProductById (
        req.params.id,
        req.body,
        function (err, updatedPayload){
            if (err){
                res.status(500).json ({message: 'Error', error: err})
            }else {
                res.json ({message:'Success', data: updatedPayload})
            }
        }
    )
});

router.delete ('/delete-product-by-id/:id', function (req, res){
    productController.deleteProductById (req.params.id, function (err, deletedPayload){
        if (err){
            res.status(500).json ({message: "Error", error: err})
        }else{
            res.json({message:"Success", data: deletedPayload})
        }
    })
})
module.exports = router;
