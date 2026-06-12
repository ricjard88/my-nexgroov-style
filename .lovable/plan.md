## Goal
Make the blog admin easy to reach, and reset the forgotten admin password.

## Changes

1. **Add subtle "Admin" link in the footer of the main page**
   - Edit `src/pages/Index.tsx` to add a small, muted "Admin" link in the footer area pointing to `/manage`.
   - Style: tiny, low-contrast text using existing muted token — fits the minimalist aesthetic, easy to miss for visitors but findable for you.

2. **Reset the `ADMIN_PASSWORD` secret**
   - Trigger the secure secret-update form for `ADMIN_PASSWORD` so you can type a new password directly. The new value takes effect immediately for the `/manage` login.

## How to use after
- Click "Admin" in the footer → enter your new password → write/publish posts.

No other files or behavior change.