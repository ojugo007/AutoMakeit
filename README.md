# AutoMakeIt Systems website

React + Vite + Tailwind CSS v4 + React Router + TanStack Query.

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
```

## Configure
Copy `.env.example` to `.env` to point at a different backend (defaults to the portfolio API):
```
VITE_API_URL=https://portfolio-backend-zj29.onrender.com
```

The backend must:
- allow this site's domain in CORS
- serve GET /service, /project and /testimonial publicly (no token)
- accept POST /message/send-message with { name, email, message }

Responses use the envelope { message, data, success, code }; lists are read from `data`.

## Where things are
- `src/pages/` Home, About, Services, Work, ProcessPage, Contact, NotFound
- `src/components/sections/` homepage sections
- `src/hooks/useSiteData.js` data hooks
- `src/lib/serviceIcon.js` maps a service name to an icon (add keywords here)
- `src/components/common/Logo.jsx` stand-in logo; swap for the real artwork

## Deploying (Vercel / Netlify)
Single-page app: add a rewrite of all routes to /index.html (Vercel: vercel.json below).
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```
