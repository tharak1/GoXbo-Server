const mongoose = require("mongoose");

const monSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    shortInfo:{
        type:String,
        required:true,
    },
    longInfo:{
        type:String,
        required:true,
    },
    hotels:[{
        type:String,
        required:true,
    }],
    mapUrl:{
        type:String,
        required:true,
    },
    foodToEat:[{
        type:String,
        required:true,
    }],
    hotelsImg:[{
        type:String,
        required:true,
    }],
    foodImg:[{
        type:String,
        required:true,
    }]
});

module.exports = mongoose.model("mon",monSchema);
