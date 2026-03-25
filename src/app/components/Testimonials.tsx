import { motion } from "motion/react";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Анна Петрова",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    text: "Невероятные эмоции! Фотограф поймал самые искренние моменты наших детей. Спасибо Clicksi!",
    rating: 5,
  },
  {
    name: "Михаил Сидоров",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    text: "Профессионально и быстро. Фото с аттракциона получились потрясающими!",
    rating: 5,
  },
  {
    name: "Елена Иванова",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    text: "Лучший подарок для семьи - это память. Clicksi создаёт моменты, которые хочется хранить вечно.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl md:text-6xl mb-6 text-white">Истории из парков</h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Что говорят наши клиенты
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0, rotateY: -15 }}
              whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-zinc-900 border border-zinc-800 hover:border-yellow-400/30 rounded-3xl p-8 shadow-2xl hover:shadow-yellow-400/10 transition-all"
            >
              <div className="flex items-center mb-6">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-yellow-400/30"
                />
                <div>
                  <h4 className="mb-1 text-white">{testimonial.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-zinc-300 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
