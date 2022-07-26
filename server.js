import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors'
import routerUsers from './routes/users.js';
import routerPost from './routes/posts.js'
const app = express()
const port = 4000
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))



app.use('/users',routerUsers)
app.use('/posts',routerPost)

// connection à la bdd mongodb
main().catch(err => console.error(err))
async function main() {
    await mongoose.connect('mongodb+srv://MERNProject:Matrice2022@cluster0.zbesc.mongodb.net/escape-game?retryWrites=true&w=majority');
    console.log("connection réussi");

}




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)})