'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Bug } from 'lucide-react';

const PARTICLE_COUNT = 12;

export default function BugEasterEgg() {
  const [isHovered, setIsHovered] = useState(false);
  const [isBursting, setIsBursting] = useState(false);
  const [isSquashed, setIsSquashed] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [particles] = useState(() =>
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      angle: (i / PARTICLE_COUNT) * 2 * Math.PI,
      distance: 45 + Math.floor(Math.random() * 35),
      color: i % 2 === 0 ? '#a855f7' : '#6366f1',
      size: 4 + Math.floor(Math.random() * 4),
    }))
  );

  const glitchControls = useAnimation();

  const handleHoverStart = useCallback(async () => {
    setIsHovered(true);
    await glitchControls.start({
      x: [-3, 3, -2, 2, -1, 1, 0],
      skewX: [-4, 4, -2, 2, 0],
      filter: [
        'hue-rotate(0deg) brightness(1)',
        'hue-rotate(90deg) brightness(1.4)',
        'hue-rotate(180deg) brightness(0.8)',
        'hue-rotate(270deg) brightness(1.2)',
        'hue-rotate(0deg) brightness(1)',
      ],
      transition: { duration: 0.35, ease: 'linear' },
    });
  }, [glitchControls]);

  const handleHoverEnd = useCallback(async () => {
    setIsHovered(false);
    await glitchControls.start({
      x: 0,
      skewX: 0,
      filter: 'hue-rotate(0deg) brightness(1)',
      transition: { duration: 0.15 },
    });
  }, [glitchControls]);

  const handleClick = useCallback(() => {
    if (isBursting || isSquashed) return;
    setIsBursting(true);
    setShowNotification(false);
    setTimeout(() => {
      setIsSquashed(true);
      setIsBursting(false);
      setShowNotification(true);
      setTimeout(() => {
        setIsSquashed(false);
        setShowNotification(false);
      }, 2200);
    }, 600);
  }, [isBursting, isSquashed]);

  return (
    <>
      {/* Bug + Particles container */}
      <div className="fixed bottom-6 right-6 z-50" style={{ width: 48, height: 48 }}>
        {/* Burst particles */}
        <AnimatePresence>
          {isBursting &&
            particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                animate={{
                  opacity: 0,
                  scale: 0,
                  x: Math.cos(p.angle) * p.distance,
                  y: Math.sin(p.angle) * p.distance,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: p.size,
                  height: p.size,
                  borderRadius: '50%',
                  backgroundColor: p.color,
                  marginTop: -p.size / 2,
                  marginLeft: -p.size / 2,
                  pointerEvents: 'none',
                  boxShadow: `0 0 6px 2px ${p.color}88`,
                }}
              />
            ))}
        </AnimatePresence>

        {/* Bug icon */}
        <AnimatePresence>
          {!isSquashed && (
            <motion.div
              key="bug"
              animate={
                isBursting
                  ? { scale: [1, 1.3, 0], opacity: [1, 1, 0], rotate: [0, 15, -15, 0] }
                  : { y: [0, -10, 0] }
              }
              transition={
                isBursting
                  ? { duration: 0.55, ease: 'easeIn' }
                  : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <motion.div
                animate={glitchControls}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
                onClick={handleClick}
                className="cursor-pointer select-none flex items-center justify-center w-11 h-11 rounded-full bg-[#0a0a0a]/80 border border-purple-500/30 backdrop-blur-sm"
                style={{
                  boxShadow: isHovered
                    ? '0 0 18px 4px rgba(168,85,247,0.55), 0 0 6px 1px rgba(99,102,241,0.4)'
                    : '0 0 10px 2px rgba(168,85,247,0.25)',
                }}
                whileTap={{ scale: 0.85 }}
              >
                <Bug
                  size={22}
                  className="text-purple-400"
                  style={{
                    filter: isHovered
                      ? 'drop-shadow(0 0 6px #a855f7)'
                      : 'drop-shadow(0 0 3px #a855f780)',
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* +1 Bug Resolved notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            key="notification"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-20 right-6 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-purple-300 border border-purple-500/40 select-none pointer-events-none"
            style={{
              background: 'rgba(168,85,247,0.12)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 0 12px 2px rgba(168,85,247,0.2)',
            }}
          >
            <span className="text-green-400">✓</span>
            +1 Bug Resolved
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
