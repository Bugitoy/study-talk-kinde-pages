# Study-Talk Kinde Custom Pages

This repository contains custom authentication pages for Study-Talk using Kinde's custom page feature.

## Repository Structure

```
kinde-pages/
├── kinde.json                    # Kinde configuration
├── kindeSrc/
│   ├── package.json             # React dependencies
│   └── environment/
│       └── pages/
│           └── (kinde)/
│               └── (default)/
│                   └── page.tsx # Custom authentication page
└── README.md
```

## Features

- ✅ **Study-Talk Branded Design** - Custom styling with orange theme
- ✅ **Responsive Layout** - Works on desktop and mobile
- ✅ **Google OAuth Integration** - Seamless Google sign-in
- ✅ **Email/Password Authentication** - Traditional login option
- ✅ **Feature Showcase** - Highlights Study-Talk benefits
- ✅ **Tailwind CSS** - Modern, responsive design

## Setup Instructions

1. **Create GitHub Repository**
   - Create a new repository named `study-talk-kinde-pages`
   - Make it public or private (your choice)

2. **Push This Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Study-Talk Kinde custom pages"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/study-talk-kinde-pages.git
   git push -u origin main
   ```

3. **Connect to Kinde Dashboard**
   - Go to your Kinde dashboard
   - Navigate to "Design" → "Customize with code"
   - Connect your GitHub repository
   - Select this repository

4. **Set Up Custom Domain**
   - Go to Kinde dashboard → "Settings" → "Domains"
   - Add custom domain: `auth.study-talk.com`
   - Configure DNS records in Squarespace (see below)

5. **Deploy**
   - Kinde will automatically detect the `kinde.json` file
   - The custom pages will replace Kinde's default authentication pages
   - Users will see the Study-Talk branded login/register pages

## ⚠️ Important: Custom Domain Required

**You will still see Kinde's default pages if you're using the default Kinde domain (`thanodi.kinde.com`).**

To see your custom pages, you need to:

### Setting Up Custom Domain with Squarespace

1. **In Kinde Dashboard:**
   - Go to "Settings" → "Domains"
   - Add custom domain: `auth.study-talk.com`
   - Copy the provided DNS records

2. **In Squarespace:**
   - Log into your Squarespace account
   - Go to your `study-talk.com` domain settings
   - Navigate to "DNS Settings"
   - Add the CNAME record provided by Kinde:
     ```
     Type: CNAME
     Name: auth
     Value: thanodi.kinde.com
     ```
   - Save the changes

3. **Wait for DNS Propagation:**
   - DNS changes can take up to 24-48 hours to propagate
   - SSL certificate will be automatically provisioned

## Troubleshooting

### Still seeing default pages?
1. **Check if you're using the custom domain** - Custom pages only work on custom domains
2. **Verify DNS configuration** - Ensure the CNAME record is correctly set in Squarespace
3. **Wait for DNS propagation** - Changes can take up to 48 hours
4. **Check SSL certificate** - Wait for automatic SSL provisioning
5. **Clear browser cache** - Hard refresh the page (Ctrl+F5)

### Custom pages not loading?
1. **DNS Configuration** - Double-check the CNAME record in Squarespace
2. **SSL Certificate** - Wait for SSL certificate to be provisioned (can take up to 24 hours)
3. **Repository Updates** - Make sure the latest code is pushed to GitHub
4. **Domain verification** - Ensure the domain is properly verified in Kinde

## Environment Variables

Update your environment variables to use the custom domain:

```env
KINDE_ISSUER_URL=https://auth.study-talk.com
KINDE_SITE_URL="http://localhost:8080"
KINDE_POST_LOGOUT_REDIRECT_URL="http://localhost:8080"
KINDE_POST_LOGIN_REDIRECT_URL="http://localhost:8080/auth/callback"
```

## Customization

The main customization file is `kindeSrc/environment/pages/(kinde)/(default)/page.tsx`. This file:

- Handles both login and register flows
- Uses Study-Talk branding and colors
- Includes Google OAuth integration
- Shows feature cards on desktop
- Is fully responsive

## Support

For issues with the custom pages, check:
1. Kinde dashboard for deployment status
2. GitHub repository for code updates
3. Kinde documentation for configuration options
4. Squarespace DNS settings for domain configuration

---

**Note:** This repository only contains the custom authentication pages. Your main Study-Talk application remains separate and unchanged. 