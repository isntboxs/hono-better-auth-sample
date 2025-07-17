import { createRouter } from '@/lib/create-app'
import * as HttpStatus from '@/utils/http-status-codes'

const router = createRouter()

router.get('/', (c) =>
  c.json(
    {
      message: 'Hello from Hono!',
    },
    HttpStatus.OK,
  ),
)

export default router
