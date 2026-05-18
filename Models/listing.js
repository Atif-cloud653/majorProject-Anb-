const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type:String,
        required : true,
    },
    description : String,
    image : {
       type :  String,
       default : "https://www.tourmyindia.com/states/goa/image/beaches-goa.webp",
       set : (v)=>
        v ===""
         ? "https://www.tourmyindia.com/states/goa/image/beaches-goa.webp"
         : v,
    },
    price : Number,
    location : String,
    country : String,
});

const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing; 