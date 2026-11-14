# Smart Hands by Amigra — static site (GitHub Pages)

Clone of the Wix headless site. Pages: `index`, `services`, `projects`, `industries`, `contact`, `404`.

## Deploy (free)
1. Create a new **public** GitHub repo, e.g. `smarthands-site`.
2. Upload everything in this folder (including `.nojekyll`) to the repo root.
3. Repo → **Settings → Pages** → Source: *Deploy from a branch* → `main` / `(root)` → Save.
4. Live in ~1 min at `https://<your-username>.github.io/smarthands-site/`.

## Custom domain (optional)
- Settings → Pages → Custom domain → e.g. `www.yourdomain.com.au` → tick **Enforce HTTPS**.
- At your DNS: `CNAME  www  →  <your-username>.github.io`
  (apex domain instead: A records 185.199.108.153 / .109.153 / .110.153 / .111.153)

## Contact form setup (2 min)
1. Go to https://web3forms.com, enter the email that should receive enquiries → copy the access key.
2. In `contact.html`, replace `YOUR_WEB3FORMS_ACCESS_KEY` with that key. Done.
Free tier = 250 submissions/month; spam honeypot already included.

## Logos
Logos still load from Wix's image CDN (static.wixstatic.com). To fully cut over from Wix,
download the two PNGs into `assets/` and update the two `<img src>` paths in each page.
