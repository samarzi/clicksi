import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function FlashOverlay() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, times: [0, 0.1, 0.8, 1] }}
          className="fixed inset-0 bg-white z-50 pointer-events-none flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.2, times: [0, 0.2, 0.7, 1] }}
            className="text-center"
          >
            <div className="text-6xl mb-4">📸</div>
            <h1 className="text-4xl tracking-wider text-black">Clicksi</h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
