import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroImages = [
  "https://images.unsplash.com/photo-1765973916041-af78b4193db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  "https://images.unsplash.com/photo-1759193590480-b749a414da98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  "https://images.unsplash.com/photo-1765973915598-cfd8d681d655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  "https://images.unsplash.com/photo-1762397908221-f63c6ca3535b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  "https://images.unsplash.com/photo-1770144018298-9a39b149b372?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousImageIndex(currentImageIndex);
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Previous image fading out */}
      <motion.div
        key={`prev-${previousImageIndex}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <ImageWithFallback
          src={heroImages[previousImageIndex]}
          alt="Clicksi moments"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </motion.div>

      {/* Current image fading in */}
      <motion.div
        key={`current-${currentImageIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <ImageWithFallback
          src={heroImages[currentImageIndex]}
          alt="Clicksi moments"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20">
            <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-[#00FFC8]" />
            <span className="text-white/90 tracking-wide text-sm sm:text-base">Фотоуслуги нового поколения</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight"
        >
          Click<span className="text-[#00FFC8]">si</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 sm:mb-12 max-w-2xl"
        >
          Ваши эмоции, в наших кадрах
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0"
        >
          <Button
            onClick={scrollToBooking}
            size="lg"
            className="bg-[#00FFC8] hover:bg-[#00E6B8] text-black font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-[#00FFC8]/50 transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="text-sm sm:text-base">Забронировать фотосессию</span>
          </Button>
          <Button
            onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
          >
            <span className="text-sm sm:text-base">Наши работы</span>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
