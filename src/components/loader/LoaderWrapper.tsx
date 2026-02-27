'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
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
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    if (showOnLanding) {
      setShowLoader(true)
    }
  }, [showOnLanding])

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && <Loader key="loader" onComplete={() => setShowLoader(false)} />}
      </AnimatePresence>
      {children}
    </>
  )
}
