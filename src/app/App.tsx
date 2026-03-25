import { Toaster } from "./components/ui/sonner";
import { FlashOverlay } from "./components/FlashOverlay";
import { Hero } from "./components/Hero";
import { PhotoGallery } from "./components/PhotoGallery";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { BookingSection } from "./components/BookingSection";
import { Footer } from "./components/Footer";
import { ClickFlashEffect } from "./components/ClickFlashEffect";

export default function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <FlashOverlay />
      <ClickFlashEffect />

      <Hero />
      <PhotoGallery />
      <Services />
      <HowItWorks />
      <Testimonials />
      <BookingSection />
      <Footer />

      <Toaster position="top-center" />
    </div>
  );
}