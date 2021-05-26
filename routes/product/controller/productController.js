const User = require("../../users/model/User");
const Product = require ("../model/Product");

module.exports = {
getAllProduct: function (callback){
    Product.find({},function (err, payload){
        if (err){
            callback (err, null);
        }else {
            callback (null, payload);
        }
    })
},
createProduct: function (body, callback){
    let createdProduct = new Product ({
        productName: body.productName,
    });
    createdProduct.save (function (err, payload){
        if (err){
            callback (err, null);
        }else {
            callback (null, payload);
        }
    })
},
getProductBYId: function (id, callback){
User.findById({_id: id}, function(err, payload){
    if (err){
        callback(err, null)
    }else{
        callback (null, payload)
    }
})
},
updateProductById: function (id, body, callback){
Product.findByIdAndUpdate(
    {_id: id},
    body,
    {new: true},
    function (err, updatedPayload){
        if (err){
            callback(err, null);
        }else{
            callback(null, updatedPayload)
        }
    }
)
},
deleteProductById: function (id, callback){
    User.findByIdAndRemove ({_id:id}, function(err,deletedPayload){
        if (err){
            callback (err, null)
        }else{
            callback (null, deletedPayload);
        }
    })
},
};
    
    
