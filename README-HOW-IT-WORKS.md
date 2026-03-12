# AutoSpa - Premium Car Detailing Website (Frontend)

AutoSpa is a modern, highly interactive, and responsive frontend web application built for a luxury car washing and detailing service. It is designed to provide users with a premium booking experience, showcasing services, pricing, and an intuitive multi-step appointment scheduler.

This project is currently the **Frontend Only** and is prepared to be integrated with a Node.js/MongoDB backend in the future.

## 🚀 Tech Stack

The application is built using modern web development technologies:

- **Framework**: [Next.js (App Router)](https://nextjs.org/) - Provides server-side rendering, routing capabilities, and optimized performance.
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Ensures type safety and better developer experience.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid and responsive UI development.
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Reusable, customizable components crafted with Tailwind CSS and Radix UI primitives.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Powers smooth scroll animations, transitions, and hover effects.
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) - Manages form state and submissions efficiently.
- **Form Validation**: [Zod](https://zod.dev/) - Provides strict, schema-based data validation for the booking form.
- **Date Picking**: [date-fns](https://date-fns.org/) & `react-day-picker` - Robust tools for selecting and formatting booking dates.
- **Icons**: [Lucide React](https://lucide.dev/) - Clean, SVG-based icons used throughout the interface.

## 📁 Project Structure

The project follows the standard Next.js App Router structure, organizing code into logical directories:

```
autospafe/
├── app/                  # Next.js App Router root
│   ├── about/            # About Us page route
│   ├── booking/          # Booking system route
│   ├── contact/          # Contact page route
│   ├── services/         # Services & Pricing route
│   ├── globals.css       # Global styles and Tailwind/Dark mode variables
│   ├── layout.tsx        # Root layout including Navbar and Footer
│   └── page.tsx          # Homepage layout gathering all sections
├── components/           # Reusable UI components
│   ├── booking/          # Dedicated booking system components (BookingSteps.tsx)
│   ├── ui/               # Base shadcn/ui components (Button, Input, Calendar, etc.)
│   ├── CTASection.tsx    # Call to action section
│   ├── FeaturesGrid.tsx  # "Why choose us" feature showcase
│   ├── Footer.tsx        # Global footer
│   ├── GalleryGrid.tsx   # Before/After image gallery
│   ├── Hero.tsx          # Main animated hero section
│   ├── HowItWorks.tsx    # Step-by-step process explanation
│   ├── Navbar.tsx        # Global sticky navigation bar
│   ├── PricingCard.tsx   # Service pricing display component
│   ├── ServiceCard.tsx   # Service preview component
│   └── TestimonialCarousel.tsx # Auto-playing customer reviews
├── lib/                  # Utilities and mock data
│   ├── mock-data.ts      # Temporary static data (services, reviews, gallery)
│   └── utils.ts          # Tailwind CSS merge utility (cn)
```

## 🎨 Design & Theme

The UI is built with a **premium automotive aesthetic**:
- **Dark Theme by Default**: Deep charcoal and black backgrounds (`oklch(0.10 0 0)` and `oklch(0.15 0 0)`).
- **Vibrant Accent**: A striking orange primary color (`oklch(0.65 0.2 40)`) used for buttons, interactive elements, highlights, and borders.
- **Typography**: Uses modern Google Fonts: `Outfit` for bold, impactful headings and `Inter` for clean, readable body text.
- **Glassmorphism**: Subtle transparent backgrounds with backdrop blurs applied to navigation menus and certain card elements.

## ⚙️ Core Features & How They Work

### 1. Multi-Step Booking System (`BookingSteps.tsx`)
The heart of the application is a 4-step interactive booking form located in `/app/booking`:

1.  **Service Selection (Step 1)**: The user clicks on a `Card` displaying a mock service (e.g., "Premium Detailing"). The state variable `selectedServiceId` is updated.
2.  **Date & Time (Step 2)**: 
    - The `Calendar` component (from shadcn/ui) disables any dates before today. The chosen date is stored in the `date` state.
    - A list of time slots is generated. Specific slots are statically disabled (`disabledSlots` array) to mock real-world unavailabilities. The chosen time is stored in the `time` state.
3.  **Details Form (Step 3)**:
    - Utilizes `useForm` linked to a `Zod` schema (`formSchema`).
    - Validates "Full Name", "Phone", "Email", "Vehicle Type" (Select dropdown), and "Vehicle Model" instantly. Errors appear immediately if the user attempts to proceed without filling required fields.
4.  **Summary (Step 4)**: Compiles all local state data (`selectedService`, `date`, `time`, and `form.getValues()`) into a styled confirmation receipt.
5.  **Confirmation Modal**: Upon passing validation and clicking "Confirm Booking", a success dialog (modal) appears, and the user is redirected to the home page upon closure. (No actual network request is made yet).

### 2. Framer Motion Animations
Throughout the site, elements animate logically to draw attention:
- **Scroll Reveals**: Components wrapped in `<motion.div>` use `whileInView={ opacity: 1, y: 0 }` to fade and slide up when the user scrolls them into the viewport.
- **Staggered Children**: Grids (like the Features Grid) use `transition={{ delay: index * 0.1 }}` to animate items sequentially rather than all at once.
- **Step Transitions**: The Booking System uses `<AnimatePresence>` allowing the current step to slide out (`x: -20, opacity: 0`) while the new step slides in (`x: 20, opacity: 1`).

### 3. Responsive Navigation
- The `<Navbar>` tracks the window scroll position (`window.scrollY > 20`). It begins transparent and transitions to a blurred, dark background as the user scrolls down, ensuring readability against the hero image.
- On mobile devices, the desktop links are hidden, and a hamburger menu manages an `isOpen` state, rendering a dropdown menu utilizing tailwind's `slide-in-from-top` classes.

### 4. Mock Data Integration
Because there is no backend, all dynamic elements fetch static arrays from `lib/mock-data.ts`. This includes:
- Pricing and service feature lists.
- Customer reviews, handled by the `TestimonialCarousel.tsx` which manually loops through the array using a `setInterval` hook.
- The Before & After gallery image URLs.

## 🛠️ Local Development

To run the project locally on your machine:

1.  Open a terminal and navigate to the project directory:
    ```bash
    cd "d:/Sandeep/My Projects/AutoSpa/autospafe"
    ```
2.  Install dependencies (if not already installed):
    ```bash
    npm install
    ```
3.  Start the Next.js development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🔋 Future Backend Integration Considerations

When connecting the Node.js / MongoDB backend, the following updates will be necessary:
- **Data Fetching**: Replace the imports from `mock-data.ts` with API calls (`fetch` or Axios) inside `useEffect` hooks or Next.js server components to retrieve services, prices, and available timeslots from the database.
- **Booking Submission**: Inside the `onSubmit` function of `BookingSteps.tsx`, send an HTTP POST request carrying the form data payload to the Node/Express backend to create a new reservation document in MongoDB.
- **Loading States**: Introduce loading indicators while fetching remote data or submitting the form to improve user experience during network latency.
