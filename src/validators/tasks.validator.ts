import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import * as HttpStatusCodes from '@/utils/http-status-codes'

export const createTaskSchema = z.object({
  title: z.string().min(1).max(255),
  completed: z.boolean().default(false),
})

export const createTaskValidator = zValidator(
  'json',
  createTaskSchema,
  (result, c) => {
    if (!result.success) {
      return c.json(
        {
          message: result.error.message,
          errors: result.error.issues.map((issue) => ({
            path: issue.path,
            message: issue.message,
          })),
        },
        HttpStatusCodes.BAD_REQUEST,
      )
    }
  },
)
