# Cortecs.ca redesign — session brief

*Self-contained handoff. ThinkPad Claude can read this without needing the
rest of the repo. Last updated 2026-04-28 by Spark 2 Claude.*

---

## TL;DR

Cortecs.ca redesign branch `rebrand-navy-2026-04-20` is **staged but not
deployed**. Live site still serves the original sky-blue redesign (commit
`8ca59bc`). Matt wants to do more editing before shipping. Voice and
palette are locked — see "Locked rules" below.

---

## Repo state (as of 2026-04-28)

- Repo: `CortecSolutions/cortecs-website`
- Active branch: `rebrand-navy-2026-04-20`
- `main` tip: `8ca59bc` (the live site)
- Branch tip: `fbd81cf` → `8289a5e` → `d910f1f` → `8ca59bc`
  - `fbd81cf` chore: remove orphan sub-pages, add 301 redirects to home
  - `8289a5e` copy: on-site or remote anywhere in the world
  - `d910f1f` feat(brand): rebrand to locked navy/white/slate palette
- **Uncommitted on Hero.tsx** (open question — see Open Questions §1):
  - H1 changed from `AI consulting and training for small businesses.` to
    `AI consulting and custom solutions for businesses.`
- **Untracked file** `REDESIGN_SPEC.md` (Josh-call handoff spec from
  2026-04-17). Reference only; mostly superseded by what shipped.

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
  Exception: `/reflect` legitimately mentions Claude Pro because that's
  the actual product requirement. (`/reflect` is currently redirected,
  so this is moot today.)
- **"Just feels off" = stop defending the draft.** Matt means it. Go
  fully different direction, don't iterate on the same framing.
- Craftsman register, not founder-memoir. Declarative statements about
  the work, not first-person narration.

### Deploy rules

- **Do not deploy.** Matt has more editing to do.
- CF API token from 2026-04-19 was revoked; needs a new one when ready.
- CF Pages git auto-deploy is **broken** (split-brain — see Open
  Questions §4). Pushing to GitHub does NOT update the live site.
  Shipping requires `wrangler pages deploy out/ --project-name=cortecs-website --branch=main`.

---

## Live page structure (in order)

1. **Hero** — current H1: see uncommitted change above. Subhead:
   "Assessments, tool setup, and hands-on training for the business
   you already run. On-site in London and surrounding area. Remote
   anywhere."
2. **Problem** — "Your business has tasks that take hours. AI can do
   them in seconds." Animated 35+ stat. 6-card before/after grid.
3. **Demo section** — "One call. One working prototype, days later."
   3-step (bring one task / short phone call / working prototype in
   inbox). The "built live in 15 min" framing was pulled — actual flow
   is call → record → Whisper → Claude plans → Spark executes, days
   not minutes.
4. **How it works (Process)** — 4 steps:
   1. Free 15–30 min intro call
   2. Same-day recs document
   3. $250 on-site/remote assessment
   4. Implementation, setup, and team training (standalone training
      available) — "Custom automation or software if needed"
5. **Why Cortecs** — H2 "Custom solutions built for your business." 4
   cards: Local presence / Private infrastructure when the data calls
   for it / Works with the tools already in place / Honest about what
   AI can't do.
6. **What to count on (About)** — "Three commitments.": 01 Available
   365 days a year. 02 Quick turnaround. 03 Efficient solutions. No
   bio content about Matt.
7. **FAQ** — 5 Qs: Isn't AI only for big companies? / Will AI replace
   my staff? / What does it cost? ($250 mentioned here) / Is my data
   safe? / Why not just try the AI tools myself?
8. **Contact** — form with mailto fallback + chat widget in corner.

---

## Live infrastructure (chat widget)

- Backend: `~/cortecs-chat/` on Spark 2 (Fastify + better-sqlite3 +
  discord.js). Systemd service `cortecs-chat.service`, port 3210.
- Tunnel: cloudflared, `chat.cortecs.ca → localhost:3210`. Service
  `cortecs-tunnel.service`. Tunnel id `9012b7a3-ec1e-48f7-861d-cb2289253181`.
- Discord: Matt's server, channel `#site-chat`. Bot "Cortecs Chat".
- Anti-spam: Cloudflare Turnstile (managed mode) + Bot Fight Mode.
- Rate limit: 20 msg/min/IP, 2000-char cap, honeypot.

---

## Open questions / decisions still pending

1. **Uncommitted Hero H1 change.** Local edit walks H1 back from "AI
   consulting and training for small businesses." to "AI consulting and
   custom solutions for businesses." That **contradicts** the Josh-call
   pivot away from leading with custom software. Was this Matt's edit?
   Keep / revert / revise to a third option?
2. **Step 4 of Process** still reads "Custom automation or software if
   needed" — Matt re-added "or software" despite the pivot. Strip,
   keep, or soften?
3. **Reflect Drive has no on-brand presence.** `/reflect` was 301'd to
   `/`. Reflect Drive is still a real shipping product ($79 CAD).
   Options: (a) rebuild `/reflect` on navy palette, (b) add a Products
   section to home, (c) leave invisible (relies on direct marketing).
4. **CF Pages split-brain resolution.** Two `cortecs-website` projects
   in CF; direct-upload one serves prod, git-connected one's last build
   failed ~50 days ago. Path A: move custom domains onto git-connected,
   fix build, delete direct-upload (downtime risk during cutover).
   Path B: connect git to direct-upload retroactively (CF doesn't
   always allow; may need recreation).
5. **Visual polish.** Site still feels "generic / no wow" to Matt.
   Options discussed but not applied: dark mode default, subtle
   grid/grain texture, bolder hero type, stronger hero glow, home-lab
   photo. Matt chose to push live and defer. Which (if any) for this
   session?
6. **What edits did Matt want before shipping the rebrand?** He said
   "more editing to do" but didn't list specifics. ThinkPad Claude
   should ask him to dump his list before recommending changes — don't
   guess.

---

## Not-yet-done follow-ups (lower priority)

- `~/inbox/copy-revision-v2.md` — agent's full section rewrite doc,
  mostly NOT applied since Matt iterated directly on components.
  Worth scanning for sections never addressed.
- Lighthouse pass (Puppeteer x86 Chrome crashed on ARM Spark 2; use
  pagespeed.web.dev or `sudo snap install chromium`).
- Home-lab photo for Why section.
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
