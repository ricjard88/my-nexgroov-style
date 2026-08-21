# Reset the blog admin password

You log in to the blog editor at `/manage`. The password lives in the encrypted secret store as `ADMIN_PASSWORD`, and stored secrets can never be read back — not by you in chat, not by me. The only way forward is to set a new one.

## What happens

1. A secure form opens in the chat for `ADMIN_PASSWORD`. You type the new password there; the value goes straight to the encrypted store and never passes through the conversation.
2. The password check runs in the backend function that gates the editor, so the new value takes effect on the next login attempt — no code changes needed.
3. Go to `/manage`, enter the new password, and write posts as usual.

## Notes

- Pick something you'll remember or store it in a password manager; the same "can't read it back" rule applies to every future reset.
- No files change in this plan; the only action is the secret update.
