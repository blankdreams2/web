"use client"

import React from 'react'
import { RoughNotation } from 'react-rough-notation'
import { Gamepad2, Laptop2 } from 'lucide-react'
import { LIGHT_UNDERLINE, DARK_UNDERLINE } from '@/consts'

export interface ParagraphProps {
  tag: string
  answer?: string
  customAnswer?: React.ReactNode
  dir?: 'ltr' | 'rtl'
  children?: React.ReactNode
}

export default function Paragraph({ tag, answer, customAnswer, dir = 'ltr', children }: ParagraphProps) {
  const [underlineColor, setUnderlineColor] = React.useState(LIGHT_UNDERLINE)

  // Observe theme changes by watching the `dark` class on the root element
  React.useEffect(() => {
    const getIsDark = () => document.documentElement.classList.contains('dark')
    const apply = () => setUnderlineColor(getIsDark() ? DARK_UNDERLINE : LIGHT_UNDERLINE)
    apply()

    const observer = new MutationObserver(apply)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  const tagAlignment = dir === 'rtl' ? 'text-right' : 'text-left'

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-3xl flex-col border-b border-slate-700 pb-2 pt-1 dark:border-slate-400">
        {/* Tag */}
        <p className={`pb-2 font-sans text-lg text-black dark:text-white ${tagAlignment}`}>
          {tag === 'rpg maker games' && (
            <Gamepad2 className="mr-1.5 mt-1 inline-block h-5 w-5 animate-pulse" />
          )}
          {tag === 'chào, or hi there' && (
            <Laptop2 className="mr-1.5 mt-1 inline-block h-5 w-5" />
          )}
          <RoughNotation
            type="underline"
            color={underlineColor}
            strokeWidth={2}
            order={1}
            show={true}
            animationDelay={200}
          >
            {tag || 'Lorem ipsum dolor sit amet.'}
          </RoughNotation>
        </p>

        {customAnswer || children ? (
          <p className={`pb-2 font-sans text-[15px] font-medium tracking-wide text-black dark:font-light dark:text-slate-50 ${tagAlignment}`}>
            {customAnswer ?? children}
          </p>
        ) : (
          <p className="pb-2 font-sans text-[15px] text-gray-500 opacity-80 dark:text-slate-50">
            {answer || 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt.'}
          </p>
        )}
      </div>
    </div>
  )
}
