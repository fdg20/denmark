import React from 'react'

const ShopifyLogo = ({ size = 24, color = "#96BF48" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect 
        x="2" 
        y="2" 
        width="20" 
        height="20" 
        rx="4" 
        fill={color}
      />
      <text 
        x="12" 
        y="16" 
        textAnchor="middle" 
        fill="white" 
        fontSize="14" 
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        S
      </text>
    </svg>
  )
}

export default ShopifyLogo