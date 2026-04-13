# Cortec Website - Session Notes 2
**Date:** January 1, 2026

## To continue working:
```bash
cd /Volumes/PRO-G40/CortecWebsite
npm run dev   # starts dev server at localhost:3000
```

## To deploy changes:
```bash
npm run build && wrangler pages deploy out --project-name=cortecs-website
```

---

## What we changed today (LOCAL ONLY - not deployed):

### 1. Services section - honest, personal descriptions
- "AI-Powered Solutions" → "AI Content & Integrations"
- "Business Workflow Automation" → "Workflow Automation"
- "Technical Consulting" → "Technical Problem-Solving"
- All descriptions now use "I/me" language

### 2. Hero section
- "Transform your Business with Intelligent Solutions" → "Custom Solutions, Made for You"
- Subtitle: "Apps, automations, and AI-powered content for small businesses, agencies, and creators. One developer, one point of contact, from start to finish."

### 3. Section header
- Removed "Our Expertise" label
- "What We Build" → "What We Create"
- Subtitle: "Custom solutions tailored to you"

### 4. About section
- "Building the Future, One Solution at a Time" → "Quality Work, Personal Service"
- "Why Choose Us?" → "Why Work With Me?"
- Focused on strengths (positive messaging, not slamming competitors)

---

## Still to do:
- [ ] Review overall messaging consistency
- [ ] Portfolio page may need similar updates
- [ ] Deploy changes when ready

## Business positioning:
- **Target:** Small businesses, agencies, creators, consumers
- **Differentiator:** Personal service, direct communication, one point of contact
- **Hardware:** M4 Mac 16GB (cloud-based AI services, not local processing)

## Important files:
- Main page: `/src/app/page.tsx`
- Backup of original: `/src/app/page.tsx.backup`
