# Design System: CampusOS

## 1. Visual Theme & Atmosphere
CampusOS is a premium student command center: editorial, confident, energetic, and highly intentional without looking like a generic SaaS dashboard. The interface should feel like a beautifully designed campus publication merged with a powerful daily operating system.

- **Density:** Daily App Balanced (5/10). Give information room to breathe while keeping the dashboard useful at a glance.
- **Variance:** Offset Asymmetric (8/10). Avoid repetitive grids; create hierarchy with asymmetric columns, offset modules, editorial whitespace, and deliberate visual rhythm.
- **Motion:** Cinematic Choreography (7/10). Interactions should feel alive through short spring transitions, staggered reveals, subtle ambient motion, and tactile feedback without becoming distracting.
- The signature experience is **personal momentum**: the UI should make a student feel that CampusOS understands what matters next, rather than merely listing campus data.
- Use one signature storytelling section per major screen and one signature interaction. Prioritize emotional clarity before decoration.

## 2. Color Palette & Roles
Use one restrained neutral palette with a single controlled accent. Never introduce competing accent colors.

- **Canvas Ivory** (#F5F5F1) — primary application background and large whitespace fields.
- **Surface White** (#FFFFFF) — cards, dialogs, inputs, and elevated interactive surfaces.
- **Charcoal Ink** (#18181B) — primary text, headings, navigation emphasis, and high-contrast controls.
- **Muted Steel** (#71717A) — metadata, descriptions, timestamps, secondary labels.
- **Structural Line** (#DFDFD8) — 1px dividers, borders, and subtle field boundaries.
- **Campus Accent** (#5B5BD6) — the single accent for primary actions, active navigation, focus rings, selected states, and small editorial highlights.
- **Soft Accent Wash** (#ECECFA) — extremely restrained background tint derived from the single accent; never use it as a second accent.

Do not use neon gradients, saturated purple/blue glows, rainbow gradients, or pure black. Shadows should be neutral and diffused, generally below `0 24px 70px rgba(24,24,27,0.08)`.

## 3. Typography Rules
Use a modern sans-serif system consistently across the software UI.

- **Display:** Geist — track-tight, controlled, weight-driven hierarchy. Use large display sizes sparingly; prefer confident 48–72px desktop headlines with `clamp()` scaling.
- **Body:** Geist — 16px minimum for primary reading text, relaxed 1.5–1.65 line-height, and approximately 65ch maximum line length.
- **Mono:** Geist Mono — timestamps, labels, status indicators, counts, keyboard shortcuts, and compact metadata.
- **Hierarchy:** Build hierarchy through weight, spacing, contrast, and placement. Do not rely on giant text or gradient text.
- **Labels:** Use compact uppercase mono labels at approximately 10–11px with deliberate letter spacing for editorial metadata.
- Avoid Inter, generic system-font fallbacks as the visual identity, and generic serif fonts. A distinctive serif may appear only in rare editorial storytelling moments, never in navigation or dense dashboard controls.

## 4. Component Stylings
### Buttons
- Primary buttons use the single Campus Accent with strong contrast, medium weight, and 10–12px corner radii.
- Secondary buttons use transparent or surface fills with structural borders.
- Minimum touch target: 44px on mobile.
- Hover: translate no more than 2px and subtly strengthen border/shadow.
- Active: tactile `translateY(1px)` with a short spring-like transition.
- Focus-visible: 2px accent ring with visible offset.
- Never use neon outer glows.

### Cards
- Cards exist only when elevation communicates hierarchy.
- Use generous but controlled rounding: 16–22px for application surfaces.
- Prefer thin structural borders and whitespace over heavy shadows.
- Important editorial modules may use asymmetric padding or an offset accent rule.
- Avoid a repeated three-column card wall. Use asymmetric two-column compositions, zig-zag modules, or horizontal sequences.

### Inputs & Search
- Label above input; helper or error text below when necessary.
- 44px minimum interactive height.
- Focus state uses the Campus Accent ring.
- Search and command palette surfaces should feel like physical tools: crisp border, subtle elevation, immediate keyboard feedback.

### Navigation
- Desktop sidebar should feel quiet and architectural, not like a template admin panel.
- Active navigation uses a restrained accent wash and accent text.
- Mobile navigation should become a clean sheet/drawer with large tap targets and clear hierarchy.

### Loading / Empty / Error
- Loading uses skeleton blocks matching the final layout dimensions. Never use generic circular spinners for primary page loading.
- Empty states should visually explain what action populates them.
- Error states should be calm, inline, actionable, and recoverable.

## 5. Layout Principles
- Use CSS Grid for major page composition; do not use percentage-based flexbox math or brittle `calc()` layout hacks.
- Contain primary content inside a max-width around 1400px with generous side gutters.
- Favor asymmetric compositions: approximately 7/5, 8/4, or editorial offset columns rather than equal-width card rows.
- The dashboard hero should be left-aligned or split-screen, never a centered marketing hero.
- Keep every element in a clean spatial zone. Do not overlap text, cards, images, or controls merely for decoration.
- Use negative space as an active design element.
- Major sections should have generous vertical rhythm, generally `clamp(3rem, 8vw, 6rem)` between editorial blocks.
- Opportunity detail pages should make urgency and the next action visually obvious within the first viewport.
- Community should feel conversational and human, with strong author hierarchy and readable discussion rhythm.
- Discovery pages should privilege scanning: compact metadata, strong titles, clear filters, and progressive detail.

## 6. Responsive Strategy
- Mobile-first. Below 768px, all multi-column compositions collapse to one primary column unless a two-item control group genuinely improves usability.
- Never permit horizontal scrolling.
- Use `clamp()` for display typography and spacing.
- Preserve 44px minimum tap targets.
- Sidebar collapses into a clean mobile drawer.
- Command palette becomes nearly full-width with touch-friendly result rows.
- Cards reduce padding and corner radius slightly on small screens without becoming cramped.
- Keep primary actions reachable without excessive scrolling.
- Full-height sections use `min-height: 100dvh`, never `100vh`.

## 7. Motion & Interaction
Motion is part of the CampusOS identity, but it must communicate state and hierarchy.

- Default interaction physics: spring-like feel approximating `stiffness: 100`, `damping: 20`.
- Animate primarily with `transform` and `opacity`; do not animate layout properties such as `top`, `left`, `width`, or `height` for decorative motion.
- Stagger list entrances with short 40–70ms cascade offsets.
- Use subtle page-entry fades/translate transitions rather than abrupt mounting.
- Cards should have tactile hover lift of approximately 2–4px where appropriate.
- Saved, RSVP, followed, liked, and bookmarked states should have immediate micro-feedback: icon transition, subtle scale, or check-state morph.
- The command palette should open with a compact scale/fade spring and keyboard selection should feel immediate.
- Campus Copilot should have a restrained ambient pulse on its trigger, never a glowing neon aura.
- Active dashboard indicators may use very subtle infinite pulse/shimmer loops.
- Respect `prefers-reduced-motion: reduce`: disable nonessential loops and reduce transitions to near-instant state changes.

## 8. Signature CampusOS Experience
The visual story should repeatedly reinforce: **What matters now → why it matters → what I can do next.**

- The dashboard's primary storytelling module is **Your Momentum**: combine urgent opportunities, RSVP state, saved items, and a concise recommendation into one visually dominant but calm composition.
- The signature interaction is **Command + Copilot**: `Ctrl/Cmd + K` should feel like a command surface for the entire campus, while Campus Copilot adds contextual guidance from the same interaction language.
- Recommendations must feel personalized, not algorithmically noisy. Explain why an opportunity, club, or resource appears when useful.
- Use microcopy that is specific to student life. Avoid generic startup language.

## 9. Anti-Patterns — NEVER DO
- Never use emojis as interface decoration.
- Never use Inter.
- Never use pure black (`#000000`).
- Never use neon purple/blue gradients, outer glow buttons, or cyberpunk AI styling.
- Never use multiple competing accent colors.
- Never use excessive gradient text on large headlines.
- Never use custom mouse cursors.
- Never overlap interface elements for visual spectacle.
- Never use a generic three-equal-card horizontal feature row as the default composition.
- Never make every section a rounded white card on a gray background.
- Never use giant dashboard numbers merely to create visual drama.
- Never use fake statistics or arbitrary percentages.
- Never use generic placeholder identities such as John Doe, Acme, Nexus, or lorem ipsum.
- Never use AI copywriting clichés such as “Elevate,” “Seamless,” “Unleash,” or “Next-Gen.”
- Never add filler prompts such as “Scroll to explore,” bouncing arrows, or decorative chevrons.
- Never depend on broken external image links. Prefer local assets, SVG avatars, or reliable image sources.
- Never sacrifice touch accessibility for visual compactness.
- Never ship a decorative animation that competes with the student's task.
