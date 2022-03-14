const express =require("express")
const app=express()
app.use(express.json())

const userController = require("./controllers/user.controllers")
const branch_detailController = require("./controllers/branch_detail.controllers");
const master_accountController = require("./controllers/master_account.controllers");
const savings_accountController = require("./controllers/savings_account.controllers");
const fixed_accountController = require("./controllers/fixed_account.controllers");

app.use("/user",userController)
app.use("/branch_detail",branch_detailController);
app.use("/master_account", master_accountController);
app.use("/savings_account", savings_accountController);
app.use("/fixed_account", fixed_accountController);



module.exports=app