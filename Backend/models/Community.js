const mongoose=require('mongoose');
const communitySchema=new mongoose.Schema({
communityName:{
    type:String,
    
},
userInCommunity:[
    {
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    },
],
})

const Community=mongoose.model('Community',communitySchema);
module.exports=Community;