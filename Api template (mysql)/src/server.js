require('dotenv').config()
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const { query,body ,validationResult,matchedData} = require('express-validator');
// const database=require('./database/database')
const app=express()
app.use(bodyParser.json());
app.use(cors())


//// storage route
const storageRoute=require('./routes/storage')



////
app.use('/storage/image',storageRoute)




app.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`))
