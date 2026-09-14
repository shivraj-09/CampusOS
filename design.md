# CampusOS — Stitch Design System & Full-Screen Design Brief

> **Purpose:** This document is the single visual/product brief for generating the complete CampusOS interface in Google Stitch or another UI design system. Design every screen as one coherent product, not as isolated mockups.
>
> **Product:** CampusOS — *Your college. Your opportunities. Your people. One place.*
>
> **Implementation target:** Next.js + React + TypeScript. The designs must be realistic to implement with standard web technologies and responsive across desktop, tablet, and mobile.

---

## 1. Product vision

CampusOS is a premium student command center for discovering opportunities, clubs, learning resources, campus conversations, and personal progress.

It should feel like a **real product designed by a strong human art director**, not an AI-generated SaaS dashboard.

The experience should combine:

- editorial university publication energy
- premium product-design discipline
- contemporary campus culture
- strong typography and composition
- cinematic but restrained motion
- information density without visual clutter
- personality without gimmicks
- clear pathways from discovery → decision → action

### Core emotional arc

**Emotion → Story → Interaction → Brand → Conversion**

Every major page should make the student feel that CampusOS understands what matters on campus and helps them act on it.

### Signature storytelling section

The homepage should contain a large editorial section that communicates:

> **“Your campus is already moving. CampusOS helps you move with it.”**

This section should visually connect opportunities, people, clubs, resources, and activity into one living campus network.

### Signature interaction

The product's signature interaction is **contextual discovery**:

A student can search or ask CampusOS something, and the interface should make the relevant opportunities, clubs, resources, or people feel connected rather than returning a generic search-results page.

---

# 2. Critical visual direction

## Do NOT make it look like

- generic AI SaaS
- a template dashboard
- a finance app
- a crypto landing page
- a generic “AI startup” with purple gradients
- excessive glassmorphism
- excessive neon
- glowing cards everywhere
- giant floating blobs with no purpose
- every element inside a rounded rectangle
- card grids with identical dimensions
- excessive pills
- childish college graphics
- stock-photo-heavy university websites
- plain white/cream Bootstrap-style layouts

**Avoid the current common AI aesthetic:** purple-blue gradients + dark glass cards + glowing borders + rounded everything.

## Desired visual character

Think:

**Contemporary university publication × premium digital product × experimental editorial website.**

The interface should look intentionally art-directed.

Use:

- strong typographic hierarchy
- asymmetry
- large editorial headlines
- oversized numbers
- thin rules
- structured grids
- generous negative space
- occasional full-bleed sections
- strong horizontal rhythm
- subtle texture
- architectural compositions
- monochrome foundations
- one restrained accent family
- small utilitarian labels
- intentional image/visual crops
- sharp transitions between sections

The UI should have a visual “point of view.”

---

# 3. Color system

The palette must NOT be dominated by purple, violet, electric blue, cyan, or neon green.

Use a **deep charcoal / ink / mineral / muted terracotta** direction.

### Primary foundation

- Ink: `#11110F`
- Charcoal: `#191916`
- Graphite: `#24231F`
- Warm gray: `#77746B`
- Soft stone: `#B8B3A7`
- Paper: `#E8E4DA`
- Off-white: `#F2EFE7`

### Accent

Use **muted terracotta / burnt clay** sparingly:

- Clay: `#B85C3D`
- Clay light: `#D08A70`

Optional secondary accent for data/interactive states:

- Muted olive: `#777B58`

### Rules

- Most surfaces should be flat, not gradient-filled.
- Accent color should occupy roughly 5–10% of the visual field.
- Use accent for active states, key numbers, tiny indicators, links, and selected actions.
- Do not make every button or card accent-colored.
- Avoid glossy/neon effects.
- Use contrast and typography to create hierarchy instead of glow.

### Background strategy

The site should alternate between **deep ink sections and light stone editorial sections**.

Do not use one continuous white/cream canvas.

Suggested rhythm:

`INK → STONE → INK → STONE → INK`

This gives the long-scroll experience cinematic pacing.

---

# 4. Typography

Typography is one of the primary brand assets.

### Display

Use a high-character editorial serif such as:

- Instrument Serif
- Editorial New
- Canela-like serif
- Cormorant-like editorial serif

Large headlines should feel printed/editorial, not corporate.

### UI/body

Use a clean modern grotesk such as:

- Inter
- DM Sans
- Geist Sans
- Neue Haas Grotesk-like system

### Utility

Use a compact mono font for:

- timestamps
- metadata
- labels
- category names
- navigation markers
- counters

Examples:

`02 / DISCOVER`

`DEADLINE · 4 DAYS`

`CAMPUS / ONLINE`

### Typography rules

- Display headlines: very large, tight tracking, high contrast.
- Body copy: comfortable measure, 60–75 characters per line.
- UI labels: small, uppercase, tracked.
- Use serif for emotion and narrative.
- Use sans for utility and action.
- Use mono for system information.
- Do not use more than three type families.

---

# 5. Layout system

Use a strong editorial grid.

### Desktop

- 12-column grid
- max content width around 1440px
- generous outer margins
- sections can intentionally break the grid
- occasional full-bleed visual moments

### Tablet

- 8-column grid
- preserve hierarchy
- reduce headline scale before reducing whitespace

### Mobile

- 4-column conceptual grid
- 18–22px side padding
- no horizontal overflow
- editorial stacking rather than shrinking desktop cards
- sticky navigation should remain usable

### Spacing

Use a large spacing scale:

`8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160`

Long-form sections should have enough vertical space to feel like a story.

---

# 6. Shape language

Avoid excessive rounded cards.

Preferred shapes:

- square/near-square editorial containers
- 4–12px radius for functional UI
- occasional 20–28px radius for hero/product scenes
- circles only when conceptually meaningful
- thin 1px rules
- underlines
- cropped blocks
- large rectangular media frames

A card should look like a deliberate composition, not a floating container.

---

# 7. Motion language

Motion should feel **cinematic and physical**, never decorative for its own sake.

### Page entry

- typography reveals upward
- sections fade/reveal progressively
- content moves 12–30px, not huge distances

### Hover

- image crop shifts slightly
- underline expands
- metadata changes opacity
- arrow moves 4–8px
- card may lift 2–4px

### Scroll

Use subtle:

- parallax
- sticky editorial headlines
- horizontal movement
- reveal masks
- number counters
- progress indicators

### Avoid

- constant floating animations
- bouncing cards
- spinning 3D objects
- glowing borders
- excessive spring physics
- animation on every element

Motion should communicate **continuity and hierarchy**.

---

# 8. Global navigation

Create a distinctive persistent navigation system.

## Desktop

Left vertical rail around 240–260px.

It should feel more like an editorial index than a SaaS sidebar.

### Top

CampusOS wordmark.

Small system status:

`CAMPUS · ONLINE`

### Navigation

1. Overview
2. Discover
3. Clubs
4. Resources
5. Community
6. Profile

Each item should have:

- small number or marker
- label
- active indicator

Avoid large filled nav buttons.

### Lower rail

Small Campus Copilot entry.

Student identity block.

Streak/progress information.

## Mobile

Use a compact top bar with:

- CampusOS mark
- current section
- search
- notifications
- menu

Navigation opens as a full-height editorial drawer.

---

# 9. Screen inventory

Generate designs for ALL screens below.

---

# SCREEN 01 — Homepage / Overview

Route: `/`

Purpose: establish the CampusOS brand and immediately show the student what is happening on campus.

## Hero

Large editorial statement:

> **Your campus is already moving.**

Secondary line:

> **CampusOS helps you move with it.**

Supporting copy:

A concise explanation of opportunities, people, clubs, resources, and conversations in one place.

Primary action:

`EXPLORE CAMPUS`

Secondary action:

`ASK CAMPUS COPILOT`

### Hero visual

Do not use a generic dashboard screenshot.

Create an abstract **campus network composition**:

- event markers
- people initials
- club abbreviations
- resource fragments
- connecting lines
- time labels
- small campus signals

It should feel like a living information map.

Use typography and geometry rather than neon effects.

## Section: Campus in motion

Large editorial sentence:

> **There is always something happening. The hard part is knowing what matters to you.**

Below it, show a horizontal sequence of real campus signals:

- hackathon
- workshop
- club activity
- community question
- resource update

Each item should feel like a live dispatch.

## Section: Momentum

Display large numbers:

- 12 day streak
- 74% profile completion
- 5 relevant opportunities
- 4 active clubs

Do not make these four identical metric cards.

Use an editorial number rail with different typographic scales.

## Section: Featured opportunity

Large asymmetrical feature.

Example:

**Build for Bharat Hackathon**

`HACKATHON · 4 DAYS LEFT`

`Innovation Lab`

Tags: React / AI / Team

CTA: `VIEW OPPORTUNITY`

Include a subtle visual motif related to building/prototyping.

## Section: People building

Show community activity as a narrative spread.

Feature:

- Aarav Mehta — looking for a team
- Maya Shah — shipped an accessibility prototype
- Tech Club — workshop seats opened

Use editorial avatars/monograms rather than stock profile photos.

## Section: Clubs

Horizontal club index.

Show:

- AI & Robotics Society
- CodeCraft
- Design Collective
- Entrepreneurship Cell

Use club initials, member counts, and current activity.

## Section: Resources

Editorial split:

Left: large headline `LEARN WITHOUT LEAVING CAMPUS.`

Right: resource list.

Resources:

- DSA Interview Roadmap
- Web Technology Lab Pack
- Git & GitHub Field Guide

## Section: Campus Copilot

Treat Copilot as a **product experience**, not a chatbot card.

Large section headline:

> **Ask your campus.**

Show a realistic conversation window with three suggested prompts:

- What should I do this week?
- What deadlines should I care about?
- Which clubs fit me?

The interaction should visually connect questions to campus information.

## Final CTA

Large closing statement:

> **Find your next thing.**

CTA:

`EXPLORE CAMPUS →`

---

# SCREEN 02 — Discover

Route: `/discover`

Purpose: opportunity discovery.

Hero:

`DISCOVER / 01`

Headline:

> **Find what is worth showing up for.**

Subtext explaining personalized opportunities.

## Controls

- search
- All
- Trending
- Recent
- category filter
- deadline filter

Keep controls visually minimal.

## Content

Use a varied editorial list, not identical cards.

Feature one large opportunity followed by smaller rows.

Each opportunity includes:

- title
- type
- date
- deadline
- place
- tags
- “why this matches you” explanation

Examples:

1. Build for Bharat Hackathon
2. Applied AI Systems Workshop
3. Open Source Sprint
4. Student Innovation Grant

## Empty state

Create a thoughtful empty state:

> **Nothing fits that search yet.**

Suggest broadening filters.

---

# SCREEN 03 — Opportunity Detail

Example route: `/discover/op1`

Purpose: convert discovery into action.

Hero should be highly editorial.

Eyebrow:

`HACKATHON / OPPORTUNITY`

Huge title:

> **Build for Bharat Hackathon**

Supporting description.

Metadata:

- Sep 14
- Innovation Lab
- 4 days left

Actions:

`SAVE OPPORTUNITY`

`RSVP`

Below hero:

## Why it matters

Personalized explanation:

> Matches 3 of your skills.

## Details

Long-form description.

## Your next move

A compact action rail:

1. Save it
2. RSVP
3. Find teammates

Use strong hierarchy and editorial typography.

---

# SCREEN 04 — Clubs Index

Route: `/clubs`

Hero:

`CLUBS / 02`

Headline:

> **Find your people.**

Supporting copy about communities and shared interests.

Show club categories as a subtle filter index.

Club presentation should be varied.

Each club:

- monogram
- name
- category
- members
- current activity
- arrow

Clubs:

- AI & Robotics Society — 184 members
- CodeCraft — 326 members
- Design Collective — 97 members
- Entrepreneurship Cell — 241 members

Include a visual “activity pulse” concept without neon.

---

# SCREEN 05 — Club Detail

Example: `/clubs/c1`

Hero:

`AI & ROBOTICS SOCIETY`

Large title.

Show:

- 184 members
- Technology
- current activity

Primary action:

`FOLLOW CLUB`

Secondary action:

`ADD TO CALENDAR`

Sections:

- What the club is doing now
- Upcoming activity
- Why it may fit you
- Club tags

Make it feel like entering a real campus organization.

---

# SCREEN 06 — Resources Index

Route: `/resources`

Hero:

`RESOURCES / 03`

Headline:

> **Keep learning. Keep building.**

Resource categories:

- Roadmaps
- Lab resources
- Cheat sheets
- Guides

Show resources as an editorial library index.

Each resource:

- title
- type
- metadata
- save/bookmark action
- arrow

Resources:

- DSA Interview Roadmap
- Web Technology Lab Pack
- Git & GitHub Field Guide

---

# SCREEN 07 — Resource Detail

Example: `/resources/r1`

Hero:

`ROADMAP`

> **DSA Interview Roadmap**

Metadata:

`42 lessons · Updated Sep 6`

Actions:

`SAVE RESOURCE`

`OPEN RESOURCE`

Body should resemble a compact editorial reading page.

Include:

- overview
- what you will learn
- suggested next steps
- tags

---

# SCREEN 08 — Community

Route: `/community`

This is a major brand screen.

Hero:

`COMMUNITY / 04`

Headline:

> **The campus talks here.**

Subtext:

Questions, projects, announcements, and useful conversations from students.

Primary CTA:

`START A CONVERSATION`

## Feed

Posts should feel like an editorial community feed rather than social media clone UI.

Example posts:

### Aarav Mehta
`QUESTION`

**Anyone forming a team for Build for Bharat?**

Looking for one backend person and one designer...

24 likes · 8 comments

### Maya Shah
`PROJECT`

**We shipped our first campus accessibility prototype**

61 likes · 14 comments

### Tech Club
`ANNOUNCEMENT`

**Workshop seats opened for Applied AI Systems**

17 likes · 3 comments

Use strong typography and generous vertical spacing.

## Create post modal

Fields:

- name
- post type
- title
- body

CTA:

`PUBLISH`

## Comments drawer/modal

Show comments in a focused reading state.

---

# SCREEN 09 — Profile

Route: `/profile`

This should feel like a **student identity page**, not an account settings dashboard.

Hero:

Large monogram/avatar.

Name:

**Shivraj**

Branch:

**Computer Engineering**

Year:

**2nd Year**

Large progress indicator:

`74% PROFILE COMPLETE`

Streak:

`12 DAY STREAK`

Sections:

- Saved opportunities
- RSVP history
- Followed clubs
- Bookmarked resources
- Community activity

Include editable identity fields.

Use a strong editorial profile composition with large whitespace.

---

# SCREEN 10 — Notifications

Route: `/notifications`

Hero:

`NOTIFICATIONS`

Headline:

> **What changed while you were away.**

Show notification timeline.

Notification types:

- opportunity deadline
- RSVP confirmation
- club update
- community activity
- resource update

Actions:

`MARK ALL READ`

Individual dismiss controls.

Unread state should be subtle but obvious.

Use a timeline/list composition rather than notification cards everywhere.

---

# SCREEN 11 — Campus Copilot

Can be a dedicated screen or immersive overlay.

Purpose: help students ask questions about campus.

Hero:

> **Ask your campus.**

Large prompt input.

Suggested questions:

- What should I do this week?
- What deadlines should I care about?
- Which clubs fit me?

After asking, show an answer structured as:

**Short answer**

Then supporting campus signals:

- relevant opportunities
- relevant clubs
- resources
- suggested action

Example answer:

> **You have three useful moves this week:** save the Bharat hackathon, check the AI workshop, and follow CodeCraft.

Then show the connected objects.

This should visually demonstrate the product's central value: **context over search results.**

---

# SCREEN 12 — Global Search / Command Palette

Trigger:

`⌘ K` / `Ctrl K`

Full-screen dimmed backdrop.

Centered search interface.

Placeholder:

`Search people, opportunities, clubs...`

Suggested actions before typing:

- Find opportunities
- Explore clubs
- Find resources

Search results should visually distinguish:

- Opportunity
- Club
- Resource
- Community

Keyboard navigation:

- ↑ ↓
- Enter
- Esc

Design it as a premium command interface, not a browser-style search box.

---

# SCREEN 13 — Mobile Overview

Create a dedicated mobile composition rather than simply shrinking desktop.

Include:

- top bar
- hero
- featured opportunity
- momentum
- clubs
- resources
- Copilot
- bottom navigation or compact menu

Prioritize the student's next action.

---

# SCREEN 14 — Mobile Discover

Show:

- compact header
- search
- filters
- opportunity feed
- save controls

Cards can become list rows.

Keep typography strong.

---

# SCREEN 15 — Mobile Community

Show:

- community header
- create post CTA
- feed
- like/comment actions
- comment sheet

The interface must remain comfortable for touch.

---

# 10. Components Stitch should establish

Design reusable components consistently.

### Navigation

- DesktopRail
- MobileTopbar
- MobileDrawer
- SectionIndex

### Typography

- DisplayHeadline
- EditorialLabel
- MetaLine
- SectionTitle
- BodyCopy

### Content

- OpportunityFeature
- OpportunityRow
- ClubFeature
- ClubRow
- ResourceRow
- CommunityPost
- NotificationItem

### Interaction

- PrimaryAction
- SecondaryAction
- TextAction
- SaveButton
- RSVPButton
- FollowButton
- FilterControl
- SearchInput

### Product scenes

- CampusNetwork
- MomentumRail
- CopilotWindow
- ActivityPulse
- ProgressIndicator

---

# 11. Accessibility

The final design must support accessible implementation.

- WCAG AA contrast target
- never rely on color alone
- keyboard-accessible controls
- visible focus states
- touch targets minimum ~44px
- reduced-motion mode
- semantic heading hierarchy
- form labels
- descriptive action labels

Do not sacrifice readability for aesthetics.

---

# 12. Responsive behavior

### Desktop ≥ 1200px

Use the complete editorial composition.

### Tablet 768–1199px

Collapse columns carefully.

Preserve oversized typography but reduce scale.

### Mobile < 768px

Stack sections.

Turn horizontal indexes into horizontal scroll strips where useful.

Turn side panels into bottom sheets or stacked sections.

Keep the first viewport focused:

**headline → context → action.**

---

# 13. Content tone

CampusOS copy should be:

- confident
- concise
- intelligent
- student-native
- optimistic without being cheesy
- direct
- occasionally poetic

Avoid:

- corporate jargon
- fake startup language
- “unlock your potential” clichés
- excessive exclamation marks
- generic AI phrases
- overexplaining simple actions

Preferred examples:

`Find what is worth showing up for.`

`Find your people.`

`Keep learning. Keep building.`

`The campus talks here.`

`Ask your campus.`

`Find your next thing.`

---

# 14. Data to represent in the designs

Use these exact seeded examples where relevant so the visual designs map directly to the current frontend.

## Student

- Shivraj
- Computer Engineering
- 2nd Year
- 12 day streak
- 74% completion

## Opportunities

### Build for Bharat Hackathon
- Hackathon
- Sep 14
- 4 days left
- Innovation Lab
- React / AI / Team
- Matches 3 of your skills

### Applied AI Systems Workshop
- Workshop
- Sep 12
- Tomorrow
- Seminar Hall A
- Python / AI
- Strong match for your interests

### Open Source Sprint
- Competition
- Sep 21
- 13 days left
- Online
- GitHub / OSS
- Builds your open-source profile

### Student Innovation Grant
- Scholarship
- Sep 28
- 20 days left
- Dean Office
- Projects / Innovation
- Your project activity qualifies

## Clubs

- AI & Robotics Society — Technology — 184 members — Autonomous rover build night — AR
- CodeCraft — Coding — 326 members — Competitive programming jam — CC
- Design Collective — Design — 97 members — Portfolio critique evening — DC
- Entrepreneurship Cell — Entrepreneurship — 241 members — Founder stories: Season 3 — EC

## Resources

- DSA Interview Roadmap — Roadmap — 42 lessons · Updated Sep 6
- Web Technology Lab Pack — Lab resource — 18 experiments · PDF
- Git & GitHub Field Guide — Cheat sheet — 12 min read · Practical

## Community

- Aarav Mehta — Question — Anyone forming a team for Build for Bharat? — 24 likes — 8 comments
- Maya Shah — Project — We shipped our first campus accessibility prototype — 61 likes — 14 comments
- Tech Club — Announcement — Workshop seats opened for Applied AI Systems — 17 likes — 3 comments

---

# 15. Design consistency rules

Every screen must feel like part of the same product.

Maintain:

- same navigation architecture
- same type hierarchy
- same color system
- same rule/line language
- same button language
- same metadata treatment
- same interaction conventions
- same spacing rhythm

But **do not make every page visually identical**.

Each major section should have its own composition:

- Overview = cinematic narrative
- Discover = editorial opportunity index
- Clubs = community directory
- Resources = learning library
- Community = living conversation
- Profile = student identity
- Notifications = timeline
- Copilot = product interaction

---

# 16. Stitch generation instructions

Generate the screens as a **single cohesive design system**.

Do not generate random standalone UI concepts.

The output should look like a real design handoff for a production Next.js application.

Prioritize in this order:

1. typography
2. composition
3. hierarchy
4. spacing
5. interaction
6. color
7. decorative detail

If forced to choose between visual decoration and hierarchy, choose hierarchy.

If forced to choose between a trendy effect and a distinctive composition, choose composition.

If forced to choose between more cards and more whitespace, choose whitespace.

### Final art-direction statement

**CampusOS should look like the digital operating system of a great university — part editorial publication, part campus map, part personal command center. It should feel quiet, confident, intelligent, tactile, and unmistakably designed by a human.**

The final result should make a student want to explore the campus, not merely manage a dashboard.
