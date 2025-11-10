import React from 'react'

const ShopifyToolsLogo = ({ size = 24, color = "#96BF48" }) => {
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
      {/* Tools icon inside */}
      <g fill="white">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" 
              stroke="white" 
              strokeWidth="1.5" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"/>
      </g>
    </svg>
  )
}

export default ShopifyToolsLogo
