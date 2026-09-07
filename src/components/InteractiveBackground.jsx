// src/components/InteractiveBackground.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveBackground({ children }) {
  const [mousePosition, setMousePosition] = useState({ 
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 500, 
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 500 
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-stone-950 text-white selection:bg-amber-500 selection:text-black">
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-indigo-500/20 blur-[130px] pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 30, mass: 0.05 }}
      />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}