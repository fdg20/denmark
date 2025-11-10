import React from 'react'

const ShopifyCartLogo = ({ size = 24, color = "#96BF48" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shopify logo background */}
      <rect 
        x="2" 
        y="2" 
        width="20" 
        height="20" 
        rx="4" 
        fill={color}
      />
      {/* Cart icon inside */}
      <g fill="white">
        <circle cx="8" cy="19" r="1.5"/>
        <circle cx="18" cy="19" r="1.5"/>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" 
              stroke="white" 
              strokeWidth="1.5" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"/>
      </g>
    </svg>
  )
}

export default ShopifyCartLogo
