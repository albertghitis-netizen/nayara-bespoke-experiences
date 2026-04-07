# Nayara Property Pages — Animation Specifications

This document describes every animation used on the Tented Camp page (and all 6 property pages). Each animation is designed to be transferable to WordPress Gutenberg custom blocks using either CSS animations or the IntersectionObserver API.

---

## 1. FadeIn (Scroll-Triggered Reveal)

The primary animation used across all sections. Elements fade in and slide up when they enter the viewport.

| Property | Value |
|----------|-------|
| Initial state | `opacity: 0; transform: translateY(24px)` |
| Final state | `opacity: 1; transform: translateY(0)` |
| Duration | `0.8s` |
| Easing | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Trigger | Element is 20% visible in viewport |
| Fires once | Yes |
| Stagger delay | `0.08s` per item (gallery), `0.1s` per item (content grids) |

WordPress implementation: Use IntersectionObserver with threshold 0.2 and toggle a CSS class.

```css
.fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
```

---

## 2. Hero Text Entrance

| Property | Value |
|----------|-------|
| Initial state | `opacity: 0; transform: translateY(30px)` |
| Final state | `opacity: 1; transform: translateY(0)` |
| Duration | `1.2s` |
| Delay | `0.6s` |
| Easing | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Trigger | On page load |

```css
.hero-text {
  opacity: 0;
  transform: translateY(30px);
  animation: heroReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards;
}
@keyframes heroReveal {
  to { opacity: 1; transform: translateY(0); }
}
```

---

## 3. Gradient Bridge Transitions

| Transition | CSS |
|------------|-----|
| Light to Dark | `background: linear-gradient(to bottom, #e3dfd2, #1a1a1a)` |
| Dark to Light | `background: linear-gradient(to bottom, #1a1a1a, #f7f5f0)` |
| Height | `h-16` mobile, `h-24` desktop |

---

## 4. Room Slider

| Property | Value |
|----------|-------|
| Transition | CSS `scroll-snap-type: x mandatory` |
| Card snap | `scroll-snap-align: start` |
| Navigation | Prev/Next buttons + dot indicators |

---

## 5. Video Autoplay

```html
<video autoplay muted loop playsinline preload="auto">
  <source src="video.mp4" type="video/mp4" />
</video>
```

Fade-in on load: opacity 0 to 1 with 0.7s transition on loadeddata event.

---

## 6. Gallery Grid

| Property | Value |
|----------|-------|
| Layout | grid-cols-2 mobile, grid-cols-3 desktop |
| Gap | 0.5rem mobile, 0.75rem desktop |
| Featured item | Index 1 spans col-span-2 row-span-2, aspect-ratio 4/3 |
| Regular items | aspect-ratio 1/1 |
| Image fit | object-fit cover, border-radius 0.5rem |
| Stagger | 0.08s per item |

---

## Design Tokens

| Token | Value |
|-------|-------|
| Display font | Playfair Display |
| Body font | DM Sans |
| Background light | #e3dfd2 |
| Background cream | #f7f5f0 |
| Background dark | #1a1a1a |
| Text primary | #3a2a1a |
| Text secondary | #4B4A4A |
| Accent gold | #8b6f47 |
| Label style | 11px, letter-spacing 0.15em, uppercase, 40% opacity |
| Section padding | py-16 px-6 mobile, py-24 px-10 desktop |
| Max content width | 1200px centered |

---

## Section Structure (Template for All 6 Properties)

1. Hero — Full-screen video with H1 text at bottom
2. Story — Text left + vertical image right, then full-width landscape below
3. Accommodations — Room slider with horizontal scroll
4. Experiences — Dark bg, content links, full-screen video hero
5. Sustainability — 4 pillars + featured links, full-width image
6. Wellness — Full-width image with overlay text
7. Gastronomy — Text + full-width food image
8. TripAdvisor — Social proof rating and quote
9. Getting Here — Travel logistics
10. Gallery — Masonry grid with images and video
11. Footer — Brand footer

---

## WordPress Gutenberg Block Mapping

| Section | Suggested Block Type |
|---------|---------------------|
| Hero | Custom Video Hero block |
| Story | Custom Split Content block |
| Accommodations | Custom Carousel block |
| Experiences | Custom Dark Section block |
| Sustainability | Custom Content Grid block |
| Wellness/Gastronomy | Custom Full-Width Image + Overlay block |
| TripAdvisor | Custom Testimonial block |
| Getting Here | Custom Info Cards block |
| Gallery | Custom Masonry Gallery block |
| Content Links | Custom Card Link block |
| Gradient Bridge | Custom Section Divider block |
