import cron from 'node-cron'
import {prisma} from '@repo/db'

export const startContestLifeCycle=()=>{
    cron.schedule("* * * * * *",async()=>{
        let now=new Date()
        await prisma.contest.updateMany({
            where:{
                status:'PUBLISHED',
                startTime:{
                    lte:new Date(now.getTime()+5000)
                }
            },
            data:{
                status:"LIVE"
            }
        })
        const finishedContest=await prisma.contest.updateMany({
            where:{
                status:"LIVE",
                endTime:{
                    lte:now
                }
            },
            data:{
                status:'FINISHED'
            }
        })
    })
}