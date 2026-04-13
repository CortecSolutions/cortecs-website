# Session Notes 3 - January 3, 2026

## Website Updates Completed

### Branding & Messaging Changes
- Changed "Cortec" to "Cortec." (with period) across all pages
- Updated hero: "Custom solutions, made for you"
- Updated subtitle: "I design and develop custom iOS and web applications for small businesses and consumers. One developer, one point of contact for a seamless experience."
- Changed "What We Create" section to "How it works" with 3 steps: Concept → Solution → Results
- Updated About section: "Why Cortec" box with "Quality work, personal service"
- Force dark mode enabled site-wide

### Navigation Updates
- Removed Services link from nav
- "About" now points to #services (How it works section)
- "Portfolio" renamed to "Services"
- "Blog" renamed to "Articles"
- "Get in Touch" changed to "Let's connect"

### Portfolio Page
- Simplified from 19 enterprise solutions to 4 categories: iOS Apps, Web Apps, Automation, AI Integrations
- Added 12 creative project examples
- Backed up old enterprise content to `/Volumes/PRO-G40/backup-enterprise-services/`

### Blog Section
- Added new blog with 5 articles
- Fixed Next.js 16 async params issue (params must be awaited as Promise)
- Improved article readability with white card layout, better spacing, visual section dividers

### Deployment Fix
- Fixed Cloudflare Pages deployment issues
- Build output directory should be `out` (static export)
- Used direct CLI deployment: `npx wrangler pages deploy out --project-name=cortecs-website --branch=main`

## Pending: AI Video Automation Workflow

### Goal
Build automated pipeline: Script → Voiceover → AI Video → Edit → Distribute

### Workflow Design
1. **Trigger**: Manual button click
2. **Script Generation**: OpenAI GPT-4 API via Zapier
3. **Voiceover**: ElevenLabs API (Creative Platform)
4. **AI Video**: Runway ML (user has subscription)
5. **Editing**: Creatomate or Shotstack
6. **Distribution**: Social media posting

### Accounts Needed
- [x] Runway ML (already have)
- [ ] Zapier account
- [ ] OpenAI API key
- [x] ElevenLabs account (signed up, chose Creative Platform)

### Estimated Cost Per Video
- GPT-4: ~$0.05
- ElevenLabs: ~$0.30
- Runway/HeyGen: ~$1-5
- Creatomate: ~$0.50
- **Total: ~$2-6 per video**

## Next Steps for Tomorrow
1. Finish setting up Zapier account
2. Get OpenAI API key and add credits
3. Get ElevenLabs API key
4. Get Runway ML API key
5. Build the Zapier workflow
6. Test end-to-end video generation

## Technical Notes
- Website: https://cortecs.ca
- GitHub: CortecSolutions/cortecs-website
- Cloudflare Pages project: cortecs-website
- Next.js 16.1.1 with static export (`output: "export"`)
- Build command: `npm run build`
- Deploy via: `npx wrangler pages deploy out --project-name=cortecs-website --branch=main`
