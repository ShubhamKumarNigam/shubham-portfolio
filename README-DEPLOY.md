# Deployment Guide

This folder contains everything needed to deploy the portfolio website to **Vercel** with the custom domain **`shubhamkumarnigam.com`**.

## Quick Start

### Option A: Run the automated script

On your local machine, navigate to this folder and run:

```bash
./deploy.sh
```

The script will:
1. Check prerequisites (git, node, npm)
2. Install Vercel CLI
3. Log you in to Vercel
4. Build the project locally
5. Push the code to `https://github.com/ShubhamKumarNigam/shubham-portfolio`
6. Deploy to Vercel
7. Add the custom domain `shubhamkumarnigam.com`

### Option B: Manual step-by-step

#### 1. Push to GitHub

Create a public repo on GitHub named `shubham-portfolio`, then:

```bash
git remote add origin https://github.com/ShubhamKumarNigam/shubham-portfolio.git
git push -u origin main
```

#### 2. Deploy to Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

#### 3. Add custom domain

```bash
vercel domains add shubhamkumarnigam.com
```

#### 4. Update GoDaddy DNS

Go to [GoDaddy DNS Management](https://dcc.godaddy.com/manage/shubhamkumarnigam.com/dns) and add:

| Type   | Name | Value                |
|--------|------|---------------------|
| A      | @    | 76.76.21.21         |
| CNAME  | www  | cname.vercel-dns.com |

Or, for the easiest setup, change GoDaddy nameservers to:
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

Wait 5–10 minutes for DNS propagation.

---

## Important Files

- `deploy.sh` — Automated deployment script
- `next.config.mjs` — Next.js config (static export settings)
- `package.json` — Dependencies and scripts
- `src/` — All source code

## Prerequisites

- Node.js ≥ 18
- npm
- Git
- GitHub account: [ShubhamKumarNigam](https://github.com/ShubhamKumarNigam)
- Vercel account (free)
- GoDaddy domain: `shubhamkumarnigam.com`

## Build Locally

```bash
npm install
npm run build
npm run dev    # Preview at http://localhost:3001
```

## Troubleshooting

- **Port already in use**: `npm run dev -- -p 3003`
- **Vercel deployment fails**: Make sure `npm run build` succeeds locally first
- **Domain not working**: Check GoDaddy DNS records match Vercel instructions
- **SSL certificate issues**: Vercel auto-provisions SSL; allow 10 minutes

## Need Help?

- Vercel docs: https://vercel.com/docs
- Custom domains: https://vercel.com/docs/concepts/projects/domains
- GoDaddy DNS: https://www.godaddy.com/help/manage-dns-records-680
