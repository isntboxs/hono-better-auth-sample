import type { AppBindings } from '@/types/app-bindings'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger, notFound, onError, serveEmojiFavicon } from '@/middlewares'
import { env } from '@/utils/env'

export function createRouter() {
  return new Hono<AppBindings>({
    strict: false,
  })
}

export default function createApp() {
  const app = createRouter()
  app.use(serveEmojiFavicon('🔥'))
  app.use(logger())

  app.use(
    '/api/auth/*',
    cors({
      origin: env.PUBLIC_APP_URL,
      allowHeaders: ['Content-Type', 'Authorization'],
      allowMethods: ['POST', 'GET', 'OPTIONS'],
      exposeHeaders: ['Content-Length'],
      maxAge: 600,
      credentials: true,
    }),
  )

  app.onError(onError)
  app.notFound(notFound)

  return app
}
