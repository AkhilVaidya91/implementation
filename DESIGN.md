# Design System: Academic Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Modern Scholar"**

This design system moves away from the cluttered, "portal-heavy" aesthetic typical of academic institutions. Instead, it adopts a **High-End Editorial** approach. We treat the mobile web platform as a premium publication—one that values the student’s time through extreme clarity, intentional white space, and sophisticated tonal depth.

The system breaks the "template" look by utilizing **Intellectual Asymmetry**. By pairing a deep, authoritative navy (`primary`) with a vibrant, energetic teal (`secondary`), we create a visual rhythm that feels both established and forward-thinking. We prioritize "Information Architecture as Art," where the hierarchy of typography and the layering of surfaces do the heavy lifting, eliminating the need for decorative assets that slow down load times.

---

## 2. Colors & Surface Philosophy
Our palette is rooted in high-contrast professional tones, designed to ensure AA/AAA accessibility while maintaining a signature "soul."

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through background color shifts.
*   **The Logic:** Hard lines create visual noise and "box in" the user.
*   **The Execution:** A `surface-container-low` card sitting on a `surface` background creates a clear, sophisticated boundary through tonal contrast alone.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface-container` tiers to create "nested" depth:
*   **Base:** `background` (#faf9fe)
*   **Level 1 (Sections):** `surface-container-low` (#f4f3f8)
*   **Level 2 (Interactive Cards):** `surface-container-lowest` (#ffffff)
*   **Level 3 (Overlays/Popovers):** `surface-bright` (#faf9fe)

### The "Glass & Gradient" Rule
To move beyond a "flat" out-of-the-box feel:
*   **CTAs & Heros:** Use a subtle linear gradient (Top-Left to Bottom-Right) transitioning from `primary` (#00193c) to `primary_container` (#002d62). This adds a "lithographic" quality to buttons.
*   **Floating Navigation:** Use **Glassmorphism** for bottom navigation bars or floating action buttons. Apply `surface` at 80% opacity with a `backdrop-blur` of 12px.

---

## 3. Typography
We utilize **Public Sans** for its neutral, high-legibility "Workhorse" characteristics, paired with **Inter** for precision metadata.

*   **Display (Large/Med/Sm):** Set in `publicSans`. Used for campus-wide headlines or major announcements. These should utilize "Negative Leading" (tighter line height) to feel like a premium broadsheet.
*   **Headline & Title:** The primary drivers of navigation. Use `headline-md` for section headers to provide an authoritative anchor.
*   **Body (lg/md/sm):** Our primary content carrier. `body-lg` (1rem) is the default for readability on mobile devices to prevent eye strain.
*   **Label (md/sm):** Set in `inter`. Used for tags, timestamps, and micro-copy. The switch to Inter provides a subtle "technical" feel that distinguishes data from narrative.

---

## 4. Elevation & Depth
In this system, depth is "baked-in" through color, not "added-on" with heavy shadows.

### The Layering Principle
Achieve hierarchy by "stacking" surface tiers. Place a `surface-container-highest` element on top of a `surface-container` to create a natural focus point.

### Ambient Shadows
Shadows are reserved for truly floating elements (e.g., Modals). 
*   **Spec:** `box-shadow: 0px 8px 24px rgba(26, 27, 31, 0.06);`
*   The shadow color is a tinted version of `on-surface`, creating a natural ambient light effect rather than a "muddy" grey drop shadow.

### The "Ghost Border" Fallback
If a border is required for extreme accessibility (e.g., high-contrast mode), use a **Ghost Border**:
*   `outline-variant` (#c4c6d1) at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** Gradient of `primary` to `primary_container`. Text in `on_primary`. Roundedness: `md` (0.375rem).
*   **Secondary:** Solid `secondary_fixed`. Text in `on_secondary_fixed_variant`.
*   **Tertiary:** No background. Text in `primary`. Interaction state uses a `surface-variant` ghost fill.

### Cards & Lists
*   **Rule:** Forbid divider lines. 
*   **Execution:** Use `24px` (1.5rem) of vertical white space to separate list items. For complex data, use alternating tonal backgrounds (`surface` to `surface-container-low`) to create "Zebra" striping without lines.

### Input Fields
*   **Styling:** Filled style only (no outlines). Background: `surface-container-high`.
*   **Active State:** A 2px bottom-accent using `secondary`. 
*   **Error:** Background shifts to `error_container`, text to `on_error_container`.

### Campus-Specific Components
*   **The "Live-Status" Chip:** For laundry, dining halls, or gym capacity. Use `tertiary_container` with `on_tertiary_container` text for high-energy alerts.
*   **The Navigation Rail:** A bottom-docked glassmorphic bar. Active icons use `secondary_container` as a circular "pill" background behind the icon.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. For example, a page title might have a 32px left margin while body text has 24px, creating an editorial "gutter" look.
*   **Do** leverage `primary_fixed_dim` for large background areas that need to feel "calm" but branded.
*   **Do** prioritize `label-sm` in `inter` for all metadata (times, dates, locations) to keep the UI feeling precise.

### Don’t:
*   **Don’t** use pure black (#000000) for text. Always use `on_surface` (#1a1b1f) to maintain a premium, ink-on-paper feel.
*   **Don’t** use standard "Material Design" shadows. Stick to tonal layering and ambient 4-8% opacity blurs.
*   **Don’t** use icons as the primary means of navigation without a text label in `label-md`. This is an academic tool; clarity precedes minimalism.

### Accessibility Note:
Ensure that all `secondary` and `tertiary` accent combinations are checked against `on_secondary` and `on_tertiary` for a minimum contrast ratio of 4.5:1. This system is designed to be legible even under direct sunlight on a campus quad.