# Elite Muse Agency — Next.js + Tailwind (Vercel Forms)

Minimal, elegant landing page with Vercel Forms enabled.

## Run locally
```bash
npm install
npm run dev
```

## Deploy on Vercel
1. Go to https://vercel.com and log in as zaradaily123321@gmail.com
2. Click **Add New** → **Project**
3. **Import** this folder (upload as ZIP or connect a Git repo)
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy**

## Vercel Forms
This form is enabled by adding `data-vercel-form="true"` to the `<form>` element.
Submissions are visible in your Vercel dashboard under the project (Forms tab).
By default, after submit the user is redirected to `/thank-you`.
You can customize fields as needed.
