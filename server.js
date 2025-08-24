const express = require("express");

const app = express()
const PORT = 8383


app.listen(PORT, (req, res)=>{
  console.log(`server has started at ${PORT}`);
})