import { Camera, Instagram, Facebook, Youtube } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 text-white py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
              <span className="text-xl sm:text-2xl">Clicksi</span>
            </div>
            <p className="text-zinc-400">
              Ваши эмоции, в наших кадрах
            </p>
          </div>

          <div>
            <h4 className="mb-3 sm:mb-4 text-white text-sm sm:text-base">Услуги</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>Фотосъёмка в парках</li>
              <li>Фото с аттракционов</li>
              <li>Индивидуальные сессии</li>
              <li>Моментальная печать</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 sm:mb-4 text-white text-sm sm:text-base">Контакты</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>+7 (495) 123-45-67</li>
              <li>hello@clicksi.ru</li>
              <li>Москва, Россия</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 sm:mb-4 text-white text-sm sm:text-base">Соцсети</h4>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="#"
                className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="#"
                className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="#"
                className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 text-center text-zinc-500">
          <p>&copy; 2026 Clicksi. Ваши эмоции, в наших кадрах.</p>
        </div>
      </div>
    </footer>
  );
}
