'use client'

import { useEffect, useState } from 'react'

import {
  focusModeStore,
  quickAccessStore,
} from '@/store/quickAccessStore'

export function useQuickAccess() {
  const [isOpen, setIsOpen] = useState(quickAccessStore.getIsOpen())

  useEffect(() => {
    return quickAccessStore.subscribe(() => {
      setIsOpen(quickAccessStore.getIsOpen())
    })
  }, [])

  return {
    isQuickAccessOpen: isOpen,
    setQuickAccessOpen: quickAccessStore.setOpen,
  }
}

export function useFocusMode() {
  const [focusMode, setFocusModeState] = useState(focusModeStore.get())

  useEffect(() => {
    return focusModeStore.subscribe(() => {
      setFocusModeState(focusModeStore.get())
    })
  }, [])

  return {
    focusMode,
    setFocusMode: focusModeStore.set,
  }
}
