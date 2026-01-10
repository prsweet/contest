import express,{type Request,type Response} from "express"
const app = express()
const PORT = 3000
import { router as AuthRouter } from "./routes/AuthRouter.js"
import { router as BatchRouter } from "./routes/BatchController.js"
app.use(express.json())
// type Batch = {
//     id: string,
//     name: string,

// }
// type User = {
//     id: string,
//     name: string,
//     email: string,
//     password: string
//     role: 'CANDIDATE' | 'ADMIN',
//     batches: Batch[]
// }
// type Question = {
//     id: string, title: string, description?: string, score: number,
//     options:Option[]

// }
// type Option={
//     id:string,
//     title:string,
//     isCorrect:Boolean,
//     questionId:string,
// }
// type Contest = {
//     id: string,
//     title: string,
//     isOpenAll: Boolean,
//     batchIds: string[],
//     startTime: Date,
//     duration: number,
//     status: 'DRAFT' | 'PUBLISHED' | 'LIVE' | 'FINISHED' | 'UNPUBLISHED'
//     questions: Question[]
// }
// const users:User[]=[]

app.use('/auth',AuthRouter)
app.use('/batch',BatchRouter)

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
})