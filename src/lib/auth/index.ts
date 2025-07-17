import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { openAPI } from 'better-auth/plugins'
import { db } from '@/db'
import { env } from '@/utils/env'

export const auth = betterAuth({
  baseURL: env.PUBLIC_APP_URL,
  trustedOrigins: [env.PUBLIC_APP_URL],
  logger: {
    level: 'debug',
    disabled: env.NODE_ENV === 'production',
  },
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [openAPI()],
  secret: env.BETTER_AUTH_SECRET,
})
