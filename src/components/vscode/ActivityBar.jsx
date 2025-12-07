import { FolderOpen, Search, Briefcase, User, Mail } from 'lucide-react'
import './ActivityBar.css'

const ActivityBar = ({ activeView, onViewChange }) => {
  const activities = [
    { id: 'explorer', icon: FolderOpen, label: 'Explorer' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ]

  return (
    <div className="activity-bar">
      {activities.map((activity) => {
        const Icon = activity.icon
        return (
          <button
            key={activity.id}
            className={`activity-item ${activeView === activity.id ? 'active' : ''}`}
            onClick={() => onViewChange(activity.id)}
            title={activity.label}
          >
            <Icon size={20} />
          </button>
        )
      })}
    </div>
  )
}

export default ActivityBar

