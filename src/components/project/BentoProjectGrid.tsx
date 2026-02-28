'use client'

import { cn } from '@/lib/utils'
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical } from 'lucide-react'
import * as React from 'react'

// wide = 2x1 hero, tall = 1x2, small = 1x1 — reference-style ratios
const BENTO_PATTERN = [
  'wide',
  'small',
  'small',
  'wide',
  'small',
  'small',
  'tall',
  'small',
  'small',
  'wide',
] as const
type BentoSize = (typeof BENTO_PATTERN)[number]

function getBentoSize(index: number): BentoSize {
  return BENTO_PATTERN[index % BENTO_PATTERN.length]
}

export interface BentoProject {
  id: string
  name: string
  description: string
  link: string
  image: string | null
  tags: string[]
  startDate: string | null
  endDate: string | null
}

interface BentoProjectGridProps {
  projects: BentoProject[]
  storageKey?: string
}

function formatDate(iso: string | null): string {
  if (!iso) return ''
  const d = new Date(iso)
  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d)
}

function BentoCard({
  project,
  size,
  isDragging,
  attributes,
  listeners,
  setNodeRef,
  style,
}: {
  project: BentoProject
  size: BentoSize
  isDragging: boolean
  attributes: object
  listeners: object | undefined
  setNodeRef: (el: HTMLElement | null) => void
  style: React.CSSProperties
}) {
  const isWide = size === 'wide'
  const isTall = size === 'tall'

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        'group bg-background relative flex h-full min-h-0 overflow-hidden rounded-xl border transition-shadow',
        isDragging && 'z-50 opacity-90 shadow-xl',
        !isDragging && 'hover:bg-muted/50 hover:shadow-md',
      )}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex h-full min-h-0 overflow-hidden',
          isWide && 'flex-col gap-2 p-4 sm:flex-row sm:gap-3',
          isTall && 'flex-col gap-2 p-3',
          size === 'small' && 'flex-col gap-1.5 p-3 sm:flex-row sm:gap-2 sm:p-4',
        )}
      >
        <div
          className={cn(
            'bg-muted flex shrink-0 items-center justify-center overflow-hidden rounded-lg',
            isWide &&
              'aspect-video w-full sm:h-full sm:min-h-0 sm:w-56 sm:max-w-[45%] sm:flex-1',
            isTall && 'aspect-video w-full sm:h-28 sm:min-h-0 sm:flex-1',
            size === 'small' && 'aspect-video w-full sm:h-20 sm:w-28',
          )}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="size-full object-cover"
            />
          ) : (
            <span className="text-muted-foreground text-2xl sm:text-3xl">
              📦
            </span>
          )}
        </div>
        <div className="min-h-0 min-w-0 flex-1 overflow-hidden">
          <h3
            className={cn(
              'font-medium',
              isWide ? 'text-lg sm:text-xl' : 'text-sm sm:text-base',
            )}
          >
            {project.name}
          </h3>
          <p
            className={cn(
              'text-muted-foreground leading-relaxed',
              isWide
                ? 'mt-2 line-clamp-2 text-xs sm:line-clamp-3 sm:text-sm'
                : 'mt-1.5 line-clamp-2 text-xs',
            )}
          >
            {project.description}
          </p>
          {(project.startDate || project.endDate) && (
            <p className="text-muted-foreground/70 mt-2 flex items-center gap-x-1.5 text-xs">
              <span>
                {formatDate(project.startDate)}
                {project.endDate
                  ? ` → ${formatDate(project.endDate)}`
                  : ' → Present'}
              </span>
            </p>
          )}
          {project.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.slice(0, isWide ? 6 : 3).map((tag) => (
                <span
                  key={tag}
                  className="bg-muted text-muted-foreground rounded-md px-2 py-0.5 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <span className="text-muted-foreground mt-3 inline-flex items-center gap-1 text-xs transition-colors group-hover:text-accent">
            Visit
            <svg
              className="size-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </span>
        </div>
      </a>
      <button
        type="button"
        className="hover:bg-muted/80 absolute top-3 right-3 rounded-md p-1.5 opacity-0 transition-opacity group-hover:opacity-100"
        aria-label="Drag to reorder"
        {...attributes}
        {...(listeners ?? {})}
      >
        <GripVertical className="text-muted-foreground size-4" />
      </button>
    </div>
  )
}

function SortableBentoCard({
  project,
  index,
  order,
}: {
  project: BentoProject
  index: number
  order: string[]
}) {
  const sortIndex = order.indexOf(project.id)
  const size = getBentoSize(sortIndex)
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: project.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const gridClass = {
    wide: 'sm:col-span-2',
    tall: 'sm:row-span-2',
    small: '',
  }[size]

  return (
    <div className={cn('min-h-0', gridClass)}>
      <BentoCard
        project={project}
        size={size}
        isDragging={isDragging}
        attributes={attributes as object}
        listeners={listeners as object | undefined}
        setNodeRef={setNodeRef}
        style={style}
      />
    </div>
  )
}

export function BentoProjectGrid({
  projects,
  storageKey = 'project-order',
}: BentoProjectGridProps) {
  const [order, setOrder] = React.useState<string[]>(() => {
    if (typeof window === 'undefined') return projects.map((p) => p.id)
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored) {
        const parsed = JSON.parse(stored) as string[]
        const valid = parsed.filter((id) => projects.some((p) => p.id === id))
        const newIds = projects
          .filter((p) => !valid.includes(p.id))
          .map((p) => p.id)
        return [...valid, ...newIds]
      }
    } catch {
      // ignore
    }
    return projects.map((p) => p.id)
  })

  React.useEffect(() => {
    const newIds = projects
      .filter((p) => !order.includes(p.id))
      .map((p) => p.id)
    if (newIds.length > 0) {
      setOrder((prev) => [...prev, ...newIds])
    }
  }, [projects, order])

  const orderedProjects = React.useMemo(() => {
    const byId = new Map(projects.map((p) => [p.id, p]))
    return order.map((id) => byId.get(id)).filter(Boolean) as BentoProject[]
  }, [projects, order])

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
    useSensor(KeyboardSensor),
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return
    setOrder((prev) => {
      const oldIndex = prev.indexOf(active.id as string)
      const newIndex = prev.indexOf(over.id as string)
      if (oldIndex === -1 || newIndex === -1) return prev
      const next = arrayMove(prev, oldIndex, newIndex)
      try {
        localStorage.setItem(storageKey, JSON.stringify(next))
      } catch {
        // ignore
      }
      return next
    })
  }

  if (projects.length === 0) return null

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={order} strategy={rectSortingStrategy}>
        <div
          className="grid auto-rows-[minmax(10rem,1fr)] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
          role="list"
        >
          {orderedProjects.map((project) => (
            <SortableBentoCard
              key={project.id}
              project={project}
              index={0}
              order={order}
            />
          ))}
          <BentoPlaceholder />
        </div>
      </SortableContext>
    </DndContext>
  )
}

function BentoPlaceholder() {
  const [clicked, setClicked] = React.useState(false)

  return (
    <div
      data-bento-placeholder
      className="flex min-h-[10rem] items-center justify-center"
    >
      <button
        type="button"
        onClick={() => setClicked((c) => !c)}
        className={cn(
          'bg-muted/50 hover:bg-muted flex size-16 items-center justify-center rounded-full border-2 border-dashed transition-all duration-300 hover:scale-110 hover:border-solid hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background',
          clicked && 'scale-125 border-accent bg-accent/20',
        )}
        aria-label="Easter egg"
      >
        <span
          className={cn(
            'text-muted-foreground text-2xl transition-transform duration-300',
            clicked && 'rotate-180',
          )}
        >
          ✦
        </span>
      </button>
      <style>{`
        @keyframes bento-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        [data-bento-placeholder] button {
          animation: bento-pulse 2.5s ease-in-out infinite;
        }
        [data-bento-placeholder] button:hover {
          animation: none;
        }
      `}</style>
    </div>
  )
}
