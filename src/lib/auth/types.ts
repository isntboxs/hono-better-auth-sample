import type { auth } from '@/lib/auth'

export type user = typeof auth.$Infer.Session.user
export type session = typeof auth.$Infer.Session.session
