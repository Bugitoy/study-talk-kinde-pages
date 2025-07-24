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

4. **Deploy**
   - Kinde will automatically detect the `kinde.json` file
   - The custom pages will replace Kinde's default authentication pages
   - Users will see the Study-Talk branded login/register pages

## Customization

The main customization file is `kindeSrc/environment/pages/(kinde)/(default)/page.tsx`. This file:

- Handles both login and register flows
- Uses Study-Talk branding and colors
- Includes Google OAuth integration
- Shows feature cards on desktop
- Is fully responsive

## Environment Variables

Make sure your Kinde environment has:
- Google OAuth connection configured
- Proper redirect URLs set up
- Domain configuration completed

## Support

For issues with the custom pages, check:
1. Kinde dashboard for deployment status
2. GitHub repository for code updates
3. Kinde documentation for configuration options

---

**Note:** This repository only contains the custom authentication pages. Your main Study-Talk application remains separate and unchanged. 