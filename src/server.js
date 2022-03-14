const app= require("./index")
const connect = require("./configs/db")
app.listen(6000,async()=>{
  try {
      await connect()
  } catch (error) {
      console.log(error)
  }
  console.log("listening port 6000")
})