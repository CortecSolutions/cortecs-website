# Cortecs.ca redesign — session brief

*Self-contained handoff. ThinkPad Claude can read this without needing the
rest of the repo. Last updated 2026-04-28 by Spark 2 Claude.*

---

## TL;DR

Cortecs.ca redesign branch `rebrand-navy-2026-04-20` is **staged but not
deployed**. Live site still serves the original sky-blue redesign (commit
`8ca59bc`). Homepage was just radically simplified to **Hero → IntakeForm
→ Footer** — six section components moved to `_archive/`, and a new
intake form posts to a new `/intake` Discord-relay endpoint on the chat
backend. Voice and palette are locked — see "Locked rules" below.

---

## Repo state (as of 2026-04-28)

- Repo: `CortecSolutions/cortecs-website`
- Active branch: `rebrand-navy-2026-04-20`
- `main` tip: `8ca59bc` (the live site)
- Branch tip on top of `8ca59bc`:
  - `57e0ec5` copy: strip remaining location refs; align CTA to form intent
  - `3573314` docs: refresh SESSION_BRIEF after homepage simplification
  - `d27cc6b` feat: simplify homepage to Hero + IntakeForm; archive 6 sections
  - `14d7fde` copy(hero): capability-led H1/subhead; strip location refs
  - `1897000` docs: add SESSION_BRIEF for cross-Claude handoff
  - `fbd81cf` chore: remove orphan sub-pages, add 301 redirects to home
  - `8289a5e` copy: on-site or remote anywhere in the world
  - `d910f1f` feat(brand): rebrand to locked navy/white/slate palette
- Working tree clean except untracked `REDESIGN_SPEC.md` (Josh-call
  handoff spec from 2026-04-17, reference only).
- Build verified clean (`next build` — 3 routes, no TS errors).

---

## Locked rules — do not re-litigate

### Palette (locked 2026-04-20)

- Foreground / accent: navy `#0f172a` (Tailwind slate-900)
- Background: white `#ffffff`
- Muted text: slate `#64748b`
- Border: `#e2e8f0`
- Dark mode: navy base `#0f172a`, alt `#1e293b`, accent inverts to white
- **Nothing else.** No cyan, no sky-blue, no second accent colour.

Note: `#0f172a` reads almost-black on screen. Matt knows. Don't "fix" it
by drifting to `#1e3a8a` or `#1e293b` — that breaks the lock. If muted
copy looks washed out, the only allowed move is darkening `--fg-muted` to
`#475569` (slate-600).

### Voice rules

- **Matt is never the grammatical subject doing something impressive.**
  "I sit with you and your team" → killed. "I'll tell you so" → killed.
  "I'm not a big-firm salesperson" → killed. Subject must be the work,
  the business, or the plan.
- **Tool names out** (Claude, Copilot, ChatGPT, OpenAI). Recommendations
  match each client's stack; the site can't commit to platforms.
- **"Just feels off" = stop defending the draft.** Matt means it. Go
  fully different direction, don't iterate on the same framing.
- Craftsman register, not founder-memoir. Declarative statements about
  the work, not first-person narration.

### Deploy rules

- **Do not deploy.** Matt has more editing to do.
- CF API token from 2026-04-19 was revoked; needs a new one when ready.
- CF Pages git auto-deploy is **broken** (split-brain — see Open
  Questions §3). Pushing to GitHub does NOT update the live site.
  Shipping requires `wrangler pages deploy out/ --project-name=cortecs-website --branch=main`.

---

## Live page structure (in order)

1. **Hero** — H1: *"AI consulting and custom solutions for your business."*
   Subhead: *"From identifying the opportunities to building the tools
   that capture them."* Single CTA "Tell me about your business" →
   `#intake`. No eyebrow, no location text.
2. **IntakeForm** (id `intake`) — heading "Three questions." Subhead
   "Short answers are fine. A reply lands within 24 hours." Three
   required fields:
   - "What does your business do?" (textarea, 2000 chars)
   - "What's a task that takes too long or feels manual?" (textarea, 2000)
   - "Best way to reach you?" (text, 200) with hint "Email or phone."
   Submit "Send" → POST to `/intake`. Success replaces form with "Got
   it. I'll reach out within 24 hours." Honeypot `name="website"` +
   invisible Turnstile (interaction-only).
3. **Footer** (rendered by layout, not page) — `© {year} Cortecs`,
   logo, "Get in touch" → `#intake`, mailto link. Location stripped.
4. **ChatWidget** (rendered by layout, floating bottom-right) —
   header eyebrow now "Live" (location stripped). Widget panel role
   "Chat with Matt".

The shell (layout.tsx) wraps the page with `<Nav />` (logo + theme
toggle + "Get in touch" CTA → `#intake`; section links emptied),
`<ScrollProgress />`, `<main>`, `<Footer />`, `<ChatWidget />`.

---

## Archived components (`src/components/_archive/`)

Moved 2026-04-28 in commit `d27cc6b`. Files preserved with git history.
Imports rewired so each still type-checks in place. None are imported
by the live build.

- `Problem.tsx` — "Your business has tasks that take hours. AI can do
  them in seconds." Animated 35+ stat + 6-card before/after grid.
  (Imports `../AnimatedNumber`.)
- `DemoSection.tsx` — "One call. One working prototype, days later."
  3-step flow.
- `Process.tsx` — 4-step process (intro call → recs → $250 assessment
  → implementation/training). Step 4 said "Custom automation or
  software if needed" — moot now since archived.
- `WhyCortecs.tsx` — H2 "Custom solutions built for your business." 4
  cards including "Local presence" with London/Ontario reference.
- `About.tsx` — "Three commitments." 01 Available 365 days a year /
  02 Quick turnaround / 03 Efficient solutions.
- `FAQ.tsx` — 5 Qs (small biz / replace staff / cost / data safety /
  DIY). The $250 fee was mentioned here.

`Contact.tsx` was **not** archived (it was replaced rather than
deferred). Still in `src/components/` but unimported.

---

## Intake form + backend

### Frontend (`src/components/IntakeForm.tsx`)

- `"use client"` React component, posts JSON to `/intake` on
  `chat.cortecs.ca` (env var `NEXT_PUBLIC_CHAT_URL` overrides; falls
  back to the production tunnel).
- Cloudflare Turnstile invisible widget, executed on submit. Site key
  reads `NEXT_PUBLIC_TURNSTILE_SITE_KEY` with hardcoded fallback (same
  pattern as `ChatWidget`).
- Honeypot field `name="website"` (hidden) — populated bots get a
  silent 200.
- Failure copy: rate-limit → "Too many submissions from this network.
  Try again in a minute." / captcha → "Couldn't verify you're human.
  Try again." / network → "Connection issue — try again."
- Reuses the global `window.turnstile` declaration from
  `ChatWidget.tsx` — do **not** redeclare or you'll hit a TS duplicate
  declaration error.

### Backend (`~/cortecs-chat/` on Spark 2 — NOT in this git repo)

Files touched on 2026-04-28:

- `db.js` — added `intakes` table (`id`, `created_at`, `business`,
  `task`, `contact`, `ip`) + `idx_intakes_created` + `insertIntake`
  query.
- `discord-bot.js` — added `postIntakeToDiscord({ business, task,
  contact })` which sends an embed (color `0x0f172a`) to the parent
  channel of `CHANNEL_ID`. Also `truncateField` helper (1024-char cap
  per Discord embed field).
- `server.js` — added `POST /intake` route. Reuses `verifyTurnstile`,
  `checkRate`, `clientIp`. Body shape `{ business, task, contact,
  honeypot?, turnstileToken }`. 2000-char cap on business/task,
  200-char cap on contact, all required.

Restart with `systemctl --user restart cortecs-chat.service`. Verified
on `localhost:3210` 2026-04-28: empty body → 400, missing turnstile
→ 401, honeypot → 200 silent. Production tunnel `chat.cortecs.ca`
already routes to `:3210` — `/intake` is reachable from the live site
once deployed.

---

## Live infrastructure (chat widget — unchanged)

- Backend: `~/cortecs-chat/` (Fastify + better-sqlite3 + discord.js).
  Systemd service `cortecs-chat.service` (user systemd, no sudo), port
  3210.
- Tunnel: cloudflared, `chat.cortecs.ca → localhost:3210`. Service
  `cortecs-tunnel.service`. Tunnel id
  `9012b7a3-ec1e-48f7-861d-cb2289253181`.
- Discord: Matt's server, channel `#site-chat`. Bot "Cortecs Chat".
- Anti-spam: Cloudflare Turnstile (managed mode) + Bot Fight Mode.
- Rate limit: 20 msg/min/IP, shared across `/send` and `/intake`.

---

## Open questions / decisions still pending

1. **Nav header CTA inconsistency.** Hero CTA is now "Tell me about
   your business" (matches form's first question). Nav header still
   says "Get in touch" because the longer label won't fit the pill
   width without breaking the nav layout. Acceptable since "Get in
   touch" is neutral and doesn't promise a call — but it's a copy
   inconsistency worth flagging. Options: (a) leave as-is, (b) shorten
   nav CTA to "Get in touch" → "Send a note" or similar, (c) restyle
   the nav pill to fit the longer label.
2. **CF Pages split-brain resolution.** Two `cortecs-website` projects
   in CF; direct-upload one serves prod, git-connected one's last build
   failed ~50 days ago. Path A: move custom domains onto git-connected,
   fix build, delete direct-upload (downtime risk). Path B: connect
   git to direct-upload retroactively (CF may not allow; might need
   recreation).
3. **Reflect Drive has no on-brand presence.** `/reflect` was 301'd to
   `/`. Reflect Drive is still a real shipping product ($79 CAD).
   Options: (a) rebuild `/reflect` on navy palette, (b) add a Products
   section to home, (c) leave invisible.
4. **Visual polish.** Site still feels "generic / no wow" to Matt.
   Options discussed but not applied: dark mode default, subtle
   grid/grain texture, bolder hero type, stronger hero glow, home-lab
   photo. With the page now down to two sections, the visual weight
   problem may be different. Worth a fresh look.
5. **Backend lives only on Spark 2.** `~/cortecs-chat/` (db.js,
   discord-bot.js, server.js) is not in any git repo. Hardware
   failure on Spark 2 = lost work. Worth pushing to a private repo
   when convenient. Not urgent.

**Closed this session:**
- ~~Hero H1 walkback~~ → locked to "AI consulting and custom solutions
  for your business."
- ~~Step 4 'or software' phrasing~~ → moot, Process section archived.
- ~~Edits Matt wanted before deploying~~ → done (homepage simplification
  + intake form).
- ~~Footer/ChatWidget London refs~~ → stripped in `57e0ec5`.
- ~~layout.tsx SEO targeting London~~ → replaced LocalBusiness schema
  with generic Organization; metadata title/desc/keywords stripped of
  geo terms. Tradeoff accepted: site loses London local-search rank,
  reversible later.
- ~~CTA mismatch (call vs form)~~ → Hero CTA now "Tell me about your
  business". Nav stays "Get in touch" (see Open Questions §1).

---

## Not-yet-done follow-ups (lower priority)

- `~/inbox/copy-revision-v2.md` — agent's full section rewrite doc,
  mostly NOT applied. Most sections it rewrites are now archived, so
  most of it is moot. Worth a scan for hero/footer copy ideas.
- Lighthouse pass (Puppeteer x86 Chrome crashed on ARM Spark 2; use
  pagespeed.web.dev or `sudo snap install chromium`).
- Chat widget dark mode testing.
- Business cards (Florida trip — separate exercise).

---

## How to use this brief

ThinkPad Claude: read locked rules first, then open questions. When
suggesting edits, return paste-ready blocks (file path + exact
old_string / new_string, or a clear paragraph rewrite). Matt relays to
Spark 2 Claude, who applies + commits.

Don't propose deploys. Don't propose colour or voice changes against
the locked rules without flagging that you're proposing to override
the lock.
