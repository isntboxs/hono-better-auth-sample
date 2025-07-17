import type { PinoLogger } from 'hono-pino'
import type { session, user } from '@/lib/auth/types'

export interface AppBindings {
  Variables: {
    logger: PinoLogger
    user: user | null
    session: session | null
  }
}
