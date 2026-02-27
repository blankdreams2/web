'use client'

import Typewriter from 'typewriter-effect'
import { SITE } from '@/consts'

export function HeaderLogo() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(SITE.title).start()
      }}
      options={{
        delay: 60,
        cursor: '|',
        wrapperClassName: 'inline',
        cursorClassName: 'typewriter-cursor animate-pulse',
        skipAddStyles: true,
      }}
    />
  )
}
