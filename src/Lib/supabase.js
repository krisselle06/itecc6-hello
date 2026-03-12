import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://supabase.com/dashboard/project/xokokffhvriatghtkrll/settings/api-keys/legacy'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhva29rZmZodnJpYXRnaHRrcmxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMTYwODgsImV4cCI6MjA4ODg5MjA4OH0.pMVQgqKS5owbxK6AQnhbKX0xegalTmPPOVE9o14Ve9I'

export const supabase = createClient(supabaseUrl, supabaseKey)