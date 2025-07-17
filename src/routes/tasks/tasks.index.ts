import { getTasksByUserId, insertTask } from '@/db/queries/tasks-query'
import { createRouter } from '@/lib/create-app'
import { authMiddleware } from '@/middlewares/auth-middleware'
import * as HttpStatusCodes from '@/utils/http-status-codes'
import { createTaskValidator } from '@/validators/tasks.validator'

const router = createRouter().basePath('/tasks')

router.get('/', authMiddleware, async (c) => {
  const user = c.get('user')!

  try {
    const taskList = await getTasksByUserId(user.id)

    return c.json(taskList, HttpStatusCodes.CREATED)
  } catch (error) {
    c.var.logger.error('Error fetching tasks', error)

    return c.json(
      {
        message: 'Error fetching tasks',
      },
      HttpStatusCodes.INTERNAL_SERVER_ERROR,
    )
  }
})

router.post('/', authMiddleware, createTaskValidator, async (c) => {
  const user = c.get('user')!
  const taskData = c.req.valid('json')

  try {
    const newTask = await insertTask({
      ...taskData,
      userId: user.id,
    })

    return c.json(newTask, HttpStatusCodes.CREATED)
  } catch (error) {
    c.var.logger.error('Error creating task', error)

    return c.json(
      {
        message: 'Error creating task',
      },
      HttpStatusCodes.INTERNAL_SERVER_ERROR,
    )
  }
})

export default router
