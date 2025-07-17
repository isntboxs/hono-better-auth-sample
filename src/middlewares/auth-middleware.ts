import type { AppBindings } from '@/types/app-bindings'
import { createMiddleware } from 'hono/factory'
import { auth } from '@/lib/auth'
import * as HttpStatusCodes from '@/utils/http-status-codes'

export const authMiddleware = createMiddleware<AppBindings>(async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers })

  if (!session) {
    return c.json(
      {
        message: 'Unauthorized',
      },
      HttpStatusCodes.UNAUTHORIZED,
    )
  }

  c.set('user', session.user)
  c.set('session', session.session)
  return next()
})
