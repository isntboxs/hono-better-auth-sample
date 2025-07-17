import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
import { user } from '@/db/schemas/auth-schema'

export const taskTable = pgTable('tasks', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  completed: boolean('completed').notNull().default(false),

  userId: text('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),

  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})
