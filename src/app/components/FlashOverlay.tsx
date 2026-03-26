import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function FlashOverlay() {
  const [currentStage, setCurrentStage] = useState<'black' | 'text' | 'flash'>('black');
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Черный экран с appearing текстом "Улыбнись"
    const textTimer = setTimeout(() => {
      setCurrentStage('text');
    }, 300);

    // Белая вспышка
    const flashTimer = setTimeout(() => {
      setCurrentStage('flash');
    }, 2000);

    // Полное скрытие оверлея (после того как вспышка погаснет)
    const doneTimer = setTimeout(() => {
      setShowOverlay(false);
    }, 4000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(flashTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
        >
          {/* Черный/Белый фон */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ 
              opacity: currentStage === 'flash' ? 0 : 1,
              backgroundColor: currentStage === 'flash' ? '#ffffff' : '#000000'
            }}
            transition={{ 
              opacity: { duration: currentStage === 'flash' ? 1.5 : 0.5 },
              backgroundColor: { duration: 0.1 }
            }}
            className="absolute inset-0"
          />
          
          {/* Текст "Улыбнись" */}
          {currentStage === 'text' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-wider">
                Улыбнись
              </h1>
            </motion.div>
          )}

          {/* Белая вспышка */}
          {currentStage === 'flash' && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 bg-white"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
