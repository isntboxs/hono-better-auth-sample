import createApp from '@/lib/create-app'
import authRoute from '@/routes/auth/auth.index'
import indexRoute from '@/routes/index.route'

const app = createApp()

const routes = [indexRoute, authRoute] as const

routes.forEach((route) => {
  app.basePath('/api').route('/', route)
})

export type AppType = (typeof routes)[number]

export default app
