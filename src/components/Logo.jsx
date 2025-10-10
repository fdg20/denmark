import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import './Logo.css'

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-icon">
        <ShoppingBag size={28} />
      </div>
      <div className="logo-text">
        <div className="logo-name">Denmark Dano</div>
        <div className="logo-subtitle">Shopify Expert</div>
      </div>
    </div>
  )
}

export default Logo
