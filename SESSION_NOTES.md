# Cortec Website - Session Notes
**Last Updated:** December 30, 2025

## Current Status
Website is live at: https://www.cortecs.ca

## What's Set Up

### Google Search Console
- **Verified:** Yes
- **Sitemap submitted:** https://www.cortecs.ca/sitemap.xml (27 pages)
- Waiting for Google to index all pages (3-7 days)

### Google Analytics
- **Measurement ID:** G-50JBTCFSQF
- Tracking code added to all pages
- Data will appear in ~24 hours

### Site Structure
- **Homepage:** `/`
- **Portfolio:** `/portfolio` - 19 industry demos with interactive previews
- **Blog:** `/blog` - 5 SEO-optimized articles
- **Service Pages:** `/services/[slug]` - 19 individual landing pages

### Blog Articles (for SEO)
1. How to Automate Business Workflows with AI
2. Custom Software vs Off-the-Shelf: When to Build
3. AI Chatbots for Small Business: A Practical Guide
4. Choosing the Right Tech Stack for Startups
5. Data Security Best Practices for Small Businesses

### Service Pages (for SEO)
19 individual pages targeting specific industries:
- Healthcare, Finance, Manufacturing, Retail, Real Estate, etc.
- Each has unique meta title/description for search ranking

## Key Files
- `/src/app/layout.tsx` - Main layout with GA tracking & SEO metadata
- `/src/app/services/data.ts` - All service page content
- `/src/app/blog/data.ts` - All blog post content
- `/public/sitemap.xml` - Sitemap for Google

## Deployment
- **Platform:** Cloudflare Pages
- **Project:** cortecs-website
- **Deploy command:** `npm run build && npx wrangler pages deploy out --project-name=cortecs-website`

## Business Context
- Cortec is a 2-person operation (user + Claude)
- Focus: Custom software, AI integrations, automation
- Creative services pivoted to "platform development" (building tools that integrate AI APIs like DALL-E, Runway, etc.)

## Potential Next Steps
- [ ] Add more blog articles for SEO
- [ ] Create case studies when projects are completed
- [ ] Set up Google Business Profile (for local search)
- [ ] Social media content/presence
- [ ] Paid advertising (Google Ads, LinkedIn)
- [ ] Build actual AI integrations to demo capabilities

## Contact Form
Using Web3Forms API - submissions go to configured email
Access key is in `/src/app/page.tsx`
