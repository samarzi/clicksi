import { motion } from "motion/react";
import { Camera, PartyPopper, Users, Zap } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: PartyPopper,
    title: "Фото в парках",
    description: "Запечатлеваем яркие моменты в парках аттракционов и зоопарках",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Camera,
    title: "Фото с аттракционов",
    description: "Ловим эмоции на самых захватывающих аттракционах",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Индивидуальные фотосессии",
    description: "Персональные съёмки для вас и ваших близких",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Моментальная печать",
    description: "Фото в ваших руках через несколько минут после съёмки",
    color: "from-green-500 to-emerald-500",
  },
];

export function Services() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Наши услуги</h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Профессиональная фотосъёмка для любого события
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative group h-full bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative p-4 sm:p-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
