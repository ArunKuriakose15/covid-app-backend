const mongoose=require("mongoose")
const patientSchema=mongoose.Schema(
    {
        patientName:{
            type:String,
            required:true
        },
        patientAge:String,
        phone:String,
        address:String,
        symptoms:String,
        status:String
    }
)

module.exports=mongoose.model("patient",patientSchema)