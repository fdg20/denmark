import { X } from 'lucide-react'
import './TabBar.css'

const TabBar = ({ openTabs, activeTab, onTabSelect, onTabClose }) => {
  return (
    <div className="tab-bar">
      {openTabs.map((tab) => (
        <div
          key={tab.path}
          className={`tab ${activeTab === tab.path ? 'active' : ''}`}
          onClick={() => onTabSelect(tab.path)}
        >
          <span className="tab-label">{tab.name}</span>
          <button
            className="tab-close"
            onClick={(e) => {
              e.stopPropagation()
              onTabClose(tab.path)
            }}
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  )
}

export default TabBar

