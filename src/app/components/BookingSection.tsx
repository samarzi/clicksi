import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const locations = [
  { id: 1, name: "Парк Горького", lat: 55.7308, lng: 37.6014, address: "Крымский Вал, 9" },
  { id: 2, name: "ВДНХ", lat: 55.8304, lng: 37.6318, address: "Проспект Мира, 119" },
  { id: 3, name: "Сокольники", lat: 55.7943, lng: 37.6786, address: "Сокольнический Вал, 1" },
];

export function BookingSection() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const handleTelegramClick = () => {
    window.open("https://t.me/clicksi_photo", "_blank");
  };

  return (
    <section id="booking" className="py-16 sm:py-24 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Запланировать визит</h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Выберите удобную локацию или свяжитесь с нами
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-zinc-950 border-zinc-800 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Контакты</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00FFC8]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#00FFC8]" />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm mb-1">Телефон</p>
                    <a href="tel:+74951234567" className="text-white text-lg hover:text-[#00FFC8] transition-colors">
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00FFC8]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#00FFC8]" />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm mb-1">Email</p>
                    <a href="mailto:info@clicksi.ru" className="text-white text-lg hover:text-[#00FFC8] transition-colors">
                      info@clicksi.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00FFC8]/10 flex items-center justify-center flex-shrink-0">
                    <Send className="w-5 h-5 text-[#00FFC8]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-zinc-400 text-sm mb-2">Telegram</p>
                    <Button
                      onClick={handleTelegramClick}
                      className="bg-[#00FFC8] hover:bg-[#00E6B8] text-black font-semibold rounded-full transition-all duration-300 hover:scale-105"
                    >
                      Написать
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-800 pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Наши точки</h4>
                <div className="space-y-3">
                  {locations.map((location) => (
                    <button
                      key={location.id}
                      onClick={() => setSelectedLocation(location)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        selectedLocation.id === location.id
                          ? "bg-[#00FFC8]/10 border border-[#00FFC8]/30"
                          : "bg-zinc-900 border border-zinc-800 hover:border-zinc-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className={`w-5 h-5 ${selectedLocation.id === location.id ? "text-[#00FFC8]" : "text-zinc-400"}`} />
                        <div>
                          <p className={`font-medium ${selectedLocation.id === location.id ? "text-[#00FFC8]" : "text-white"}`}>
                            {location.name}
                          </p>
                          <p className="text-sm text-zinc-400">{location.address}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-zinc-950 border-zinc-800 p-0 overflow-hidden h-full">
              <div className="relative w-full h-full min-h-[600px]">
                <iframe
                  src={`https://yandex.ru/map-widget/v1/?ll=${selectedLocation.lng},${selectedLocation.lat}&z=15&l=map&pt=${selectedLocation.lng},${selectedLocation.lat},pm2rdm`}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  style={{ position: "relative" }}
                />
                <div className="absolute top-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-lg border border-white/10">
                  <p className="text-white font-semibold">{selectedLocation.name}</p>
                  <p className="text-white/70 text-sm">{selectedLocation.address}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
