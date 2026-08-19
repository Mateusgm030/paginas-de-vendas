---
name: Chronos Precision
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#b9caca'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#849495'
  outline-variant: '#3a494a'
  surface-tint: '#00dce5'
  primary: '#e9feff'
  on-primary: '#003739'
  primary-container: '#00f5ff'
  on-primary-container: '#006c71'
  inverse-primary: '#00696e'
  secondary: '#4ae176'
  on-secondary: '#003915'
  secondary-container: '#00b954'
  on-secondary-container: '#004119'
  tertiary: '#f8fafc'
  on-tertiary: '#2d3133'
  tertiary-container: '#dcdee0'
  on-tertiary-container: '#5f6264'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#63f7ff'
  primary-fixed-dim: '#00dce5'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#6bff8f'
  secondary-fixed-dim: '#4ae176'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005321'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
---

## Brand & Style
The design system is engineered for a premium smartwatch e-commerce experience, targeting high-performance athletes and tech enthusiasts. The brand personality is authoritative yet energetic, bridging the gap between luxury horology and cutting-edge biometrics.

The visual style utilizes **Modern Corporate** principles with a **Minimalist** edge. It features heavy use of whitespace to frame high-fidelity product photography, creating an "Apple-esque" sense of premium space. Transitions are smooth and intentional, mimicking the fluid motion of a high-refresh-rate digital interface. The emotional response should be one of absolute precision and reliability.

## Colors
The palette is built on a "True Dark" foundation to mirror the glass and metal of smartwatch hardware. 

- **Primary (Electric Blue):** Used for primary actions, high-priority UI states, and connectivity indicators. It provides a high-tech "glow" against the dark background.
- **Secondary (Vibrant Green):** Reserved exclusively for health metrics, battery life, and positive performance data.
- **Neutral (Deep Slate/Black):** The canvas. Use pure black (`#000000`) for backgrounds to allow OLED screens to blend seamlessly with the hardware, and Slate (`#0F172A`) for container surfaces.
- **Accents:** Use subtle gray scales for secondary text and borders to maintain a low-noise environment.

## Typography
The typography strategy pairs the geometric strength of **Montserrat** for headlines with the functional precision of **Inter** for data and body copy.

- **Headlines:** Use Montserrat with tight letter-spacing to evoke a modern, engineered feel. Large display sizes should be used for product hero sections.
- **Body:** Inter provides maximum legibility for technical specifications and health data. 
- **Data Points:** For health metrics (heart rate, GPS coordinates), use Inter with Medium or Semi-bold weights to ensure they stand out as the most critical information on the screen.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for desktop to maintain a premium, editorial feel, transitioning to a fluid model for mobile.

- **Desktop:** 12-column grid with a 1280px max-width. Large 64px margins create the "premium breathing room" required for the brand.
- **Tablet:** 8-column grid with 32px margins.
- **Mobile:** 4-column grid with 20px margins. 

Vertical spacing follows a strict 8px base unit. Product features should be separated by `stack-xl` to ensure each feature feels distinct and significant.

## Elevation & Depth
Depth is created through **Tonal Layering** rather than traditional shadows. In a dark-themed UI, elevation is communicated by lightening the surface color of the container.

- **Level 0 (Background):** Pure Black (`#000000`).
- **Level 1 (Cards/Sections):** Deep Slate (`#0F172A`).
- **Level 2 (Modals/Popovers):** Lightened Slate (`#1E293B`) with a subtle 1px inner border of 10% opacity white to define the edges.

Shadows, when used, are "Ambient Glows" — very low-opacity primary color blurs behind high-priority elements like the "Buy Now" button, suggesting a digital energy source.

## Shapes
The shape language is **Soft (0.25rem)**. This mimics the precision-milled edges of hardware components—not overly organic, but comfortable and engineered.

- **Buttons & Inputs:** Use the standard `rounded` (4px) for a sharp, professional look.
- **Product Cards:** Use `rounded-lg` (8px) to provide a slightly softer frame for high-resolution imagery.
- **Feature Icons:** Encased in circular containers to mirror the watch face.

## Components
- **Buttons:** Primary buttons use a solid Electric Blue background with black text for maximum contrast. Secondary buttons use a fine 1px white outline (Ghost style).
- **Cards:** Product cards use "Level 1" elevation. They feature no external shadows, relying on the 1px subtle border for definition against the black background.
- **Health Specs:** Utilize "Fine-line" icons (1px stroke weight) in Vibrant Green. Pair these with bold Inter typography for the numerical data.
- **Input Fields:** Minimalist design with a bottom-border only in default state, transitioning to a full Electric Blue border on focus.
- **Chips/Badges:** Small, uppercase labels used for "In Stock" or "New Release," using a subtle background tint of the accent colors (e.g., 10% Green background with 100% Green text).
- **Interactive Micro-interactions:** Buttons should have a slight "scale-down" effect (98%) on click to provide tactile feedback without looking "bouncy."