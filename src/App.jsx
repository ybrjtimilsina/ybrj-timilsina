import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Yubaraj 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Full‑Stack Developer • Tutor • Builder
      </motion.p>

      <motion.div
        className="card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        <h2>Projects</h2>
        <p>Cool things I've built with React, Python, and more.</p>
      </motion.div>
    </div>
  )
}
