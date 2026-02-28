'use client'

import { Button } from '@/components/ui/button'
import { supabaseBrowser } from '@/lib/supabase-client'
import { useEffect, useState } from 'react'

interface Message {
  id: string
  message: string
  created_at: string
}

export function Guestbook() {
  const [messages, setMessages] = useState<Message[] | null>(null)
  const [message, setMessage] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function fetchMessages() {
    if (!supabaseBrowser) {
      setMessages([])
      return
    }
    const { data } = await supabaseBrowser
      .from('guestbook')
      .select('id, message, created_at')
      .order('created_at', { ascending: false })
      .limit(100)
    setMessages(data ?? [])
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!message.trim() || pending || !supabaseBrowser) return
    setPending(true)
    setError(null)
    try {
      const { error: err } = await supabaseBrowser
        .from('guestbook')
        .insert({ message: message.trim().slice(0, 500) })
      if (err) throw err
      setMessage('')
      await fetchMessages()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to post')
    } finally {
      setPending(false)
    }
  }

  if (!supabaseBrowser) {
    return (
      <p className="text-muted-foreground text-sm">
        Guestbook unavailable — add PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY to .env.local
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-6">
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
      {error && <p className="text-destructive text-sm">{error}</p>}
      {messages === null ? (
        <p className="text-muted-foreground text-sm">Loading messages...</p>
      ) : messages.length === 0 ? (
        <p className="text-muted-foreground text-sm">No messages yet. Be the first!</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {messages.map((msg) => (
            <li
              key={msg.id}
              className="border-border bg-muted/30 rounded-lg border px-4 py-3 text-sm"
            >
              <p className="text-foreground">{msg.message}</p>
              <time
                className="text-muted-foreground mt-1 block text-xs"
                dateTime={msg.created_at}
              >
                {new Date(msg.created_at).toLocaleDateString(undefined, {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              </time>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
