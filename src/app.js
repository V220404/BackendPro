import express from "express"
import cookieParser  from "cookie-parser"
import cors from "cors"

const app = express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}))


app.use(express.json({limit :'16kb'}))

// (The Above syntax is for configuring json with limit of 16kb)


app.use(express.urlencoded({extended:true , limit:"16kb"}))

// (The above syntax is for recieving data from a url which is in encoded form )

app.use(express.static("public"))

// (It is used to store the data such as photos or icons in public folder)

app.use(cookieParser())
export { app }



