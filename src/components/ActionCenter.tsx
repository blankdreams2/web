'use client'

import { m } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Eye, EyeOff, Moon, Sun } from 'lucide-react'

import { cn } from '@/lib/utils'

import { useFocusMode } from '@/hooks/useQuickAccessStore'

const animation = {
  hide: { y: -16, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: 'easeOut' as const, duration: 0.084 },
  },
}

function toggleTheme() {
  const el = document.documentElement
  const current = el.getAttribute('data-theme')
  const next = current === 'dark' ? 'light' : 'dark'
  el.setAttribute('data-theme', next)
  localStorage.setItem('theme', next)
}

interface ActionCenterButtonProps {
  icon: React.ReactNode
  title: string
  active?: boolean
  onClick?: () => void
}

function ActionCenterButton({
  icon,
  title,
  active = false,
  onClick = () => {},
}: ActionCenterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'relative flex flex-1 flex-col justify-between overflow-hidden rounded-xl p-4 transition-colors',
        'bg-muted/50 hover:bg-muted/70',
        active && 'bg-muted'
      )}
    >
      <div className="flex items-center justify-center">{icon}</div>
      <div className="text-left text-[13px] font-medium">{title}</div>
    </button>
  )
}

export default function ActionCenter() {
  const { focusMode, setFocusMode } = useFocusMode()
  const [isDark, setIsDark] = useState(
    () =>
      typeof document !== 'undefined' &&
      document.documentElement.getAttribute('data-theme') === 'dark'
  )

  useEffect(() => {
    const el = document.documentElement
    setIsDark(el.getAttribute('data-theme') === 'dark')
    const observer = new MutationObserver(() => {
      setIsDark(el.getAttribute('data-theme') === 'dark')
    })
    observer.observe(el, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    return () => observer.disconnect()
  }, [])

  return (
    <m.div
      className="flex flex-col gap-2"
      initial="hide"
      animate="show"
      transition={{ staggerChildren: 0.06 }}
    >
      <m.div
        className="px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        variants={animation}
      >
        Action Center
      </m.div>
      <div className="flex flex-1 flex-col gap-8 p-2">
        <m.div className="flex h-24 gap-4" variants={animation}>
          <ActionCenterButton
            active={isDark}
            title={isDark ? 'Dark Mode: On' : 'Dark Mode: Off'}
            onClick={toggleTheme}
            icon={
              isDark ? (
                <Moon className="size-5" />
              ) : (
                <Sun className="size-5" />
              )
            }
          />
          <ActionCenterButton
            title={focusMode ? 'Focus: On' : 'Focus: Off'}
            onClick={() => setFocusMode(!focusMode)}
            active={focusMode}
            icon={
              focusMode ? (
                <EyeOff className="size-5 text-muted-foreground" />
              ) : (
                <Eye className="size-5 text-muted-foreground" />
              )
            }
          />
        </m.div>
      </div>
    </m.div>
  )
}
