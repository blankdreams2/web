import React, { useState } from 'react'

import { cn } from '@/lib/utils'

/**
 * InteractiveGridPattern is a component that renders a grid pattern with interactive squares.
 *
 * @param width - The width of each square.
 * @param height - The height of each square.
 * @param squares - The number of squares in the grid. The first element is the number of horizontal squares, and the second element is the number of vertical squares.
 * @param className - The class name of the grid.
 * @param squaresClassName - The class name of the squares.
 */
interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  squares?: [number, number] // [horizontal, vertical]
  className?: string
  squaresClassName?: string
}

/**
 * The InteractiveGridPattern component.
 *
 * @see InteractiveGridPatternProps for the props interface.
 * @returns A React component.
 */
export function InteractiveGridPattern({
  width = 16,
  height = 16,
  squares = [64, 80],
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [horizontal, vertical] = squares
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null)
  const totalWidth = width * horizontal
  const totalHeight = height * vertical

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        width={totalWidth * 2}
        height={totalHeight}
        className={cn(
          'grid-pattern-scroll h-full w-auto border-0',
          className,
        )}
        {...props}
      >
        {Array.from({ length: horizontal * 2 * vertical }).map((_, index) => {
          const col = index % (horizontal * 2)
          const row = Math.floor(index / (horizontal * 2))
          const x = col * width
          const y = row * height
          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={width}
              height={height}
              className={cn(
                'stroke-gray-400/30 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000',
                hoveredSquare === index ? 'fill-gray-300/30' : 'fill-transparent',
                squaresClassName,
              )}
              onMouseEnter={() => setHoveredSquare(index)}
              onMouseLeave={() => setHoveredSquare(null)}
            />
          )
        })}
      </svg>
    </div>
  )
}
