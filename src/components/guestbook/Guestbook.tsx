'use client'

import { useMutation, useQuery } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

function GuestbookForm() {
  const addMessage = useMutation(api.guestbook.addMessage)
  const [message, setMessage] = useState('')
  const [pending, setPending] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!message.trim() || pending) return
    setPending(true)
    try {
      await addMessage({ message: message.trim() })
      setMessage('')
    } finally {
      setPending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Leave a message..."
        maxLength={500}
        className="border-border bg-background placeholder:text-muted-foreground focus:border-ring focus:ring-ring/20 flex-1 rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"
      />
      <Button type="submit" disabled={pending || !message.trim()}>
        {pending ? '...' : 'Post'}
      </Button>
    </form>
  )
}

function MessageList() {
  const messages = useQuery(api.guestbook.getMessages)

  if (messages === undefined) {
    return <p className="text-muted-foreground text-sm">Loading messages...</p>
  }

  if (messages.length === 0) {
    return (
      <p className="text-muted-foreground text-sm">
        No messages yet. Be the first!
      </p>
    )
  }

  return (
    <ul className="flex flex-col gap-3">
      {messages.map((msg) => (
        <li
          key={msg._id}
          className="border-border bg-muted/30 rounded-lg border px-4 py-3 text-sm"
        >
          <p className="text-foreground">{msg.message}</p>
          <time
            className="text-muted-foreground mt-1 block text-xs"
            dateTime={new Date(msg.createdAt).toISOString()}
          >
            {new Date(msg.createdAt).toLocaleDateString(undefined, {
              dateStyle: 'medium',
              timeStyle: 'short',
            })}
          </time>
        </li>
      ))}
    </ul>
  )
}

export function Guestbook() {
  return (
    <div className="flex flex-col gap-6">
      <GuestbookForm />
      <MessageList />
    </div>
  )
}
