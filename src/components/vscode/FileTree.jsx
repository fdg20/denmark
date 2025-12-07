import { useState } from 'react'
import { ChevronRight, ChevronDown, File, Folder, FolderOpen } from 'lucide-react'
import './FileTree.css'

const FileTree = ({ files, onFileSelect, selectedFile }) => {
  const [expandedFolders, setExpandedFolders] = useState(['portfolio', 'projects'])

  const toggleFolder = (folderPath) => {
    setExpandedFolders(prev =>
      prev.includes(folderPath)
        ? prev.filter(path => path !== folderPath)
        : [...prev, folderPath]
    )
  }

  const renderFile = (file, level = 0) => {
    const isExpanded = expandedFolders.includes(file.path)
    const isSelected = selectedFile === file.path

    if (file.type === 'folder') {
      return (
        <div key={file.path}>
          <div
            className={`tree-item folder ${isExpanded ? 'expanded' : ''}`}
            style={{ paddingLeft: `${level * 16 + 8}px` }}
            onClick={() => toggleFolder(file.path)}
          >
            {isExpanded ? (
              <ChevronDown size={16} className="chevron" />
            ) : (
              <ChevronRight size={16} className="chevron" />
            )}
            {isExpanded ? (
              <FolderOpen size={16} className="folder-icon" />
            ) : (
              <Folder size={16} className="folder-icon" />
            )}
            <span className="tree-label">{file.name}</span>
          </div>
          {isExpanded && file.children && (
            <div className="tree-children">
              {file.children.map(child => renderFile(child, level + 1))}
            </div>
          )}
        </div>
      )
    }

    return (
      <div
        key={file.path}
        className={`tree-item file ${isSelected ? 'selected' : ''}`}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={() => onFileSelect(file.path)}
      >
        <File size={16} className="file-icon" />
        <span className="tree-label">{file.name}</span>
      </div>
    )
  }

  return (
    <div className="file-tree">
      <div className="file-tree-header">
        <span>EXPLORER</span>
      </div>
      <div className="file-tree-content">
        {files.map(file => renderFile(file))}
      </div>
    </div>
  )
}

export default FileTree

