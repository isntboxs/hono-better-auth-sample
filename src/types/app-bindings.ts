import type { PinoLogger } from 'hono-pino'
import type { AuthType } from '@/lib/auth/types'

export interface AppBindings {
  Variables: {
    logger: PinoLogger
    auth: AuthType
  }
}
