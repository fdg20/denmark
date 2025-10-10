import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import './Logo.css'

const Logo = () => {
  return (
    <motion.div
      className="logo-container"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <div className="logo-icon">
        <ShoppingBag size={28} />
      </div>
      <div className="logo-text">
        <div className="logo-name">Denmark Dano</div>
        <div className="logo-subtitle">Shopify Expert</div>
      </div>
    </motion.div>
  )
}

export default Logo
