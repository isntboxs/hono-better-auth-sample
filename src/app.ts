import createApp from '@/lib/create-app'
import authRoute from '@/routes/auth/auth.index'
import indexRoute from '@/routes/index.route'
import tasksRoute from '@/routes/tasks/tasks.index'

const app = createApp()

const routes = [indexRoute, authRoute, tasksRoute] as const

routes.forEach((route) => {
  app.basePath('/api').route('/', route)
})

export type AppType = (typeof routes)[number]

export default app
