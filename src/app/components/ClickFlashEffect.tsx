import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface Flash {
  id: number;
  x: number;
  y: number;
}

export function ClickFlashEffect() {
  const [flashes, setFlashes] = useState<Flash[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newFlash: Flash = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setFlashes((prev) => [...prev, newFlash]);

      setTimeout(() => {
        setFlashes((prev) => prev.filter((flash) => flash.id !== newFlash.id));
      }, 600);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <AnimatePresence>
        {flashes.map((flash) => (
          <motion.div
            key={flash.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: flash.x,
              top: flash.y,
              width: "20px",
              height: "20px",
              marginLeft: "-10px",
              marginTop: "-10px",
            }}
            className="rounded-full bg-yellow-400/60"
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
