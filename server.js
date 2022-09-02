
const express=require ('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const User = require('./Models/User')



const app=express()
dotenv.config({path:'./Config/.env'})

const PORT= process.env.PORT
app.use(express.json())
mongoose.connect(process.env.MONGO_URI,err=>err? console.log(err) : console.log(`The Database is connected`))


app.get('/api/users',async(req,res)=>{
    try {
        const New_user=await User.find()
        res.json(New_user)
    } catch (error) {
        console.log(error)
    }
})
app.post('/api/users',async(req,res) =>{
    try {
        const NewUser=await new User(req.body)
        res.json(await NewUser.save())
    } catch (error) {
        console.log(error)
    }
})
app.put('/api/users/:id',async(req,res)=>{
    try {
        const update_user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(update_user)
    } catch (error) {
        console.log(error)
    }
}
)
app.delete('/api/users/:id',async(req,res)=>{
    try {
        const Delete_user=await User.findByIdAndDelete(req.params.id)
        res.json(Delete_user)
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT,err=>err? console.log(err) : console.log(`Server is running on port ${PORT}`))