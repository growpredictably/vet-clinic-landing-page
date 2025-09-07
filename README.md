# VetCare Plus - Veterinary Clinic Landing Page

A modern, professional landing page for a family veterinary clinic built with Next.js and Tailwind CSS.

## 🚀 Live Demo

Visit the live website: [VetCare Plus Landing Page](https://vet-clinic-landing-page.vercel.app)

## Features

- 🎨 **Modern Design**: Professional blue and white theme
- 📱 **Responsive**: Mobile-first responsive design
- 📧 **Contact Form**: Appointment booking with Resend email integration
- 🗺️ **Interactive Map**: Google Maps integration with clinic location
- ⭐ **Testimonials**: Customer reviews with photos
- 💰 **Pricing**: Transparent service pricing (150, 300, 500 RON)
- 📞 **Sticky Call Bar**: Always-visible call-to-action
- 🧭 **Smooth Navigation**: Smooth scrolling between sections

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email**: Resend API
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Resend account for email functionality

### Installation

1. Clone the repository:
```bash
git clone https://github.com/growpredictably/vet-clinic-landing-page.git
cd vet-clinic-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Edit `.env.local` and add your configuration:
```env
RESEND_API_KEY=your_resend_api_key_here
FROM_EMAIL=delivered@resend.dev
TO_EMAIL=your-email@example.com
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Email Setup (Resend)

1. Sign up at [Resend](https://resend.com)
2. Create an API key in your dashboard
3. Add the API key to your `.env.local` file
4. Update the email addresses in environment variables

### Clinic Information

Update the following information in `src/app/page.tsx`:

- **Clinic Name**: Change "VetCare Plus" to your clinic name
- **Address**: Update the address in multiple places
- **Phone**: Update phone number throughout the site
- **Email**: Update email addresses
- **Services & Pricing**: Customize services and prices

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/growpredictably/vet-clinic-landing-page)

1. Click the deploy button above
2. Connect your GitHub account
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `FROM_EMAIL`
   - `TO_EMAIL`
4. Deploy automatically

### Manual Deployment

1. Push your code to GitHub ✅
2. Connect your GitHub repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── appointment/
│   │       └── route.ts          # Email API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main landing page
├── components/                   # Reusable components (future)
└── lib/                         # Utility functions (future)
```

## Features Overview

### 📋 Appointment Booking
- Professional contact form
- Email integration with Resend
- Form validation and error handling
- Success/error feedback

### 🏥 Services & Pricing
- 6 professional service cards
- 3-tier transparent pricing
- Clear service descriptions
- Call-to-action buttons

### 👥 Testimonials
- Customer reviews with photos
- Star ratings
- Professional presentation

### 🗺️ Location & Contact
- Interactive Google Maps
- Complete contact information
- Opening hours
- Emergency availability

### 📱 Mobile Experience
- Fully responsive design
- Touch-friendly navigation
- Optimized images
- Fast loading

## Customization

### Colors
The site uses a blue and white theme. Update Tailwind classes:
- Primary blue: `bg-blue-600`, `text-blue-600`
- Dark blue: `bg-blue-900`, `text-blue-900`
- Gray variations for text and backgrounds

### Adding New Sections
1. Add the section HTML in `page.tsx`
2. Add navigation link in the nav menu
3. Update the `scrollToSection` function

## Support

For questions or issues:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)
- Check [Resend documentation](https://resend.com/docs)

## License

This project is licensed under the MIT License.

---

**Built with ❤️ for veterinary professionals**