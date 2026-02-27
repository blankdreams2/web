'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const TITLE_JP = '何でもは知らないわよ、知ってることだけ。'
const TOOLTIP = "I don't know everything. I just know what I know. — Hanekawa Tsubasa"

export default function AboutPageTitle() {
  return (
    <div className="mb-6 mt-3 text-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <h2 className="cursor-help font-editorial text-xl font-bold text-foreground">
              {TITLE_JP}
            </h2>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            className="text-center font-serif max-w-sm whitespace-normal px-4 py-2.5 text-sm"
          >
            {TOOLTIP}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
