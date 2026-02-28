'use client'

import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { Guestbook } from './Guestbook'

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string)

export function GuestbookWithProvider() {
  return (
    <ConvexProvider client={convex}>
      <Guestbook />
    </ConvexProvider>
  )
}
