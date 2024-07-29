import { PORT } from './config'
import app from "./app";

const port = PORT || 5000
app.listen(port,()=>{
    console.log(`server is running on port ${PORT}`)
})