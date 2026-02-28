import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

export const addMessage = mutation({
  args: {
    message: v.string(),
  },
  handler: async (ctx, args) => {
    if (!args.message.trim()) return null
    await ctx.db.insert('guestbook', {
      message: args.message.trim().slice(0, 500),
      createdAt: Date.now(),
    })
  },
})

export const getMessages = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db
      .query('guestbook')
      .withIndex('by_created_at')
      .order('desc')
      .take(100)
  },
})
