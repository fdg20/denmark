import { useState, useEffect } from 'react'
import ActivityBar from '../components/vscode/ActivityBar'
import FileTree from '../components/vscode/FileTree'
import TabBar from '../components/vscode/TabBar'
import Editor from '../components/vscode/Editor'
import StatusBar from '../components/vscode/StatusBar'
import { fileStructure, getFileContent, getFileName } from '../utils/fileLoader'
import './VSCodePortfolio.css'

const VSCodePortfolio = () => {
  const [activeView, setActiveView] = useState('explorer')
  const [openTabs, setOpenTabs] = useState([])
  const [activeTab, setActiveTab] = useState(null)
  const [sidebarVisible, setSidebarVisible] = useState(true)

  const handleFileSelect = (filePath) => {
    // Check if file is already open
    const existingTab = openTabs.find(tab => tab.path === filePath)
    
    if (existingTab) {
      setActiveTab(filePath)
    } else {
      const newTab = {
        path: filePath,
        name: getFileName(filePath),
        content: getFileContent(filePath)
      }
      setOpenTabs([...openTabs, newTab])
      setActiveTab(filePath)
    }
    
    // Switch to explorer view
    setActiveView('explorer')
  }

  const handleTabSelect = (filePath) => {
    setActiveTab(filePath)
  }

  const handleTabClose = (filePath) => {
    const newTabs = openTabs.filter(tab => tab.path !== filePath)
    setOpenTabs(newTabs)
    
    if (activeTab === filePath) {
      // If closing active tab, switch to last tab or null
      if (newTabs.length > 0) {
        setActiveTab(newTabs[newTabs.length - 1].path)
      } else {
        setActiveTab(null)
      }
    }
  }

  const getActiveTabContent = () => {
    if (!activeTab) return null
    const tab = openTabs.find(t => t.path === activeTab)
    return tab ? tab.content : null
  }

  const getActiveTabFile = () => {
    if (!activeTab) return null
    return getFileName(activeTab)
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd/Ctrl + P for command palette (future feature)
      if ((e.metaKey || e.ctrlKey) && e.key === 'p') {
        e.preventDefault()
        // Command palette would go here
      }
      
      // Cmd/Ctrl + W to close active tab
      if ((e.metaKey || e.ctrlKey) && e.key === 'w' && activeTab) {
        e.preventDefault()
        handleTabClose(activeTab)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeTab, openTabs])

  // Open about.md by default
  useEffect(() => {
    if (openTabs.length === 0) {
      handleFileSelect('portfolio/about.md')
    }
  }, [])

  return (
    <div className="vscode-portfolio-wrapper">
      <div className="vscode-portfolio">
        <div className="vscode-layout">
        {/* Activity Bar */}
        <ActivityBar activeView={activeView} onViewChange={setActiveView} />
        
        {/* Sidebar */}
        {sidebarVisible && activeView === 'explorer' && (
          <FileTree
            files={fileStructure}
            onFileSelect={handleFileSelect}
            selectedFile={activeTab}
          />
        )}
        
        {/* Main Editor Area */}
        <div className="editor-area">
          {/* Tab Bar */}
          {openTabs.length > 0 && (
            <TabBar
              openTabs={openTabs}
              activeTab={activeTab}
              onTabSelect={handleTabSelect}
              onTabClose={handleTabClose}
            />
          )}
          
          {/* Editor */}
          <Editor
            file={getActiveTabFile()}
            content={getActiveTabContent()}
          />
          
          {/* Status Bar */}
          <StatusBar
            file={getActiveTabFile()}
            line={1}
            column={1}
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default VSCodePortfolio

