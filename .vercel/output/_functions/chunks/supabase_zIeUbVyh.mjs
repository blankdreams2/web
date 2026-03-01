import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://fqtodkikjpmrwrvyyjyg.supabase.co",
  "sb_publishable_MqC5IIJwqzWRj-lHOoXMAw_ruA0L6Pu"
);

export { supabase as s };
