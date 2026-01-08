# Portfolio Website

A modern, responsive portfolio website showcasing my projects and social links.

## Features

- Clean, modern design
- Responsive layout (mobile-friendly)
- Project showcase with links
- Social media integration (LinkedIn, WhatsApp, GitHub)
- Easy to customize

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Customization

### Add Your Projects

Edit `src/App.jsx` and update the `projects` array:

```javascript
const projects = [
  {
    id: 1,
    name: 'Your Project Name',
    description: 'Project description',
    link: 'https://your-project-url.com',
    github: 'https://github.com/your-username/project'
  },
  // Add more projects...
]
```

### Add Social Links

Update the `socialLinks` array in `src/App.jsx`:

```javascript
const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/your-profile',
    icon: '💼'
  },
  // Add more links...
]
```

### Customize Colors

Edit the gradient and colors in `src/index.css` and `src/App.css`

## Deployment

Build the project and deploy the `dist` folder to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Your own server

