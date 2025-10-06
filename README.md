# Brown's Pressure Washing Website

A modern, responsive website for Brown's Pressure Washing built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, bold design with sky-blue accents and professional layout
- **Service Pages**: Dynamic service pages for house washing, roof cleaning, concrete cleaning, gutter cleaning, and commercial services
- **Interactive Elements**: 
  - Proof toasts showing recent bookings (simulated)
  - FAQ accordion
  - Hover effects and animations
- **Mobile Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Complete with meta tags and schema.org markup
- **Performance**: Optimized images, lazy loading, and fast page loads

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── [service]/         # Dynamic service pages
│   ├── apply/             # Job application page
│   ├── contact/           # Contact form page
│   ├── faqs/              # FAQ page
│   ├── watch-videos/      # Video gallery page
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── layout/           # Header, Footer, Navigation
│   ├── sections/         # Page sections
│   └── ui/               # UI components
├── content/              # Content data
│   └── services.ts       # Service information
├── public/               # Static assets
│   ├── images/          # Placeholder images
│   └── textures/        # Background textures
└── scripts/             # Build scripts
```

## Installation

### Prerequisites

You need to have Node.js and npm installed on your system. If not installed:

**macOS:**
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

**Windows:**
Download and install Node.js from [nodejs.org](https://nodejs.org/)

**Linux:**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# Fedora
sudo dnf install nodejs npm
```

### Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Production Build

To create a production build:

```bash
npm run build
npm run start
```

## Key Components

### Layout Components
- **TopBar**: Sticky header with logo and phone number
- **Navbar**: Main navigation menu
- **Footer**: Contact info, links, and CTAs

### UI Components
- **ServiceCard**: Service grid cards with hover effects
- **CTAButton**: Reusable call-to-action button
- **PhotoStack**: Stacked photo display with rotation
- **ProofToasts**: Animated booking notifications

### Sections
- **ServicesGrid**: Homepage service display
- **ServiceTeaser**: Diagonal section with service highlights
- **WhyChooseUs**: Benefits and trust indicators
- **FAQAccordion**: Expandable FAQ list
- **NextSteps**: 3-step process display

## Customization

### Colors
Edit the brand colors in `tailwind.config.ts`:
```javascript
colors: {
  brand: {
    blue: '#67C7E6',     // Main CTA color
    blueDark: '#2B99B7', // Darker blue variant
    black: '#0A0A0A',    // Text color
    gray: '#F3F3F3',     // Background gray
    off: '#FCFCFC'       // Off-white background
  }
}
```

### Services
Add or modify services in `content/services.ts`

### Contact Information
Update phone number and email throughout the components

## Placeholder Images

The project includes SVG placeholder images. To use real images:

1. Add your images to `public/images/`
2. Update the image paths in `content/services.ts`
3. Update image references in components

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Class-based Components**: OOP approach for better organization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

## Contact

For questions or support, contact Brown's Pressure Washing at (615) 581-1581.
