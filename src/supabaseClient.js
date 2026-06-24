import { createClient } from '@supabase/supabase-js'

// Your project's web address and PUBLIC key.
// It is safe to keep this key here: thanks to the rule we set in Supabase,
// it can only READ the companies — it cannot change or delete anything.
const supabaseUrl = 'https://jvqyjlewbmhhdikactio.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2cXlqbGV3Ym1oaGRpa2FjdGlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMTU5NDQsImV4cCI6MjA5Nzg5MTk0NH0.KHuluNqyTfWB_Pro89vdeEKSa3nIkMaTChY5G9D-zuM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
