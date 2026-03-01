'use client'

import Typewriter from 'typewriter-effect'
import { SITE } from '@/consts'

export function HeaderLogo() {
  return (
    <span className="block min-w-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(SITE.title).start()
        }}
        options={{
          delay: 60,
          cursor: '|',
          wrapperClassName: 'inline-block min-w-0 max-w-full overflow-hidden',
          cursorClassName: 'typewriter-cursor animate-pulse',
          skipAddStyles: true,
        }}
      />
    </span>
  )
}
