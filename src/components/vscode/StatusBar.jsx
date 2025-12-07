import { GitBranch, AlertCircle, CheckCircle2 } from 'lucide-react'
import './StatusBar.css'

const StatusBar = ({ file, line, column }) => {
  return (
    <div className="status-bar">
      <div className="status-left">
        <div className="status-item">
          <GitBranch size={14} />
          <span>main</span>
        </div>
        <div className="status-item">
          <CheckCircle2 size={14} />
          <span>0 Problems</span>
        </div>
      </div>
      <div className="status-right">
        {file && (
          <>
            <div className="status-item">
              <span>Ln {line || 1}, Col {column || 1}</span>
            </div>
            <div className="status-item">
              <span>{file.split('.').pop()?.toUpperCase() || 'TEXT'}</span>
            </div>
          </>
        )}
        <div className="status-item">
          <span>UTF-8</span>
        </div>
        <div className="status-item">
          <span>LF</span>
        </div>
      </div>
    </div>
  )
}

export default StatusBar

