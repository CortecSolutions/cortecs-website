# Cortec Website Project Notes

## First Customer!
**Date:** December 31, 2025

---

## Current Website Status
- **Live URL:** https://cortecs.ca
- **Hosting:** Cloudflare Pages (manual upload deployment)
- **Local Dev:** `npm run dev` → http://localhost:3000

### Recently Completed (Dec 31, 2025)
1. **Full-screen video hero** - Brain-to-microchip AI video as immersive background
2. **Removed** `<innovation/>` tag from hero
3. **Removed** "50+ Projects Delivered" stat (was flagged as looking AI-generated)
4. **Updated** headline to "Transform your Business" (lowercase y)
5. **Added** dark gradient overlay for text readability
6. **Fixed favicons** - Added PNG fallbacks (16x16, 32x32, apple-touch-icon)
7. **Deployed** successfully via manual upload to Cloudflare Pages

### Pending Website Tasks
- [ ] Set up Cursor IDE for faster development
- [ ] Fix Git auto-deploy connection in Cloudflare Pages (currently requires manual upload)
- [ ] Generate more video clips (chip → code → phone) when Runway API billing is set up
- [ ] Address Grok feedback: add team page, case studies, testimonials

---

## Key Files
- `/src/app/page.tsx` - Homepage with video hero
- `/public/hero-video.mp4` - Brain-to-chip video (6.4MB)
- `/mockups/` - 7 iPhone app mockups for different industries
- `/scripts/runway-generate.js` - Runway API script (needs billing)
- `/.env.local` - Contains RUNWAY_API_KEY

---

## Deployment Process (Manual)
1. Run `npm run build` locally
2. Go to Cloudflare → Workers & Pages → cortecs-website (the Pages one, not Worker)
3. Click "Create deployment" → Upload `out` folder → Save and deploy

---

## Grok Feedback Summary (To Address Later)
- Website looks AI-generated (generic buzzwords)
- No online presence/reviews/social mentions
- Missing credibility markers (team page, case studies, testimonials)
- Recommended: rewrite copy, add team section, register business formally

---

## Customer Work

### Customer #1: AGO Industries
**Website:** https://www.ago1.com
**Contact:** 519-452-3780 | mail@ago1.com
**Industry:** Traffic safety clothing manufacturer (Arc/FR Hi-Vis apparel)

**Project:** Sizing Guide Video
**Problem:** Customers struggle to follow the size chart
**Solution:** Professional video showing how to measure existing garments to determine AGO size

**Sizing Page:** https://www.ago1.com/garment_sizing.asp?store_id=2

#### Garment Categories Needing Videos:
1. **Shirts** (bush shirts, t-shirts, polos) - Measure: width & length
2. **Pants** (work pants, cargo) - Measure: waist width
3. **Coveralls** - Measure: chest width, inseam, underarm length
4. **Bib Overalls** - Measure: chest & waist width
5. **Jackets** (parka, bomber, utility) - Measure: width & length
6. **Vests** - Measure: width & length
7. **Rainsuits** - Measure: width & length

#### Measurement Steps (from their site):
1. Use a similar garment you already own that fits well
2. Ensure buttons/zippers are done up
3. Lay garment flat with front facing down
4. Measure width (side seam to side seam, 2" below armpit)
5. Measure length (collar to hem)
6. Compare to AGO sizing chart

#### Branding Notes:
- Blue and white color scheme
- Professional, utilitarian aesthetic
- Industrial/safety focus

**Status:** Planning video production approach

---

*Last updated: December 31, 2025*
