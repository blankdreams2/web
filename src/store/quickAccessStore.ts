type Listener = () => void

let isQuickAccessOpen = false
let focusMode = false
const quickAccessListeners = new Set<Listener>()
const focusModeListeners = new Set<Listener>()

export const quickAccessStore = {
  getIsOpen: () => isQuickAccessOpen,
  setOpen: (open: boolean) => {
    isQuickAccessOpen = open
    quickAccessListeners.forEach((fn) => fn())
  },
  toggle: () => {
    isQuickAccessOpen = !isQuickAccessOpen
    quickAccessListeners.forEach((fn) => fn())
  },
  subscribe: (fn: Listener) => {
    quickAccessListeners.add(fn)
    return () => void quickAccessListeners.delete(fn)
  },
}

export const focusModeStore = {
  get: () => focusMode,
  set: (value: boolean) => {
    focusMode = value
    focusModeListeners.forEach((fn) => fn())
  },
  toggle: () => {
    focusMode = !focusMode
    focusModeListeners.forEach((fn) => fn())
  },
  subscribe: (fn: Listener) => {
    focusModeListeners.add(fn)
    return () => void focusModeListeners.delete(fn)
  },
}
