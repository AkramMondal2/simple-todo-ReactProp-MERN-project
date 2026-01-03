import express from "express"
import { dbConnect } from "./src/config/dbConnect.js"
import todoRoute from "./src/routes/todoRoute.js"
import cors from "cors"

const app = express()
const port = 3000

dbConnect()
app.use(express.json())
app.use(cors())
app.use('/', todoRoute)

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}/`)
})