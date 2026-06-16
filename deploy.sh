#!/bin/bash
# Automated deployment script for shubham-portfolio to Vercel
# Prerequisites:
#   1. GitHub account: https://github.com/ShubhamKumarNigam
#   2. Vercel account: https://vercel.com
#   3. Git installed locally
#   4. GoDaddy domain: shubhamkumarnigam.com

set -e

REPO_URL="https://github.com/ShubhamKumarNigam/shubham-portfolio.git"
DOMAIN="shubhamkumarnigam.com"

# Colors for output
GREEN='\\033[0;32m'
BLUE='\\033[0;34m'
YELLOW='\\033[1;33m'
NC='\\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Portfolio Deployment Script          ${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Step 1: Verify prerequisites
echo -e "${YELLOW}[1/8] Checking prerequisites...${NC}"

if ! command -v git &> /dev/null; then
    echo "Error: git is not installed. Please install git first."
    exit 1
fi

if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js first."
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed. Please install npm first."
    exit 1
fi

echo -e "${GREEN}  All prerequisites met!${NC}"

# Step 2: Install Vercel CLI if not present
echo -e "${YELLOW}[2/8] Installing Vercel CLI...${NC}"
if ! command -v vercel &> /dev/null; then
    npm install -g vercel
    echo -e "${GREEN}  Vercel CLI installed!${NC}"
else
    echo -e "${GREEN}  Vercel CLI already present${NC}"
fi

# Step 3: Log in to Vercel (interactive)
echo -e "${YELLOW}[3/8] Logging in to Vercel...${NC}"
echo "   (A browser window will open for authentication)"
vercel login

# Step 4: Build the project locally
echo -e "${YELLOW}[4/8] Building the project locally...${NC}"
cd "$(dirname "$0")"
npm install
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}  Build successful!${NC}"
else
    echo "Error: Build failed. Please fix the errors and try again."
    exit 1
fi

# Step 5: Push to GitHub
echo -e "${YELLOW}[5/8] Pushing code to GitHub...${NC}"
if ! git remote get-url origin &> /dev/null; then
    git remote add origin "$REPO_URL"
fi

git add .
if git diff --cached --quiet; then
    echo -e "${GREEN}  No new changes to commit${NC}"
else
    git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
    git push -u origin main
    echo -e "${GREEN}  Code pushed to GitHub!${NC}"
fi

# Step 6: Link and deploy to Vercel
echo -e "${YELLOW}[6/8] Deploying to Vercel...${NC}"
echo "   (If prompted, confirm linking this directory to Vercel)"
vercel --yes

echo -e "${GREEN}  Vercel deployment complete!${NC}"

# Step 7: Add custom domain
echo -e "${YELLOW}[7/8] Adding custom domain $DOMAIN...${NC}"
vercel domains add "$DOMAIN" || echo "   Domain may already be configured"

echo -e "${GREEN}  Domain configuration initiated!${NC}"

# Step 8: Print next steps
echo ""
echo -e "${BLUE}========================================${NC}"
echo -e "${GREEN}  DEPLOYMENT COMPLETE! ${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""
echo -e "${YELLOW}Next steps to connect your GoDaddy domain:${NC}"
echo ""
echo "  1. Log in to https://godaddy.com"
echo "  2. Go to: My Products > DNS Management for $DOMAIN"
echo "  3. Add these DNS records:"
echo ""
echo "     A Record     @     →  76.76.21.21"
echo "     CNAME Record www   →  cname.vercel-dns.com"
echo ""
echo "  4. Save and wait 5–10 minutes for DNS propagation"
echo ""
echo -e "${GREEN}Your site will be live at:${NC}"
echo "  - https://$DOMAIN"
echo "  - https://www.$DOMAIN"
echo ""
echo -e "${YELLOW}Optional:${NC} For the simplest setup, change GoDaddy nameservers to:"
echo "  ns1.vercel-dns.com"
echo "  ns2.vercel-dns.com"
echo ""
echo -e "${BLUE}Done!${NC}"
