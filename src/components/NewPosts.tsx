'use client'

import { FileText } from 'lucide-react'

import { cn } from '@/lib/utils'

export interface RecentPost {
  slug: string
  title: string
  date: string
}

interface NewPostsProps {
  posts: RecentPost[]
  onItemClick?: () => void
}

export default function NewPosts({ posts, onItemClick }: NewPostsProps) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col gap-2">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Recent Posts
        </h3>
        <p className="text-sm text-muted-foreground">No posts yet.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Recent Posts
      </h3>
      <ul className="flex flex-col gap-1">
        {posts.map((post) => (
          <li key={post.slug}>
            <a
              href={`/blog/${post.slug}`}
              onClick={onItemClick}
              className={cn(
                'flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm',
                'hover:bg-muted/50 transition-colors'
              )}
            >
              <FileText className="size-3.5 shrink-0 text-muted-foreground" />
              <span className="truncate">{post.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
