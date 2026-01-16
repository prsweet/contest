import cron from 'node-cron'
import { prisma } from '@repo/db'

export const startContestLifeCycle = () => {
    console.log("Contest Life Cycle Started")
    cron.schedule("* * * * * *", async () => {
        let now = new Date()
        await prisma.contest.updateMany({
            where: {
                status: 'PUBLISHED',
                startTime: {
                    lte: new Date(now.getTime() + 5000)
                }
            },
            data: {
                status: "LIVE"
            }
        })
        console.log("Contest Life Cycle Updated")
        const finishedContest = await prisma.contest.updateMany({
            where: {
                status: "LIVE",
                endTime: {
                    lte: now
                }
            },
            data: {
                status: 'FINISHED'
            }
        })
    })
}