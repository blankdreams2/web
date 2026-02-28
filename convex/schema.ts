import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  guestbook: defineTable({
    message: v.string(),
    createdAt: v.number(),
  }).index('by_created_at', ['createdAt']),
})
