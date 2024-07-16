const asyncHandler = require("express-async-handler");
const mon = require("./models/MonumentModel");

const createMonument = asyncHandler(async(req,res)=>{
    const createdmon = await mon.create(req.body);
    res.status(200).json(createdmon);
});

const getMonument = asyncHandler(async(req,res)=>{
    let filter = {};
    if(req.query.state){
        filter = {state:req.query.state};
    }
    const result = await mon.find(filter);
    res.status(200).json(result);
});

const findById = asyncHandler(async(req,res)=>{
    const search = await mon.findById(req.params.id);
    res.status(200).json(search);
})
module.exports = {createMonument,getMonument,findById}