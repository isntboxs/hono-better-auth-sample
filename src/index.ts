import app from '@/app'
import { env } from '@/utils/env'

const port = env.PORT

export default {
  port,
  fetch: app.fetch,
}
