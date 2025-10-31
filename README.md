# CWG Wildlife Activity Logger

A Next.js application for capturing daily wildlife control activities and exporting monthly reports. The project uses Supabase as the primary PostgreSQL database and authentication provider.

## Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [pnpm](https://pnpm.io/) 9+
- A [Supabase](https://supabase.com/) account (free tier is sufficient)

## Setup

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Provision Supabase**
   - Create a new project from the Supabase dashboard.
   - Note the **Project URL**, **anon public key**, and **service role key** from the project settings.
   - Configure a `wildlife_activity` schema or table via the Supabase SQL editor when you're ready to model domain data.

3. **Configure environment variables**
   - Copy the example file and fill in your credentials:

     ```bash
     cp .env.example .env.local
     ```

   - Edit `.env.local` and replace the placeholder values with the keys from step 2.

4. **Run the development server**

   ```bash
   pnpm dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/             # Next.js App Router entry points and global styles
lib/supabase/    # Supabase client helpers
public/          # Static assets
```

## Supabase Usage

- `lib/supabase/client.ts` exposes `getSupabaseBrowserClient`, which memoises a Supabase browser client configured with the public keys.
- Server-side utilities that require elevated permissions (for migrations or cron-style jobs) can import the service role key from `process.env.SUPABASE_SERVICE_ROLE_KEY`.
- Keep service role functionality in API routes or server actions; never expose it in the browser bundle.

## Scripts

- `pnpm dev` – start the Next.js development server
- `pnpm build` – create a production build
- `pnpm start` – serve the production build
- `pnpm lint` – run ESLint across the codebase

## Next Steps

- Model wildlife activity tables and Supabase policies for row-level security.
- Integrate Supabase auth helpers for Next.js to handle member sessions.
- Implement daily activity forms and monthly report exports.
