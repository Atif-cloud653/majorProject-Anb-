const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

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
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review",
        },
    ],
});

listingSchema.post("findOneAndDelete" , async(listing) =>{
    if(listing){
        await Review.deleteMany({_id : {$in : listing.reviews}});
    }
    
});

const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing; 