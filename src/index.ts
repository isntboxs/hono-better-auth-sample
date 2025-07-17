import app from '@/app'
import { env } from '@/utils/env'

const port = env.PORT

export default {
  fetch: app.fetch,
  hostname: '0.0.0.0',
  port,
}
