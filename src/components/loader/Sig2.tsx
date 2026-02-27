'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// Swiggly underline path — more curves
const UNDERLINE_PATH =
  'M 0,85 C 70,75 140,95 210,85 C 280,75 350,95 420,85 C 490,75 560,95 630,85 C 700,75 770,95 840,85'

interface SignatureProps {
  className?: string
}

const LETTERS = 'blank_dreams'.split('')

export function Signature({ className }: SignatureProps) {
  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      {/* Signature text — letter-by-letter stagger for that "writing" feel */}
      <motion.span
        className="font-display flex text-5xl font-bold text-(--accent) drop-shadow-lg sm:text-6xl md:text-7xl"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.04,
              delayChildren: 0.1,
            },
          },
          hidden: {},
        }}
      >
        {LETTERS.map((letter, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: {
                opacity: 0,
                y: 24,
                filter: 'blur(8px)',
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: {
                  duration: 0.5,
                  ease: [0.22, 0.03, 0.26, 1],
                },
              },
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>

      {/* Drawing underline — 3x longer, 3x wider stroke */}
      <svg
        viewBox="0 0 840 100"
        className="h-8 w-full max-w-[960px] sm:max-w-[1200px] md:max-w-[1440px]"
        fill="none"
      >
        <motion.path
          d={UNDERLINE_PATH}
          stroke="var(--accent)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: {
              duration: 1.2,
              delay: 1.0,
              ease: [0.22, 0.03, 0.26, 1],
            },
            opacity: { duration: 0.2, delay: 1.0 },
          }}
        />
      </svg>
    </div>
  )
}
