'use client'

import { lazy, Suspense } from 'react'

const GuestbookWithProvider = lazy(() =>
  import('./GuestbookWithProvider').then((m) => ({ default: m.GuestbookWithProvider }))
)

export function GuestbookLazy() {
  return (
    <Suspense
      fallback={
        <p className="text-muted-foreground text-sm">Loading guestbook...</p>
      }
    >
      <GuestbookWithProvider />
    </Suspense>
  )
}
