const express = require("express")
const app = express()
const port = 5000
const cors = require("cors")
const connectDb = require("./connectDb")
connectDb()
app.use(cors())
app.use(express.json())
app.use("/api/monument",require("./routes/monRoutes"))

app.listen(port,()=>{
    console.log("server is live");
});
