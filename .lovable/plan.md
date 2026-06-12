## Landing page (`/`)

Rewrite `src/pages/Index.tsx` to render a single flow:

1. `Header` (updated, see below)
2. **Hero** — replace the current Hero headline with:
   > I create long term operational systems.
3. **Body prose** (new section, no heading) containing:
   - "Scaled a hardware ops team from 3 to 25 and grew revenue 700%. Reopened a bar that had been dark since COVID and grew sales 250%. Rebuilt a restaurant from a gutted kitchen — equipment, staff, vendors, all of it. Different rooms, same job: find what's broken, fix it, leave it running."
   - "When a business makes real money but everything behind it is harder than it should be — that's my work."
   - "This site is mostly my writing: real problems, how I thought through them, what worked. Read a few posts and you'll know how I work before we ever talk."
4. **Blog feed** — inline list of published posts (reuse the fetch + card pattern from `src/pages/Blog.tsx`), linking each to `/blog/:slug`. No "Blog" heading above it; flows directly from the prose.
5. **Contact line** (no heading): `Got a problem? hello@richardgraystone.com` with the email as a `mailto:` link styled like existing contact links.
6. `Footer`

Remove from the home page: `About`, `Conditions`, `Contact` components and the `Divider`s between them. Existing `useLocation` hash scroll logic stays (still works for any old `#conditions`/`#contact` deep links → no-op).

## New page: The Work (`/work`)

Create `src/pages/Work.tsx` mirroring `Methodology.tsx`'s shell (Header, back link, Footer, scroll-fade). Content:

- H1: **The Work**
- "I take a small number of clients and embed in the operation. Not advice from the outside — inside, with the team, until it runs."
- Sub-line: **It's a fit if:**
- Em-dash list (accent-warm dashes, same style as old Conditions):
  - The revenue is real and operations are the bottleneck
  - You want the problem fixed, not managed
  - I have the authority to actually change things
  - You're thinking in months, not years
- Sub-line: **How it goes:** "First conversation is free and usually clarifies the problem on its own. If we work together, we define what success looks like before we start. I stay until the system runs without me — sometimes 90 days, sometimes a year — then I support as needed."
- `mailto:hello@richardgraystone.com` link

Register route in `src/App.tsx`: `<Route path="/work" element={<Work />} />`.

## Header / navigation

Edit `src/components/Header.tsx` so the only visible items are:

- Left: `Richard Graystone` (keeps current link to `/story`)
- Right nav: `Main Page` → `/`, `The Work` → `/work`

Remove the Methodology, Conditions, Blog, and Contact nav buttons. Theme toggle stays.

## Cleanup

- Delete `src/pages/Methodology.tsx` and remove its route + import from `App.tsx`.
- Delete `src/components/Conditions.tsx`, `src/components/About.tsx`, `src/components/Contact.tsx` (no longer referenced).
- Leave `src/pages/Blog.tsx`, `BlogPost.tsx`, `Story.tsx`, `AdminWrite.tsx` untouched — Story is still reachable via the logo, blog posts still need their detail route, admin route stays hidden.

## Technical notes

- Blog fetch on home page: same Supabase query as `Blog.tsx` (`blog_posts` where `status = 'published'`, ordered by `published_at desc`). Show a small "No posts yet." fallback. Consider limiting to e.g. 10 latest.
- Keep design tokens (`font-serif`, `text-accent-warm`, `text-muted-foreground`, card styles) consistent with current minimalist aesthetic per project memory.
- No DB or schema changes.
