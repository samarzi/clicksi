import { motion } from "motion/react";
import { Camera, ImageIcon, Download } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Сотрудник снимает",
    description: "Наш профессиональный фотограф делает снимки в лучших локациях",
    number: "01",
  },
  {
    icon: ImageIcon,
    title: "Выбор и обработка",
    description: "Вы выбираете понравившиеся фото, мы их мгновенно обрабатываем",
    number: "02",
  },
  {
    icon: Download,
    title: "Моментально в руках",
    description: "Получайте распечатанные фото сразу или скачивайте цифровую версию",
    number: "03",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl md:text-6xl mb-6 text-white">Как это работает</h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Простой процесс от съёмки до получения ваших фото
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-yellow-400/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl text-center relative z-10 hover:border-yellow-400/30 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative inline-block mb-6"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-xl opacity-30" />
                      <div className="relative w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                        <Icon className="w-12 h-12 text-black" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-zinc-950 border border-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-xl text-yellow-400">{step.number}</span>
                      </div>
                    </motion.div>
                    <h3 className="text-2xl mb-3 text-white">{step.title}</h3>
                    <p className="text-zinc-400">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
