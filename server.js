import express, { urlencoded, json } from 'express'
import { mongoose } from 'mongoose'



const app = express()


app.use(
    urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/', (req,res)=>{
    res.json({message: 'deu certo'})
})

const DB_PASS = encodeURIComponent('UiT6W3L7NC3umWh5')

mongoose
    .connect(`mongodb+srv://aluca:${DB_PASS}@cluster0.vfzlosl.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=>{
        console.log('conectado ao mongo')
        app.listen(3000)
    })
    .catch((err)=>{
        console.log(err)
    })
