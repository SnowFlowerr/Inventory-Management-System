const mongoose=require("mongoose");
const mongoURI=process.env.MongoDb;

const connectToMongo=async()=>{
    try {
        mongoose.connect(mongoURI);
        console.log("connect to mongoDb successfully!")
        
    } catch (error) {
        console.log(error);
    }
};
module.exports=connectToMongo;