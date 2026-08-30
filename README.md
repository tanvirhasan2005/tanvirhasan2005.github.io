# MD Tanvir Hasan — Portfolio

A single-page portfolio site (HTML/CSS/vanilla JS, no build step) recreating the
provided design: dark theme, red accent, hero with photo and stats, projects,
about, skills, experience, education, Web3 focus area, certifications, and a
contact section.

## Files

```
portfolio/
├── index.html      → all page content/sections
├── style.css        → all styling
├── script.js        → nav toggle, active-link highlighting, back-to-top, form handler
├── assets/
│   └── profile.jpg  → ⚠️ ADD YOUR OWN PHOTO HERE (see note below)
│   └── Tanvir_Hasan_CV.pdf → ⚠️ ADD YOUR OWN CV HERE
└── README.md
```

## Before you publish — 3 things to fix

1. **Photo**: I couldn't reproduce your actual photograph, so `assets/profile.jpg`
   is missing on purpose. Add your real photo there (recommended: a portrait
   crop around 800×1000px). Until you do, the page falls back to a placeholder
   avatar automatically.
2. **CV file**: Drop your actual resume PDF at `assets/Tanvir_Hasan_CV.pdf`
   (or update the `href` in `index.html` if you name it differently).
3. **Double-check personal info**: email, phone, and social links are filled
   in from what was visible in your screenshot
   (`tanvirhasan2005@gmail.com`, `+880 1703-030090`, Dhaka, Bangladesh,
   `tanvirhasan2005.github.io`, and matching GitHub/LinkedIn/X handles) —
   confirm these are actually yours and correct any that aren't. I also
   corrected "Univercise and Technology" to "University of Technology" as a
   likely typo in the source image — update this if the real name differs.

## Contact form

The form currently only shows a confirmation message in the browser — it does
**not** send email anywhere. To make it functional without a backend, the
easiest option is [Formspree](https://formspree.io):

1. Create a free Formspree account and a new form, and copy your form endpoint.
2. In `index.html`, change:
   ```html
   <form class="contact-form" id="contactForm">
   ```
   to:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/yourFormId" method="POST">
   ```
3. Remove or adjust the `e.preventDefault()` handling in `script.js` if you
   want a normal form submit/redirect, or follow Formspree's AJAX docs to keep
   the inline success message.

## Publish with GitHub Pages

1. Create a new repository on GitHub (e.g. `tanvirhasan2005.github.io` if you
   want it at the root of your GitHub Pages username domain, or any other name
   for a project page).
2. Upload these files (`index.html`, `style.css`, `script.js`, `assets/`,
   `README.md`) to the repository — either via the GitHub web UI ("Add file →
   Upload files") or with git:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, set **Source** to the `main`
   branch (root), and save.
4. Your site will be live at:
   - `https://<your-username>.github.io/` (if the repo is named
     `<your-username>.github.io`), or
   - `https://<your-username>.github.io/<repo-name>/` otherwise.

## Customizing content

All text lives directly in `index.html`, organized by section with clear
comments (`<!-- ============ PROJECTS ============ -->`, etc.). Colors, fonts,
and spacing are controlled by CSS variables at the top of `style.css`:

```css
:root{
  --bg: #0a0a0a;
  --red: #d81e2c;
  --font-display: "Archivo Black", "Inter", sans-serif;
  ...
}
```

The site is fully responsive (desktop → tablet → mobile) and respects
`prefers-reduced-motion`.
