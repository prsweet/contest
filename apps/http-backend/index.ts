import express,{type Request,type Response} from "express"
const app = express()
import bcrypt from 'bcrypt'
const PORT = 3000
const SALT='fbsdjfbsdjbf9w7'
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

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
})