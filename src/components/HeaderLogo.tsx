'use client'

import Typewriter from 'typewriter-effect'
import { SITE } from '@/consts'

export function HeaderLogo() {
  return (
    <span className="hidden max-w-full min-w-0 overflow-hidden text-center text-lg leading-none font-medium text-ellipsis whitespace-nowrap text-white sm:block">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(SITE.title).start()
        }}
        options={{
          delay: 60,
          cursor: '|',
          cursorClassName: 'typewriter-cursor animate-pulse',
          skipAddStyles: true,
        }}
      />
    </span>
  )
}
