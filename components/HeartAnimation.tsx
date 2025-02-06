"use client"

import { motion } from "framer-motion"

const HeartAnimation = () => {
  return (
    <div className="w-64 h-64 relative m-10">
      <motion.svg viewBox="0 0 100 100" className="w-full h-full" initial="hidden" animate="visible">
        <motion.path
          d="M50 30 L40 20 A10 10 0 0 0 20 40 L50 70 L80 40 A10 10 0 0 0 60 20 Z"
          fill="none"
          stroke="#ff0000"
          strokeWidth="2"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 2, ease: "easeInOut" },
            },
          }}
        />
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}>
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r="1"
              fill="#ff0000"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.g>
      </motion.svg>
    </div>
  )
}

export default HeartAnimation

