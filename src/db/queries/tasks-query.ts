import type { NewTaskType } from '@/types/tasks-type'
import { desc, eq } from 'drizzle-orm'
import { db } from '@/db'
import { taskTable } from '@/db/schemas/task-schema'

export async function insertTask(task: NewTaskType) {
  const [result] = await db.insert(taskTable).values(task).returning()

  return result
}

export async function getTasksByUserId(userId: string) {
  const result = await db
    .select()
    .from(taskTable)
    .where(eq(taskTable.userId, userId))
    .orderBy(desc(taskTable.createdAt))

  return result
}
