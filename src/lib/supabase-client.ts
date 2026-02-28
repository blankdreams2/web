import { createClient } from '@supabase/supabase-js'

// Client-side only — uses PUBLIC_ vars exposed by Vite
const url = import.meta.env.PUBLIC_SUPABASE_URL as string
const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string

export const supabaseBrowser =
  url && key ? createClient(url, key) : null
