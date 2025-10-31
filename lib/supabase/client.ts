import { createClient, type SupabaseClient } from '@supabase/supabase-js';

type CreateClientOptions = Parameters<typeof createClient>[2];

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable.');
}

if (!supabaseAnonKey) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable.');
}

let client: SupabaseClient | undefined;

export const getSupabaseBrowserClient = (options?: CreateClientOptions) => {
  if (!client) {
    client = createClient(supabaseUrl, supabaseAnonKey, options);
  }

  return client;
};
