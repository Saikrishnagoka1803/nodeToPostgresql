import express from "express"
import cors from "cors"

const server = express()

server.use(cors())
server.use(express.json())

server.listen(port, () => {
    console.log(`server running on port ${port}`)
})

server.on('error', (error) => {
    console.log("server has problem ", error)
})