const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientRoutes=require("./controllers/patientRouter")

const app=express()
app.use(express.json())
app.use(cors())

//monodb database
app.use("/api/patient",patientRoutes)

app.listen(3001,()=>{
    console.log("Server running ...")
})
