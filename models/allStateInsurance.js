var mongoose = require ('mongoose');

var allStateInsuranceSchema = new mongoose.Schema({
    // name : {
    //     first : String,
    //     last : String
    // },
    // contact : {
    //     telephone : Number,
    //     email : String
    // },
    // // policyInfo : {
    // //     type : String,
    // //     roadSide : Boolean,
    // //     number : String,
    // //     expiration : Date
    // // },
    // vehicle : {
    //     make : String,
    //     model : String,
    //     year : Number,
    //     vin : String,
    //     color : String
    // }
});

var AllStateInsurance = module.exports = mongoose.model('AllStateInsurance',allStateInsuranceSchema, 'allStateInsurance');

module.exports.getAllStateInsurance = function (callback, limit) {
    AllStateInsurance.find(callback).limit(limit);
};