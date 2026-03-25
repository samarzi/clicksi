import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1599376672737-bd66af54c8f5?w=800",
    alt: "Happy children playing",
  },
  {
    url: "https://images.unsplash.com/photo-1767082237931-6927c8fd8776?w=800",
    alt: "Smiling girl",
  },
  {
    url: "https://images.unsplash.com/photo-1773280753291-f8ee71442482?w=800",
    alt: "Family portrait",
  },
  {
    url: "https://images.unsplash.com/photo-1767600468532-09274fe5d235?w=800",
    alt: "Young boy in field",
  },
  {
    url: "https://images.unsplash.com/photo-1762878915416-f2477c70f0df?w=800",
    alt: "Family embrace",
  },
  {
    url: "https://images.unsplash.com/photo-1679486087140-f90de51ff56d?w=800",
    alt: "Girl on bench",
  },
  {
    url: "https://images.unsplash.com/photo-1765973916041-af78b4193db4?w=800",
    alt: "Ferris wheel",
  },
  {
    url: "https://images.unsplash.com/photo-1769566018408-fae0bf3b9725?w=800",
    alt: "Father and daughter",
  },
];

export function PhotoGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl md:text-6xl mb-6 text-white">Галерея живых эмоций</h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Каждый момент уникален. Каждая улыбка неповторима.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -8 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl shadow-yellow-400/10 cursor-pointer group border border-zinc-800 hover:border-yellow-400/30 transition-all duration-300"
            >
              <ImageWithFallback
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
              />
              {hoveredIndex === index && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0 }}
                  className="absolute top-4 right-4 text-4xl"
                >
                  ✨
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
