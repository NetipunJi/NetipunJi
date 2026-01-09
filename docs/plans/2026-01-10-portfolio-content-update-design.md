# Portfolio Website Content Update - Design Document

**Date**: 2026-01-10
**Author**: Claude Code
**Status**: Ready for Implementation

## Overview

Update portfolio website content to reflect Netipun "Nae" Jiwjaroen's actual professional experience as Lead Developer at Abbon Corporation. Replace all placeholder content with real information from resume while maintaining the existing F1-inspired visual design.

## Goals

1. Replace placeholder content with accurate professional information
2. Show balanced technical expertise and leadership capabilities
3. Remove the "Builds" section (projects not ready to showcase)
4. Maintain professional tone without forced racing metaphors
5. Update contact information with real links

## Content Changes

### Hero Section

**Current**: Generic "NAE" with placeholder subtitle
**Update to**:
- Name: "NETIPUN JIWJAROEN" (large impact font)
- Tagline: "Lead Developer | 10+ Years Building Scalable Systems"
- Status indicator: "Currently at Abbon Corporation"
- Keep parallax background effect with "LEAD DEV" text

### The Narrative (Section 01)

**Current**: Fictional 8 years experience at "TechFlow Systems"
**Update to**: Two-paragraph professional summary

Paragraph 1: Lead with 10 years of experience (2013-present), current role at Abbon leading full-stack teams using TypeScript/NodeJS/PHP. Emphasize balanced approach to technical architecture and team leadership.

Paragraph 2: Highlight health tech experience at Whying (collaborating with hospitals to improve patient care), mention ICT Award 2022 Runner-up for Inclusion and Community Services. Close with philosophy: building systems that serve real people.

~150 words total, professional but personable.

### On The Grid (Section 02)

**Current**: 4 generic tech cards (JavaScript, React, CSS, Backend)
**Update to**: 6 specific technology cards

1. **Backend Frameworks** - NestJS, NodeJS, TypeScript, PHP
2. **Databases** - PostgreSQL, MySQL, Redis, MongoDB
3. **Cloud & DevOps** - AWS, GCS, Docker, Kubernetes
4. **Architecture** - System design, API design, Database design
5. **Languages** - TypeScript, JavaScript, PHP
6. **Leadership** - Team management, Collaboration, Mentorship

Each card shows icon (text abbreviation), title, and 3-4 specific technologies.

### Track Record (Section 03)

**Current**: 2 fictional positions
**Update to**: All 5 real positions in reverse chronological order

1. **Abbon Corporation** (June 2023 - Present)
   Lead Developer
   Leading teams in developing full-stack solutions using TypeScript, NodeJS, and PHP. Overseeing architecture and implementation across frontend and backend systems.

2. **Whying** (Nov 2017 - June 2023)
   Lead Developer
   Managed development team building health technology web applications. Designed and maintained server infrastructure. Collaborated with hospital teams to develop software solutions improving patient care and outcomes.

3. **Cablemod** (Mar 2022 - Mar 2023) *[Note overlapping role]*
   Thailand Community Manager
   Built relationships with Thailand's mechanical keyboard community, bridging technical communities and business growth.

4. **DX Innovation** (May 2016 - Sep 2017)
   Web Developer
   Developed full-stack solutions using JavaScript and PHP.

5. **Freelance** (2013 - 2016)
   Web Developer
   Collaborated directly with clients to design and develop custom software solutions.

Timeline design: Each item shows year range, company name, title, and 1-2 sentence description. Stagger animation delays for polished reveal.

### Builds Section

**Action**: Remove entirely (lines 162-186 in index.html)

### Footer

**Current**: Placeholder email "hello@nae.dev" and dead social links
**Update to**:
- Headline: "Available for Collaboration"
- CTA button: "Get In Touch" → links to email
- Email: [To be provided by user]
- Social links: LinkedIn [URL TBD], GitHub [URL TBD]
- Copyright: "© 2025 Netipun Jiwjaroen"

## Technical Implementation

### Files Modified
- `index.html` only (content changes)

### Files Unchanged
- All CSS files (visual design stays intact)
- All JavaScript files (animations stay intact)
- All design system tokens (colors, fonts, spacing)

### Meta Tags
Update in `<head>`:
- `<title>` → "Netipun Jiwjaroen | Lead Developer"
- `<meta name="description">` → "Lead Developer with 10 years of experience building scalable systems. Currently at Abbon Corporation."

### Content Validation
Before implementation, obtain from user:
1. Preferred name display: "NETIPUN JIWJAROEN" or "NAE" or both?
2. Email address for contact footer
3. LinkedIn profile URL
4. GitHub profile URL

## Design Principles Maintained

1. **Visual F1 aesthetic** - Keep neon green accents, bold typography, dark theme, parallax effects
2. **No racing metaphors** - Professional language without "cockpit," "pit stop," etc.
3. **Balanced narrative** - Equal weight to technical skills and leadership/collaboration
4. **Real information** - No fictional companies, projects, or exaggerated claims
5. **Professional tone** - Clear, direct, confident without superlatives

## Success Criteria

- All content accurately reflects resume information
- Professional tone appropriate for job interviews
- Visual design quality unchanged
- No broken links or placeholder content
- Mobile responsive behavior intact
- All scroll animations working correctly

## Next Steps

1. Gather missing information (name preference, contact URLs)
2. Implement content changes in index.html
3. Test in browser (Chrome, Firefox, Safari)
4. Verify responsive design on mobile
5. Validate all navigation links work correctly
