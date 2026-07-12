# Nayara Springs homepage: developer edit pack

Exact edits for nayarasprings.com's homepage (custom "nayara" theme, WordPress). Each edit shows the current code and the replacement. Work on a staging copy or take a full backup before touching the theme.

A related pack covers Gardens and Tented Camp at the bottom.

---

## Edit 1. Hero: replace the volcano photo with the video

**Prepare the file first.** The Drive video (`689C450D-9698-435A-A84C-8714E2248FC8.mov`, 51MB QuickTime) is too heavy and the wrong container for the web. Convert it to H.264 mp4, target 8 to 12MB:

```
ffmpeg -i input.mov -vcodec libx264 -crf 26 -preset slow -vf "scale=1920:-2" -an -movflags +faststart springs-hero.mp4
```

`-an` strips audio (hero videos autoplay muted anyway; browsers block autoplay with sound). Upload `springs-hero.mp4` to the WordPress Media Library and copy its URL.

**Current code** (inside `<section id="hero" class="hero__home animateActive">`):

```html
<figure class="parallax__move">
    <img src="https://nayarasprings.com/wp-content/uploads/2021/07/nayara-volcano.jpg" alt="">
</figure>
```

**Replace with** (swap YOUR-UPLOAD-URL for the Media Library URL):

```html
<figure class="parallax__move">
    <video autoplay muted loop playsinline
           poster="https://nayarasprings.com/wp-content/uploads/2021/07/nayara-volcano.jpg"
           style="width:100%;height:100%;object-fit:cover;">
        <source src="YOUR-UPLOAD-URL/springs-hero.mp4" type="video/mp4">
        <img src="https://nayarasprings.com/wp-content/uploads/2021/07/nayara-volcano.jpg" alt="">
    </video>
</figure>
```

The volcano photo stays as the poster, so visitors on slow connections and mobile data-saver see the current hero until the video loads. The nested `img` is the fallback for browsers with video disabled.

## Edit 2. Delete the animals section and the video section

Delete two complete sections, from opening tag to closing tag, between the hero and the "Step into your villa" section:

1. `<section id="experience">` ... `</section>` (the sloth, bird, and frog animation block)
2. `<!-- Video -->` and `<section id="video" class="modal__video">` ... `</section>` (the "Follow me to the rainforest" Vimeo block)

After this, the page flows hero, then straight into `<section id="calltoaction1" class="calltoaction split">` (Step into your villa).

Also search the theme's JS for references to `#experience` and `#video` (scroll triggers, the play button handler) and remove or guard them so nothing errors against missing elements.

## Edit 3. Step into your villa: new photo, and stop hotlinking from staging

Found while reading the source: the current villa image is served from a staging server, not this site.

**Current code** (inside `section#calltoaction1`):

```html
<figure class="calltoaction__splitimage__image">
    <img src="https://nayarasprings.proyectoscoralcr.com/wp-content/uploads/2026/03/Springs-Villa-4Pool-1-2.png" alt="">
</figure>
```

If that staging domain (`proyectoscoralcr.com`) ever lapses or blocks hotlinking, the homepage loses its rooms image. The fix and the photo swap are one edit: upload `Nayara Springs - DJI_0949 - by Brice Ferre Studio.JPG` (in the Drive folder) to the Media Library, export at about 2400px wide as JPG (the source is 4.1MB, too heavy raw), then:

```html
<figure class="calltoaction__splitimage__image">
    <img src="YOUR-UPLOAD-URL/nayara-springs-villa-dji0949.jpg"
         alt="Villa with private plunge pool framed by palms at Nayara Springs">
</figure>
```

Note the alt text; the theme currently ships empty alts throughout.

## Edit 4. Move the award row out of the hero, refresh the claims

**Delete from the hero** the whole `<div class="hero__award__row">` ... `</div>` block (the Condé Nast Traveler and TripAdvisor figures).

**Add above the footer**, between `</section>` closing `section#awards` (the "As Seen In" press slider) and `<footer id="footer" class="container">`:

```html
<section id="distinctions" style="background:#edf2f2;text-align:center;padding:72px 20px;">
    <div style="display:flex;justify-content:center;gap:80px;flex-wrap:wrap;">
        <div style="max-width:17rem;">
            <p style="font-size:.7rem;letter-spacing:.22em;text-transform:uppercase;font-weight:700;color:#00869a;margin-bottom:10px;">MICHELIN Guide</p>
            <p style="font-size:.92rem;letter-spacing:.16em;text-transform:uppercase;line-height:1.8;color:#0C2623;">Three MICHELIN Keys</p>
        </div>
        <div style="max-width:17rem;">
            <p style="font-size:.7rem;letter-spacing:.22em;text-transform:uppercase;font-weight:700;color:#00869a;margin-bottom:10px;">Cond&eacute; Nast Traveller</p>
            <p style="font-size:.92rem;letter-spacing:.16em;text-transform:uppercase;line-height:1.8;color:#0C2623;">Best Hotel Spa in the World</p>
        </div>
    </div>
</section>
```

Why the claim change: the hero currently leads with "Nº1 Luxury Hotel in the World" (TripAdvisor), which dates to the mid-2010s. Three MICHELIN Keys is current, scarce, and verifiable. The Condé Nast spa claim is kept for continuity; confirm the exact year and wording of that award before this goes live, and drop it if it cannot be confirmed.

## Edit 5. Fix two live typos

1. `feel the reenengizing power of nature` (the "unwind" circle in section#calltoaction3): change `reenengizing` to `re-energizing`.
2. `suscribe to newsletter` (the newsletter form submit button, appears twice: menu form and footer form): change `suscribe` to `subscribe`.

## Edit 6. Surface "adults-only" in the hero (optional but recommended)

"Adults-only" is both a differentiator and a search term, and today it first appears far down the page. Suggested minimal change to the hero copy block:

```html
<h2>An adults-only resort &middot; Arenal Volcano National Park, Costa Rica</h2>
```

## Edit 7. Add Hotel schema to the head

The site's only structured data is a generic Yoast Organization graph. Paste the contents of `springs-hotel-schema.html` (in this repo) into the site head: Yoast SEO lacks a clean slot for custom JSON-LD, so use the theme's `header.php` or a header-scripts plugin, on the homepage at minimum.

---

# Gardens and Tented Camp: same pattern

Matching previews are in this repo (`preview-gardens-homepage.html`, `preview-tentedcamp-homepage.html`). The source of those two homepages has not been read yet, so these are directions rather than exact before/after code. The theme is the same "nayara" custom theme, so the markup will be near-identical to Springs.

**Both sites**
- Hero video: same treatment as Edit 1 (self-hosted mp4, current hero photo as poster). Both previews currently use the one video in Drive, which is the same Arenal footage as Springs. If each property should have its own footage, upload the videos to Drive and they can be wired in.
- Hotel schema: paste `gardens-hotel-schema.html` and `tented-hotel-schema.html` into the respective heads.

**Gardens only**
- Rooms section ("Surround Yourself With Nature"): replace the background with the rainforest villa photo (`99C2B6AF-D79E-432E-9596-A58F80B594C9.jpg` in Drive), exported at about 2400px wide, with a real alt text.
- Header button: change "Book Now" to "Check Availability" (Tented and Springs already say Check Availability).
- Caution: nayaragardens.com runs end-of-life PHP 7.4 and its Duplicator backups are failing. Fix backups before a developer edits this theme.

**Tented only**
- The hero claim "No. 1 Resort in Central America Four Consecutive Years" with the 2024 badge is out of date. Travel + Leisure named Tented Camp #1 Resort in Central America again in 2026, its fifth win in six years. Update the line and badge year.
- Separate bug while a developer is in there: nayaratentedcamp.com's robots.txt points its sitemap directive at the Springs domain.
