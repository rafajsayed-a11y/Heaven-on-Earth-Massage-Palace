# Serene Touch — Massage Website

This is a simple static landing page for a massage therapy business. It includes a hero, services, pricing, about, and a contact/booking section.

Files:

- `index.html` — main static page
- `style/style.css` — stylesheet with responsive layout

Local preview:

1. Open `index.html` in your browser (double-click the file or use your editor "Open in Browser").
2. Or from PowerShell run:

```powershell
Start-Process .\index.html
```

Booking is compulsory: the site now requires booking (date + time) to request services.

Next steps (optional):

- Add real photos in `style/assets/` to replace the sample SVGs.
- Persist bookings to a database or send notifications from the serverless function.
- Add SEO meta tags, favicon, and privacy/terms pages.

Local testing of the Netlify function:

1. Install the Netlify CLI (if you don't have it):

```powershell
npm install -g netlify-cli
```

2. From the project root run the dev server which exposes the functions locally:

```powershell
netlify dev
```

3. Example curl to test the function locally (replace host/port if different):

```powershell
curl -X POST "http://localhost:8888/.netlify/functions/book" -H "Content-Type: application/json" -d '{"name":"Alex","email":"alex@example.com","phone":"+123456","service":"Swedish Massage","date":"2026-03-20","time":"10:00"}'
```

Notes:

- The booking endpoint is `/.netlify/functions/book` and performs minimal validation (required fields + email format). It currently returns the booking object but does not persist it.
- I will not deploy yet. Tell me when you want me to deploy and which provider you prefer (Netlify, GitHub Pages + functions via Cloudflare/AWS, etc.).
