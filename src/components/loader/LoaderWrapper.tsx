'use client'

import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Loader } from './Loader'

interface LoaderWrapperProps {
  children: React.ReactNode
  /** Only show loader when entering landing page */
  showOnLanding?: boolean
}

export function LoaderWrapper({
  children,
  showOnLanding = false,
}: LoaderWrapperProps) {
  const [showLoader, setShowLoader] = useState(showOnLanding)

  useEffect(() => {
    if (showOnLanding) {
      setShowLoader(true)
    }
  }, [showOnLanding])

  /* TODO: add the loader back in after dev */
  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && (
          <Loader key="loader" onComplete={() => setShowLoader(false)} />
        )}
      </AnimatePresence>
      {!showLoader && children}
    </>
  )
}
