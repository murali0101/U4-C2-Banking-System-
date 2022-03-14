const mongoose = require("mongoose")
 
const connect =()=>{
    return mongoose.connect(
      "mongodb+srv://muralimv:1234@d4c2.jnit9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
}
module.exports=connect