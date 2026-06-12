# IdeaConnect Marketing Site

Static marketing site for IdeaConnect — no build step, no dependencies. Just HTML, CSS, and vanilla JS.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Landing page (hero, how-it-works, features, personas, showcase, testimonials, FAQ, CTA) |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms of service |
| `security.html` | Security overview |
| `contact.html` | Contact |

## Assets

- `marketing.js` — landing-page behavior (marquee, FAQ accordion, scroll reveals, animated counters, hero parallax)
- `legal.css` / `legal.js` — shared styles/behavior for the legal & contact pages
- `screens/cut/*.png` — phone screenshots used in the hero, feature rows, and showcase rail

The landing page's styles are inlined in `index.html`. Fonts load from Google Fonts.

## Run locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

It's a fully static site — drop the directory onto any static host (Netlify, Vercel, GitHub Pages, S3/CloudFront, etc.). `index.html` is the entry point.
