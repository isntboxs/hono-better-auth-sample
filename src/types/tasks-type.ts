import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import type { taskTable } from '@/db/schemas/task-schema'

export type TaskType = InferSelectModel<typeof taskTable>
export type NewTaskType = InferInsertModel<typeof taskTable>
